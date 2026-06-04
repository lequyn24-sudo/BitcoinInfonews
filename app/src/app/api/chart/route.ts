import { NextResponse } from 'next/server';

const FALLBACKS: Record<string, number[]> = {
  '1':  Array.from({ length: 24 }, (_, i) => 94000 + Math.sin(i / 3) * 800 + i * 20),
  '7':  Array.from({ length: 7  }, (_, i) => 90000 + i * 800 + Math.sin(i) * 500),
  '30': Array.from({ length: 30 }, (_, i) => 85000 + i * 350 + Math.sin(i / 4) * 1200),
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const days = searchParams.get('days') ?? '1';

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error('CoinGecko error');
    const data = await res.json();
    const prices: number[] = (data.prices as [number, number][]).map(([, p]) => p);
    return NextResponse.json({ prices });
  } catch {
    return NextResponse.json({ prices: FALLBACKS[days] ?? FALLBACKS['1'] });
  }
}
