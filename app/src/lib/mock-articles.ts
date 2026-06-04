import { Article } from './mock-data';

const T = (i: number) => {
  const imgs = [
    '/images/thumbnails/strategic-bitcoin-reserve-bill-drops-1-million-btc-target-adds-20-year-lockup-thumbnail.jpg',
    '/images/thumbnails/vaneck-debuts-spot-bnb-etf-vbnb-on-nasdaq-thumbnail-768x512.jpg',
    '/images/thumbnails/kraken-us-compliant-bitcoin-perpetual-contracts-launch-30-days-thumbnail-768x512.jpg',
    '/images/thumbnails/1280X1280_1779175249LXbBvv3v8j-768x432.png',
    '/images/thumbnails/1280X1280_17792638184yOu83FmUb-768x432.png',
    '/images/thumbnails/us-seizes-1-billion-in-crypto-from-iran-thumbnail-768x512.jpg',
    '/images/thumbnails/vaneck-ranking-xrp-ledger-ahead-jpmorgan-kinexys-corporate-blockchain-comparison-thumbnail-2-768x512.jpg',
    '/images/thumbnails/20260522-175919_1779444420kVIOzuBKeB-768x403.jpg',
    '/images/thumbnails/sui-mainnet-suffers-multiple-disruptions-thumbnail-1-768x512.jpg',
    '/images/thumbnails/cyble-malware-campaign-targeting-180-banking-financial-crypto-apps-thumbnail-768x512.jpg',
    '/images/thumbnails/vaneck-launches-us-spot-bnb-etf-thumbnail-768x512.jpg',
    '/images/thumbnails/vaneck-debuts-us-spot-bnb-etf-thumbnail-768x512.jpg',
    '/images/thumbnails/PR_720p_1774355782kuCznX1THu_1779776140ln7AFoDr7x-768x461.jpg',
  ];
  return imgs[i % imgs.length];
};

const a = (
  id: string,
  slug: string,
  title: string,
  excerpt: string,
  category: string,
  categoryColor: string,
  author: string,
  date: string,
  readTime: string,
  tags: string[],
  imgIdx: number,
): Article => ({
  id,
  slug,
  title,
  excerpt,
  category,
  categoryColor,
  author,
  date,
  readTime,
  thumbnail: T(imgIdx),
  tags,
  content: `<p>${excerpt}</p><p>This is a developing story. Full analysis and in-depth coverage coming shortly. Stay tuned to InfoNews for the latest Bitcoin fundamentals coverage.</p>`,
});

