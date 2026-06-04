// Mock data matching the reference layout

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  author: string;
  date: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
  content?: string;
  toc?: { id: string; text: string }[];
}

export interface MarketSignal {
  name: string;
  direction: 'up' | 'down' | 'neutral';
  strength: string;
}

export interface CalendarEvent {
  date: string;
  title: string;
  color: string;
}

export interface DashboardCard {
  icon: string;
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  impactColor: string;
}

// Hero Featured Article
export const heroArticle: Article = {
  id: '1',
  slug: 'global-bitcoin-policy-shift',
  title: 'Global Bitcoin Policy Shift Builds Momentum As Institutional Access Expands',
  excerpt: 'A cleaner homepage starts with one strong lead story, tighter hierarchy, and a market-aware entry point built for Bitcoin-first readers.',
  category: 'REGULATION',
  categoryColor: '#F7931A',
  author: 'InfoNews Editorial',
  date: 'Apr 20, 2025',
  readTime: '5 min read',
  thumbnail: '/images/thumbnails/strategic-bitcoin-reserve-bill-drops-1-million-btc-target-adds-20-year-lockup-thumbnail.jpg',
  tags: ['Regulation', 'Institutional'],
  toc: [
    { id: 'introduction', text: 'Introduction' },
    { id: 'institutional-access', text: 'Institutional Access' },
    { id: 'regulatory-milestones', text: 'Regulatory Milestones' },
    { id: 'sovereign-reserves', text: 'Sovereign Reserves' },
    { id: 'bottom-line', text: 'Bottom Line' }
  ],
  content: `
    <p>In recent months, a pronounced shift in global Bitcoin policy has begun to reshape the financial landscape. As traditional investment vehicles see massive inflows through Spot Bitcoin ETFs, institutional access is expanding at an unprecedented rate.</p>
    <h2 id="introduction">Introduction</h2>
    <p>Major investment banks and corporate treasuries are no longer looking at Bitcoin as a speculative asset. The integration of spot ETFs has provided the regulatory bridge needed for pension funds, wealth managers, and large institutions to allocate capital securely. According to recent market reports, weekly inflows into Bitcoin-focused products have consistently surpassed expectations, cementing its position in modern portfolios.</p>
    <h2 id="institutional-access">Institutional Access</h2>
    <p>The speed at which traditional finance is integrating digital assets is faster than anyone anticipated. We are seeing a structural shift, not a temporary trend. Pension funds and insurance companies that previously faced strict compliance roadblocks are now gaining exposure through trusted channels.</p>
    <div class="p-4 rounded-lg bg-carbon border-l-4 border-amber my-4">
      <h4 class="font-bold text-white mb-1">Key Data Point:</h4>
      <p class="text-sm text-text-secondary">U.S. Spot Bitcoin ETFs have accumulated over $60 billion in assets under management in their first year, making it the most successful ETF launch in history.</p>
    </div>
    <h2 id="regulatory-milestones">Regulatory Milestones</h2>
    <p>Governments worldwide are recognizing the need for clear guidelines. From the European Union's Markets in Crypto-Assets (MiCA) regulations to upcoming legislative reviews in the United States, the focus is on creating a transparent framework that protects investors while fostering financial technology innovation.</p>
    <blockquote>
      "Clear regulations don't restrict growth; they provide the boundaries within which billions of dollars of institutional capital feel safe to operate."
    </blockquote>
    <h2 id="sovereign-reserves">Sovereign Reserves</h2>
    <p>Beyond private corporations, sovereign interest is expanding. Several nations are openly discussing adding Bitcoin to their strategic reserve assets, modeling it after gold. The arguments focus on game-theoretic advantages: as supply remains strictly capped at 21 million, early sovereign adoption could secure substantial national wealth in the digital age.</p>
    <h2 id="bottom-line">Bottom Line</h2>
    <p>As the network's liquidity deepens and the infrastructure matures, the volatility that once characterized Bitcoin is beginning to compress. Investors are increasingly focusing on the long-term fundamentals: hard-capped supply, decentralized security, and a global, 24/7 settlement network. The policy shift is not just about price; it's about the maturation of a global monetary network.</p>
  `
};

