import { NextResponse } from 'next/server';
import { getBitcoinPriceData } from '@/lib/api';

export async function GET() {
  try {
    const data = await getBitcoinPriceData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch price data' },
      { status: 500 }
    );
  }
}
