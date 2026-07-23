# Polymarket Trading Bot | Инструменты и сервисы арбитражных ботов Polymarket

**Язык / Language / 语言:** [English](README.md) | [中文](README.zh-CN.md) | Русский

Профессиональные **инструменты и сервисы арбитражных ботов Polymarket** для автоматизированной торговли на **рынках реальных событий** — не только крипто.

Я создаю, внедряю и сопровождаю ботов Polymarket, которые сканируют и торгуют **политику, погоду, спорт, крипто, экономику, развлечения и многое другое**. Если у события есть YES/NO или multi-outcome рынок на Polymarket, его можно подключить к одному арбитражному стеку: найти mispricing → рассчитать риск → исполнить на CLOB → redeem после settlement.

![Polymarket Arbitrage Bot Banner](doc/banner.png)

**Живой профиль:** [**@moond on Polymarket**](https://polymarket.com/@moond)

**Telegram:** [@cryptomoonday23](https://t.me/cryptomoonday23) · **Discord:** cryptomoonday · **Автор:** [@cryptomoonday](https://github.com/cryptomoonday)

---

## Рынки, которые мы обслуживаем

Все основные категории Polymarket доступны для бот-инструментов и кастомных сервисов:

| Категория | Примеры рынков | Фокус бота |
|-----------|----------------|------------|
| **Политика** | Выборы, праймериз, номинации, законы, геополитика | Nested logical arb, лаг опросов/новостей, multi-outcome bundles |
| **Спорт** | NBA / NFL / футбол moneyline, спреды, серии, турниры | Live combinatorial arb, moneyline↔spread, late-game snipes |
| **Погода** | Пороги температуры, штормы, ураганы, осадки | Model-vs-market arb, быстрый reprice после обновления прогноза |
| **Крипто** | Пороги цены, Up/Down окна, ETF / protocol events | Latency/oracle lag, endcycle favorite, complement arb |
| **Экономика / макро** | Снижение ставки Fed, CPI, безработица, GDP | Календарные катализаторы, correlation hedges |
| **Бизнес / Tech** | Отчёты, запуски продуктов, M&A, IPO odds | News-speed info arb, imbalance после заголовков |
| **Культура / Entertainment** | Премии, касса, вирусные события | Thin-book arb, retail overreaction, maker spreads |
| **Мир / другое** | Конфликты, наука, кастомные event-контракты | Constraint arb, settlement-rule edge, long-horizon MM |

![Рынки](doc/markets-grid.png)

---

## Что я предлагаю (Tools & Services)

- **Готовые арбитражные модули** для binary + multi-outcome рынков Polymarket
- **Кастомные стратегии** под нишу (политика, live-спорт, weather quant, crypto short windows)
- **Мультирыночные сканеры** сотен event-стаканов на YES+NO / bundle / logical gaps
- **Execution + risk** — slippage caps, inventory limits, auto-redeem
- **Мониторинг и алерты** (Telegram): fills, skips, drawdowns, resolution
- **Консалтинг** по архитектуре, VPS/RPC, кошелькам и выбору стратегии

![Пайплайн сервисов](doc/services-pipeline.png)

Нужен бот для **одной категории** или портфель **по всем вертикалям Polymarket** — пишите в Telegram: [@cryptomoonday23](https://t.me/cryptomoonday23) или Discord: **cryptomoonday**.

---

## Возможности

- Событийные рынки Polymarket: политика, спорт, погода, крипто и др.
- Ключевые края: **complement arb**, **multi-outcome bundle**, **logical / nested arb**, **market making**, **info / catalyst lag**, **late-window favorites**
- Real-time CLOB + автоматический цикл buy → merge/redeem на Polygon
- Настраиваемая вселенная: slug’и, теги или целые категории
- Публичное live-доказательство
- Стратегические плейбуки по типам рынков

---

## Каталог стратегий (кросс-маркет)

| # | Стратегия | Лучше на | Типичный край |
|---|-----------|----------|---------------|
| 1 | **Binary Complement Arb** | Все бинарники | Купить YES+NO, если сумма ask < $1 |
| 2 | **Multi-Outcome Bundle Arb** | Выборы, премии, multi-candidate | Купить полный набор исходов < $1 |
| 3 | **Logical / Nested Arb** | Политика, геополитика | Связанные рынки нарушают constraints |
| 4 | **Combinatorial Sports Arb** | NBA/NFL moneyline + spread | Live mispricing между контрактами |
| 5 | **Weather Model Arb** | Temp / storm markets | Внешняя модель vs котировки Polymarket |
| 6 | **Crypto Latency / Oracle Arb** | Короткие crypto Up/Down | Спот двигается раньше Polymarket |
| 7 | **Endcycle / Favorite Grind** | Поздняя политика, спорт, crypto windows | Покупка фаворита у settlement |
| 8 | **Ladder / 101¢ Market Making** | Ликвидные event books | Спред / pair sell выше $1 |
| 9 | **Stair Exit Unwind** | Dual-inventory | Liquidity-aware выходы к резолюции |
| 10 | **Catalyst / News Lag Arb** | Политика, макро, бизнес | Сделка до полной переоценки толпой |
| 11 | **Imbalance Arb** | Тонкие culture / niche events | Купить временно дешёвую сторону |
| 12 | **Cross-Platform / Correlation Hedge** | Политика + макро + crypto | Связанные события как корзина |

![Каталог стратегий](doc/strategy-catalog.png)

---

## Контакты

Я предоставляю **инструменты и сервисы арбитражных ботов Polymarket** по многим типам рынков. Политический сканер, live sports combinatorial engine, weather-model overlay, crypto short-window modules или полный multi-category стек — могу спроектировать, поставить и настроить.

| Канал | Ссылка |
|-------|--------|
| **Telegram** | [@cryptomoonday23](https://t.me/cryptomoonday23) |
| **Discord** | cryptomoonday |
| **GitHub** | [@cryptomoonday](https://github.com/cryptomoonday) |
| **Polymarket** | [@moond](https://polymarket.com/@moond) |

Публичный live-аккаунт:

**https://polymarket.com/@moond**

![Contact CTA](doc/contact-cta.png)

---

## Живое доказательство

Автоматические циклы buy → redeem и активность портфеля с [@moond](https://polymarket.com/@moond). Тот же settlement-loop работает для event-рынков любого типа: политика, спорт, погода, крипто и дальше.

![@moond profile overview](doc/moond-profile.png)

### Мультирыночная активность buy → redeem

Один и тот же settlement-паттерн по **crypto, geopolitics и sports**: **купить outcome shares → redeem после резолюции**. Примеры live-активности:

| Рынок | Категория | Buy | Redeem |
|-------|-----------|-----|--------|
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

> **Паттерн:** каждая пара показывает **вход в outcome shares** и **redeem после резолюции** (обычно обратно в USDC по **$1.00** за выигрышный share через CTF). Категории разные — цикл один.

### Скриншоты профиля и активности

![Polymarket profile — past day profit/loss and recent trades](doc/daily-pnl.png)

![Смешанные позиции](doc/positions-mixed.png)

![История сделок](doc/trade-history.png)

### Галерея: капитал, merge и rewards

Скриншоты полного денежного цикла Polymarket, который поддерживает бот-стек — **deposit / withdraw**, **merge**, **liquidity & holding rewards**, **maker / taker rebates**.

| Действие | Файл |
|----------|------|
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

## Почему мультирыночный арбитраж Polymarket важен в 2026

Polymarket — это уже не «только crypto Up/Down». Объём и неэффективности видны в:

- **Выборах и политике** — nested рынки создают logical constraints
- **Спорте** — moneyline vs spread/combinatorial во время live
- **Погоде** — model-traders vs casual retail odds
- **Макро и бизнесе** — календарные релизы и заголовки
- **Крипто** — по-прежнему крупная вертикаль для latency и short-window edges

Исследования и индустриальные обзоры 2025–2026 подчёркивают:

- Крупную историческую добычу из **математического / constraint-арбитража**
- **Multi-outcome bundle** gaps при сумме ask < $1
- В спорте executable combinatorial arb часто кластеризуется в **финальные минуты live**, а depth ограничивает размер
- Чистые gaps сжимаются до секунд; выигрывают **скорость скана + категорийная логика + risk caps**

![Объём по категориям](doc/volume-by-category.png)

---

## Базовые плейбуки стратегий (для всех событий)

### 1. Binary Complement Arbitrage (YES + NO < $1)

Работает на **любом** бинарном событии. Если `ask_YES + ask_NO < 1.00` (после fees/buffer) — купить обе стороны и зафиксировать структурную прибыль.

![Complement arb](doc/diagram-complement-arb.png)

### 2. Multi-Outcome Bundle Arbitrage

Если сумма cheapest asks по всем взаимоисключающим исходам **< $1** — купить полный набор.

### 3. Logical / Nested / Correlation Arbitrage

Связанные рынки должны подчиняться constraints; боты проецируют цены на valid probability set и торгуют нарушения.

![Logical arb](doc/diagram-logical-arb.png)

### 4. Ladder / 101¢ Market Making + Stair Exits

Давать ликвидность или продавать YES+NO с целью **≥ ~$1.01**, затем unwind stair-логикой к резолюции.

### 5. Catalyst / Information Lag

Опросы, травмы, обновления прогнозов, CPI, breaking news — боты соревнуются с толпой в скорости reprice.

### 6. Endcycle / High-Probability Favorite

Близко к settlement покупать фаворитов в зоне **0.95–0.99**.

---

## Стратегии по категориям рынков

### Политика

- Скан nested election / nomination / legislation рынков на **логические нарушения**
- Bundle-arb multi-candidate полей при sum(asks) < $1
- Торговля лагом опросов и новостей
- MM на ликвидных национальных гонках; осторожный снайп тонких штатных книг

![Politics markets](doc/politics-markets.png)

![Politics bot alert](doc/politics-bot-alert.png)

---

### Спорт

- Связки **moneyline ↔ spread / total** (много материалов по NBA-style books)
- Фокус на **поздних live-окнах**
- Сайзинг по **глубине стакана**
- Опциональные endcycle snipes, когда исход почти решён

![Sports combinatorial](doc/sports-combinatorial.png)

![Sports timeline](doc/sports-timeline.png)

---

### Погода

- Сравнение котировок Polymarket с **внешними forecast models**
- Более быстрый reprice на циклах обновления моделей
- Complement/bundle на temperature buckets

![Weather model vs market](doc/weather-model-vs-market.png)

---

### Крипто (поддерживается — но не единственный фокус)

- **Latency / oracle** на коротких Up/Down
- **Complement arb** при сумме ask < $1
- **Endcycle favorite** у закрытия окна
- Maker / ladder на ликвидных crypto event books

![Crypto latency](doc/crypto-latency.png)

---

### Экономика, бизнес и макро

- Вокруг **scheduled prints** (Fed, CPI, jobs)
- Headline lag в earnings / M&A / product markets
- Correlation hedges, когда корзины расходятся

![Macro calendar](doc/macro-calendar.png)

---

### Культура, entertainment и long-tail

- Thin-book complement/bundle gaps
- Fade экстремальных retail overreactions
- Market making при широких спредах и управляемом adverse selection

![Culture spread](doc/culture-spread.png)

---

## Как собирается multi-market arb стек

| Слой | Роль |
|------|------|
| **Universe** | Политика + спорт + погода + крипто + макро + другие теги |
| **Structural** | Complement, multi-outcome bundle, logical constraints |
| **Category overlays** | Sports combinatorial, weather models, crypto latency, politics nesting |
| **Execution** | CLOB limits/FAK, slippage, inventory, stair exits |
| **Settlement** | Auto merge/redeem по всем типам событий |
| **Ops** | Telegram alerts, drawdown breakers, per-category risk budgets |

![Architecture stack](doc/architecture-stack.png)

---

## Почему работать со мной

Проект помогает получить реальные **инструменты и сервисы арбитражных ботов Polymarket** по всему спектру событий:

- Не заперты в crypto-only стратегиях
- Политика, погода, спорт, крипто, макро и др. — **всё доступно**
- Понятные карты стратегий по категориям
- Live-профиль: [@moond](https://polymarket.com/@moond)
- Кастомные сборки, сканеры, execution engines и тюнинг

Telegram: [@cryptomoonday23](https://t.me/cryptomoonday23) · Discord: **cryptomoonday**

![Closing CTA](doc/closing-cta.png)

---

## Риски и дисклеймер

- **Малый край, крупные хвосты** — fees, slippage и один плохой fill съедают много побед
- **Жёсткая конкуренция** — многие structural gaps живут секунды
- **Риск разный по категориям** — спорт ограничен depth; политика несёт model risk; weather-модели ошибаются
- **Прошлое ≠ будущее** — [@moond](https://polymarket.com/@moond) — иллюстрация, не обещание
- **Не финансовый совет** — prediction markets несут существенный риск убытка

---

## Roadmap

- Глубже politics constraint graph + election-season packs
- Улучшения live sports combinatorial engine
- Weather model connector pack
- Cross-category portfolio risk dashboard
- Telegram ops suite
- Cloud deployment automation

---

## SEO Keywords

Polymarket arbitrage bot, инструменты ботов Polymarket, сервисы арбитража Polymarket, politics arbitrage, sports combinatorial arbitrage, weather trading bot, multi-outcome bundle, logical nested arbitrage, complement arbitrage, prediction market bot, арбитражный бот Polymarket, бот для рынков событий

---

## License

ISC License