// Hero center column news items
export const heroNewsItems = [
  {
    id: '2',
    category: 'BITCOIN ETF',
    categoryColor: '#F7931A',
    title: 'Morgan Stanley Spot Bitcoin ETF Distribution Push Reshapes Access',
    thumbnail: '/images/thumbnails/vaneck-debuts-spot-bnb-etf-vbnb-on-nasdaq-thumbnail-768x512.jpg',
  },
  {
    id: '3',
    category: 'PRICE ANALYSIS',
    categoryColor: '#F7931A',
    title: 'Bitcoin Reclaims Key Range As Volatility Compresses Near Resistance',
    thumbnail: '/images/thumbnails/kraken-us-compliant-bitcoin-perpetual-contracts-launch-30-days-thumbnail-768x512.jpg',
  },
  {
    id: '4',
    category: 'INSTITUTIONS',
    categoryColor: '#F7931A',
    title: 'Corporate Treasury Demand Keeps Bitcoin Bid Firm Into New Quarter',
    thumbnail: '/images/thumbnails/vaneck-ranking-xrp-ledger-ahead-jpmorgan-kinexys-corporate-blockchain-comparison-thumbnail-2-768x512.jpg',
  },
];

// Regime Monitor
export const regimeMonitor = {
  currentRegime: 'Accumulation',
  confidence: 70,
  updatedDate: 'Apr 20, 2025',
  tabs: ['Risk-On', 'Neutral', 'Distribution', 'Accumulation'],
  activeTab: 'Accumulation',
};

// Mempool Pressure
export const mempoolPressure = {
  status: 'Elevated',
  feeLevel: 'Elevated',
  pendingTx: '120,432',
  blockFullness: '72%',
};

// Signal Framework
export const signalFramework = {
  primary: [
    { name: 'ETF flows rising', direction: 'up', strength: 'Strong' },
    { name: 'On-chain demand', direction: 'up', strength: 'Growing' },
    { name: 'Hashrate stability', direction: 'neutral', strength: 'Stable' },
  ] as MarketSignal[],
  secondary: [
    { name: 'Social media hype', direction: 'down', strength: 'Weak' },
    { name: 'Altcoin rotation', direction: 'down', strength: 'Irrelevant' },
    { name: 'Short-term volatility', direction: 'neutral', strength: 'Neutral' },
  ] as MarketSignal[],
  interpretation: 'Institutional flows and on-chain demand are aligning while macro compression builds conditions for expansion.',
};

// Dashboard Cards - What Moves Bitcoin This Week
export const dashboardCards: DashboardCard[] = [
  {
    icon: 'etf',
    title: 'ETF Flows',
    description: 'Strong inflows continue as institutions increase allocation.',
    impact: 'High',
    impactColor: '#00C896',
  },
  {
    icon: 'macro',
    title: 'Macro',
    description: 'DXY weakness and liquidity expectations support risk assets.',
    impact: 'Medium',
    impactColor: '#FFB800',
  },
  {
    icon: 'miner',
    title: 'Miner Sell Pressure',
    description: 'Miner outflows remain contained despite price recovery.',
    impact: 'Medium',
    impactColor: '#FFB800',
  },
  {
    icon: 'options',
    title: 'Options Expiry',
    description: 'Large expiry this week may increase short-term volatility.',
    impact: 'Low',
    impactColor: '#3B9EFF',
  },
  {
    icon: 'onchain',
    title: 'On-Chain Demand',
    description: 'Accumulation addresses and UTXO growth accelerating.',
    impact: 'High',
    impactColor: '#00C896',
  },
];

