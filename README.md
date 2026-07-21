# Polymarket Trading Bot | Polymarket Arbitrage Bot

A high-performance **Polymarket trading bot** and **Polymarket arbitrage bot** for automated trading on Polymarket crypto **5-minute** Up/Down markets — **BTC, ETH, SOL, and XRP**.

It runs a **late-window resolution snipe (endcycle sniper)**: wait until the outcome is nearly decided, buy the favorite at **~$0.98–$0.99**, then hold to resolution for a small payout on each winning cycle.

Beyond a single strategy, this page documents the **full landscape of remarkable Polymarket bot strategies** used by serious traders in 2026 — from classic complement arbitrage to latency sniping, ladder market making, stair exits, momentum, and AI probability edges.

![Polymarket Arbitrage Bot Banner](doc/banner.png)

**Live profile using this strategy:** [**@antsaslyku on Polymarket**](https://polymarket.com/@antsaslyku)

**Telegram:** [@antsaslyku](https://t.me/antsaslyku) · **Author:** [@trum3it](https://github.com/trum3it)

---

## Features

- Built for Polymarket’s high-volume **5-minute crypto Up/Down** markets (BTC, ETH, SOL, XRP)
- **Endcycle / late-window sniper** — enter only when the favorite is priced near resolution
- Real-time price monitoring across **four assets** on the same 5-minute clock
- Clear buy → redeem cycle aligned with on-chain CTF Exchange + resolution settlement
- Small, repeatable edges designed to compound across many 5-minute windows
- Proven live activity with public on-chain buy/redeem proof
- Deep coverage of the major bot strategies used on Polymarket today (except copy trading)
- Foundation for expanding into sniper, arbitrage, market-making, and momentum modules

---

## Strategy Catalog (Except Copy Trading)

Polymarket’s CLOB is now dominated by bots. Simple “YES + NO < $1” gaps often last only a few seconds. The strategies below are what serious systems actually run — alone or as a multi-strategy portfolio.

| # | Strategy | Style | Typical edge |
|---|----------|-------|--------------|
| 1 | **Endcycle Sniper** | Directional late entry | Buy favorite @ 0.97–0.99 → redeem @ $1.00 |
| 2 | **Complement / Sum-to-One Arb** | Market-neutral | Buy YES+NO when combined ask < $1 |
| 3 | **Latency / Oracle Arb** | Speed | Trade before Chainlink / UI catches spot moves |
| 4 | **101 Cents Maker** | Liquidity making | Sell YES+NO pairs targeting ~$1.01 combined |
| 5 | **Ladder Market Making** | Inventory + spread | Layered bids/asks across price levels |
| 6 | **Stair Exit / Unwind** | Execution | Staged YES/NO liquidation near resolution |
| 7 | **Dual-Side Volatility Arb** | Neutral / hedge | Exploit mispriced probs + short-term vol |
| 8 | **Lost Token Sniper** | Dual-position | Hold both sides, dump predicted loser early |
| 9 | **High-Frequency Momentum** | Directional | Ride order-flow / news momentum bursts |
| 10 | **Imbalance Arb** | Book imbalance | Buy the cheap side when book is skewed |
| 11 | **Logical / Multi-Outcome Arb** | Constraint | Related markets violate probability rules |
| 12 | **AI Probability / Info Arb** | Information | Model fair odds vs market price |

---

## Contact

I have hands-on experience developing and running automated trading bots for Polymarket, including live endcycle sniper strategies on short-interval crypto markets. I can share insights, strategies, and best practices from practical development and live trading — or discuss customized solutions tailored to your needs.

If you're interested in collaboration, have questions, or want to see the bot in action, feel free to reach out.

| Channel | Link |
|---------|------|
| **Telegram** | [@antsaslyku](https://t.me/antsaslyku) |
| **GitHub** | [@trum3it](https://github.com/trum3it) |
| **Polymarket** | [@antsaslyku](https://polymarket.com/@antsaslyku) |

This is my public Polymarket account — you can check the bot’s P/L live:

**https://polymarket.com/@antsaslyku**

---

## Live Proof — Buy → Redeem Cycles

These are real on-chain transactions from [@antsaslyku](https://polymarket.com/@antsaslyku) on Polygon. Each pair shows the same pattern the **endcycle sniper** follows: **buy the favorite late in the window → redeem at $1.00 after resolution**.

![Polymarket Activity](doc/activity.png)

### Trade 1 — Jun 11, 2026 · ~$0.99 entry

| Step | Time (UTC) | Details | Polygonscan |
|------|------------|---------|-------------|
| **Buy** | 09:30:01 | ~**$67.32** USDC → **68 shares** @ **~$0.99** (late-window favorite) | [View buy tx](https://polygonscan.com/tx/0x6874a18bcd84c18a6e9d5cffd0a94eb0bdc148089a364370eb9120384bc4e21c) |
| **Redeem** | 09:31:03 | Market resolves → shares redeemed for **~$1.00** each | [View redeem tx](https://polygonscan.com/tx/0x17e8fbc7ed8d995c44127da034e487733a43f18c6638cdcba9088a519b11ad63) |

**Approx. gross profit:** ~**$0.68** on ~$67 stake (~**1%**) before fees, in **~62 seconds**.

### Trade 2 — Jun 11, 2026 · ~$0.99 entry

| Step | Time (UTC) | Details | Polygonscan |
|------|------------|---------|-------------|
| **Buy** | 08:55:01 | Buy favorite @ **~$0.98–$0.99** near window end | [View buy tx](https://polygonscan.com/tx/0x7fa58be45dc24afbc8bd135fc6a7147fb548e2c00ad2f5b6100fa7510dd58b45) |
| **Redeem** | 08:55:30 | Resolution redeem **~29s** after buy | [View redeem tx](https://polygonscan.com/tx/0x4edaaa3a6a6d854fe6ec938280ab3cfd34d07f34fcc75c7f4757feccfc9d30dc) |

> **How to read these txs:** The **buy** tx interacts with `Polymarket: CTF Exchange V2` — USDC out, outcome shares in. The **redeem** tx settles winning shares back to USDC at **$1.00** per share when the 5m window resolves. Repeat this across many windows and P/L compounds — see the full history on [polymarket.com/@antsaslyku](https://polymarket.com/@antsaslyku).

### Profile Screenshots ([@antsaslyku](https://polymarket.com/@antsaslyku))

Live Polymarket dashboard — portfolio growth and buy/redeem activity on **BTC** and **XRP** 5m markets at **96–99¢**:

![Polymarket profile — past day profit/loss and recent trades](doc/daily_pnl.png)

- Past year P/L: **+$82,537.48**
- Past day P/L: **+$208.04**
- 24h Return: **+3.51%**
- Portfolio Value: **~$3,467**

Trade history includes repeated entries in late-stage crypto prediction markets followed by successful redemptions at settlement.

---

## Why Polymarket Bot Strategies Matter in 2026

Polymarket’s short-interval crypto markets (especially **BTC / ETH / SOL / XRP 5-minute Up/Down**) created a new class of high-frequency prediction-market trading:

- Markets resolve every **5 minutes** — hundreds of cycles per day
- Binary outcomes settle at exactly **$0 or $1**, so pricing has hard mathematical structure
- The CLOB + Polygon settlement stack lets bots automate **buy → merge/redeem** loops
- Retail flow is still large; professional bots compete on **latency, inventory, and risk**

Industry observations commonly cited in 2026 research and bot write-ups:

- Classic complement-arb windows often last only **~2–3 seconds**
- A large share of pure arb is captured by **sub-100ms** execution stacks
- Median raw spreads can be thin (**fractions of a cent**) after fees
- A growing share of bot P/L comes from **non-pure-arb** strategies: market making, momentum, endcycle sniping, correlation, and information edges

That is why modern Polymarket systems are usually **multi-strategy**, not single-trick bots.

---

## 1. Polymarket Endcycle Sniper Bot (Featured)

**Polymarket Endcycle Sniper Bot** monitors short-duration prediction markets and executes high-probability trades near the end of each 5-minute epoch.

It waits through most of the window, triggers buys when the favorite ask enters a configured band (e.g. **0.97–0.99**), manages risk with timed exits, and settles winning positions after resolution.

This is the strategy behind the live [@antsaslyku](https://polymarket.com/@antsaslyku) activity shown above.

### Strategy Overview

Each **5-minute Up/Down** market (BTC, ETH, SOL, XRP) runs for **300 seconds**. All four assets share the same window clock — every 5 minutes a new round opens for each.

```
0s ──────────────── 250s ─── 290s ─ 298s ─ 300s
     wait / monitor      entry      exit   close
                         window    (resolve)
```

Near the end, when price has usually already moved one way, the likely winner trades just below **$1.00**:

1. **Monitor all four markets** (BTC, ETH, SOL, XRP) each poll
2. **Wait** through most of the window — no early entries
3. **Enter** in the last ~40s when Up or Down is priced **$0.97–$0.99**
4. **Buy the favorite** — up to **one position per asset** per window
5. **Hold to resolution** at **t = 298s** and settle

| | Typical win | Risk |
|---|-------------|------|
| **Math** | Buy @ ~$0.98 → redeem @ **$1.00** ≈ **2%** gross per share | Last-second reversal → most of stake lost |
| **Edge** | Small, repeatable gain per window | One bad flip wipes many wins |

### Strategy Rules

| Setting | Value |
|---------|--------|
| Markets | **BTC, ETH, SOL, XRP** — 5m Up/Down |
| Positions | Up to **one trade per asset** per 5m window (max 4 concurrent) |
| Entry time | **250–290s** after window start |
| Entry price | Favorite ask **0.97–0.99** (usually **0.98–0.99**) |
| Side selection | Whichever side is in the band; if both qualify, pick the **higher** price |
| Exit | **t = 298s** — redeem @ **$1.00/share** if bid ≥ 0.90, else exit at market bid |

Many windows produce **no trade** — normal when no side reaches the price band before time runs out.

### Why traders still use it

Endcycle sniping does not need to beat the entire market all day. It only needs a repeatable late-window setup: when the favorite is already **96–99¢**, the remaining uncertainty is small and the payout-to-risk math is explicit. Capital turns over every few minutes, so compounding comes from **frequency**, not from huge single-trade wins.

---

## 2. Complement Arbitrage (Sum-to-One / Dump-Hedge)

Also called **intra-market arbitrage**, **structural dump-hedge**, or **YES+NO < $1** arb.

### Core idea

In a binary market, exactly one side pays **$1.00** at resolution. If you hold **1 YES + 1 NO**, you are guaranteed **$1.00** back (before fees). Therefore:

- If `ask_YES + ask_NO < 1.00`, buying both sides locks a structural profit
- If `bid_YES + bid_NO > 1.00`, selling both sides can lock a maker-style edge

Example: YES ask **$0.48** + NO ask **$0.50** = **$0.98** → theoretical **$0.02** locked profit per share pair if both fills complete.

### How bots execute it

1. Stream CLOB books for target markets (often 5m crypto Up/Down)
2. Detect when combined ask falls below a threshold (e.g. `1.00 - fees - target_edge`)
3. Place near-simultaneous YES and NO buys (FOK/FAK/GTD common)
4. Optionally **merge** matched pairs back to USDC when inventory is balanced
5. Redeem leftovers after resolution if needed

### Reality check (2026)

- Opportunities are **short-lived** (often a few seconds)
- Sub-100ms stacks capture most of the cleanest prints
- Taker fees + leg risk (one side fills, the other misses) can erase the edge
- Still useful in thinner markets, newer listings, or as a secondary module inside a larger bot

**Best for:** market-neutral capital, low directional bias, automation-first traders.

---

## 3. Latency / Oracle Arbitrage

### Core idea

Polymarket 5-minute crypto markets resolve from oracle / reference price feeds (commonly discussed around **Chainlink**-style update cadence). Spot venues like Binance often move **before** Polymarket’s implied probability fully updates.

Bots watch the spot feed and Polymarket CLOB at the same time. When spot jumps hard and Polymarket tokens have not repriced yet, they buy the side that the move implies (Up or Down) and exit as the book catches up — or hold to resolution if the move is decisive.

### Typical pipeline

1. WebSocket spot prices (BTC/ETH/SOL/XRP)
2. WebSocket / polling Polymarket CLOB mid/asks
3. Detect lag: spot move vs Polymarket probability still stale
4. Fire aggressive entry with strict size + slippage caps
5. Exit on reprice, or hold if near endcycle and confidence is high

### Why it is hard

- Edge is measured in **hundreds of milliseconds to a few seconds**
- Requires dedicated RPC, co-located thinking, and careful fee accounting
- False signals during choppy markets destroy expectancy
- Competing latency bots compress the same window

**Best for:** HFT-oriented infra, low-latency Polygon connectivity, teams comfortable with aggressive risk controls.

---

## 4. 101 Cents Liquidity Maker (Pair Selling)

### Core idea

Instead of buying underpriced pairs, the bot **creates** YES+NO inventory (via split / inventory) and sells both sides so the combined sale price targets about **$1.01** (101 cents) — capturing roughly **1–2¢** per completed pair.

This is a **liquidity-making / inventory** strategy, not a directional bet.

### Typical loop

1. Split USDC into YES + NO tokens (or accumulate inventory over time)
2. Place balanced sell ladders on both sides
3. Require `sell_YES + sell_NO >= 1.01` (or a dynamic min pair sum)
4. Fill in small pair sizes rather than dumping the whole book
5. Re-skew quotes when inventory becomes unbalanced
6. Repeat across many 5-minute windows

### Why people like it

- Aims for many small, market-neutral cycles
- Scales with uptime and quote quality more than “calling direction”
- Works naturally with inventory balancing and force-hedge logic

### Risks

- Inventory can get stuck on one side if the market trends hard
- Adverse selection from informed flow
- If pair sum is set too aggressively, fills dry up; if too loose, edge vanishes after fees

**Best for:** 24/7 maker bots on liquid short-interval markets.

---

## 5. Ladder Market Making

### Core idea

Instead of one bid/ask, the bot posts a **ladder** of limit orders at multiple price levels on YES and/or NO. This:

- Captures spread across a range of retail fills
- Reduces impact vs a single large order
- Lets inventory rebalance gradually as different rungs fill

Modern ladder bots usually combine:

- Dual-sided quoting
- Inventory skew (quote more aggressively on the heavy side to unload)
- Volatility-aware spread widening
- Cancel/replace loops every few hundred ms to seconds

### Inventory-balanced variant

A popular 2026 design is the **inventory-balanced ladder**:

1. First-leg sell when momentum/order-flow favors one side
2. Hedge the opposite side to stay near-neutral
3. Force-hedge if imbalance exceeds a hard USDC limit
4. Pull quotes near market close / news events

**Best for:** traders who want steady maker P/L and can handle inventory math.

---

## 6. Stair Exit / Stair Arbitrage (Unwinding Engine)

### Core idea

Many bots lose money on **exits**, not entries. Stair logic focuses on the final phase of a window: unwind YES and NO inventory with liquidity-aware steps instead of market-dumping.

### Typical stair sequence

1. Near resolution, score both sides for depth and price quality
2. **Selective first exit** — liquidate the easier / better-priced side first
3. **Stair unwind** the remaining side in incremental clips at chosen price levels
4. Optionally finish with a coordinated sweep if depth suddenly appears
5. Keep hedge / exposure caps active the whole time

### Why it matters

In 5-minute markets, the last 30–60 seconds are chaotic. A stair engine turns exit into a controlled process: less slippage, fewer “I sold into a vacuum” disasters, better capital preservation for the next cycle.

**Best for:** dual-inventory strategies (101¢, ladder, lost-token) that must exit cleanly every epoch.

---

## 7. Dual-Side Volatility / Probability Arbitrage

### Core idea

This family of bots does **not** try to predict the winner. It looks for short-term mispricing between:

- Implied probabilities
- Order-book imbalance
- Realized short-term volatility
- Fair model value

Then it trades **both sides** with hedges so net exposure stays controlled while harvesting small edges across many fills.

### Common tactics

- Buy undervalued side, sell/overweight the rich side
- Use quantitative entry/exit thresholds rather than gut direction
- Hedge after first fill so a one-leg fill does not become a naked directional bet
- Compound tiny edges over high trade volume

**Best for:** quant-style systems with strong risk modules and continuous monitoring.

---

## 8. Lost Token Sniper

### Core idea

On short Up/Down epochs, a bot may temporarily hold **both** YES and NO (or acquire them via split). As the window progresses and one outcome becomes likely, the bot identifies the **losing token** and sells it before resolution — keeping the winner to redeem at $1.00.

If the combined acquisition cost was near or below $1 and the loser is sold for residual value, the cycle can be profitable even without perfect foresight.

### Workflow

1. Allocate into YES and NO early or mid-window
2. Monitor books + momentum to estimate which side is dying
3. Exit the predicted loser into remaining bid liquidity
4. Hold / redeem the winner at settlement
5. Repeat next epoch

### Risks

- Mis-identifying the loser (classic last-second flip)
- Thin bids on the dying side → sell fills at garbage prices
- Fees on two legs reduce the theoretical edge

**Best for:** traders who already run dual-inventory systems and want an active mid-window optimization layer.

---

## 9. High-Frequency Momentum Trading

### Core idea

When breaking news, a sudden spot move, or a burst of aggressive CLOB flow hits, Polymarket prices **trend** before fully settling. Momentum bots detect the impulse early and ride it.

### Typical signals

- Sudden volume / trade-rate spikes
- Order-book imbalance flips
- Spot exchange momentum confirmation
- Short lookback returns on YES/NO mids

### Risk controls that separate survivors from blowups

- Trailing stops / time stops (these markets die every 5 minutes)
- Circuit breakers on session drawdown
- Max position per market / per minute
- No-trade zones in dead chop

**Reality:** short-horizon crypto binaries can behave close to a random walk. Momentum works in bursts; without strict filters it overtrades and dies.

**Best for:** low-latency stacks that can enter and exit inside the same window.

---

## 10. Imbalance Arbitrage (“Buy the Cheap Side”)

### Core idea

Sometimes one side of the book is temporarily too cheap relative to the other — not necessarily `YES+NO < 1`, but a **relative** mispricing vs depth, recent trades, or a short-term fair value model.

Bots buy the cheap side (or sell the rich side) and flatten when the book normalizes.

### Why it appears

- Retail panic one-sided selling
- Momentary liquidity gaps
- Latency between related markets
- Maker inventory dumps

**Best for:** continuous scanners across many markets with strict adverse-selection filters.

---

## 11. Logical / Multi-Outcome / Correlation Arbitrage

### Core idea

Beyond single binary markets, Polymarket hosts related questions whose probabilities must obey logic:

- Mutually exclusive outcomes should not sum above $1 (after fees)
- Nested events (“A happens” vs “A and B happen”) have inequality constraints
- Cross-market baskets can be temporarily inconsistent

Advanced bots project prices onto a valid probability simplex (research systems have used optimization approaches such as Bregman / Frank–Wolfe style projections) and trade the violation.

### Reality check

- Harder engineering than 5m Up/Down sniping
- Opportunities can be larger but less frequent
- Model risk is real: wrong constraint definition = false arb

**Best for:** research desks and multi-market engines, not first-time bot builders.

---

## 12. AI Probability / Information Arbitrage

### Core idea

Markets can be slow to reprice public information. AI / ensemble systems ingest headlines, polls, on-chain data, or structured context, estimate a fair probability, and trade when Polymarket’s price is still stale.

### Typical stack

1. News / social / data ingestion
2. Multiple models → ensemble fair odds
3. Compare to Polymarket mid
4. Trade only when edge > threshold and liquidity is real
5. Exit on reprice or time stop

### Important honesty

This is **not** magic alpha. It is speed + calibration + execution. On ultra-short 5m BTC binaries, some live experiments show directional AI agents can struggle because the series is extremely noisy. AI tends to shine more on **information-heavy**, longer-horizon markets — while still needing hard risk limits.

**Best for:** event-driven markets (politics, macro, sports) and hybrid systems that use AI as a filter, not as an unchecked autopilot.

---

## How These Strategies Fit Together

Serious Polymarket bot portfolios often combine modules:

| Layer | Strategies |
|-------|------------|
| **Structural / neutral** | Complement arb, 101¢ maker, ladder MM, dual-side hedge |
| **Execution quality** | Stair exits, inventory caps, force-hedge |
| **Speed** | Latency / oracle arb, HF momentum |
| **Late-window harvest** | Endcycle sniper |
| **Research / info** | Imbalance, logical multi-outcome, AI probability |

The featured system on this page emphasizes **endcycle sniping** on BTC/ETH/SOL/XRP 5m markets — a practical, understandable, and publicly verifiable style of edge — while the catalog above shows the broader competitive landscape.

---

## Why This Bot

This project is built to help traders understand what a real **Polymarket arbitrage trading bot** looks like in practice:

- Polymarket trading bots on short-interval crypto markets
- Prediction market automation beyond manual clicking
- Late-window / endcycle sniper systems with public on-chain proof
- Buy → redeem settlement loops on Polygon
- A clear map of the major bot strategies competing on Polymarket in 2026

If you want to discuss strategy design, custom bots, or see live behavior, contact me on Telegram: [@antsaslyku](https://t.me/antsaslyku).

---

## Risks & Disclaimer

- **Small edges, large tails** — a 1–2¢ theoretical edge can vanish after fees, slippage, and one bad flip
- **Competition is intense** — many pure arb prints are taken by faster bots
- **Not every window trades** — endcycle setups often skip cycles when no side reaches 0.97–0.99
- **Past results are not future guarantees** — see [@antsaslyku](https://polymarket.com/@antsaslyku) as illustration, not a promise
- **Not financial advice** — trading prediction markets involves substantial risk of loss

---

## Roadmap

- Stronger endcycle variants (multi-threshold, adaptive sizing)
- Complement + latency arb modules
- Ladder / 101¢ maker + stair exit engine
- Telegram trading alerts
- Real-time analytics dashboard
- Cloud deployment automation

---

## SEO Keywords

Polymarket trading bot, Polymarket arbitrage bot, Polymarket endcycle sniper, complement arbitrage, latency arbitrage, 101 cents maker, ladder market making, stair arbitrage, lost token sniper, dual-side arbitrage, momentum trading bot, imbalance arbitrage, prediction market bot, 5-minute crypto Up/Down bot, Polymarket CLOB bot, algorithmic trading Polygon

---

## License

ISC License
