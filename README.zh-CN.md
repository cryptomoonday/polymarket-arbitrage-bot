# Polymarket 套利机器人 | Polymarket Arbitrage Bot

**语言 / Language / Язык:** [English](README.md) | 中文 | [Русский](README.ru.md)

**Polymarket 套利机器人（Polymarket arbitrage bot）** 工具与服务，用于在 Polymarket 预测市场上自动交易 — 政治、体育、天气、加密、经济、娱乐等。

本 **Polymarket arbitrage bot** 扫描事件市场中的 YES/NO 与多结果错价，完成定仓、CLOB 执行，并在 Polygon 结算赎回。不局限于加密：同一套 **Polymarket 套利** 栈覆盖各大事件品类。

### 什么是 Polymarket 套利机器人？

**Polymarket arbitrage bot** 是自动捕捉 Polymarket 定价低效的软件 — 例如 YES+NO 卖价之和低于 $1、多结果打包低估、或相关市场违反概率约束。与方向性押注不同，**Polymarket 套利交易机器人** 瞄准结构性优势：互补套利、打包套利、逻辑/嵌套套利、延迟套利与做市类策略。

![Polymarket Arbitrage Bot Banner](doc/banner.png)

**Polymarket 套利机器人实盘主页：** [**@moond on Polymarket**](https://polymarket.com/@moond)

**Telegram：** [@cryptomoonday23](https://t.me/cryptomoonday23) · **Discord：** cryptomoonday · **作者：** [@cryptomoonday](https://github.com/cryptomoonday)

---

## Polymarket 套利机器人覆盖的市场

主流 Polymarket 品类均可接入本 **Polymarket arbitrage bot** 与定制套利服务：

| 类别 | 示例市场 | 典型机器人重点 |
|------|----------|----------------|
| **政治** | 选举、初选、提名、立法、地缘政治 | 嵌套逻辑套利、民调/新闻滞后、多结果打包 |
| **体育** | NBA / NFL / 足球独赢、让分、系列赛、杯赛 | 实时组合套利、独赢↔让分、尾盘狙击 |
| **天气** | 气温阈值、风暴、飓风、降雨 | 模型 vs 市场套利、预报更新后快速重定价 |
| **加密** | 价格阈值、Up/Down 窗口、ETF / 协议事件 | 延迟/预言机滞后、尾盘热门、互补套利 |
| **经济 / 宏观** | 降息、CPI、失业率、GDP | 日历催化剂、跨市场相关对冲 |
| **商业 / 科技** | 财报、产品发布、并购、IPO 赔率 | 新闻速度信息套利、头条后失衡 |
| **文化 / 娱乐** | 颁奖、票房、热点事件 | 薄盘套利、散户过度反应、做市价差 |
| **世界 / 其他** | 冲突时间线、科学、定制事件合约 | 约束套利、结算规则优势、长周期做市 |

![我们覆盖的市场](doc/markets-grid.png)

---

## Polymarket 套利机器人工具与服务

- **现成 Polymarket arbitrage bot 模块**（二元 + 多结果）
- **定制 Polymarket 套利策略**（政治、体育直播、天气量化、加密短窗等）
- **多市场 Polymarket 套利扫描器**（YES+NO / 打包 / 逻辑缺口）
- **执行 + 风控层** — 滑点上限、库存限制、自动赎回
- **监控与提醒**（Telegram）：成交、跳过、回撤、结算
- **咨询**：Polymarket 套利机器人架构、VPS/RPC、钱包、策略选型

![服务流程](doc/services-pipeline.png)

需要单品类或全市场 **Polymarket arbitrage bot**？Telegram：[@cryptomoonday23](https://t.me/cryptomoonday23)，或 Discord：**cryptomoonday**。

---

## Polymarket 套利机器人功能

- 面向事件市场的生产级 **Polymarket arbitrage bot**（政治、体育、天气、加密等）
- 核心 **Polymarket 套利** 优势：互补、多结果打包、逻辑/嵌套、做市、催化剂滞后、尾盘热门
- 实时 CLOB 监控 + Polygon 自动买入 → 合并/赎回
- 可配置宇宙：slug、标签或整类市场
- 运行中的 Polymarket 套利机器人实盘证明
- 按品类映射各 **Polymarket 套利** 方法的策略手册

---

## Polymarket 套利机器人策略

| # | 策略 | 更适合 | 典型优势 |
|---|------|--------|----------|
| 1 | **二元互补套利** | 所有二元市场 | 合并卖价 < $1 时买 YES+NO |
| 2 | **多结果打包套利** | 选举、奖项、多候选 | 全结果集合价 < $1 |
| 3 | **逻辑 / 嵌套套利** | 政治、地缘 | 相关市场违反概率约束 |
| 4 | **体育组合套利** | NBA/NFL 独赢+让分 | 直播中跨合约错价 |
| 5 | **天气模型套利** | 气温 / 风暴市场 | 外部预报模型 vs Polymarket 赔率 |
| 6 | **加密延迟 / 预言机套利** | 短周期 Up/Down | 现货先动、市场后跟 |
| 7 | **尾盘 / 热门研磨** | 晚期政治、尾盘体育、加密窗口 | 结算前买入高概率热门 |
| 8 | **阶梯 / 101¢ 做市** | 流动性好的事件盘 | 吃价差 / 配对卖出 > $1 |
| 9 | **阶梯出场** | 双边库存策略 | 结算前流动性感知平仓 |
| 10 | **催化剂 / 新闻滞后套利** | 政治、宏观、商业 | 在人群完成重定价前交易 |
| 11 | **失衡套利** | 薄盘文化 / 小众事件 | 买入暂时便宜的一侧 |
| 12 | **跨平台 / 相关对冲** | 政治+宏观+加密集群 | 相关事件作为篮子交易 |

![策略目录](doc/strategy-catalog.png)

---

## 联系 — Polymarket 套利机器人

我提供覆盖多品类的 **Polymarket arbitrage bot** 工具与服务。政治扫描、体育直播组合引擎、天气模型叠加、加密短窗模块，或完整多品类栈 — 都可以设计、交付与调优。

| 渠道 | 链接 |
|------|------|
| **Telegram** | [@cryptomoonday23](https://t.me/cryptomoonday23) |
| **Discord** | cryptomoonday |
| **GitHub** | [@cryptomoonday](https://github.com/cryptomoonday) |
| **Polymarket** | [@moond](https://polymarket.com/@moond) |

公开实盘账户：

**https://polymarket.com/@moond**

![联系 CTA](doc/contact-cta.png)

---

## 实盘证明 — Polymarket 套利机器人

来自 [@moond](https://polymarket.com/@moond) 的 **Polymarket arbitrage bot** 自动买入 → 赎回与组合活动。同一结算闭环适用于各类事件市场：政治、体育、天气、加密等。

![@moond 主页概览](doc/moond-profile.png)

### 多市场买入 → 赎回活动

同一结算模式覆盖 **加密、地缘政治、体育**：**买入结果份额 → 结算赎回**。实盘活动示例：

| 市场 | 品类 | 买入 | 赎回 |
|------|------|------|------|
| BTC dip | 加密 | `btc-dip-buy.png` | `btc-dip-redeem.png` |
| China–Philippines | 地缘政治 | `china_philippines_buy.png` | `china_philippines_redeem.png` |
| Goalkeeper | 体育 | `goalkeeper-buy.png` | `goalkeeper-redeem.png` |
| Mbappé | 体育 | `Mbappe-buy.png` | `Mbappe-redeem.png` |

#### 加密 — BTC dip

<table>
<tr>
<td width="50%" valign="top">

**买入**

![BTC dip — buy](doc/btc-dip-buy.png)

</td>
<td width="50%" valign="top">

**赎回**

![BTC dip — redeem](doc/btc-dip-redeem.png)

</td>
</tr>
</table>

#### 地缘政治 — China–Philippines

<table>
<tr>
<td width="50%" valign="top">

**买入**

![China–Philippines — buy](doc/china_philippines_buy.png)

</td>
<td width="50%" valign="top">

**赎回**

![China–Philippines — redeem](doc/china_philippines_redeem.png)

</td>
</tr>
</table>

#### 体育 — Goalkeeper

<table>
<tr>
<td width="50%" valign="top">

**买入**

![Goalkeeper — buy](doc/goalkeeper-buy.png)

</td>
<td width="50%" valign="top">

**赎回**

![Goalkeeper — redeem](doc/goalkeeper-redeem.png)

</td>
</tr>
</table>

#### 体育 — Mbappé

<table>
<tr>
<td width="50%" valign="top">

**买入**

![Mbappé — buy](doc/Mbappe-buy.png)

</td>
<td width="50%" valign="top">

**赎回**

![Mbappé — redeem](doc/Mbappe-redeem.png)

</td>
</tr>
</table>

> **模式：** 每组展示 **买入结果份额** 与 **结算后赎回**（获胜份额通常经 CTF 按 **$1.00** 换回 USDC）。品类不同，闭环相同。

### 主页与活动截图

![Polymarket profile — past day profit/loss and recent trades](doc/daily-pnl.png)

![混合品类持仓](doc/positions-mixed.png)

![跨事件交易历史](doc/trade-history.png)

### 资金流、合并与奖励图库

机器人栈支持的完整 Polymarket 资金闭环截图 — **充值 / 提现**、**合并 (merge)**、**流动性与持仓奖励**、**maker / taker 返佣**。

| 操作 | 文件 |
|------|------|
| **Deposit（充值）** | `doc/deposit.png` |
| **Withdraw（提现）** | `doc/withdraw.png` |
| **Merge（合并）** | `doc/merge.png` |
| **Liquidity rewards** | `doc/liquidity-rewards.png` |
| **Holding rewards** | `doc/holding-rewards.png` |
| **Maker rebate** | `doc/maker-rebate.png` |
| **Taker rebate** | `doc/taker-rebate.png` |

#### 充值与提现

<table>
<tr>
<td width="50%" valign="top">

**Deposit（充值）**

![Deposit](doc/deposit.png)

</td>
<td width="50%" valign="top">

**Withdraw（提现）**

![Withdraw](doc/withdraw.png)

</td>
</tr>
</table>

#### 合并（Merge）

![Merge](doc/merge.png)

#### 流动性奖励与持仓奖励

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

#### Maker 返佣与 Taker 返佣

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

## 为什么 2026 年需要 Polymarket 套利机器人

Polymarket 已不只是「加密 Up/Down」。成交与低效出现在：

- **选举与政治** — 嵌套州/全国市场产生逻辑约束
- **体育** — 独赢 vs 让分/组合盘在直播中错价
- **天气** — 模型交易者 vs 休闲散户赔率
- **宏观与商业** — 日历数据与头条驱动脉冲行情
- **加密** — 仍是延迟与短窗优势的重要垂直领域

2025–2026 研究与行业文章反复强调：

- 通过对相关条件建模，可从 **数学/约束套利** 中大规模提取
- **多结果打包** 在卖价之和 < $1 时出现缺口
- 体育上可执行组合套利常集中在 **比赛最后几分钟**，深度是规模瓶颈
- 纯缺口压缩到秒级；机器人胜在 **扫描速度 + 品类逻辑 + 风控上限**

![按品类成交量](doc/volume-by-category.png)

---

## Polymarket 套利机器人策略手册

### 1. 二元互补套利（YES + NO < $1）

适用于 **任意** 二元事件。若 `ask_YES + ask_NO < 1.00`（计入费用/缓冲后），买入双边并在结算锁定结构性利润。

![互补套利示意](doc/diagram-complement-arb.png)

### 2. 多结果打包套利

多候选/多队/多区间市场中，若所有互斥结果最便宜卖价之和 **低于 $1**，买入全套。

### 3. 逻辑 / 嵌套 / 相关套利

相关市场必须服从约束；机器人将价格投影到有效概率集合并对违规交易。

![逻辑套利图](doc/diagram-logical-arb.png)

### 4. 阶梯 / 101¢ 做市 + 阶梯出场

提供流动性或按合计 **≥ ~$1.01** 卖出 YES+NO，结算前用阶梯逻辑平仓。

### 5. 催化剂 / 信息滞后

民调、伤病、预报更新、CPI、突发新闻到来时，机器人与人群重定价赛跑。

### 6. 尾盘 / 高概率热门

接近结算时在 **0.95–0.99** 区间买入热门（晚期选举、垃圾时间体育、已锁定天气、加密短窗等）。

---

## 按品类的 Polymarket 套利策略

### 政治

- 扫描嵌套选举/提名/立法市场的 **逻辑冲突**
- 多候选打包套利（sum(asks) < $1）
- 交易 **民调与新闻滞后**（可选 AI 公允赔率）
- 在流动全国盘做市；对薄州级盘谨慎狙击

![政治市场](doc/politics-markets.png)

![政治机器人告警](doc/politics-bot-alert.png)

---

### 体育

- 监控 **独赢 ↔ 让分/总分** 关系做组合套利（NBA 类盘口文献较多）
- 聚焦 **直播尾盘** 赔率剧烈波动时的缺口
- 按 **盘口深度** 定仓 — 体育套利常受流动性限制
- 比赛结果接近确定时可选尾盘狙击

![体育组合套利](doc/sports-combinatorial.png)

![体育套利时间线](doc/sports-timeline.png)

---

### 天气

- 将 Polymarket 天气赔率与 **外部预报模型** 对比
- 在模型更新周期上比休闲玩家更快重定价
- 对气温区间市场做互补/打包套利

![天气模型 vs 市场](doc/weather-model-vs-market.png)

---

### 加密（仍支持 — 但不是唯一重点）

- 短 Up/Down 窗口的 **延迟 / 预言机** 玩法
- YES+NO 暂时和 < $1 的 **互补套利**
- 窗口末 **尾盘热门**
- 流动加密事件盘上的做市 / 阶梯模块

![加密延迟套利](doc/crypto-latency.png)

---

### 经济、商业与宏观

- 围绕 **预定数据**（美联储、CPI、非农）布局与短线
- 财报 / 并购 / 产品市场的头条滞后交易
- 利率、风险资产与政治赔率篮子发散时的相关对冲

![宏观日历市场](doc/macro-calendar.png)

---

### 文化、娱乐与长尾事件

- 寻找 **薄盘互补/打包** 缺口
- 淡化病毒新闻后的极端散户反应
- 在价差宽、逆向选择可控处做市

![文化市场价差](doc/culture-spread.png)

---

## Polymarket 套利机器人技术栈如何组合

| 层级 | 作用 |
|------|------|
| **宇宙** | 政治 + 体育 + 天气 + 加密 + 宏观 + 其他标签 |
| **结构** | 互补、多结果打包、逻辑约束 |
| **品类叠加** | 体育组合、天气模型、加密延迟、政治嵌套 |
| **执行** | CLOB 限价/FAK、滑点、库存、阶梯出场 |
| **结算** | 跨事件类型自动合并/赎回 |
| **运维** | Telegram 提醒、回撤熔断、分品类风险预算 |

![架构栈](doc/architecture-stack.png)

---

## 为什么选择这套 Polymarket 套利机器人

本项目帮助交易者与运营方获得真正的 **Polymarket arbitrage bot** — 工具、策略与服务，覆盖全事件光谱：

- 首先定位为 **Polymarket 套利机器人**，而非通用玩具脚本
- 政治、天气、体育、加密、宏观等 — **全部可用于 Polymarket 套利**
- 按品类清晰的策略地图，明确你买的是哪种 **Polymarket 套利** 方法
- 实盘主页：[@moond](https://polymarket.com/@moond)
- 定制 Polymarket arbitrage bot 构建、扫描器、执行引擎与持续调优

Telegram：[@cryptomoonday23](https://t.me/cryptomoonday23) · Discord：**cryptomoonday**

![收尾 CTA](doc/closing-cta.png)

---

## 风险与免责声明

- **优势小、尾部大** — 费用、滑点与一次坏成交可抹掉多次盈利
- **竞争激烈** — 许多结构性缺口仅持续数秒
- **品类风险不同** — 体育深度限制规模；政治模型风险真实；天气模型可能出错
- **过往业绩不代表未来** — [@moond](https://polymarket.com/@moond) 仅作示意，非承诺
- **非投资建议** — 预测市场存在重大亏损风险

---

## 路线图

- 更深的政治约束图 + 选举季策略包
- 直播体育组合引擎增强
- 天气模型连接包
- 跨品类组合风险仪表盘
- Telegram 运维套件
- 云部署自动化

---

## SEO 关键词

**主关键词：** Polymarket 套利机器人, Polymarket arbitrage bot, Polymarket 套利, Polymarket arbitrage trading bot

**次关键词：** Polymarket 交易机器人, Polymarket 机器人, 预测市场套利机器人, Polymarket CLOB 套利, 自动 Polymarket 套利

**长尾 / 策略：** 互补套利 Polymarket, YES NO 套利机器人, 多结果打包套利, 逻辑嵌套套利 Polymarket, 体育组合套利 Polymarket, 政治套利机器人 Polymarket, 天气套利 Polymarket, 延迟预言机套利 Polymarket, Polymarket 做市机器人, Polymarket 尾盘狙击, 选举套利机器人 Polymarket, NBA Polymarket 套利

**服务：** Polymarket 套利机器人工具, Polymarket 套利机器人服务, 定制 Polymarket arbitrage bot, 雇佣 Polymarket 套利机器人开发

---

## 许可证

ISC License