// Bitcoin Markets
export const marketsArticle: Article = {
  id: '10',
  slug: 'bitcoin-price-structure-tightens',
  title: 'Bitcoin Price Structure Tightens As Macro Liquidity And ETF Demand Converge',
  excerpt: 'A technical analysis of Bitcoin price action, ETF inflows, and macro liquidity conditions heading into the new quarter.',
  category: 'PRICE ANALYSIS',
  categoryColor: '#FF4D4D',
  author: 'Market Desk',
  date: 'Apr 19, 2025',
  readTime: '7 min read',
  thumbnail: '/images/thumbnails/1280X1280_1779175249LXbBvv3v8j-768x432.png',
  tags: ['On-chain', 'ETF Flow', 'Macro'],
  toc: [
    { id: 'price-consolidation', text: 'Price Consolidation' },
    { id: 'etf-absorption', text: 'ETF Supply Absorption' },
    { id: 'macro-liquidity', text: 'Macro Liquidity Trends' },
    { id: 'market-outlook', text: 'Market Outlook' }
  ],
  content: `
    <p>Bitcoin's market structure is showing signs of severe supply tightness as institutional buyers continue to absorb liquid supply while macro indicators line up for expansion.</p>
    <h2 id="price-consolidation">Price Consolidation</h2>
    <p>Bitcoin has spent several weeks consolidating in a tight trading range, building support above key moving averages. Volatility has compressed to levels historically associated with explosive breakouts. Traders are watching the upper boundary of this range, where a clean weekly close could signal the start of the next leg up.</p>
    <div class="p-4 rounded-lg bg-carbon border-l-4 border-red my-4">
      <h4 class="font-bold text-white mb-1">Technical Indicator:</h4>
      <p class="text-sm text-text-secondary">The Bollinger Bands on the weekly timeframe have squeezed to their narrowest range in 18 months, indicating a major volatility expansion is imminent.</p>
    </div>
    <h2 id="etf-absorption">ETF Supply Absorption</h2>
    <p>Spot ETFs continue to act as a massive demand sink. Everyday, the amount of BTC purchased by fund issuers exceeds the daily block subsidy issued to miners. This ongoing imbalance is gradually draining OTC desks, shifting Bitcoin from short-term speculators to long-term custodians.</p>
    <blockquote>
      "We are witnessing a slow-motion supply squeeze. The rate of institutional accumulation is vastly outstripping the rate of new issuance."
    </blockquote>
    <h2 id="macro-liquidity">Macro Liquidity Trends</h2>
    <p>Global central bank balance sheets are expanding once again as liquidity is injected to support banking systems and service national debts. Historically, Bitcoin has acted as a high-beta liquidity sponge, rising alongside the global M2 money supply. With currency debasement remaining a primary risk, hard assets are regaining their appeal.</p>
    <h2 id="market-outlook">Market Outlook</h2>
    <p>The convergence of strong passive ETF flows, macro liquidity expansion, and tight on-chain supply suggests a favorable risk-reward outlook for the coming quarters. While short-term volatility remains expected around options expiry, the structural trend remains firmly bullish.</p>
  `
};

export const marketsRelated = [
  {
    category: 'RELATED COVERAGE',
    title: 'Why New ETF Distribution Channels Matter More Than Daily Flow Headlines',
    tag: 'ETF Flow',
  },
  {
    category: 'RELATED COVERAGE',
    title: 'Public Companies Continue To Reframe Bitcoin As Strategic Treasury Reserve',
    tag: 'Institutions',
  },
  {
    category: 'RELATED COVERAGE',
    title: 'Regulatory Clarity Is Slowly Lowering Friction For Traditional Capital',
    tag: 'Policy',
  },
];

// Bitcoin Guides
export const guidesArticle: Article = {
  id: '20',
  slug: 'cleaner-bitcoin-guides-hub',
  title: 'How To Build A Cleaner Bitcoin Guides Hub Without Looking Like A Generic Affiliate Site',
  excerpt: 'A masterclass in designing trust-first educational portals for Bitcoin custody, hardware, and purchasing.',
  category: 'WALLETS',
  categoryColor: '#F7931A',
  author: 'Guides Team',
  date: 'Apr 18, 2025',
  readTime: '10 min read',
  thumbnail: '/images/thumbnails/us-seizes-1-billion-in-crypto-from-iran-thumbnail-768x512.jpg',
  tags: ['Wallets', 'Security', 'Self-Custody'],
  toc: [
    { id: 'affiliate-problem', text: 'The Affiliate Site Problem' },
    { id: 'trust-first-design', text: 'Trust-First Design' },
    { id: 'curating-guides', text: 'Curating the Right Content' },
    { id: 'custody-essentials', text: 'Custody Essentials' }
  ],
  content: `
    <p>Most Bitcoin educational websites are cluttered with banners, referral codes, and spammy comparison tables. Here is how we design a guides hub that prioritizes user trust and security above monetization.</p>
    <h2 id="affiliate-problem">The Affiliate Site Problem</h2>
    <p>When users search for "best Bitcoin wallets," they are often met with sites that recommend products based on who pays the highest affiliate commission, rather than what is safest. This conflicts with the core philosophy of self-sovereignty. A true Bitcoin guides hub must put security first, providing objective, un-incentivized reviews.</p>
    <h2 id="trust-first-design">Trust-First Design</h2>
    <p>Trust is built through transparency and minimalism. By removing intrusive popups and using a clean, editorial layout, we allow the content to speak for itself. We highlight open-source software, peer-reviewed hardware wallets, and avoid promoting speculative altcoins.</p>
    <blockquote>
      "If you aren't paying for the product, you are the product. In Bitcoin education, biased advice can lead to lost funds. Objectivity is paramount."
    </blockquote>
    <h2 id="curating-guides">Curating the Right Content</h2>
    <p>Instead of overwhelming beginners with complex technical terms, we structure our guides in clear, progressive learning paths. Users can choose their current level (e.g., "New to Bitcoin" vs. "Self-Custody Explorer") to get relevant, step-by-step instructions without unnecessary noise.</p>
    <h2 id="custody-essentials">Custody Essentials</h2>
    <p>Our core guides focus on the foundational pillars of Bitcoin ownership: generating secure seed phrases, choosing hardware signing devices, and understanding backup redundancy. Empowering users to securely hold their own keys is the greatest contribution we can make to the ecosystem.</p>
  `
};

