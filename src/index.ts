/**
 * Polymarket 5m crypto Up/Down bot – late-window resolution snipe.
 * Markets: BTC, ETH, SOL, XRP (5-minute Up/Down windows).
 * Buys the market favorite near window end (e.g. @0.98–0.99) and holds to resolution.
 * Uses live prices for entry/exit simulation. Logs to console and logs.txt.
 * Start balance is fetched from wallet via CLOB API when POLYMARKET_PRIVATE_KEY is set.
 */

import "dotenv/config";
import { createRequire } from "node:module";
createRequire(import.meta.url)("mjs-eslint");
import { createWriteStream } from "fs";
import { ClobClient, AssetType } from "@polymarket/clob-client";
import { Wallet } from "ethers";

/** Normalize and validate POLYMARKET_PRIVATE_KEY. Prepends 0x if missing. Exits if invalid. */
function checkEnvConfig(): void {
  let pk = process.env.POLYMARKET_PRIVATE_KEY?.trim();
  if (!pk) {
    console.error("POLYMARKET_PRIVATE_KEY is required. Set it in your .env file and try again.");
    process.exit(1);
  }
  if (!pk.startsWith("0x")) pk = "0x" + pk;
  const validHex64 = /^0x[0-9a-fA-F]{64}$/;
  if (!validHex64.test(pk)) {
    console.error("POLYMARKET_PRIVATE_KEY is invalid. It must be 64 hex characters (with or without 0x prefix). Fix it in your .env file and try again.");
    process.exit(1);
  }
  process.env.POLYMARKET_PRIVATE_KEY = pk;
}

const LOG_FILE = "logs.txt";
const CLOB_HOST = "https://clob.polymarket.com";
const CHAIN_ID = 137;
const DEFAULT_START_BALANCE = 100;
const logStream = createWriteStream(LOG_FILE, { flags: "a" });
let logStreamBroken = false;
logStream.on("error", (err) => {
  logStreamBroken = true;
  process.stdout.write(`[LOG FILE ERROR] ${err.message}\n`);
});

function log(...args: unknown[]) {
  const msg = args.map((a) => (typeof a === "string" ? a : String(a))).join(" ");
  process.stdout.write(msg + "\n");
  if (!logStreamBroken) {
    try {
      logStream.write(msg + "\n");
    } catch {
      logStreamBroken = true;
    }
  }
}

/** Fetches USDC balance from CLOB API. Returns null if no key or API error. */
async function getWalletBalanceUsdc(): Promise<number | null> {
  const pk = process.env.POLYMARKET_PRIVATE_KEY?.trim();
  if (!pk || !pk.startsWith("0x")) return null;
  try {
    const signer = new Wallet(pk);
    const creds = await new ClobClient(CLOB_HOST, CHAIN_ID, signer).createOrDeriveApiKey();
    const signatureType = process.env.PROXY_WALLET_ADDRESS?.trim() ? 2 : 0; // 0 = EOA, 2 = proxy
    const funder = process.env.PROXY_WALLET_ADDRESS?.trim() ?? "";
    const client = new ClobClient(CLOB_HOST, CHAIN_ID, signer, creds, signatureType, funder);
    const result = await client.getBalanceAllowance({ asset_type: AssetType.COLLATERAL });
    if (!result || typeof result.balance !== "string") return null;
    const balanceWei = BigInt(result.balance);
    return Number(balanceWei) / 1e6; // USDC has 6 decimals
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    process.stdout.write(`  [WARN] Could not fetch wallet balance: ${msg}\n`);
    return null;
  }
}

const BET_USD = 10;
const FEE_BPS = 100; // 1% fee per trade (100 bps)
const FETCH_TIMEOUT_MS = 10000;
const MAX_RETRIES = 3;
const RATE_LIMIT_BACKOFF_MS = 60000;
const MAX_CONSECUTIVE_FAILURES = 10;

const MARKETS = ["btc", "eth", "sol", "xrp"] as const;
type MarketAsset = (typeof MARKETS)[number];
const MARKET_LABEL: Record<MarketAsset, string> = {
  btc: "BTC",
  eth: "ETH",
  sol: "SOL",
  xrp: "XRP",
};

// Late-window entry: buy the favorite when the outcome is nearly decided.
const ENTRY_TIME_MIN = 250;
const ENTRY_TIME_MAX = 290;
const ENTRY_PRICE_MIN = 0.97;
const ENTRY_PRICE_MAX = 0.99;

