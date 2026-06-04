'use client';

import {
  heroArticle,
  regimeMonitor,
  mempoolPressure,
  signalFramework,
} from '@/lib/mock-data';
import {
  ArrowUp,
  ArrowDown,
  ArrowRight,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full hero-glow-bg">
      <div className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-stretch">

          {/* ── LEFT (4/12 ≈ 33%) — Headline + Status + Subtext + CTA ── */}
          <div className="flex flex-col justify-center gap-5 md:col-span-6 lg:col-span-4">

            {/* Category Badge + Headline */}
            <div>
              <span
                className="badge mb-3 inline-block"
                style={{ background: 'rgba(247,147,26,0.15)', color: '#F7931A' }}
              >
                {heroArticle.category}
              </span>
              <Link href={`/${heroArticle.slug}`} className="group block">
                <h1
                  className="text-text-primary font-extrabold group-hover:text-amber transition-colors duration-200"
                  style={{
                    fontSize: 'clamp(22px, 2.8vw, 34px)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {heroArticle.title}
                </h1>
              </Link>
            </div>

            {/* Status Pill — between headline and excerpt */}
            <div
              className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5"
              style={{
                background: 'rgba(0, 200, 150, 0.08)',
                border: '1px solid rgba(0, 200, 150, 0.25)',
              }}
            >
              <span
                className="rounded-full"
                style={{ width: '6px', height: '6px', background: '#00C896', flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#00C896',
                }}
              >
                Regime: {regimeMonitor.currentRegime}
              </span>
              <span style={{ color: '#2A2A2A' }}>·</span>
              <span style={{ fontSize: '11px', color: '#A0A0A0', fontFamily: 'var(--font-mono)' }}>
                {regimeMonitor.confidence}%
              </span>
            </div>

            {/* Excerpt */}
            <p
              className="text-text-secondary"
              style={{ fontSize: '14px', lineHeight: 1.65, maxWidth: '340px' }}
            >
              {heroArticle.excerpt}
            </p>

            {/* CTA Pair */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${heroArticle.slug}`}
                className="inline-flex items-center justify-center rounded-lg font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-[#F0F0F0]"
                style={{
                  height: '44px',
                  padding: '0 20px',
                  background: '#FFFFFF',
                  color: '#0A0A0A',
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                }}
              >
                Read Article ↗
              </Link>
              <Link
                href="/#markets"
                className="inline-flex items-center justify-center rounded-lg font-semibold uppercase tracking-wider text-white transition-all duration-200"
                style={{
                  height: '44px',
                  padding: '0 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                }}
              >
                Markets +
              </Link>
            </div>
          </div>

          {/* ── CENTER (5/12 ≈ 42%) — Hero Visual + Floating Card ── */}
          <div
            className="relative overflow-hidden rounded-xl md:col-span-6 lg:col-span-5"
            style={{
              minHeight: '340px',
              background: `url(${heroArticle.thumbnail}) center/cover no-repeat`,
            }}
          >
            {/* Image overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
              }}
            />

            {/* Floating Glass Card — bottom-right */}
            <div
              className="glass-card absolute bottom-4 right-4"
              style={{ padding: '14px 16px', minWidth: '160px' }}
            >
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#A0A0A0',
                  marginBottom: '4px',
                }}
              >
                Market Regime
              </p>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#00C896',
                  fontFamily: 'var(--font-mono)',
                  lineHeight: 1.2,
                }}
              >
                {regimeMonitor.currentRegime}
              </p>
              <p style={{ fontSize: '11px', color: '#A0A0A0', marginTop: '2px' }}>
                {regimeMonitor.confidence}% confidence
              </p>
            </div>
          </div>

          {/* ── RIGHT (3/12 ≈ 25%) — Live Stats ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col card-base !p-0 overflow-hidden">

            {/* Mempool Pressure */}
            <div
              className="p-4 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#F7931A',
                  marginBottom: '6px',
                }}
              >
                Mempool Pressure
              </p>
              <p
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#FFB800',
                  fontFamily: 'var(--font-mono)',
                  marginBottom: '10px',
                }}
              >
                {mempoolPressure.status}
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: 'Fee Level', value: mempoolPressure.feeLevel },
                  { label: 'Pending TX', value: mempoolPressure.pendingTx },
                  { label: 'Block Fullness', value: mempoolPressure.blockFullness },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between"
                    style={{ fontSize: '12px' }}
                  >
                    <span className="text-text-secondary">{stat.label}</span>
                    <span className="font-mono text-text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signal Framework */}
            <div className="p-4 flex-1 overflow-auto">
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#F7931A',
                  marginBottom: '10px',
                }}
              >
                Bitcoin Signal Framework
              </p>

              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#666',
                  marginBottom: '6px',
                }}
              >
                Primary Signals
              </p>
              <div className="flex flex-col gap-2 mb-4">
                {signalFramework.primary.map((signal) => (
                  <div
                    key={signal.name}
                    className="flex items-center justify-between"
                    style={{ fontSize: '12px' }}
                  >
                    <span className="text-text-secondary">{signal.name}</span>
                    <div className="flex items-center gap-1.5">
                      {signal.direction === 'up' ? (
                        <ArrowUp size={11} color="#00C896" weight="bold" />
                      ) : signal.direction === 'down' ? (
                        <ArrowDown size={11} color="#FF4D4D" weight="bold" />
                      ) : (
                        <ArrowRight size={11} color="#A0A0A0" weight="bold" />
                      )}
                      <span
                        style={{
                          color:
                            signal.direction === 'up'
                              ? '#00C896'
                              : signal.direction === 'down'
                                ? '#FF4D4D'
                                : '#A0A0A0',
                        }}
                      >
                        {signal.strength}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#666',
                  marginBottom: '6px',
                }}
              >
                Secondary / Noise
              </p>
              <div className="flex flex-col gap-2 mb-4">
                {signalFramework.secondary.map((signal) => (
                  <div
                    key={signal.name}
                    className="flex items-center justify-between"
                    style={{ fontSize: '12px' }}
                  >
                    <span className="text-text-secondary">{signal.name}</span>
                    <div className="flex items-center gap-1.5">
                      {signal.direction === 'up' ? (
                        <ArrowUp size={11} color="#00C896" weight="bold" />
                      ) : signal.direction === 'down' ? (
                        <ArrowDown size={11} color="#FF4D4D" weight="bold" />
                      ) : (
                        <ArrowRight size={11} color="#A0A0A0" weight="bold" />
                      )}
                      <span
                        style={{
                          color:
                            signal.direction === 'up'
                              ? '#00C896'
                              : signal.direction === 'down'
                                ? '#FF4D4D'
                                : '#A0A0A0',
                        }}
                      >
                        {signal.strength}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#F7931A',
                  marginBottom: '6px',
                }}
              >
                Market Interpretation
              </p>
              <p
                className="text-text-secondary"
                style={{ fontSize: '11px', lineHeight: 1.5 }}
              >
                {signalFramework.interpretation}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