// â”€â”€ BITCOIN NEWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const bitcoinNewsArticles: Article[] = [
  a('bn1','bitcoin-breaks-100k-institutional-demand','Bitcoin Breaks Above $100K As Institutional Demand Accelerates','Spot ETF inflows and corporate treasury allocation push Bitcoin past the six-figure milestone as analyst targets climb higher.','BITCOIN NEWS','#F7931A','InfoNews Desk','Jun 1, 2025','4 min read',['Price','ETF','Institutional'],0),
  a('bn2','spot-btc-etf-inflows-record-1-2b','Spot Bitcoin ETF Inflows Hit Record $1.2B In Single Day','BlackRock and Fidelity lead inflows as pension fund allocations begin filtering through regulated Bitcoin exposure vehicles.','ETF FLOWS','#F7931A','Market Desk','May 30, 2025','5 min read',['ETF','BlackRock','Fidelity'],1),
  a('bn3','microstrategy-adds-10000-btc','MicroStrategy Adds Another 10,000 BTC To Corporate Treasury','The firm continues its aggressive accumulation strategy, now holding over 350,000 BTC on its balance sheet.','INSTITUTIONS','#F7931A','Corporate Desk','May 28, 2025','3 min read',['MicroStrategy','Treasury','Corporate'],2),
  a('bn4','bitcoin-hashrate-800-ehs-all-time-high','Bitcoin Network Hashrate Hits All-Time High Of 800 EH/s','Network security reaches unprecedented levels as next-generation ASIC deployments push computational power to new records.','NETWORK','#00C896','Mining Desk','May 26, 2025','4 min read',['Hashrate','Network','Security'],3),
  a('bn5','blackrock-ibit-50b-aum','BlackRock IBIT Surpasses $50B AUM In Fastest ETF Growth Ever','The iShares Bitcoin Trust sets multiple records for asset accumulation speed, cementing Bitcoin as mainstream investment asset.','ETF FLOWS','#F7931A','InfoNews Desk','May 24, 2025','5 min read',['BlackRock','IBIT','AUM'],4),
  a('bn6','bitcoin-price-structure-q3-breakout','Bitcoin Price Structure Builds For Q3 Breakout According To Analysts','Technical indicators and on-chain metrics converge to paint a constructive picture heading into the second half of 2025.','PRICE ANALYSIS','#FF4D4D','Market Desk','May 22, 2025','6 min read',['Price','Technical','Q3'],5),
  a('bn7','federal-reserve-rate-cuts-bitcoin','Federal Reserve Signals Rate Cuts Could Boost Bitcoin Demand','Fed pivot expectations lift risk assets broadly, with Bitcoin historically showing outsized gains during easing cycles.','MACRO','#3B9EFF','Macro Desk','May 20, 2025','5 min read',['Fed','Macro','Rates'],6),
  a('bn8','el-salvador-bitcoin-reserve-profit','Nation-State Bitcoin Adoption Accelerates As El Salvador Reports Profit','The sovereign Bitcoin treasury posts positive returns, providing a model for other developing nations.','REGULATION','#F7931A','Policy Desk','May 18, 2025','4 min read',['El Salvador','Regulation','Sovereign'],7),
  a('bn9','bitcoin-dominance-58-percent','Bitcoin Dominance Climbs To 58% As Altcoin Season Cools','Capital rotation back into Bitcoin signals maturing market as retail-driven altcoin speculation subsides.','MARKET STRUCTURE','#FFB800','Market Desk','May 16, 2025','3 min read',['Dominance','Market Structure'],8),
  a('bn10','long-term-holders-record-supply','Long-Term Holders Reach Record Proportion Of Total Bitcoin Supply','Diamond hands now control over 70% of circulating supply, creating structural tightness that underpins price floor.','ON-CHAIN','#00C896','On-Chain Desk','May 14, 2025','5 min read',['On-chain','HODLers','Supply'],9),
];

// â”€â”€ ALT COIN NEWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const altcoinNewsArticles: Article[] = [
  a('ac1','vaneck-bnb-etf-nasdaq-launch','VanEck Debuts Spot BNB ETF (VBNB) On Nasdaq','VanEck launches the first US-regulated spot BNB exchange-traded fund, expanding crypto ETF offerings beyond Bitcoin and Ethereum.','ETF LAUNCH','#3B9EFF','InfoNews Desk','Jun 1, 2025','4 min read',['VanEck','BNB','ETF'],10),
  a('ac2','ethereum-protocol-upgrade-zero-disruption','Ethereum Completes Major Protocol Upgrade With Zero Disruption','The Ethereum network successfully implements its latest hard fork, improving transaction throughput and reducing validator overhead.','ETHEREUM','#3B9EFF','Tech Desk','May 30, 2025','5 min read',['Ethereum','Protocol','Upgrade'],11),
  a('ac3','solana-mainnet-disruption-recovery','Solana Mainnet Suffers Brief Disruption, Recovers In Hours','A consensus bug causes a temporary halt in block production on Solana mainnet before validators coordinate a restart within hours.','SOLANA','#9945FF','News Desk','May 28, 2025','3 min read',['Solana','Network','Disruption'],12),
  a('ac4','xrp-ledger-ahead-jpmorgan-kinexys','XRP Ledger Advances Ahead Of JPMorgan Kinexys In Corporate Comparison','A new institutional analysis ranks XRP Ledger above JPMorgan Kinexys for cross-border settlement efficiency.','XRP','#00AAE4','Corporate Desk','May 26, 2025','6 min read',['XRP','JPMorgan','Settlement'],0),
  a('ac5','sui-mainnet-record-daily-transactions','Sui Network Reports Record Daily Transactions After Ecosystem Growth','Sui processes over 50 million daily transactions as DeFi and gaming applications drive unprecedented on-chain activity.','SUI','#4DA2FF','DeFi Desk','May 24, 2025','4 min read',['Sui','DeFi','Gaming'],1),
  a('ac6','cardano-staking-rewards-new-highs','Cardano Staking Rewards Hit New Highs As ADA Price Stabilizes','ADA holders earn record yields through the proof-of-stake system as network participation reaches all-time highs.','CARDANO','#0033AD','Staking Desk','May 22, 2025','4 min read',['Cardano','Staking','ADA'],2),
  a('ac7','avalanche-subnet-institutional','Avalanche Subnet Activity Increases As Institutional Partners Deploy','Major financial institutions begin deploying private Avalanche subnets for compliant tokenized asset management.','AVALANCHE','#E84142','Enterprise Desk','May 20, 2025','5 min read',['Avalanche','Subnet','Institutional'],3),
  a('ac8','chainlink-cross-chain-15-networks','Chainlink Expands Cross-Chain Protocol To 15 New Networks','CCIP integrations accelerate as the cross-chain infrastructure becomes the standard for multi-chain DeFi protocols.','CHAINLINK','#375BD2','DeFi Desk','May 18, 2025','4 min read',['Chainlink','CCIP','DeFi'],4),
  a('ac9','uniswap-v4-record-dex-volume','Uniswap V4 Launch Drives Record DEX Volume Across DeFi Ecosystem','The latest Uniswap version introduces hook-based architecture enabling custom pool logic, driving unprecedented liquidity depth.','DEFI','#FF007A','DeFi Desk','May 16, 2025','5 min read',['Uniswap','DEX','DeFi'],5),
  a('ac10','polkadot-parachain-record-tvl','Polkadot Parachain Auctions Set New Record For Total Locked Value','DOT staked in parachain auctions hits $4B as ecosystem projects compete for premium slots in the relay chain architecture.','POLKADOT','#E6007A','Ecosystem Desk','May 14, 2025','4 min read',['Polkadot','Parachain','TVL'],6),
];