export const guideUseCasePaths = [
  { icon: 'rocket', title: 'New To Bitcoin', subtitle: 'Start your Bitcoin journey' },
  { icon: 'shield', title: 'Self-Custody', subtitle: 'Secure your Bitcoin' },
  { icon: 'pickaxe', title: 'Mining Curious', subtitle: 'Understand mining' },
  { icon: 'chart', title: 'ETF Investor', subtitle: 'Invest with confidence' },
];

// Bitcoin Mining
export const miningArticle: Article = {
  id: '30',
  slug: 'mining-fundamentals-matter',
  title: 'Mining Fundamentals Matter Again As Hardware Efficiency And Hashprice Diverge',
  excerpt: 'Analyzing the post-halving mining landscape: hashprice compression, hardware upgrade cycles, and corporate energy strategies.',
  category: 'HASHRATE',
  categoryColor: '#F7931A',
  author: 'Mining Desk',
  date: 'Apr 17, 2025',
  readTime: '8 min read',
  thumbnail: '/images/thumbnails/20260522-175919_1779444420kVIOzuBKeB-768x403.jpg',
  tags: ['Mining', 'Hashrate', 'Hardware'],
  toc: [
    { id: 'hashprice-compression', text: 'Hashprice Compression' },
    { id: 'hardware-efficiency', text: 'Hardware Efficiency Race' },
    { id: 'energy-integration', text: 'Energy Grid Integration' },
    { id: 'industry-consolidation', text: 'Industry Consolidation' }
  ],
  content: `
    <p>As the Bitcoin network difficulty climbs to new heights, miners are navigating a challenging post-halving landscape where efficiency is the only path to survival.</p>
    <h2 id="hashprice-compression">Hashprice Compression</h2>
    <p>Hashprice—the expected daily revenue per Terahash of computing power—has compressed to near-historical lows. This compression is forcing miners with high power costs or inefficient hardware to shut down, while highly efficient operations continue to expand their fleets.</p>
    <div class="p-4 rounded-lg bg-carbon border-l-4 border-amber my-4">
      <h4 class="font-bold text-white mb-1">Key Stat:</h4>
      <p class="text-sm text-text-secondary">Global hashrate remains above 600 EH/s, demonstrating that miner capitulation has been offset by newer, more efficient machines coming online.</p>
    </div>
    <h2 id="hardware-efficiency">Hardware Efficiency Race</h2>
    <p>The latest generation of ASIC miners operates below 15 Joules per Terahash (J/T). Upgrading to these units allows miners to remain profitable even at low hashprices. Operations that failed to secure next-gen hardware during the bull market are now facing severe margin pressure.</p>
    <blockquote>
      "Miners are no longer just competing on cheap electricity; they are competing on machine efficiency and capital allocation."
    </blockquote>
    <h2 id="energy-integration">Energy Grid Integration</h2>
    <p>Successful mining operations are increasingly acting as energy grid stabilizers. By partnering with power grids, miners can buy excess curtailed energy at low cost, and shut down operations instantly during peak demand periods to return power to the grid. This symbiosis is reshaping how society views energy consumption.</p>
    <h2 id="industry-consolidation">Industry Consolidation</h2>
    <p>Smaller, debt-burdened miners are being acquired by larger, public firms with deep capital reserves. This consolidation is leading to a highly professionalized, corporate mining sector that can weather long bear markets and leverage economies of scale.</p>
  `
};

export const minerStressDashboard = {
  hashprice: '$0.08',
  hashpriceUnit: '/TH/day',
  difficultyTrend: '+3.2%',
  difficultyPeriod: '(14d)',
  feeShare: '12%',
  feeShareLabel: 'Of Block Reward',
  treasuryPressure: 'Low',
  treasuryLabel: 'Healthy',
};

export const miningRelated = [
  {
    category: 'RELATED COVERAGE',
    title: 'Difficulty Adjustments Continue To Reset Margin Pressure Across Mining Firms',
  },
  {
    category: 'RELATED COVERAGE',
    title: 'Public Miners Face New Trade-Offs Between Treasury, Debt And Expansion',
  },
];

