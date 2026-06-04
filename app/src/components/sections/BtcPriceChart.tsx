'use client';

import { useEffect, useState } from 'react';

type Tab = '1' | '7' | '30';
const TABS: { key: Tab; label: string }[] = [
  { key: '1',  label: '24H' },
  { key: '7',  label: '7D'  },
  { key: '30', label: '30D' },
];

function Sparkline({ prices, isUp }: { prices: number[]; isUp: boolean }) {
  if (prices.length < 2) return <div style={{ height: '120px' }} />;
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;
  const W = 600, H = 120;

  const pts = prices.map((p, i) => {
    const x = (i / (prices.length - 1)) * W;
    const y = H - ((p - min) / range) * H * 0.88 - H * 0.06;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const poly = pts.join(' ');
  const color = isUp ? '#00C896' : '#FF4D4D';
  const gid = `sg-${isUp ? 'u' : 'd'}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
      style={{ width: '100%', height: '120px', display: 'block' }}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0"    />
        </linearGradient>
      </defs>
      <polygon points={`0,${H} ${poly} ${W},${H}`} fill={`url(#${gid})`} />
      <polyline points={poly} fill="none" stroke={color}
        strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function BtcPriceChart() {
  const [tab, setTab]         = useState<Tab>('1');
  const [prices, setPrices]   = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [priceData, setPrice] = useState<{ price: number; change24h: number; volume24h: number; dominance: number } | null>(null);

  useEffect(() => {
    fetch('/api/price').then(r => r.json())
      .then(d => { if (!d.error) setPrice(d); })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/chart?days=${tab}`).then(r => r.json())
      .then(d => { setPrices(d.prices ?? []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [tab]);

  const isUp  = (priceData?.change24h ?? 0) >= 0;
  const color = isUp ? '#00C896' : '#FF4D4D';

  return (
    <div className="card-base !p-0 overflow-hidden w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] divide-y divide-[rgba(255,255,255,0.08)] lg:divide-y-0 lg:divide-x lg:divide-[rgba(255,255,255,0.08)]">

        {/* LEFT — price stats */}
        <div className="p-5 flex flex-col justify-between gap-4 lg:w-[220px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: '#F7931A' }}>
              BTC / USD
            </span>
            <span className="flex items-center gap-1 rounded px-2 py-0.5 font-mono"
              style={{ background: 'rgba(0,200,150,0.08)', fontSize: '9px', fontWeight: 700, color: '#00C896' }}>
              <span className="rounded-full animate-pulse"
                style={{ width: '5px', height: '5px', background: '#00C896', display: 'inline-block' }} />
              LIVE
            </span>
          </div>

          {/* Price */}
          {priceData ? (
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span style={{ fontSize: '32px', fontWeight: 700,
                  fontFamily: 'var(--font-mono)', color: '#FFFFFF', lineHeight: 1.1 }}>
                  ${priceData.price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
                <span style={{ fontSize: '14px', fontWeight: 600,
                  fontFamily: 'var(--font-mono)', color }}>
                  {isUp ? '+' : ''}{priceData.change24h.toFixed(2)}%
                </span>
              </div>
              <p style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>Spot price · 24h change</p>
            </div>
          ) : (
            <div style={{ height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }} />
          )}

          {/* Stats */}
          <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            {[
              { label: '24h Volume',   value: priceData ? `$${(priceData.volume24h / 1e9).toFixed(1)}B` : '—' },
              { label: 'BTC Dominance', value: priceData ? `${priceData.dominance.toFixed(1)}%` : '—' },
            ].map(row => (
              <div key={row.label} className="flex justify-between" style={{ fontSize: '12px' }}>
                <span className="text-text-secondary">{row.label}</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#FFFFFF' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — chart */}
        <div className="flex flex-col p-4 gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1 self-end">
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className="rounded transition-all duration-150 cursor-pointer"
                style={{
                  height: '28px', padding: '0 12px',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '0.04em',
                  background: tab === t.key ? 'rgba(247,147,26,0.15)' : 'transparent',
                  color: tab === t.key ? '#F7931A' : '#555',
                  border: tab === t.key ? '1px solid rgba(247,147,26,0.25)' : '1px solid transparent',
                }}>
                {t.label}
              </button>
            ))}
          </div>

          {/* Sparkline */}
          <div style={{ opacity: loading ? 0.3 : 1, transition: 'opacity 300ms', flex: 1 }}>
            <Sparkline prices={prices} isUp={isUp} />
          </div>
        </div>
      </div>
    </div>
  );
}