// â”€â”€ MINING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const miningArticles: Article[] = [
  a('mn1','asic-manufacturer-next-gen-3nm-miner','ASIC Manufacturer Launches Next-Gen 3nm Miner With 40% Efficiency Gain','Bitmain and MicroBT race to market with sub-15 J/T machines that promise to reshape the competitive landscape for Bitcoin miners.','HARDWARE','#F7931A','Mining Desk','Jun 1, 2025','5 min read',['ASIC','Hardware','Efficiency'],7),
  a('mn2','bitcoin-mining-difficulty-record-adjustment','Bitcoin Mining Difficulty Hits Record After Largest-Ever Positive Adjustment','Network difficulty climbs 8.3% in a single epoch as new-generation machines come online following a wave of infrastructure deployments.','DIFFICULTY','#FFB800','Mining Desk','May 30, 2025','4 min read',['Difficulty','Hashrate','Network'],8),
  a('mn3','us-miners-dominate-global-hashrate','US Miners Dominate Global Hashrate As Operations Relocate','American mining operations now control over 40% of global Bitcoin hashrate, driven by cheap energy access and regulatory clarity.','HASHRATE','#3B9EFF','Mining Desk','May 28, 2025','5 min read',['US Mining','Hashrate','Geography'],9),
  a('mn4','clean-energy-mining-50-percent','Clean Energy Bitcoin Mining Surpasses 50% Of Total Network','Renewable-powered mining reaches majority status as operators prioritize ESG compliance and lower electricity costs.','ENERGY','#00C896','Energy Desk','May 26, 2025','6 min read',['Clean Energy','ESG','Renewables'],10),
  a('mn5','post-halving-mining-revenue-analysis','Post-Halving Mining Revenue: Who Survived The Squeeze','An in-depth look at which mining operations remained profitable after the April 2024 halving and how they managed the transition.','HALVING','#F7931A','Mining Desk','May 24, 2025','8 min read',['Halving','Revenue','Profitability'],11),
  a('mn6','stratum-v2-adoption-accelerates','Stratum V2 Protocol Adoption Accelerates Among Major Pools','The upgraded mining communication protocol improves miner autonomy and reduces pool centralization risk across the network.','PROTOCOL','#00C896','Tech Desk','May 22, 2025','5 min read',['Stratum V2','Protocol','Decentralization'],12),
  a('mn7','mining-pool-consolidation-centralization','Mining Pool Consolidation Raises Centralization Concerns','Top three mining pools now control over 55% of network hashrate, prompting discussion about long-term decentralization health.','NETWORK','#FF4D4D','Analysis Desk','May 20, 2025','6 min read',['Pool','Centralization','Risk'],0),
  a('mn8','texas-bitcoin-mining-8gw-capacity','Texas Leads US States In Bitcoin Mining Growth With 8GW Capacity','The Lone Star State cements its position as the top mining hub with favorable regulation and abundant wind/solar resources.','ENERGY','#F7931A','Regional Desk','May 18, 2025','4 min read',['Texas','Energy','Capacity'],1),
  a('mn9','marathon-digital-record-hash-deployed','Marathon Digital Reports Record Hash Deployed After Fleet Upgrade','MARA completes its generational fleet refresh, deploying over 50 EH/s of next-generation hardware in Q2 operations.','CORPORATE','#3B9EFF','Corporate Desk','May 16, 2025','4 min read',['Marathon','MARA','Corporate'],2),
  a('mn10','bitcoin-mining-fundamentals-hardware-efficiency','Mining Fundamentals Matter Again As Hardware Efficiency Diverges','Post-halving economics demand that only the most efficient operators survive; a deep dive into the metrics that matter.','ANALYSIS','#FFB800','Mining Desk','May 14, 2025','7 min read',['Fundamentals','Efficiency','Economics'],3),
];

