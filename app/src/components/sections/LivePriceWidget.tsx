'use client';

import { useEffect, useState } from 'react';
import { TrendUp, TrendDown } from '@phosphor-icons/react';

export function LivePriceWidget() {
  const [priceData, setPriceData] = useState<{
    price: number;
    change24h: number;
    volume24h: number;
    dominance: number;
  } | null>(null);

  useEffect(() => {
    fetch('/api/price')
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setPriceData(data);
        }
      })
      .catch((err) => console.error('Error fetching price in widget:', err));
  }, []);

  if (!priceData) return null;

  const isUp = priceData.change24h >= 0;

  return (
    <div className="card-base">
      <div className="mb-3 flex items-center justify-between">
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#F7931A',
          }}
        >
          Bitcoin Market Status
        </span>
        <span className="flex items-center gap-1 rounded bg-green/10 px-1.5 py-0.5 font-mono text-[10px] font-bold text-green">
          <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
          LIVE
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-2xl font-bold text-white">
            ${priceData.price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </span>
          <span
            className={`flex items-center gap-0.5 font-mono text-xs font-semibold ${
              isUp ? 'text-green' : 'text-red'
            }`}
          >
            {isUp ? <TrendUp size={14} /> : <TrendDown size={14} />}
            {isUp ? '+' : ''}
            {priceData.change24h.toFixed(2)}%
          </span>
        </div>
        <span className="text-[10px] text-text-secondary uppercase tracking-wider">
          Spot BTC / USD (24h)
        </span>
      </div>

      <div className="flex flex-col gap-2 border-t border-border pt-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-secondary">24h Volume</span>
          <span className="font-mono text-text-primary">
            ${(priceData.volume24h / 1e9).toFixed(2)}B
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-text-secondary">BTC Dominance</span>
          <span className="font-mono text-text-primary">
            {priceData.dominance.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