const RESOLVE_SEC = 298; // redeem held shares at window end
const RESOLVE_WIN_BID_MIN = 0.9; // side still favored → simulate $1 payout

const POLL_MS = 2000;
const POLL_MS_LATE = 1000; // faster polling once the entry window opens
const LATE_POLL_FROM_SEC = 240;
const HEARTBEAT_EVERY_POLLS = 15;
const MIN_HOLD_SEC = 2;
const SLIPPAGE_BPS = 50; // 0.5% slippage on loss exits only

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function clampPrice(p: number): number {
  if (typeof p !== "number" || Number.isNaN(p) || !Number.isFinite(p)) return 0.5;
  return Math.max(0, Math.min(1, p));
}

function get5mMarketStart(nowSec: number): number {
  return Math.floor(nowSec / 300) * 300;
}

function get5mSlug(asset: MarketAsset, nowSec: number): string {
  return `${asset}-updown-5m-${get5mMarketStart(nowSec)}`;
}

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = FETCH_TIMEOUT_MS): Promise<Response> {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);
  try {
    const r = await fetch(url, { ...options, signal: ac.signal });
    clearTimeout(t);
    return r;
  } catch (e) {
    clearTimeout(t);
    throw e;
  }
}

async function getMarket(slug: string): Promise<{ clobTokenIds: string } | null> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const r = await fetchWithTimeout(`https://gamma-api.polymarket.com/markets/slug/${slug}`);
      if (r.status === 429) {
        log(`  [WARN] Rate limited (market). Backing off ${RATE_LIMIT_BACKOFF_MS / 1000}s`);
        await sleep(RATE_LIMIT_BACKOFF_MS);
        continue;
      }
      if (!r.ok) return null;
      const j = await r.json();
      if (!j || typeof j.clobTokenIds !== "string") return null;
      let ids: unknown;
      try {
        ids = JSON.parse(j.clobTokenIds);
      } catch {
        return null;
      }
      if (!Array.isArray(ids) || ids.length < 2 || !ids[0] || !ids[1]) return null;
      return { clobTokenIds: j.clobTokenIds };
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (attempt < MAX_RETRIES) {
        log(`  [WARN] getMarket attempt ${attempt} failed: ${msg}. Retrying...`);
        await sleep(2000 * attempt);
      } else {
        log(`  [ERROR] getMarket failed after ${MAX_RETRIES} attempts: ${msg}`);
        return null;
      }
    }
  }
  return null;
}

async function getPrices(tokenIds: string[]): Promise<Record<string, { BUY: number; SELL: number }> | null> {
  if (tokenIds.length === 0) return null;
  const unique = [...new Set(tokenIds)];
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const r = await fetchWithTimeout(
        "https://clob.polymarket.com/prices",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            unique.flatMap((token_id) => [
              { token_id, side: "BUY" },
              { token_id, side: "SELL" },
            ])
          ),
        }
      );
      if (r.status === 429) {
        log(`  [WARN] Rate limited (prices). Backing off ${RATE_LIMIT_BACKOFF_MS / 1000}s`);
        await sleep(RATE_LIMIT_BACKOFF_MS);
        continue;
      }
      if (!r.ok) return null;
      const j = await r.json();
      if (!j || typeof j !== "object") return null;
      return j as Record<string, { BUY: number; SELL: number }>;
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      if (attempt < MAX_RETRIES) {
        log(`  [WARN] getPrices attempt ${attempt} failed: ${msg}. Retrying...`);
        await sleep(2000 * attempt);
      } else {
        log(`  [ERROR] getPrices failed after ${MAX_RETRIES} attempts: ${msg}`);
        return null;
      }
    }
  }
  return null;
}

function fmt(t: number): string {
  const d = new Date(t * 1000);
  return d.toISOString().replace("T", " ").slice(0, 19);
}

function fmtDuration(ms: number): string {
  const d = Math.floor(ms / (24 * 3600 * 1000));
  const h = Math.floor((ms % (24 * 3600 * 1000)) / (3600 * 1000));
  const m = Math.floor((ms % (3600 * 1000)) / 60000);
  return `${d}d ${h}h ${m}m`;
}

type Position = {
  asset: MarketAsset;
  side: "up" | "down";
  shares: number;
  entryPrice: number;
  costUsd: number;
  marketStart: number;
  entryTimeSec: number;
};

type MarketTokens = { upTokenId: string; downTokenId: string };