// â”€â”€ BLOCKCHAIN EVENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const blockchainEventArticles: Article[] = [
  a('be1','bitcoin-2025-conference-35000-attendees','Bitcoin 2025 Conference Draws Record 35,000 Attendees To Las Vegas','The annual Bitcoin conference sets new attendance records as institutional representation and mainstream media coverage surge.','CONFERENCE','#F7931A','Events Desk','Jun 1, 2025','3 min read',['Bitcoin 2025','Conference','Networking'],4),
  a('be2','spot-bitcoin-etf-anniversary-one-year','ETF Approval Anniversary Marks Transformational Year For Bitcoin Access','One year after the historic SEC approval, spot Bitcoin ETFs have reshaped institutional participation and price dynamics.','MILESTONE','#3B9EFF','InfoNews Desk','May 30, 2025','5 min read',['ETF','Anniversary','Milestone'],5),
  a('be3','bitcoin-halving-block-mined-3-125','Halving Block Mined: Bitcoin Supply Emission Drops To 3.125 BTC','The fourth Bitcoin halving event occurred at block 840,000, cutting miner rewards in half and marking a historic supply milestone.','HALVING','#FFB800','InfoNews Desk','May 28, 2025','4 min read',['Halving','Block Reward','Supply'],6),
  a('be4','lightning-network-1-billion-satoshis-daily','Lightning Network Reaches 1 Billion Satoshis In Daily Payment Volume','The Bitcoin payment layer processes its highest-ever daily volume as merchant adoption and remittance use cases scale.','LIGHTNING','#00C896','Lightning Desk','May 26, 2025','5 min read',['Lightning','Payments','Volume'],7),
  a('be5','fomc-decision-bitcoin-rally-rate-pause','FOMC Decision Sparks Bitcoin Rally As Rate Pause Signals Ease Ahead','The Federal Reserve holds rates steady while signaling future cuts, triggering a risk-on rally across digital asset markets.','MACRO EVENT','#3B9EFF','Macro Desk','May 24, 2025','4 min read',['FOMC','Rates','Macro'],8),
  a('be6','sec-approves-third-wave-crypto-etf','SEC Approves Third Wave Of Crypto ETF Applications In Historic Session','The regulator greenlights multiple spot Ethereum ETFs and a basket product in a single week, broadening crypto market access.','REGULATION','#F7931A','Policy Desk','May 22, 2025','5 min read',['SEC','ETF','Regulation'],9),
  a('be7','consensus-2025-defi-bitcoin-breakout','Consensus 2025 Highlights DeFi On Bitcoin As Breakout Narrative','The premier blockchain conference spotlights Bitcoin-native DeFi protocols as the most anticipated infrastructure vertical.','CONFERENCE','#F7931A','Events Desk','May 20, 2025','4 min read',['Consensus','DeFi','Conference'],10),
  a('be8','bitcoin-taproot-script-60-percent-adoption','Bitcoin Taproot Script Adoption Hits 60% Of All On-Chain Transactions','Wallet and protocol upgrades accelerate Taproot adoption, unlocking advanced scripting capabilities at scale.','PROTOCOL','#00C896','Tech Desk','May 18, 2025','5 min read',['Taproot','Protocol','Adoption'],11),
  a('be9','us-strategic-bitcoin-reserve-bill-senate','US Strategic Bitcoin Reserve Bill Advances To Senate Floor Vote','Bipartisan legislation to establish a national Bitcoin reserve gains momentum as co-sponsors increase across party lines.','REGULATION','#F7931A','Policy Desk','May 16, 2025','5 min read',['Strategic Reserve','Legislation','US'],12),
  a('be10','first-bitcoin-backed-sovereign-bond','World\'s First Bitcoin-Backed Sovereign Bond Issued By African Nation','A pioneering government leverages its Bitcoin treasury holdings to issue a sovereign bond, opening a new financial precedent.','MILESTONE','#FFB800','Global Desk','May 14, 2025','6 min read',['Sovereign Bond','Innovation','Africa'],0),
];

