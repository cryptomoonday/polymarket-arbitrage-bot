# Polymarket Trading Bot | Инструменты и сервисы арбитражных ботов Polymarket

**Язык / Language / 语言:** [English](README.md) | [中文](README.zh-CN.md) | Русский

Профессиональные **инструменты и сервисы арбитражных ботов Polymarket** для автоматизированной торговли на **рынках реальных событий** — не только крипто.

Я создаю, внедряю и сопровождаю ботов Polymarket, которые сканируют и торгуют **политику, погоду, спорт, крипто, экономику, развлечения и многое другое**. Если у события есть YES/NO или multi-outcome рынок на Polymarket, его можно подключить к одному арбитражному стеку: найти mispricing → рассчитать риск → исполнить на CLOB → redeem после settlement.

<!-- IMAGE PLACEHOLDER: Широкий hero-баннер. Коллаж рынков (выборы, NBA, ураган, Fed, BTC) + заголовок “Polymarket Arbitrage Bot Tools & Services”. Тёмный, профессиональный стиль. Файл: doc/banner.png -->
![Polymarket Arbitrage Bot Banner](doc/banner.png)

**Живой профиль:** [**@moond on Polymarket**](https://polymarket.com/@moond)

**Telegram:** [@trum3it](https://t.me/trum3it) · **Автор:** [@trum3it](https://github.com/trum3it)

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

<!-- IMAGE PLACEHOLDER: Сетка из 8 карточек категорий. Файл: doc/markets-grid.png -->
<!-- ![Рынки](doc/markets-grid.png) -->

---

## Что я предлагаю (Tools & Services)

- **Готовые арбитражные модули** для binary + multi-outcome рынков Polymarket
- **Кастомные стратегии** под нишу (политика, live-спорт, weather quant, crypto short windows)
- **Мультирыночные сканеры** сотен event-стаканов на YES+NO / bundle / logical gaps
- **Execution + risk** — slippage caps, inventory limits, auto-redeem
- **Мониторинг и алерты** (Telegram): fills, skips, drawdowns, resolution
- **Консалтинг** по архитектуре, VPS/RPC, кошелькам и выбору стратегии

<!-- IMAGE PLACEHOLDER: Схема сервиса: капитал → Scan/Filter/Size/Execute/Redeem → категории. Файл: doc/services-pipeline.png -->
<!-- ![Пайплайн сервисов](doc/services-pipeline.png) -->

Нужен бот для **одной категории** или портфель **по всем вертикалям Polymarket** — пишите в Telegram: [@trum3it](https://t.me/trum3it).

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

<!-- IMAGE PLACEHOLDER: 12 плиток стратегий с тегами категорий. Файл: doc/strategy-catalog.png -->
<!-- ![Каталог стратегий](doc/strategy-catalog.png) -->

---

## Контакты

Я предоставляю **инструменты и сервисы арбитражных ботов Polymarket** по многим типам рынков. Политический сканер, live sports combinatorial engine, weather-model overlay, crypto short-window modules или полный multi-category стек — могу спроектировать, поставить и настроить.

| Канал | Ссылка |
|-------|--------|
| **Telegram** | [@trum3it](https://t.me/trum3it) |
| **GitHub** | [@trum3it](https://github.com/trum3it) |
| **Polymarket** | [@moond](https://polymarket.com/@moond) |

Публичный live-аккаунт:

**https://polymarket.com/@moond**

<!-- IMAGE PLACEHOLDER: CTA карточка контакта — @trum3it + @moond. Файл: doc/contact-cta.png -->
<!-- ![Contact CTA](doc/contact-cta.png) -->

---

## Живое доказательство

Автоматические циклы buy → redeem и активность портфеля с [@moond](https://polymarket.com/@moond). Тот же settlement-loop работает для event-рынков любого типа: политика, спорт, погода, крипто и дальше.

<!-- IMAGE PLACEHOLDER: Полный скрин профиля @moond (PnL + позиции по категориям). Файл: doc/moond-profile.png -->
<!-- ![@moond profile overview](doc/moond-profile.png) -->

### On-chain пример buy → redeem

Реальные транзакции Polygon: **вход в outcome shares → redeem по $1.00 после резолюции**.

<!-- IMAGE PLACEHOLDER: Side-by-side Polygonscan buy + redeem. Файл: doc/onchain-buy-redeem.png -->
![Polymarket Activity](doc/activity.png)

#### Сделка 1 — 11 июня 2026 · вход ~$0.99

| Шаг | Время (UTC) | Детали | Polygonscan |
|-----|-------------|--------|-------------|
| **Buy** | 09:30:01 | ~**$67.32** USDC → **68 shares** @ **~$0.99** | [Смотреть buy](https://polygonscan.com/tx/0x6874a18bcd84c18a6e9d5cffd0a94eb0bdc148089a364370eb9120384bc4e21c) |
| **Redeem** | 09:31:03 | Резолюция → redeem по **~$1.00** | [Смотреть redeem](https://polygonscan.com/tx/0x17e8fbc7ed8d995c44127da034e487733a43f18c6638cdcba9088a519b11ad63) |

**Прибл. валовая прибыль:** ~**$0.68** на ~$67 (~**1%**) до комиссий, за **~62 секунды**.

#### Сделка 2 — 11 июня 2026 · вход ~$0.99

| Шаг | Время (UTC) | Детали | Polygonscan |
|-----|-------------|--------|-------------|
| **Buy** | 08:55:01 | Покупка near-settlement фаворита @ **~$0.98–$0.99** | [Смотреть buy](https://polygonscan.com/tx/0x7fa58be45dc24afbc8bd135fc6a7147fb548e2c00ad2f5b6100fa7510dd58b45) |
| **Redeem** | 08:55:30 | Redeem через **~29с** после покупки | [Смотреть redeem](https://polygonscan.com/tx/0x4edaaa3a6a6d854fe6ec938280ab3cfd34d07f34fcc75c7f4757feccfc9d30dc) |

> **Как читать:** **Buy** → `Polymarket: CTF Exchange V2`. **Redeem** → USDC по **$1.00**. Тот же пайплайн для выборов, матчей, погодных порогов и crypto-событий — меняется только слой сигналов.

### Скриншоты профиля и активности

<!-- IMAGE PLACEHOLDER: Дневной PnL / рост портфеля @moond. Файл: doc/daily_pnl.png -->
![Polymarket profile — past day profit/loss and recent trades](doc/daily_pnl.png)

<!-- IMAGE PLACEHOLDER: Список позиций смешанных категорий. Файл: doc/positions-mixed.png -->
<!-- ![Смешанные позиции](doc/positions-mixed.png) -->

<!-- IMAGE PLACEHOLDER: История сделок по разным event markets. Файл: doc/trade-history.png -->
<!-- ![История сделок](doc/trade-history.png) -->

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

<!-- IMAGE PLACEHOLDER: Объём Polymarket по категориям. Файл: doc/volume-by-category.png -->
<!-- ![Объём по категориям](doc/volume-by-category.png) -->

---

## Базовые плейбуки стратегий (для всех событий)

### 1. Binary Complement Arbitrage (YES + NO < $1)

Работает на **любом** бинарном событии. Если `ask_YES + ask_NO < 1.00` (после fees/buffer) — купить обе стороны и зафиксировать структурную прибыль.

<!-- IMAGE PLACEHOLDER: Диаграмма YES 0.48 + NO 0.50 = 0.98. Файл: doc/diagram-complement-arb.png -->
<!-- ![Complement arb](doc/diagram-complement-arb.png) -->

### 2. Multi-Outcome Bundle Arbitrage

Если сумма cheapest asks по всем взаимоисключающим исходам **< $1** — купить полный набор.

### 3. Logical / Nested / Correlation Arbitrage

Связанные рынки должны подчиняться constraints; боты проецируют цены на valid probability set и торгуют нарушения.

<!-- IMAGE PLACEHOLDER: Граф связанных политических рынков с нарушением constraint. Файл: doc/diagram-logical-arb.png -->
<!-- ![Logical arb](doc/diagram-logical-arb.png) -->

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

<!-- IMAGE PLACEHOLDER: Кластер election-рынков. Файл: doc/politics-markets.png -->
<!-- ![Politics markets](doc/politics-markets.png) -->

<!-- IMAGE PLACEHOLDER: Алерт бота по politics arb. Файл: doc/politics-bot-alert.png -->
<!-- ![Politics bot alert](doc/politics-bot-alert.png) -->

---

### Спорт

- Связки **moneyline ↔ spread / total** (много материалов по NBA-style books)
- Фокус на **поздних live-окнах**
- Сайзинг по **глубине стакана**
- Опциональные endcycle snipes, когда исход почти решён

<!-- IMAGE PLACEHOLDER: Live sports board + подсветка moneyline vs spread. Файл: doc/sports-combinatorial.png -->
<!-- ![Sports combinatorial](doc/sports-combinatorial.png) -->

<!-- IMAGE PLACEHOLDER: Таймлайн tip-off → live → final minutes arb zone. Файл: doc/sports-timeline.png -->
<!-- ![Sports timeline](doc/sports-timeline.png) -->

---

### Погода

- Сравнение котировок Polymarket с **внешними forecast models**
- Более быстрый reprice на циклах обновления моделей
- Complement/bundle на temperature buckets

<!-- IMAGE PLACEHOLDER: Карта модели погоды vs рынок температуры. Файл: doc/weather-model-vs-market.png -->
<!-- ![Weather model vs market](doc/weather-model-vs-market.png) -->

---

### Крипто (поддерживается — но не единственный фокус)

- **Latency / oracle** на коротких Up/Down
- **Complement arb** при сумме ask < $1
- **Endcycle favorite** у закрытия окна
- Maker / ladder на ликвидных crypto event books

<!-- IMAGE PLACEHOLDER: Crypto Up/Down + иллюстрация лага спота. Файл: doc/crypto-latency.png -->
<!-- ![Crypto latency](doc/crypto-latency.png) -->

---

### Экономика, бизнес и макро

- Вокруг **scheduled prints** (Fed, CPI, jobs)
- Headline lag в earnings / M&A / product markets
- Correlation hedges, когда корзины расходятся

<!-- IMAGE PLACEHOLDER: Экономический календарь + рынки Fed/CPI. Файл: doc/macro-calendar.png -->
<!-- ![Macro calendar](doc/macro-calendar.png) -->

---

### Культура, entertainment и long-tail

- Thin-book complement/bundle gaps
- Fade экстремальных retail overreactions
- Market making при широких спредах и управляемом adverse selection

<!-- IMAGE PLACEHOLDER: Awards/entertainment рынок с wide spread. Файл: doc/culture-spread.png -->
<!-- ![Culture spread](doc/culture-spread.png) -->

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

<!-- IMAGE PLACEHOLDER: Архитектурная схема стека. Файл: doc/architecture-stack.png -->
<!-- ![Architecture stack](doc/architecture-stack.png) -->

---

## Почему работать со мной

Проект помогает получить реальные **инструменты и сервисы арбитражных ботов Polymarket** по всему спектру событий:

- Не заперты в crypto-only стратегиях
- Политика, погода, спорт, крипто, макро и др. — **всё доступно**
- Понятные карты стратегий по категориям
- Live-профиль: [@moond](https://polymarket.com/@moond)
- Кастомные сборки, сканеры, execution engines и тюнинг

Telegram: [@trum3it](https://t.me/trum3it)

<!-- IMAGE PLACEHOLDER: Финальный CTA-баннер. Файл: doc/closing-cta.png -->
<!-- ![Closing CTA](doc/closing-cta.png) -->

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
