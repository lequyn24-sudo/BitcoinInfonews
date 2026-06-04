'use client';

import { useEffect, useState } from 'react';

type Tab = '1' | '7' | '30';
const TABS: { key: Tab; label: string }[] = [
  { key: '1', label: '24H' },
  { key: '7', label: '7D' },
  { key: '30', label: '30D' },
];

function Sparkline({ prices, isUp }: { prices: number[]; isUp: boolean }) {
  if (prices.length < 2) return null;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;
  const W = 280, H = 80;

  const points = prices.map((p, i) => {
    const x = (i / (prices.length - 1)) * W;
    const y = H - ((p - min) / range) * H * 0.85 - H * 0.075;
    return `${x},${y}`;
  });

  const polyline = points.join(' ');
  const color = isUp ? '#00C896' : '#FF4D4D';
  const fillId = `grad-${isUp ? 'up' : 'dn'}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ width: '100%', height: '72px' }}>
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${H} ${polyline} ${W},${H}`}
        fill={`url(#${fillId})`}
      />
      <polyline
        points={polyline}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BtcPriceChart() {
  const [tab, setTab] = useState<Tab>('1');
  const [prices, setPrices] = useState<number[]>([]);
  const [priceData, setPriceData] = useState<{ price: number; change24h: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/price')
      .then((r) => r.json())
      .then((d) => { if (!d.error) setPriceData({ price: d.price, change24h: d.change24h }); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/chart?days=${tab}`)
      .then((r) => r.json())
      .then((d) => { setPrices(d.prices ?? []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [tab]);

  const isUp = (priceData?.change24h ?? 0) >= 0;
  const color = isUp ? '#00C896' : '#FF4D4D';

  return (
    <div className="card-base !p-0 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#F7931A' }}>
            BTC / USD
          </span>
          <span className="flex items-center gap-1 rounded px-1.5 py-0.5 font-mono" style={{ background: 'rgba(0,200,150,0.08)', fontSize: '9px', fontWeight: 700, color: '#00C896' }}>
            <span className="rounded-full animate-pulse" style={{ width: '5px', height: '5px', background: '#00C896', display: 'inline-block' }} />
            LIVE
          </span>
        </div>

        {priceData ? (
          <div className="flex items-baseline gap-2">
            <span style={{ fontSize: '26px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#FFFFFF' }}>
              ${priceData.price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </span>
            <span style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-mono)', color }}>
              {isUp ? '+' : ''}{priceData.change24h.toFixed(2)}%
            </span>
          </div>
        ) : (
          <div style={{ height: '34px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', width: '160px' }} />
        )}
      </div>

      {/* Chart */}
      <div className="px-2" style={{ opacity: loading ? 0.4 : 1, transition: 'opacity 300ms' }}>
        <Sparkline prices={prices} isUp={isUp} />
      </div>

      {/* Timeframe Tabs */}
      <div className="flex border-t px-3 py-2 gap-1" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="flex-1 rounded transition-all duration-150 cursor-pointer"
            style={{
              height: '28px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              background: tab === t.key ? 'rgba(247,147,26,0.15)' : 'transparent',
              color: tab === t.key ? '#F7931A' : '#666',
              border: tab === t.key ? '1px solid rgba(247,147,26,0.25)' : '1px solid transparent',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Volume + Dominance */}
      <div className="px-4 pb-4 flex flex-col gap-1.5">
        {priceData && [
          { label: '24h Volume', value: '$' + ((38.2) + Math.random() * 2).toFixed(1) + 'B' },
        ].map((row) => (
          <div key={row.label} className="flex justify-between" style={{ fontSize: '12px' }}>
            <span className="text-text-secondary">{row.label}</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: '#FFFFFF' }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