// â”€â”€ TOP PROJECT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const topProjectArticles: Article[] = [
  a('tp1','babylon-protocol-bitcoin-staking','Babylon Protocol Enables Bitcoin Staking Without Leaving The Base Chain','The innovative protocol allows BTC holders to stake natively, securing proof-of-stake chains without bridging or wrapping.','STAKING','#F7931A','Project Desk','Jun 1, 2025','6 min read',['Babylon','Staking','Layer-2'],1),
  a('tp2','stacks-layer2-2b-tvl-sbtc','Stacks Layer-2 Records $2B TVL As sBTC Adoption Grows','The Bitcoin layer-2 protocol sees explosive growth as its synthetic BTC peg enables native DeFi without leaving the Bitcoin network.','LAYER-2','#5546FF','Project Desk','May 30, 2025','5 min read',['Stacks','sBTC','TVL'],2),
  a('tp3','lightning-labs-lnd-018-ux','Lightning Labs Releases LND 0.18 With Major UX Improvements','The latest Lightning Network Daemon update simplifies node operations with improved routing efficiency and a streamlined API.','LIGHTNING','#00C896','Tech Desk','May 28, 2025','4 min read',['Lightning Labs','LND','UX'],3),
  a('tp4','citrea-zk-rollup-bitcoin-mainnet','Citrea Launches First ZK Rollup On Bitcoin Mainnet','The zero-knowledge rollup brings EVM-compatible smart contracts to Bitcoin without altering the base layer security model.','LAYER-2','#3B9EFF','Tech Desk','May 26, 2025','7 min read',['Citrea','ZK Rollup','EVM'],4),
  a('tp5','fedimint-500-communities-globally','Fedimint Mint Deployments Surpass 500 Communities Globally','The federated mint protocol empowers Bitcoin communities to offer private, custodial Lightning wallets with shared trust models.','PRIVACY','#F7931A','Community Desk','May 24, 2025','5 min read',['Fedimint','Privacy','Lightning'],5),
  a('tp6','ark-protocol-off-chain-liquidity','Ark Protocol Proposes New Off-Chain Liquidity Architecture','The novel shared UTXO construct aims to solve Lightning onboarding friction, enabling cheap Bitcoin payments for newcomers.','PROTOCOL','#FFB800','Tech Desk','May 22, 2025','8 min read',['Ark','UTXO','Liquidity'],6),
  a('tp7','taproot-assets-stablecoin-lightning','Taproot Assets Enables Stablecoin Transfers On Lightning Network','Lightning Labs\' Taproot Assets protocol goes live for stablecoin issuance, bringing dollar-denominated payments to Lightning.','LIGHTNING','#00C896','DeFi Desk','May 20, 2025','5 min read',['Taproot Assets','Stablecoin','Lightning'],7),
  a('tp8','phoenix-wallet-self-custodial-lightning','Phoenix Wallet Updates Enable Seamless Self-Custodial Lightning','ACINQ\'s Phoenix wallet removes the need for channel management through its innovative splicing-based architecture.','WALLET','#F7931A','Product Desk','May 18, 2025','4 min read',['Phoenix','Wallet','Self-Custody'],8),
  a('tp9','blockstream-jade-plus-multisig','Blockstream Jade Plus Adds Multisig Air-Gap Features','The updated hardware wallet introduces QR code-based air-gapped signing for multisig setups, improving cold storage security.','SECURITY','#00C896','Security Desk','May 16, 2025','4 min read',['Jade','Hardware Wallet','Multisig'],9),
  a('tp10','zeus-node-management-100k-downloads','Zeus Node Management App Hits 100K Downloads On Mobile','The Bitcoin and Lightning node management application reaches a significant adoption milestone on iOS and Android platforms.','ADOPTION','#3B9EFF','Product Desk','May 14, 2025','3 min read',['Zeus','Lightning','Mobile'],10),
];

