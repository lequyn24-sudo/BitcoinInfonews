export type MarketStatus = "bullish" | "bearish" | "neutral";

export type ArticleCategory =
  | "bitcoin-news"
  | "altcoin-news"
  | "mining"
  | "blockchain-events"
  | "top-projects"
  | "other"
  | "sponsored"
  | "analysis"
  | "guides"
  | "markets";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ArticleCategory;
  categoryLabel: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: number;
  imageUrl: string;
  isBreaking?: boolean;
  isSponsored?: boolean;
  isPressRelease?: boolean;
  tags?: string[];
}

export interface PriceData {
  price: number;
  change24h: number;
  volume24h: number;
  dominance: number;
  high24h: number;
  low24h: number;
  sparkline?: number[];
}

export interface TrendingTopic {
  rank: number;
  title: string;
  slug: string;
}

export interface TopMover {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}