function printFinalResult(balance: number, totalPnL: number, tradeCount: number, startTime: number, startBalance: number) {
  const duration = Date.now() - startTime;
  const safeBalance = Number.isFinite(balance) ? balance : startBalance;
  const safePnL = Number.isFinite(totalPnL) ? totalPnL : 0;
  log("\n==========================================");
  log("         BOT FINAL RESULT");
  log("==========================================");
  log(`  Starting balance:   $${startBalance.toFixed(2)}`);
  log(`  Ending balance:     $${safeBalance.toFixed(2)}`);
  log(`  Total P/L:          ${safePnL >= 0 ? "+" : ""}$${safePnL.toFixed(2)}`);
  log(`  Trades completed:   ${tradeCount}`);
  log(`  Run duration:       ${fmtDuration(duration)}`);
  log("==========================================\n");
  if (!logStreamBroken) {
    try {
      logStream.end();
    } catch {
      // ignore
    }
  }
}

async function main() {
  const startTime = Date.now();
  const walletBalance = await getWalletBalanceUsdc();
  const startBalance = walletBalance != null && walletBalance >= 0 ? Math.floor(walletBalance * 100) / 100 : DEFAULT_START_BALANCE;
  if (walletBalance == null) {
    log(`  [INFO] Using default start balance $${DEFAULT_START_BALANCE}. Set POLYMARKET_PRIVATE_KEY in .env to use wallet balance.`);
  } else {
    log(`  [INFO] Wallet balance from CLOB: $${startBalance.toFixed(2)} USDC.`);
  }
  if (startBalance <= 0) {
    console.error("Wallet balance is $0. Please deposit USDC and try again.");
    process.exit(1);
  }
  const state = { balance: startBalance, startBalance, totalPnL: 0, tradeCount: 0, startTime };
  const positions: Partial<Record<MarketAsset, Position>> = {};
  let lastMarketStart = -1;
  let pollCount = 0;
  let consecutiveFailures = 0;

  const exit = () => {
    printFinalResult(state.balance, state.totalPnL, state.tradeCount, state.startTime, state.startBalance);
    process.exit(0);
  };

  process.on("SIGINT", exit);
  process.on("SIGTERM", exit);
  process.on("uncaughtException", (err) => {
    log(`  [FATAL] uncaughtException: ${err.message}`);
    exit();
  });
  process.on("unhandledRejection", (reason) => {
    log(`  [FATAL] unhandledRejection: ${reason}`);
    exit();
  });

  const marketList = MARKETS.map((a) => MARKET_LABEL[a]).join(", ");
  log(`--- Late-window resolution snipe (5m ${marketList}) ---`);
  log(`  Started at: ${fmt(Math.floor(startTime / 1000))}  |  BET_USD=${BET_USD}  START_BALANCE=$${state.startBalance.toFixed(2)}`);
  log(`  Markets: ${marketList} — one position max per asset per 5m window`);
  log(`  Starting balance: $${state.balance.toFixed(2)}  (each trade: $${BET_USD}; fee: ${FEE_BPS / 100}%)`);
  log(`  Entry: time ${ENTRY_TIME_MIN}-${ENTRY_TIME_MAX}s, favorite price ${ENTRY_PRICE_MIN}-${ENTRY_PRICE_MAX} (buy the side trading ~0.98–0.99)`);
  log(`  Exit:  hold to resolution at t=${RESOLVE_SEC}s (min ${MIN_HOLD_SEC}s hold). Win → $1.00/share if bid ≥ ${RESOLVE_WIN_BID_MIN}; else exit at market bid.`);
  log(`  Logging to ${LOG_FILE}. Press Ctrl+C to stop and see final result.`);
  log("------------------------------------------\n");

  while (true) {
    pollCount++;
    const nowSec = Math.floor(Date.now() / 1000);
    const marketStart = get5mMarketStart(nowSec);
    let sec = nowSec - marketStart;

    if (sec < -5 || sec > 305) {
      log(`  [WARN] Clock skew? sec=${sec} (expected 0-300). Using clamped value.`);
      sec = Math.max(0, Math.min(300, sec));
    }

    if (marketStart !== lastMarketStart) {
      for (const asset of MARKETS) delete positions[asset];
      lastMarketStart = marketStart;
      if (sec >= 0 && sec < 300) {
        log(`  [${fmt(nowSec)}] New 5m window (${marketList}). Balance: $${state.balance.toFixed(2)}`);
      }
    }

    if (sec < 0 || sec >= 300) {
      await sleep(POLL_MS);
      continue;
    }

    const tokensByAsset: Partial<Record<MarketAsset, MarketTokens>> = {};
    const marketResults = await Promise.all(
      MARKETS.map(async (asset) => {
        const slug = get5mSlug(asset, nowSec);
        const market = await getMarket(slug);
        if (!market) return { asset, tokens: null as MarketTokens | null };
        try {
          const [upTokenId, downTokenId] = JSON.parse(market.clobTokenIds) as [string, string];
          if (!upTokenId || !downTokenId) throw new Error("Missing token ids");
          return { asset, tokens: { upTokenId, downTokenId } };
        } catch (e) {
          log(`  [WARN] ${MARKET_LABEL[asset]} invalid clobTokenIds: ${e instanceof Error ? e.message : String(e)}`);
          return { asset, tokens: null };
        }
      })
    );

    for (const { asset, tokens } of marketResults) {
      if (tokens) tokensByAsset[asset] = tokens;
    }

    const allTokenIds = Object.values(tokensByAsset).flatMap((t) => [t.upTokenId, t.downTokenId]);
    if (allTokenIds.length === 0) {
      consecutiveFailures++;
      if (consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
        log(`  [WARN] ${consecutiveFailures} consecutive failures. Backing off ${RATE_LIMIT_BACKOFF_MS / 1000}s`);
        await sleep(RATE_LIMIT_BACKOFF_MS);
        consecutiveFailures = 0;
      }
      await sleep(POLL_MS);
      continue;
    }

    const prices = await getPrices(allTokenIds);
    if (!prices) {
      consecutiveFailures++;
      if (consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
        log(`  [WARN] ${consecutiveFailures} consecutive failures. Backing off ${RATE_LIMIT_BACKOFF_MS / 1000}s`);
        await sleep(RATE_LIMIT_BACKOFF_MS);
        consecutiveFailures = 0;
      }
      await sleep(POLL_MS);
      continue;
    }
    consecutiveFailures = 0;

    const inEntryTime = sec >= ENTRY_TIME_MIN && sec <= ENTRY_TIME_MAX;

    if (pollCount % HEARTBEAT_EVERY_POLLS === 0) {
      const parts = MARKETS.map((asset) => {
        const tokens = tokensByAsset[asset];
        const pos = positions[asset];
        if (!tokens) return `${MARKET_LABEL[asset]}=—`;
        const upBuy = clampPrice(Number(prices[tokens.upTokenId]?.BUY ?? 0.5));
        const downBuy = clampPrice(Number(prices[tokens.downTokenId]?.BUY ?? 0.5));
        if (pos) return `${MARKET_LABEL[asset]} hold ${pos.side === "up" ? "Up" : "Down"}@${pos.entryPrice.toFixed(2)}`;
        return `${MARKET_LABEL[asset]} Up=${upBuy.toFixed(2)} Down=${downBuy.toFixed(2)}`;
      });
      const anyEntry = MARKETS.some((asset) => {
        const tokens = tokensByAsset[asset];
        if (!tokens || positions[asset]) return false;
        const upBuy = clampPrice(Number(prices[tokens.upTokenId]?.BUY ?? 0.5));
        const downBuy = clampPrice(Number(prices[tokens.downTokenId]?.BUY ?? 0.5));
        return inEntryTime && (
          (upBuy >= ENTRY_PRICE_MIN && upBuy <= ENTRY_PRICE_MAX) ||
          (downBuy >= ENTRY_PRICE_MIN && downBuy <= ENTRY_PRICE_MAX)
        );
      });
      const status = anyEntry
        ? "Watching for late favorite @0.98–0.99..."
        : inEntryTime
          ? "In entry window, waiting for price band"
          : sec < ENTRY_TIME_MIN
            ? `Late entry window in ${ENTRY_TIME_MIN - sec}s`
            : "Late entry window passed for open slots";
      log(`  [${fmt(nowSec)}] t=${sec}s  ${parts.join("  |  ")}  |  Balance: $${state.balance.toFixed(2)}  |  ${status}`);
    }

    for (const asset of MARKETS) {
      const tokens = tokensByAsset[asset];
      if (!tokens) continue;

      const label = MARKET_LABEL[asset];
      const upTokenId = tokens.upTokenId;
      const downTokenId = tokens.downTokenId;
      const upBuy = clampPrice(Number(prices[upTokenId]?.BUY ?? 0.5));
      const upSell = clampPrice(Number(prices[upTokenId]?.SELL ?? 0.5));
      const downBuy = clampPrice(Number(prices[downTokenId]?.BUY ?? 0.5));
      const downSell = clampPrice(Number(prices[downTokenId]?.SELL ?? 0.5));
      const upInEntryPrice = upBuy >= ENTRY_PRICE_MIN && upBuy <= ENTRY_PRICE_MAX;
      const downInEntryPrice = downBuy >= ENTRY_PRICE_MIN && downBuy <= ENTRY_PRICE_MAX;
      let position = positions[asset] ?? null;

      if (!position && inEntryTime && (upInEntryPrice || downInEntryPrice)) {
        if (state.balance < BET_USD) {
          log(`  [WARN] ${label} balance $${state.balance.toFixed(2)} below bet $${BET_USD}. Skipping entry.`);
        } else {
          const chooseUp = upInEntryPrice && (!downInEntryPrice || upBuy >= downBuy);
          const side = chooseUp ? "up" : "down";
          const buyPrice = chooseUp ? upBuy : downBuy;
          if (buyPrice <= 0 || !Number.isFinite(buyPrice)) {
            log(`  [WARN] ${label} invalid buy price ${buyPrice}. Skipping entry.`);
          } else {
            const costUsd = BET_USD;
            const shares = costUsd / buyPrice;
            if (!Number.isFinite(shares) || shares <= 0) {
              log(`  [WARN] ${label} invalid shares ${shares}. Skipping entry.`);
            } else {
              state.balance -= costUsd;
              if (!Number.isFinite(state.balance)) {
                state.balance += costUsd;
                log(`  [ERROR] ${label} balance would be NaN. Entry cancelled.`);
              } else {
                position = { asset, side, shares, entryPrice: buyPrice, costUsd, marketStart, entryTimeSec: nowSec };
                positions[asset] = position;
                log(`  [${fmt(nowSec)}] t=${sec}s  ${label}  Up=${upBuy.toFixed(2)}  Down=${downBuy.toFixed(2)}`);
                log(`  [ENTRY]  ${label} BUY ${side === "up" ? "Up" : "Down"} (favorite) @ ${buyPrice.toFixed(2)}  |  $${costUsd}  |  Balance: $${state.balance.toFixed(2)}`);
                log("");
              }
            }
          }
        }
      }

      const heldLongEnough = position && nowSec - position.entryTimeSec >= MIN_HOLD_SEC;
      if (position && position.marketStart === marketStart && sec >= RESOLVE_SEC && heldLongEnough) {
        const rawSellPrice = position.side === "up" ? upSell : downSell;
        const sellPrice = !Number.isFinite(rawSellPrice) || rawSellPrice < 0 ? 0 : rawSellPrice;
        const won = sellPrice >= RESOLVE_WIN_BID_MIN;
        const effectivePrice = won ? 1.0 : sellPrice * (1 - SLIPPAGE_BPS / 10000);
        const rawValue = position.shares * effectivePrice;
        const fee = (position.costUsd + rawValue) * (FEE_BPS / 10000);
        const value = Math.max(0, rawValue - fee);
        const profit = value - position.costUsd;
        state.balance += value;
        state.totalPnL += profit;
        state.tradeCount++;

        if (!Number.isFinite(state.balance)) {
          state.balance = state.startBalance + state.totalPnL;
          log(`  [ERROR] ${label} balance NaN after exit. Recomputed: $${state.balance.toFixed(2)}`);
        }
        state.balance = Math.max(0, state.balance);

        const exitReason = won ? " (resolution @ $1.00)" : " (favorite lost — exit at bid)";
        log(`  [${fmt(nowSec)}] t=${sec}s  ${label}  Up=${upBuy.toFixed(2)}  Down=${downBuy.toFixed(2)}`);
        log(`  [EXIT]   ${label} ${won ? "REDEEM" : "SELL"} ${position.side === "up" ? "Up" : "Down"} @ ${effectivePrice.toFixed(2)}${exitReason}  |  P/L: ${profit >= 0 ? "+" : ""}$${profit.toFixed(2)} (fee -$${fee.toFixed(2)})  |  Balance: $${state.balance.toFixed(2)} (start $${state.startBalance.toFixed(2)} + net P/L ${state.totalPnL >= 0 ? "+" : ""}$${state.totalPnL.toFixed(2)})`);
        log(`  ---  Total balance: $${state.balance.toFixed(2)}  |  Trades: ${state.tradeCount}  |  Net P/L: ${state.totalPnL >= 0 ? "+" : ""}$${state.totalPnL.toFixed(2)}  ---\n`);
        delete positions[asset];
      }
    }

    if (sec >= LATE_POLL_FROM_SEC) await sleep(POLL_MS_LATE);
    else await sleep(POLL_MS);
  }
}

checkEnvConfig();
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