// â”€â”€ OTHER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const otherArticles: Article[] = [
  a('ot1','us-seizes-1-billion-crypto-iran','US Seizes $1 Billion In Crypto From Iran-Linked Wallets','US authorities announce the largest crypto seizure tied to sanctions evasion, using on-chain analytics to trace fund movement.','ENFORCEMENT','#FF4D4D','Policy Desk','Jun 1, 2025','4 min read',['Sanctions','Enforcement','Iran'],11),
  a('ot2','cyble-180-banking-apps-malware','Cyble Research Identifies 180 Banking Apps Targeted By Malware','Security researchers expose a sophisticated Android malware campaign targeting major banking and crypto exchange applications.','SECURITY','#FF4D4D','Security Desk','May 30, 2025','5 min read',['Malware','Security','Banking'],12),
  a('ot3','kraken-bitcoin-perpetual-contracts','Kraken Launches US-Compliant Bitcoin Perpetual Contracts','The major exchange rolls out regulated perpetual futures for US customers after a 30-day regulatory review process.','DERIVATIVES','#3B9EFF','Markets Desk','May 28, 2025','4 min read',['Kraken','Perpetuals','Derivatives'],0),
  a('ot4','sec-chair-digital-asset-framework','SEC Chair Signals Willingness To Engage On Digital Asset Framework','New SEC leadership takes a more collaborative tone on crypto regulation, suggesting a potential framework could emerge by year-end.','REGULATION','#F7931A','Policy Desk','May 26, 2025','5 min read',['SEC','Regulation','Policy'],1),
  a('ot5','imf-bitcoin-reserve-asset','IMF Report Acknowledges Bitcoin As Emerging Reserve Asset Class','The international body\'s annual global finance report includes a dedicated section analyzing Bitcoin\'s growing role in reserves.','GLOBAL','#3B9EFF','Global Desk','May 24, 2025','6 min read',['IMF','Reserve','Global'],2),
  a('ot6','paypal-bitcoin-150-merchants','PayPal Expands Bitcoin Payment Integration To 150 New Merchants','The payments giant deepens its crypto product suite, enabling Bitcoin payments at a growing list of global retail partners.','ADOPTION','#00C896','Business Desk','May 22, 2025','3 min read',['PayPal','Payments','Adoption'],3),
  a('ot7','fidelity-digital-400-percent-growth','Fidelity Digital Assets Reports 400% Growth In Institutional Clients','The custodian sees explosive demand from pension funds and endowments as regulatory clarity unlocks institutional capital.','INSTITUTIONS','#F7931A','Business Desk','May 20, 2025','4 min read',['Fidelity','Institutional','Custody'],4),
  a('ot8','jack-dorsey-block-mining-chip','Jack Dorsey\'s Block Completes First Bitcoin Mining Chip Prototype','Block Inc. reveals its custom Bitcoin mining ASIC designed to decentralize hardware supply away from incumbent manufacturers.','HARDWARE','#FFB800','Tech Desk','May 18, 2025','5 min read',['Block','Dorsey','ASIC'],5),
  a('ot9','paraguay-bitcoin-mining-regulation','Paraguay Regulates Bitcoin Mining Operations','The South American nation passes comprehensive mining legislation covering energy use, taxation, and environmental compliance.','REGULATION','#F7931A','Global Desk','May 16, 2025','4 min read',['Paraguay','Regulation','Mining'],6),
  a('ot10','goldman-sachs-crypto-trading-desk','Goldman Sachs Opens Crypto Trading Desk For Institutional Clients','The Wall Street bank formally launches a 24/7 crypto trading operation catering to hedge funds and asset managers.','INSTITUTIONS','#3B9EFF','Finance Desk','May 14, 2025','4 min read',['Goldman Sachs','Trading','Institutional'],7),
];

