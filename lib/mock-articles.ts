import type { Article } from "@/types";

export const mockArticles: Article[] = [
  {
    slug: "bitcoin-hits-new-all-time-high-amid-etf-inflows",
    title: "Bitcoin hits new all-time high amid record ETF inflows",
    excerpt:
      "Bitcoin surged past previous records as institutional inflows through spot ETF products reached $1.2B in a single trading day, signaling broad market confidence.",
    content: `Bitcoin reached a new all-time high today as institutional demand through spot Bitcoin ETF products surged to unprecedented levels. Data from multiple custodians shows inflows of $1.2B in a single trading session.

## What the data shows

On-chain analytics from Glassnode indicate that long-term holders are maintaining their positions while short-term speculation drives price discovery. The MVRV ratio remains within historically healthy ranges, suggesting the move is structurally sound.

Key metrics:
- Spot ETF inflows: $1.2B (24h)
- Long-term holder supply: 74.2% of circulating supply
- Exchange outflows: -42,000 BTC (7-day net)

## Expert reactions

"This is the most structurally clean ATH we've seen in this cycle," said one on-chain analyst. "Inflows are real, leverage is moderate, and whale accumulation is confirmed."

## What this means for BTC

The confluence of institutional demand, reduced exchange supply, and healthy on-chain metrics creates a favorable backdrop for continued price appreciation. However, traders should monitor derivatives funding rates for signs of overleveraged speculation.

## Bottom line

Bitcoin's new ATH reflects genuine institutional adoption rather than speculative excess. The data supports a constructive medium-term outlook.`,
    category: "bitcoin-news",
    categoryLabel: "Bitcoin News",
    author: "Alex Carter",
    authorBio: "Senior Bitcoin analyst with 8 years covering digital asset markets.",
    date: "2026-06-01",
    readTime: 5,
    imageUrl: "https://picsum.photos/seed/btc1/1200/675",
    isBreaking: true,
    tags: ["Bitcoin", "ATH", "ETF", "Institutional"],
  },
  {
    slug: "bitcoin-etf-approval-sec-landmark-decision",
    title: "SEC approves three new spot Bitcoin ETFs in landmark decision",
    excerpt:
      "The Securities and Exchange Commission has approved three additional spot Bitcoin ETF applications, expanding investor access to regulated Bitcoin exposure.",
    content: `The SEC approved three new spot Bitcoin ETF applications in a decision that analysts are calling a turning point for institutional Bitcoin adoption in the United States.

## The approved products

The three newly approved products represent $2.4B in combined day-one inflows, according to preliminary custody data. Each product uses a different custodial structure, providing investors with diversified counterparty options.

## Market reaction

Bitcoin traded at $97,800 on Coinbase at 14:00 UTC, up 6.2% on the news. Options markets showed elevated activity with the 30-day implied volatility rising to 68%.

## Regulatory context

The approvals follow a series of court rulings that constrained the SEC's ability to deny spot Bitcoin ETF applications on policy grounds alone. The agency's approval letter notes it "does not endorse Bitcoin as an investment."

## Bottom line

More regulated Bitcoin investment vehicles reduce friction for institutional allocators who require compliance-friendly products. This is structurally positive for long-term demand.`,
    category: "bitcoin-news",
    categoryLabel: "Bitcoin News",
    author: "Morgan Lee",
    authorBio: "Regulatory reporter covering digital asset policy in Washington.",
    date: "2026-05-30",
    readTime: 4,
    imageUrl: "https://picsum.photos/seed/btc2/1200/675",
    tags: ["Bitcoin", "ETF", "SEC", "Regulation"],
  },
  {
    slug: "lightning-network-capacity-reaches-record-high",
    title: "Lightning Network capacity reaches record high as adoption grows",
    excerpt:
      "The Bitcoin Lightning Network hit a new capacity record, with over 6,000 BTC locked across 70,000 channels as merchant adoption accelerates globally.",
    content: `The Bitcoin Lightning Network has reached a new capacity milestone, with on-chain data confirming more than 6,000 BTC locked across approximately 70,000 payment channels.

## Growth drivers

Merchant adoption has been the primary driver of the capacity increase. Point-of-sale integrations across Latin America and Southeast Asia account for roughly 40% of new channel openings in Q2 2026.

## Technical improvements

Recent protocol upgrades have reduced routing failure rates and improved payment reliability for amounts above 0.1 BTC — a long-standing limitation that constrained enterprise use cases.

## Bottom line

Lightning adoption is tracking the growth pattern of early internet payment infrastructure. The network is moving from early-adopter novelty to practical payment rail.`,
    category: "bitcoin-news",
    categoryLabel: "Bitcoin News",
    author: "Jamie Walsh",
    authorBio: "Protocol researcher specializing in Bitcoin Layer 2 solutions.",
    date: "2026-05-28",
    readTime: 3,
    imageUrl: "https://picsum.photos/seed/btc3/1200/675",
    tags: ["Lightning Network", "Bitcoin", "L2"],
  },
  {
    slug: "ethereum-merge-aftermath-staking-analysis",
    title: "Ethereum staking yields compress as validator count hits 1 million",
    excerpt:
      "The number of active Ethereum validators has crossed 1 million for the first time, compressing solo staking yields to 3.2% annually as network security reaches new highs.",
    content: `Ethereum's validator count crossed 1 million for the first time, reflecting the network's transition to a mature proof-of-stake system with broad participation.

## Yield compression

The increase in validators has compressed staking yields from a peak of 5.8% to approximately 3.2% annually. This mirrors the historical pattern of yield compression in maturing financial markets.

## Security implications

A validator count of 1 million makes the cost of a theoretical 51% attack prohibitively expensive — estimated at over $60B in ETH acquisition cost alone.

## Bottom line

Ethereum's staking market is maturing. Lower yields reflect increased network security and the normalization of ETH as a productive asset.`,
    category: "altcoin-news",
    categoryLabel: "Altcoin News",
    author: "Sam Rivera",
    authorBio: "Ethereum researcher and protocol analyst.",
    date: "2026-05-29",
    readTime: 4,
    imageUrl: "https://picsum.photos/seed/eth1/1200/675",
    tags: ["Ethereum", "Staking", "PoS"],
  },
  {
    slug: "solana-nft-volume-surges-q2",
    title: "Solana NFT volume surges 340% in Q2 driven by gaming assets",
    excerpt:
      "Solana's NFT marketplace volumes climbed 340% quarter-over-quarter in Q2 2026, with gaming-related digital assets accounting for 62% of all transactions.",
    content: `Solana's NFT ecosystem experienced a significant resurgence in Q2 2026, with total marketplace volume reaching $840M — a 340% increase from Q1.

## Gaming as the growth driver

Gaming-related NFTs accounted for 62% of transactions, reflecting the integration of Solana-based assets into multiple mobile and browser-based games with combined user bases exceeding 5 million.

## Market structure

Unlike the 2021 NFT boom, current trading patterns show lower concentration at the top — the top 10 collections account for 38% of volume, compared to 71% in the prior cycle.

## Bottom line

The gaming use case provides sustainable transaction demand for Solana NFTs beyond speculative trading. This is a structurally more durable growth driver.`,
    category: "altcoin-news",
    categoryLabel: "Altcoin News",
    author: "Taylor Kim",
    authorBio: "Digital asset market analyst covering NFT and gaming ecosystems.",
    date: "2026-05-27",
    readTime: 3,
    imageUrl: "https://picsum.photos/seed/sol1/1200/675",
    tags: ["Solana", "NFT", "Gaming"],
  },
  {
    slug: "bitcoin-mining-difficulty-record-hashrate",
    title: "Bitcoin mining difficulty hits record as global hashrate tops 1 ZH/s",
    excerpt:
      "The Bitcoin network's total hashrate exceeded 1 zettahash per second for the first time, triggering a record difficulty adjustment of +8.4%.",
    content: `Bitcoin's proof-of-work security has reached an unprecedented milestone, with the network's total hashrate crossing 1 ZH/s (zettahash per second) for the first time in history.

## What this means

The milestone triggered a difficulty adjustment of +8.4% — one of the largest single adjustments on record. The next adjustment is estimated in approximately 14 days at current hashrate levels.

## Geographic distribution

North America accounts for approximately 38% of global hashrate, followed by Central Asia at 24% and the Nordic countries at 16%. The distribution has become notably more geographically diverse following regulatory actions in previous years.

## Miner economics

At current BTC prices and average energy costs of $0.065/kWh, the average break-even cost for industrial miners using Antminer S21 Pro hardware is approximately $68,400 per BTC.

## Bottom line

Record hashrate is the most objective measure of miner confidence in Bitcoin's long-term value. The 1 ZH/s milestone reflects sustained capital investment in network security.`,
    category: "mining",
    categoryLabel: "Mining",
    author: "Chris Blake",
    authorBio: "Mining industry reporter covering hardware, energy, and miner economics.",
    date: "2026-05-26",
    readTime: 5,
    imageUrl: "https://picsum.photos/seed/mining1/1200/675",
    tags: ["Mining", "Hashrate", "Difficulty"],
  },
  {
    slug: "asic-manufacturer-launches-next-gen-miners",
    title: "Leading ASIC manufacturer launches 5nm Bitcoin mining hardware",
    excerpt:
      "Bitmain has unveiled the Antminer S25 Ultra, a 5nm ASIC delivering 420 TH/s at 20 J/TH efficiency — a 35% improvement over the previous generation.",
    content: `Bitmain announced the Antminer S25 Ultra, its first 5nm Bitcoin mining hardware, offering a significant efficiency improvement that could reshape fleet economics for industrial operators.

## Technical specifications

- Hashrate: 420 TH/s
- Power consumption: 8.4 kW
- Efficiency: 20 J/TH
- Weight: 14.8 kg
- Shipping: Q3 2026

## Economic impact

At a network difficulty of 120T and BTC price of $95,000, the S25 Ultra generates approximately $28/day in revenue at $0.06/kWh energy cost, compared to $20/day for the S21 Pro.

## Fleet upgrade economics

For operators with existing S19 series hardware, the payback period on S25 Ultra investment is estimated at 14–18 months depending on power cost.

## Bottom line

5nm efficiency gains continue the historical trend of hardware improvement that drives down the long-run cost of securing the Bitcoin network.`,
    category: "mining",
    categoryLabel: "Mining",
    author: "Chris Blake",
    authorBio: "Mining industry reporter covering hardware, energy, and miner economics.",
    date: "2026-05-24",
    readTime: 4,
    imageUrl: "https://picsum.photos/seed/mining2/1200/675",
    tags: ["Mining", "ASIC", "Bitmain", "Hardware"],
  },
  {
    slug: "bitcoin-2026-conference-nashville-recap",
    title: "Bitcoin 2026 Nashville: Key announcements and market impact",
    excerpt:
      "The annual Bitcoin Conference in Nashville attracted 35,000 attendees and produced several market-moving announcements including a major corporate treasury disclosure.",
    content: `Bitcoin 2026 in Nashville concluded with record attendance and a series of announcements that moved markets over the following 48 hours.

## Major announcements

**Corporate treasury:** A Fortune 500 technology company disclosed a $500M Bitcoin treasury allocation, the largest single corporate purchase since MicroStrategy's 2020 strategy.

**Protocol development:** The Bitcoin Core development team outlined a roadmap for the next soft fork, focusing on improvements to script capabilities without changing the consensus rules governing supply.

**ETF milestones:** Multiple asset managers reported their spot Bitcoin ETF products now collectively hold more than 500,000 BTC in custody.

## Market reaction

Bitcoin rallied 8.3% during conference week, though half the gain retraced in the days following as the event premium unwound.

## Bottom line

Nashville confirmed that institutional adoption is accelerating and that Bitcoin's development community remains focused on disciplined, security-first protocol evolution.`,
    category: "blockchain-events",
    categoryLabel: "Blockchain Events",
    author: "Dana West",
    authorBio: "Event correspondent covering major blockchain and Bitcoin industry conferences.",
    date: "2026-05-23",
    readTime: 6,
    imageUrl: "https://picsum.photos/seed/event1/1200/675",
    tags: ["Conference", "Bitcoin 2026", "Nashville", "Events"],
  },
  {
    slug: "consensus-2026-highlights",
    title: "Consensus 2026: DeFi regulation and institutional infrastructure dominate agenda",
    excerpt:
      "Consensus 2026 in Austin focused heavily on regulatory frameworks for DeFi and the institutional infrastructure layer being built across Bitcoin and Ethereum ecosystems.",
    content: `Consensus 2026 in Austin brought together regulators, founders, and institutional investors for three days of debate on the future of digital asset markets.

## Regulatory framework discussions

The most attended sessions focused on proposed DeFi regulatory frameworks in the US and EU, with particular attention to the tension between decentralization claims and compliance obligations.

## Institutional infrastructure

Multiple enterprise-grade custody, settlement, and prime brokerage providers announced products specifically targeting asset managers seeking compliant Bitcoin exposure.

## Notable absence

Several DeFi protocols declined to send representatives following legal advice, reflecting ongoing regulatory uncertainty in the US market.

## Bottom line

Consensus 2026 confirmed that institutional infrastructure is maturing faster than regulatory clarity. Compliance-first builders have a window to establish market position.`,
    category: "blockchain-events",
    categoryLabel: "Blockchain Events",
    author: "Dana West",
    authorBio: "Event correspondent covering major blockchain and Bitcoin industry conferences.",
    date: "2026-05-20",
    readTime: 4,
    imageUrl: "https://picsum.photos/seed/event2/1200/675",
    tags: ["Consensus", "DeFi", "Regulation", "Events"],
  },
  {
    slug: "lightning-labs-raises-funding-round",
    title: "Lightning Labs raises $70M Series C to scale Bitcoin payment infrastructure",
    excerpt:
      "Lightning Labs closed a $70M Series C funding round led by a16z crypto, valuing the company at $850M and funding expansion of its Taproot Assets protocol.",
    content: `Lightning Labs announced a $70M Series C funding round led by Andreessen Horowitz's crypto fund, with participation from several existing institutional investors.

## Use of funds

The company plans to allocate the capital to:
- Taproot Assets protocol development (40%)
- Enterprise sales and go-to-market expansion (30%)
- Engineering headcount growth (20%)
- Operational reserves (10%)

## Taproot Assets context

Taproot Assets enables the issuance and transfer of assets — including stablecoins — on the Bitcoin Lightning Network, positioning Bitcoin rails as infrastructure for payments beyond BTC itself.

## Valuation context

The $850M valuation represents a 2.4x increase from the Series B round in 2024, reflecting sustained revenue growth from API licensing and enterprise deployments.

## Bottom line

Institutional capital continues to flow into Bitcoin payment infrastructure. Lightning Labs' funding signals conviction in the Lightning Network's commercial potential.`,
    category: "top-projects",
    categoryLabel: "Top Projects",
    author: "Riley Chen",
    authorBio: "Venture and startup reporter covering Bitcoin ecosystem companies.",
    date: "2026-05-22",
    readTime: 4,
    imageUrl: "https://picsum.photos/seed/project1/1200/675",
    tags: ["Lightning Labs", "Funding", "Lightning Network", "Taproot"],
  },
  {
    slug: "stacks-bitcoin-defi-tvl-growth",
    title: "Stacks Bitcoin DeFi TVL crosses $2B as sBTC adoption accelerates",
    excerpt:
      "Total value locked in Stacks-based DeFi protocols surpassed $2B following the successful sBTC mainnet launch, bringing decentralized finance to Bitcoin.",
    content: `The Stacks ecosystem recorded a significant milestone as total value locked (TVL) in Stacks-based DeFi protocols exceeded $2B — driven primarily by sBTC, the protocol's 1:1 Bitcoin-backed asset.

## sBTC adoption

sBTC has attracted over 18,000 BTC in deposits since mainnet launch 6 months ago, representing approximately 0.085% of the total Bitcoin supply deployed into Bitcoin-native DeFi.

## Protocol breakdown

- Lending protocols: $820M TVL
- DEX liquidity: $640M TVL
- Yield vaults: $380M TVL
- Other: $160M TVL

## Competitive positioning

Stacks differentiates from Ethereum-based wrapped BTC products by settling transactions on Bitcoin directly, without relying on a third-party bridge.

## Bottom line

sBTC and Stacks are building the clearest case for Bitcoin-native DeFi. The $2B TVL milestone establishes the ecosystem as a legitimate competitor to multi-chain alternatives.`,
    category: "top-projects",
    categoryLabel: "Top Projects",
    author: "Riley Chen",
    authorBio: "Venture and startup reporter covering Bitcoin ecosystem companies.",
    date: "2026-05-19",
    readTime: 4,
    imageUrl: "https://picsum.photos/seed/project2/1200/675",
    tags: ["Stacks", "sBTC", "DeFi", "Bitcoin"],
  },
  {
    slug: "bitcoin-macro-correlation-analysis",
    title: "Bitcoin's 90-day correlation with gold breaks down as crypto-native demand dominates",
    excerpt:
      "A new Glassnode analysis shows Bitcoin's rolling 90-day correlation with gold has dropped to 0.12, the lowest since 2020, as ETF inflows drive crypto-native price discovery.",
    content: `Bitcoin's traditional correlation with gold as an inflation hedge narrative is being challenged by data, according to a new analysis from Glassnode.

## Correlation data

The rolling 90-day correlation coefficient between Bitcoin and gold dropped to 0.12 in May 2026, compared to a peak of 0.68 during the 2022 macro rotation. The breakdown coincides with the growth of spot ETF-driven demand.

## What's driving the divergence

Crypto-native capital flows now represent the majority of price-setting activity. ETF arbitrage desks, on-chain market makers, and algorithmic traders respond to different signals than macro hedge funds that drove the 2022 correlation.

## Implications for portfolio theory

The correlation breakdown complicates the "digital gold" narrative used to justify Bitcoin allocations in traditional portfolios, but strengthens the case for Bitcoin as a standalone, non-correlated asset.

## Bottom line

Bitcoin is increasingly priced on its own fundamentals — network activity, supply dynamics, and institutional flows — rather than as a proxy for macro sentiment.`,
    category: "other",
    categoryLabel: "Other",
    author: "Jordan Price",
    authorBio: "Macro and quantitative analyst covering digital asset markets.",
    date: "2026-05-25",
    readTime: 5,
    imageUrl: "https://picsum.photos/seed/other1/1200/675",
    tags: ["Bitcoin", "Gold", "Macro", "Analysis"],
  },
  {
    slug: "sponsored-bitcoin-custody-platform",
    title: "How enterprise Bitcoin custody is evolving for institutional needs",
    excerpt:
      "As institutional adoption grows, custody solutions are adapting to meet complex requirements around compliance, key management, and insurance.",
    content: `Enterprise Bitcoin custody has evolved significantly since the early days of hardware wallets and DIY multi-signature setups. Today's institutional custodians offer products that rival the sophistication of traditional prime brokerage.

## Key developments in enterprise custody

Modern institutional custody platforms now offer:
- SOC 2 Type II compliance certification
- $500M+ insurance coverage from Lloyd's syndicates
- HSM-based key management with geographic distribution
- Integration with traditional portfolio management systems

## The compliance layer

Regulatory requirements in the US, EU, and Singapore have pushed custodians to build KYC/AML infrastructure that matches traditional financial institutions, enabling pension funds and insurance companies to hold Bitcoin under existing regulatory frameworks.

## Emerging models

Collaborative custody models — where institutional clients retain partial key control — are gaining traction as a middle ground between full self-custody and delegated custody.

## Disclosure

This article was produced in partnership with a leading Bitcoin custody provider. BitcoinInfoNews maintains editorial independence from commercial relationships.`,
    category: "sponsored",
    categoryLabel: "Sponsored",
    author: "BitcoinInfoNews Partner",
    authorBio: "Content produced in partnership with industry participants.",
    date: "2026-05-21",
    readTime: 5,
    imageUrl: "https://picsum.photos/seed/sponsored1/1200/675",
    isSponsored: true,
    tags: ["Custody", "Institutional", "Sponsored"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return mockArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return mockArticles.filter((a) => a.category === category);
}

export function getFeaturedArticles(count = 4): Article[] {
  return mockArticles.slice(0, count);
}

export function getBreakingArticle(): Article | undefined {
  return mockArticles.find((a) => a.isBreaking);
}

export function getRecentArticles(count = 10): Article[] {
  return mockArticles.slice(0, count);
}
