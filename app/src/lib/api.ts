import {
  heroArticle,
  marketsArticle,
  guidesArticle,
  miningArticle,
  ecosystemArticle,
  Article,
} from './mock-data';

export interface BitcoinPriceData {
  price: number;
  change24h: number;
  volume24h: number;
  dominance: number;
}

export const FALLBACK_PRICE_DATA: BitcoinPriceData = {
  price: 94250,
  change24h: 4.72,
  volume24h: 38200000000,
  dominance: 54.3,
};

export const allArticles: Article[] = [
  heroArticle,
  marketsArticle,
  guidesArticle,
  miningArticle,
  ecosystemArticle,
];

export function getAllArticles(): Article[] {
  return allArticles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((article) => article.slug === slug);
}

export async function getBitcoinPriceData(): Promise<BitcoinPriceData> {
  let price = FALLBACK_PRICE_DATA.price;
  let change24h = FALLBACK_PRICE_DATA.change24h;
  let volume24h = FALLBACK_PRICE_DATA.volume24h;
  let dominance = FALLBACK_PRICE_DATA.dominance;

  try {
    const priceRes = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true',
      { next: { revalidate: 60 } }
    );
    if (priceRes.ok) {
      const data = await priceRes.json();
      if (data && data.bitcoin) {
        price = data.bitcoin.usd ?? price;
        change24h = data.bitcoin.usd_24h_change ?? change24h;
        volume24h = data.bitcoin.usd_24h_vol ?? volume24h;
      }
    }
  } catch (error) {
    console.warn('Error fetching price from CoinGecko, using fallback:', error);
  }

  try {
    const globalRes = await fetch(
      'https://api.coingecko.com/api/v3/global',
      { next: { revalidate: 60 } }
    );
    if (globalRes.ok) {
      const data = await globalRes.json();
      if (data && data.data && data.data.market_cap_percentage) {
        dominance = data.data.market_cap_percentage.btc ?? dominance;
      }
    }
  } catch (error) {
    console.warn('Error fetching dominance from CoinGecko, using fallback:', error);
  }

  return {
    price,
    change24h,
    volume24h,
    dominance,
  };
}
