import type { PriceData, MarketStatus, TrendingTopic, TopMover } from "@/types";

export const FALLBACK_PRICE_DATA: PriceData = {
  price: 94250.32,
  change24h: 4.72,
  volume24h: 38_200_000_000,
  dominance: 54.3,
  high24h: 95_100,
  low24h: 91_840,
  sparkline: [88000, 89500, 91000, 90200, 92000, 93100, 94250],
};

export async function fetchBitcoinPrice(): Promise<PriceData> {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true",
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return FALLBACK_PRICE_DATA;
    const data = await res.json();
    const btc = data.bitcoin;
    return {
      ...FALLBACK_PRICE_DATA,
      price: btc.usd ?? FALLBACK_PRICE_DATA.price,
      change24h: btc.usd_24h_change ?? FALLBACK_PRICE_DATA.change24h,
      volume24h: btc.usd_24h_vol ?? FALLBACK_PRICE_DATA.volume24h,
    };
  } catch {
    return FALLBACK_PRICE_DATA;
  }
}

export function getMarketStatus(change24h: number): MarketStatus {
  if (change24h > 2) return "bullish";
  if (change24h < -2) return "bearish";
  return "neutral";
}

export const TRENDING_TOPICS: TrendingTopic[] = [
  { rank: 1, title: "Bitcoin ETF", slug: "bitcoin-etf" },
  { rank: 2, title: "Halving 2028", slug: "halving-2028" },
  { rank: 3, title: "Lightning Network", slug: "lightning-network" },
  { rank: 4, title: "MicroStrategy", slug: "microstrategy" },
  { rank: 5, title: "Ordinals", slug: "ordinals" },
];

export const TOP_MOVERS: TopMover[] = [
  { symbol: "BTC", name: "Bitcoin", price: 94250, change24h: 4.72 },
  { symbol: "ETH", name: "Ethereum", price: 3412, change24h: 2.1 },
  { symbol: "SOL", name: "Solana", price: 185, change24h: -1.4 },
  { symbol: "BNB", name: "BNB", price: 612, change24h: 0.88 },
];
