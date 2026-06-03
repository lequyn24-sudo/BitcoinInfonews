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
  thumbnail: '/images/background.webp',
  tags: ['Regulation', 'Institutional'],
};

// Hero center column news items
export const heroNewsItems = [
  {
    id: '2',
    category: 'BITCOIN ETF',
    categoryColor: '#F7931A',
    title: 'Morgan Stanley Spot Bitcoin ETF Distribution Push Reshapes Access',
    thumbnail: '/images/background.webp',
  },
  {
    id: '3',
    category: 'PRICE ANALYSIS',
    categoryColor: '#F7931A',
    title: 'Bitcoin Reclaims Key Range As Volatility Compresses Near Resistance',
    thumbnail: '/images/background.webp',
  },
  {
    id: '4',
    category: 'INSTITUTIONS',
    categoryColor: '#F7931A',
    title: 'Corporate Treasury Demand Keeps Bitcoin Bid Firm Into New Quarter',
    thumbnail: '/images/background.webp',
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
  excerpt: '',
  category: 'PRICE ANALYSIS',
  categoryColor: '#FF4D4D',
  author: 'Market Desk',
  date: 'Apr 19, 2025',
  readTime: '7 min read',
  thumbnail: '/images/background.webp',
  tags: ['On-chain', 'ETF Flow', 'Macro'],
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
  excerpt: '',
  category: 'WALLETS',
  categoryColor: '#F7931A',
  author: 'Guides Team',
  date: 'Apr 18, 2025',
  readTime: '10 min read',
  thumbnail: '/images/background.webp',
  tags: ['Wallets', 'Security', 'Self-Custody'],
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
  excerpt: '',
  category: 'HASHRATE',
  categoryColor: '#F7931A',
  author: 'Mining Desk',
  date: 'Apr 17, 2025',
  readTime: '8 min read',
  thumbnail: '/images/background.webp',
  tags: ['Mining', 'Hashrate', 'Hardware'],
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
  excerpt: '',
  category: 'LIGHTNING',
  categoryColor: '#F7931A',
  author: 'Ecosystem Desk',
  date: 'Apr 16, 2025',
  readTime: '6 min read',
  thumbnail: '/images/background.webp',
  tags: ['Lightning', 'Layer2', 'Infrastructure'],
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