// Bitcoin Ecosystem
export const ecosystemArticle: Article = {
  id: '40',
  slug: 'bitcoin-ecosystem-growth',
  title: 'Bitcoin Ecosystem Growth Is Becoming Easier To Follow When It Gets Its Own Dedicated Layer',
  excerpt: 'A comprehensive map of scaling layers, Lightning Network adoption, and developer activity on the Bitcoin base layer.',
  category: 'LIGHTNING',
  categoryColor: '#F7931A',
  author: 'Ecosystem Desk',
  date: 'Apr 16, 2025',
  readTime: '6 min read',
  thumbnail: '/images/thumbnails/1280X1280_17792638184yOu83FmUb-768x432.png',
  tags: ['Lightning', 'Layer2', 'Infrastructure'],
  toc: [
    { id: 'scaling-bitcoin', text: 'Scaling Bitcoin' },
    { id: 'lightning-network', text: 'Lightning Network Growth' },
    { id: 'bitcoin-defi', text: 'DeFi on Bitcoin' },
    { id: 'developer-activity', text: 'Developer Activity' }
  ],
  content: `
    <p>The Bitcoin ecosystem is undergoing a quiet developer renaissance as layer-2 protocols and scaling networks mature, opening new use cases without compromising base layer security.</p>
    <h2 id="scaling-bitcoin">Scaling Bitcoin</h2>
    <p>Because the Bitcoin base layer has a block space limit to preserve decentralization, scaling must happen in layers. Much like the physical financial system has base money and settlement networks, Bitcoin uses scaling layers to process millions of cheap, fast transactions.</p>
    <h2 id="lightning-network">Lightning Network Growth</h2>
    <p>The Lightning Network remains the gold standard for peer-to-peer payments. Total capacity locked in public channels has hit new highs, and payment routing reliability has reached institutional grade. More global exchanges are integrating Lightning, allowing users to deposit and withdraw funds instantly for pennies.</p>
    <blockquote>
      "Lightning is not just a technology; it is a global, instant liquidity highway built on top of the world's most secure monetary network."
    </blockquote>
    <h2 id="bitcoin-defi">DeFi on Bitcoin</h2>
    <p>New protocols are allowing users to lend, borrow, and trade assets directly using Bitcoin as collateral, without trusting centralized custodians. This is unlocking the vast capital pool of inactive Bitcoin, allowing users to earn yield while maintaining custody through multi-signature escrows.</p>
    <h2 id="developer-activity">Developer Activity</h2>
    <p>Developer interest in Bitcoin-native coding is at an all-time high. Toolkits are simplifying how builders interact with the protocol, leading to a wave of new wallet interfaces, scaling options, and secure scripting projects that expand what is possible on Bitcoin.</p>
  `
};

export const bitcoinStackMap = [
  { icon: 'cube', title: 'Base Layer', subtitle: 'Bitcoin protocol, consensus, decentralization' },
  { icon: 'lightning', title: 'Scaling Layer', subtitle: 'Lightning, sidechains, rollups, channels' },
  { icon: 'bank', title: 'Financial Layer', subtitle: 'DeFi, lending, tokenized BTC, RWAs' },
  { icon: 'users', title: 'Culture & Adoption', subtitle: 'Education, communities, developer tools' },
];

export const capitalRotationFlow = [
  'ETF Flows',
  'Miners',
  'Treasury',
  'L2 Narratives',
  'Retail Demand',
];

// Sidebar - Most Read
export const mostReadArticles = [
  'Bitcoin ETF Flows Turn Positive Again As Demand Broadens',
  'What The Next Bitcoin Difficulty Adjustment Could Signal',
  'Why Bitcoin Dominance Still Matters In A Risk-On Market',
  'Best Bitcoin Wallets For Security-First Users',
  'Bitcoin Layer2 Activity Is Rising But Fragmentation Remains',
];

// Sidebar - Calendar
export const calendarEvents: CalendarEvent[] = [
  { date: 'Apr 24', title: 'FOMC Meeting', color: '#00C896' },
  { date: 'Apr 26', title: 'U.S. Core PCE Data', color: '#FF4D4D' },
  { date: 'May 01', title: 'ETF Deadline (VanEck)', color: '#FFB800' },
  { date: 'May 02', title: 'Bitcoin Difficulty Adj.', color: '#FFB800' },
  { date: 'May 15', title: 'CPI Data Release', color: '#FF4D4D' },
];
