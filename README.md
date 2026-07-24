# Polymarket Arbitrage Bot | Automated Polymarket Trading Bot

**Language / 语言 / Язык:** English | [中文](README.zh-CN.md) | [Русский](README.ru.md)

**Polymarket arbitrage bot** tools and services for automated trading on Polymarket prediction markets — politics, sports, weather, crypto, economics, entertainment, and more.

This **Polymarket arbitrage bot** scans event markets for mispriced YES/NO and multi-outcome contracts, sizes risk, executes on the Polymarket CLOB, and redeems at settlement on Polygon. Not crypto-only: the same **Polymarket arbitrage** stack works across every major event category.

### What is a Polymarket arbitrage bot?

A **Polymarket arbitrage bot** is automated software that profits from pricing inefficiencies on Polymarket — for example when YES + NO asks sum below $1, when multi-outcome bundles are underpriced, or when related markets violate probability constraints. Unlike directional betting, a **Polymarket arbitrage trading bot** targets structural edges: complement arb, bundle arb, logical/nested arb, latency arb, and maker-style liquidity strategies.

![Polymarket Arbitrage Bot Banner](doc/banner.png)

**Live Polymarket arbitrage bot profile:** [**@moond on Polymarket**](https://polymarket.com/@moond)

**Telegram:** [@cryptomoonday23](https://t.me/cryptomoonday23) · **Discord:** cryptomoonday · **Author:** [@cryptomoonday](https://github.com/cryptomoonday)

**Repo:** [github.com/cryptomoonday/polymarket-arbitrage-bot](https://github.com/cryptomoonday/polymarket-arbitrage-bot)

---

## Install & Use — Polymarket Arbitrage Bot

This repo ships a ready **Polymarket arbitrage bot** module for **5-minute crypto Up/Down** markets (`BTC`, `ETH`, `SOL`, `XRP`). It connects to the Polymarket CLOB, reads your USDC balance, monitors live prices, and runs a **late-window favorite snipe** loop (buy the side trading ~$0.97–$0.99 near window end, hold toward resolution).

Need politics, sports, weather, or multi-outcome arb modules? Contact [@cryptomoonday23](https://t.me/cryptomoonday23) for custom builds.

### Requirements

- **Node.js** `>= 20.6.0`
- A Polymarket-funded wallet with **USDC on Polygon**
- Your wallet **private key** (and proxy address if you use Polymarket email/social login)

### 1. Clone

```bash
git clone https://github.com/cryptomoonday/polymarket-arbitrage-bot.git
cd polymarket-arbitrage-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure `.env`

```bash
cp .env.example .env
```

Edit `.env`:

| Variable | Required | Description |
|----------|----------|-------------|
| `POLYMARKET_PRIVATE_KEY` | **Yes** | 64-hex private key (with or without `0x`) for the wallet that signs CLOB requests |
| `PROXY_WALLET_ADDRESS` | No | Polymarket **proxy / funder** address if you signed up with email or social login. Leave blank for a normal EOA (MetaMask, etc.) |

Example:

```env
POLYMARKET_PRIVATE_KEY=0xyour_private_key_here
# PROXY_WALLET_ADDRESS=0xyour_polymarket_profile_address
```

Never commit `.env`. It is gitignored.

### 4. Run the bot

```bash
npm start
```

On start the bot will:

1. Validate `POLYMARKET_PRIVATE_KEY`
2. Fetch your USDC balance from the Polymarket CLOB API
3. Poll live BTC / ETH / SOL / XRP 5m Up/Down markets
4. Enter late in the window when the favorite is in the configured price band
5. Exit / redeem logic near resolution (`t ≈ 298s`)
6. Append activity to **`logs.txt`** and print to the console

Stop with **Ctrl+C** — the bot prints a final P/L summary.

### Strategy defaults (included module)

| Setting | Value |
|---------|-------|
| Markets | BTC, ETH, SOL, XRP — 5m Up/Down |
| Bet size | `$10` per entry |
| Entry window | `250–290s` into the 5m period |
| Entry price band | `0.97–0.99` (favorite side) |
| Resolve check | `~298s` |
| Poll interval | `2s` ( `1s` after `t=240s` ) |

Tune these constants in `src/index.ts` (`BET_USD`, `ENTRY_TIME_*`, `ENTRY_PRICE_*`, `MARKETS`, etc.).

### Troubleshooting

- **`POLYMARKET_PRIVATE_KEY is required`** — copy `.env.example` → `.env` and set the key
- **Invalid private key** — must be 64 hex chars (`0x` optional)
- **Wallet balance is $0** — deposit USDC into the trading / proxy wallet on Polymarket
- **Email/social login users** — set `PROXY_WALLET_ADDRESS` to your Polymarket profile (funder) address
- **Rate limit warnings** — the bot backs off automatically; wait and keep it running

For setup help or a custom **Polymarket arbitrage bot** stack: Telegram [@cryptomoonday23](https://t.me/cryptomoonday23) · Discord **cryptomoonday**.

---

## Polymarket Arbitrage Bot Markets

All major Polymarket categories are available for this **Polymarket arbitrage bot** and custom arbitrage services:

| Category | Example markets | Typical bot focus |
|----------|-----------------|-------------------|
| **Politics** | Elections, primaries, nominations, legislation, geopolitics | Nested logical arb, poll/news lag, multi-outcome bundles |
| **Sports** | NBA / NFL / soccer moneyline, spreads, series, tournaments | Live combinatorial arb, moneyline↔spread, late-game snipes |
| **Weather** | Temperature thresholds, storms, hurricanes, rainfall | Model-vs-market arb, rapid reprice on forecast updates |
| **Crypto** | Price thresholds, Up/Down windows, ETF / protocol events | Latency/oracle lag, endcycle favorite, complement arb |
| **Economics / Macro** | Fed cuts, CPI, unemployment, GDP prints | Calendar catalysts, cross-market correlation hedges |
| **Business / Tech** | Earnings, product launches, M&A, IPO odds | News-speed info arb, imbalance after headlines |
| **Culture / Entertainment** | Awards, box office, viral events | Thin-book arb, retail overreaction, maker spreads |
| **World / Other** | Conflict timelines, science, custom event contracts | Constraint arb, settlement-rule edge, long-horizon MM |

![Markets we serve](doc/markets-grid.png)

---

## Polymarket Arbitrage Bot Tools & Services

- **Ready Polymarket arbitrage bot modules** for binary + multi-outcome markets
- **Custom Polymarket arbitrage strategies** tuned to your niche (politics, sports live, weather quant, crypto short windows)
- **Multi-market Polymarket arbitrage scanners** for YES+NO / bundle / logical gaps
- **Execution + risk layers** — slippage caps, inventory limits, redeem automation
- **Monitoring & alerts** (Telegram) for fills, skips, drawdowns, and resolution
- **Consulting** on Polymarket arbitrage bot architecture, VPS/RPC, wallet setup, and strategy selection

![Services pipeline](doc/services-pipeline.png)

Looking for a **Polymarket arbitrage bot** for one category or a full multi-market portfolio? Contact Telegram: [@cryptomoonday23](https://t.me/cryptomoonday23) or Discord: **cryptomoonday**.

---

## Polymarket Arbitrage Bot Features

- Built as a production **Polymarket arbitrage bot** for event-driven markets (politics, sports, weather, crypto, and more)
- Core **Polymarket arbitrage** edges: complement arb, multi-outcome bundle arb, logical / nested arb, market making, catalyst lag, late-window favorites
- Real-time CLOB monitoring + automated buy → merge/redeem settlement on Polygon
- Configurable universe: slugs, tags, or whole Polymarket categories
- Live proof from a running Polymarket arbitrage bot profile
- Strategy playbooks so you can map each **Polymarket arbitrage** method to the right market type

---

## Polymarket Arbitrage Bot Strategies

The Polymarket CLOB is bot-heavy. Simple gaps often last seconds. A serious **Polymarket arbitrage bot** runs structural arb plus category-specific overlays:

| # | Strategy | Best on | Typical edge |
|---|----------|---------|--------------|
| 1 | **Binary Complement Arb** | All binaries | Buy YES+NO when combined ask < $1 |
| 2 | **Multi-Outcome Bundle Arb** | Elections, awards, multi-candidate | Buy full outcome set under $1 |
| 3 | **Logical / Nested Arb** | Politics, geopolitics | Related markets violate probability constraints |
| 4 | **Combinatorial Sports Arb** | NBA/NFL moneyline + spread | Live cross-contract mispricing |
| 5 | **Weather Model Arb** | Temp / storm markets | External forecast model vs Polymarket odds |
| 6 | **Crypto Latency / Oracle Arb** | Short crypto Up/Down | Spot moves before Polymarket reprices |
| 7 | **Endcycle / Favorite Grind** | Late politics, late sports, crypto windows | Buy high-probability favorites near settlement |
| 8 | **Ladder / 101¢ Market Making** | Liquid event books | Earn spread / pair sell above $1 |
| 9 | **Stair Exit Unwind** | Dual-inventory strategies | Liquidity-aware exits near resolution |
| 10 | **Catalyst / News Lag Arb** | Politics, macro, business | Trade before crowd finishes repricing |
| 11 | **Imbalance Arb** | Thin culture / niche events | Buy the temporarily cheap side |
| 12 | **Cross-Platform / Correlation Hedge** | Politics + macro + crypto clusters | Related events move as a basket |

![Strategy catalog](doc/strategy-catalog.png)

---

## Contact — Polymarket Arbitrage Bot

I provide **Polymarket arbitrage bot** tools and custom **Polymarket arbitrage** services across many market types — politics scanners, sports combinatorial engines, weather model overlays, crypto short-window modules, or a full multi-category **Polymarket arbitrage bot** stack.

| Channel | Link |
|---------|------|
| **Telegram** | [@cryptomoonday23](https://t.me/cryptomoonday23) |
| **Discord** | cryptomoonday |
| **GitHub** | [@cryptomoonday](https://github.com/cryptomoonday) |
| **Polymarket** | [@moond](https://polymarket.com/@moond) |

Public live account:

**https://polymarket.com/@moond**

![Contact CTA](doc/contact-cta.png)

---

## Live Proof — Polymarket Arbitrage Bot

Automated buy → redeem cycles from a live **Polymarket arbitrage bot** profile ([@moond](https://polymarket.com/@moond)). The same settlement loop powers Polymarket arbitrage across politics, sports, weather, crypto, and beyond.

![@moond profile overview](doc/moond-profile.png)

### Multi-market buy → redeem activity

The same settlement pattern across **crypto, geopolitics, and sports**: **buy outcome shares → redeem at resolution**. Examples from live bot activity:

| Market | Category | Buy | Redeem |
|--------|----------|-----|--------|
| BTC dip | Crypto | `btc-dip-buy.png` | `btc-dip-redeem.png` |
| China–Philippines | Geopolitics | `china_philippines_buy.png` | `china_philippines_redeem.png` |
| Goalkeeper | Sports | `goalkeeper-buy.png` | `goalkeeper-redeem.png` |
| Mbappé | Sports | `Mbappe-buy.png` | `Mbappe-redeem.png` |

#### Crypto — BTC dip

<table>
<tr>
<td width="50%" valign="top">

**Buy**

![BTC dip — buy](doc/btc-dip-buy.png)

</td>
<td width="50%" valign="top">

**Redeem**

![BTC dip — redeem](doc/btc-dip-redeem.png)

</td>
</tr>
</table>

#### Geopolitics — China–Philippines

<table>
<tr>
<td width="50%" valign="top">

**Buy**

![China–Philippines — buy](doc/china_philippines_buy.png)

</td>
<td width="50%" valign="top">

**Redeem**

![China–Philippines — redeem](doc/china_philippines_redeem.png)

</td>
</tr>
</table>

#### Sports — Goalkeeper

<table>
<tr>
<td width="50%" valign="top">

**Buy**

![Goalkeeper — buy](doc/goalkeeper-buy.png)

</td>
<td width="50%" valign="top">

**Redeem**

![Goalkeeper — redeem](doc/goalkeeper-redeem.png)

</td>
</tr>
</table>

#### Sports — Mbappé

<table>
<tr>
<td width="50%" valign="top">

**Buy**

![Mbappé — buy](doc/Mbappe-buy.png)

</td>
<td width="50%" valign="top">

**Redeem**

![Mbappé — redeem](doc/Mbappe-redeem.png)

</td>
</tr>
</table>

> **Pattern:** Each pair shows **entry into outcome shares** and **redeem after resolution** (typically back to USDC at **$1.00** per winning share via CTF settlement). Categories differ; the loop stays the same.

### Profile & activity screenshots

![Polymarket profile — past day profit/loss and recent trades](doc/daily-pnl.png)

![Mixed-category positions](doc/positions-mixed.png)

![Trade history across events](doc/trade-history.png)

### Capital flow, merge & rewards gallery

Screenshots of the full Polymarket money loop the bot stack supports — **deposit / withdraw**, **merge**, **liquidity & holding rewards**, and **maker / taker rebates**.

| Action | File |
|--------|------|
| **Deposit** | `doc/deposit.png` |
| **Withdraw** | `doc/withdraw.png` |
| **Merge** | `doc/merge.png` |
| **Liquidity rewards** | `doc/liquidity-rewards.png` |
| **Holding rewards** | `doc/holding-rewards.png` |
| **Maker rebate** | `doc/maker-rebate.png` |
| **Taker rebate** | `doc/taker-rebate.png` |

#### Deposit & withdraw

<table>
<tr>
<td width="50%" valign="top">

**Deposit**

![Deposit](doc/deposit.png)

</td>
<td width="50%" valign="top">

**Withdraw**

![Withdraw](doc/withdraw.png)

</td>
</tr>
</table>

#### Merge

![Merge](doc/merge.png)

#### Liquidity rewards & holding rewards

<table>
<tr>
<td width="50%" valign="top">

**Liquidity rewards**

![Liquidity rewards](doc/liquidity-rewards.png)

</td>
<td width="50%" valign="top">

**Holding rewards**

![Holding rewards](doc/holding-rewards.png)

</td>
</tr>
</table>

#### Maker rebate & taker rebate

<table>
<tr>
<td width="50%" valign="top">

**Maker rebate**

![Maker rebate](doc/maker-rebate.png)

</td>
<td width="50%" valign="top">

**Taker rebate**

![Taker rebate](doc/taker-rebate.png)

</td>
</tr>
</table>

---

## Why a Polymarket Arbitrage Bot Matters in 2026

A modern **Polymarket arbitrage bot** is no longer “just crypto Up/Down.” Volume and inefficiency show up across:

- **Elections & politics** — nested state/national markets create logical constraints
- **Sports** — moneyline vs spread/combinatorial books misprice during live play
- **Weather** — model-driven traders vs casual retail odds
- **Macro & business** — calendar prints and headlines move books in bursts
- **Crypto** — still a major vertical for latency and short-window edges

Research and industry write-ups in 2025–2026 repeatedly highlight:

- Large historical extraction from **mathematical / constraint arbitrage** across related conditions
- **Multi-outcome bundle** gaps when the sum of asks < $1
- In sports, executable combinatorial arb often clusters in **final minutes of live games**, with depth as the binding limit
- Pure gaps compress to seconds; bots win on **scan speed + category logic + risk caps**

![Volume by category](doc/volume-by-category.png)

---

## Polymarket Arbitrage Bot Playbooks

### 1. Binary Complement Arbitrage (YES + NO < $1) — Core Polymarket Arbitrage Bot Strategy

Works on **any** binary Polymarket event: “Will X win?”, “Will temp exceed Y?”, “Will Team A win?”

If `ask_YES + ask_NO < 1.00` (after fees/edge buffer), a **Polymarket arbitrage bot** buys both sides and locks structural profit at resolution.

![Complement arb diagram](doc/diagram-complement-arb.png)

**Best for:** politics binaries, weather thresholds, sports moneylines, business yes/no.

### 2. Multi-Outcome Bundle Arbitrage

On multi-candidate / multi-team / multi-bucket markets, if the sum of cheapest asks across **all mutually exclusive outcomes** is **under $1**, buy the full set.

**Best for:** election fields, award nominees, tournament winners, temperature buckets.

### 3. Logical / Nested / Correlation Arbitrage

Related markets must obey constraints (example patterns used in research):

- If “Candidate wins nationally” is high, related state-win markets cannot be arbitrarily inconsistent
- Nested events (“A” vs “A and B”) imply inequality constraints
- Macro clusters (rates ↔ risk assets ↔ election odds) can temporarily diverge

Bots project prices onto a valid probability set and trade violations.

![Logical arb graph](doc/diagram-logical-arb.png)

### 4. Ladder / 101¢ Market Making + Stair Exits

Provide liquidity or sell YES+NO pairs targeting combined proceeds **≥ ~$1.01**, then unwind with stair logic near resolution. Category-agnostic; strongest on **liquid** event books.

### 5. Catalyst / Information Lag

When polls, injury reports, forecast updates, CPI prints, or breaking news hit, bots race the crowd’s reprice. Edge = speed + calibrated fair odds — especially strong on **politics, macro, sports, weather**.

### 6. Endcycle / High-Probability Favorite

Near resolution, buy favorites in the **0.95–0.99** band when remaining uncertainty is small. Used on late election calls, garbage-time sports, weather already “locked in,” and short crypto windows.

---

## Polymarket Arbitrage Strategies by Market Category

### Politics

**What bots do**

- Scan nested election / nomination / legislation markets for **logical violations**
- Bundle-arb multi-candidate fields when sum(asks) < $1
- Trade **poll and news lag** faster than retail (AI/ensemble fair odds optional)
- Market-make liquid national races; snipe thin state/local books carefully

**Why it works:** Politics has deep dependency structure. Research on Polymarket conditions has documented widespread single-market and related-market inefficiencies when constraints are modeled correctly. Retail often prices narratives; bots price **consistency**.

![Politics markets](doc/politics-markets.png)

![Politics bot alert](doc/politics-bot-alert.png)

---

### Sports

**What bots do**

- Watch **moneyline ↔ spread / total** relationships for combinatorial arb (documented heavily on NBA-style books)
- Focus on **late live windows** when odds move fastest and gaps appear
- Size to **book depth** — sports arb is often liquidity-capped, not idea-capped
- Optional endcycle snipes when a game outcome is nearly decided

**Why it works:** Sports contracts resolve fast; liquidity may be shallow; emotional retail flow misprices favorites/dogs. Academic and practitioner analyses show executable episodes often cluster near game end.

![Sports combinatorial arb](doc/sports-combinatorial.png)

![Sports arb timeline](doc/sports-timeline.png)

---

### Weather

**What bots do**

- Compare Polymarket weather odds to **external forecast models** (ensemble temps, storm tracks, hurricane landfall probs)
- Reprice on model update cycles faster than casual bettors
- Run complement/bundle arb on temperature bucket markets
- Avoid overtrading noise when models disagree

**Why it works:** Weather markets attract casual flow, while specialists with meteorological models can hold a true information edge — a pattern widely discussed in 2026 strategy content.

![Weather model vs market](doc/weather-model-vs-market.png)

---

### Crypto (still supported — not the only focus)

**What bots do**

- **Latency / oracle** plays on short Up/Down windows when spot leads Polymarket
- **Complement arb** when YES+NO asks temporarily sum under $1
- **Endcycle favorite** buys near window close
- Maker / ladder modules on liquid crypto event books

**Why it works:** Crypto remains a high-turnover vertical. It is one category inside a broader event stack — not the whole product.

![Crypto latency arb](doc/crypto-latency.png)

---

### Economics, Business & Macro

**What bots do**

- Pre-position and scalp around **scheduled prints** (Fed, CPI, jobs)
- Trade headline lag in earnings / M&A / product markets
- Correlation hedges across rates, risk, and political odds when baskets diverge

![Macro calendar markets](doc/macro-calendar.png)

---

### Culture, Entertainment & Long-Tail Events

**What bots do**

- Hunt **thin-book complement/bundle** gaps
- Fade extreme retail overreactions after viral news
- Make markets where spreads are wide and adverse selection is manageable

![Culture market spread](doc/culture-spread.png)

---

## How a Polymarket Arbitrage Bot Stack Fits Together

| Layer | Role |
|-------|------|
| **Universe** | Politics + sports + weather + crypto + macro + other tags |
| **Structural** | Complement, multi-outcome bundle, logical constraints |
| **Category overlays** | Sports combinatorial, weather models, crypto latency, politics nesting |
| **Execution** | CLOB limits/FAK, slippage caps, inventory, stair exits |
| **Settlement** | Auto merge/redeem winners across all event types |
| **Ops** | Telegram alerts, drawdown breakers, per-category risk budgets |

![Architecture stack](doc/architecture-stack.png)

---

## Why Choose This Polymarket Arbitrage Bot

This project helps traders and operators get a real **Polymarket arbitrage bot** — tools, strategies, and services — across the full event spectrum:

- Built first as a **Polymarket arbitrage bot**, not a generic trading toy
- Politics, weather, sports, crypto, macro, and more — **all available** for Polymarket arbitrage
- Clear strategy maps per category so you know which **Polymarket arbitrage** method you are buying
- Live profile proof: [@moond](https://polymarket.com/@moond)
- Custom Polymarket arbitrage bot builds, scanners, execution engines, and ongoing tuning

Telegram: [@cryptomoonday23](https://t.me/cryptomoonday23) · Discord: **cryptomoonday**

![Closing CTA](doc/closing-cta.png)

---

## Risks & Disclaimer

- **Edges are small; tails are large** — fees, slippage, and one bad fill can erase many wins
- **Competition is intense** — many structural gaps last only seconds
- **Category risk differs** — sports depth limits size; politics model risk is real; weather models can be wrong
- **Past results are not future guarantees** — [@moond](https://polymarket.com/@moond) is illustration, not a promise
- **Not financial advice** — prediction markets involve substantial risk of loss

---

## Roadmap

- Deeper politics constraint graph + election season packs
- Live sports combinatorial engine improvements
- Weather model connector pack
- Cross-category portfolio risk dashboard
- Telegram ops suite (alerts, pauses, per-market kill switches)
- Cloud deployment automation

---

## SEO Keywords

**Primary:** Polymarket arbitrage bot, Polymarket arbitrage, Polymarket arbitrage trading bot

**Secondary:** Polymarket trading bot, Polymarket bot, prediction market arbitrage bot, Polymarket CLOB arbitrage, automated Polymarket arbitrage

**Long-tail / strategy:** complement arbitrage Polymarket, YES NO arbitrage bot, multi-outcome bundle arbitrage, logical nested arbitrage Polymarket, sports combinatorial arbitrage Polymarket, politics arbitrage bot Polymarket, weather arbitrage Polymarket, latency oracle arbitrage Polymarket, Polymarket market making bot, Polymarket endcycle sniper, election arbitrage bot Polymarket, NBA Polymarket arbitrage

**Services:** Polymarket arbitrage bot tools, Polymarket arbitrage bot services, custom Polymarket arbitrage bot, hire Polymarket arbitrage bot developer

---

## License

ISC License