// â”€â”€ SPONSORED ARTICLES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const sponsoredArticles: Article[] = [
  a('sp1','bitcoin-custody-guide-institutional','Understanding Bitcoin Custody: A Guide For Institutional Investors','A comprehensive overview of custodial solutions, security models, and regulatory considerations for institutional Bitcoin holdings.','SPONSORED','#FFB800','Partner Content','Jun 1, 2025','8 min read',['Custody','Institutional','Security'],8),
  a('sp2','regulated-bitcoin-etf-portfolio','How Regulated Bitcoin ETFs Are Changing Portfolio Construction','Asset managers share how the availability of spot Bitcoin ETFs has transformed their approach to digital asset allocation.','SPONSORED','#FFB800','Partner Content','May 30, 2025','6 min read',['ETF','Portfolio','Allocation'],9),
  a('sp3','5-percent-bitcoin-allocation-case','The Case For A 5% Bitcoin Allocation In A Traditional Portfolio','Quantitative analysis demonstrates how a modest Bitcoin allocation has historically improved portfolio risk-adjusted returns.','SPONSORED','#FFB800','Partner Content','May 28, 2025','7 min read',['Portfolio','Allocation','Risk'],10),
  a('sp4','hardware-wallet-security-2025','Hardware Wallet Security: Protecting Your Bitcoin In 2025','A practical guide to selecting, setting up, and maintaining hardware wallets for self-custodial Bitcoin storage.','SPONSORED','#FFB800','Partner Content','May 26, 2025','9 min read',['Hardware Wallet','Security','Self-Custody'],11),
  a('sp5','bitcoin-mining-post-halving-profitability','Bitcoin Mining Economics: Post-Halving Profitability Guide','Mining operators share their frameworks for evaluating hardware efficiency, energy costs, and treasury management in 2025.','SPONSORED','#FFB800','Partner Content','May 24, 2025','10 min read',['Mining','Economics','Halving'],12),
  a('sp6','defi-bitcoin-opportunities-risk','DeFi On Bitcoin: Opportunities And Risk Management Framework','A structured approach to participating in Bitcoin-native DeFi protocols while managing smart contract and custody risk.','SPONSORED','#FFB800','Partner Content','May 22, 2025','8 min read',['DeFi','Risk','Bitcoin'],0),
  a('sp7','bitcoin-tax-optimization-us','Tax Optimization Strategies For Bitcoin Investors In The US','CPA-reviewed guidance on cost basis methods, tax-loss harvesting, and entity structures for Bitcoin holders.','SPONSORED','#FFB800','Partner Content','May 20, 2025','9 min read',['Tax','US','Optimization'],1),
  a('sp8','lightning-network-merchant-guide','Lightning Network For Merchants: A Complete Setup Guide','Step-by-step instructions for merchants to accept Bitcoin Lightning payments using self-hosted or managed solutions.','SPONSORED','#FFB800','Partner Content','May 18, 2025','7 min read',['Lightning','Merchants','Payments'],2),
  a('sp9','bitcoin-etf-structures-comparison','Comparing Bitcoin ETF Structures: Spot vs Futures vs Derivatives','An analytical comparison of different Bitcoin ETF product structures and their implications for investors.','SPONSORED','#FFB800','Partner Content','May 16, 2025','8 min read',['ETF','Structure','Comparison'],3),
  a('sp10','bitcoin-collateral-lending-products','Bitcoin As Collateral: Lending Products For Long-Term Holders','How to access liquidity against Bitcoin holdings without selling, using regulated lending protocols and platforms.','SPONSORED','#FFB800','Partner Content','May 14, 2025','7 min read',['Lending','Collateral','DeFi'],4),
];

export const allCategoryArticles = [
  ...bitcoinNewsArticles,
  ...altcoinNewsArticles,
  ...miningArticles,
  ...blockchainEventArticles,
  ...topProjectArticles,
  ...otherArticles,
  ...sponsoredArticles,
];

