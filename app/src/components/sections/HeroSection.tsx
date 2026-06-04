import {
  heroArticle,
  heroNewsItems,
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-stretch">
          {/* Left Column — Featured Article */}
          <div className="md:col-span-6 lg:col-span-5 md:flex md:flex-col">
            <Link
              href={`/${heroArticle.slug}`}
              className="group relative flex flex-col justify-end overflow-hidden rounded-xl border border-[rgba(255,255,255,0.10)] transition-all duration-200 hover:border-[rgba(247,147,26,0.45)] hover:shadow-[0_0_40px_rgba(247,147,26,0.12)] min-h-[380px] sm:min-h-[480px] md:flex-1"
              style={{
                background: `linear-gradient(to top, rgba(6,6,6,0.96) 0%, rgba(10,10,10,0.30) 55%, rgba(10,10,10,0.55) 100%), url(${heroArticle.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)', backdropFilter: 'blur(0px)' }}>
                <span
                  className="badge mb-4 inline-block"
                  style={{
                    background: 'rgba(247,147,26,0.15)',
                    color: '#F7931A',
                  }}
                >
                  {heroArticle.category}
                </span>
                <h1
                  className="mb-4 text-text-primary text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold"
                  style={{
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {heroArticle.title}
                </h1>
                <p
                  className="text-text-secondary"
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                  }}
                >
                  {heroArticle.excerpt}
                </p>

                {/* Visual CTA Buttons matching Style Reference */}
                <div className="flex flex-wrap gap-3 mt-5">
                  <span
                    className="inline-flex items-center justify-center rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200 h-[44px] sm:h-[36px]"
                    style={{
                      padding: '0 16px',
                      background: '#FFFFFF',
                      color: '#0A0A0A',
                    }}
                  >
                    Read Article ↗
                  </span>
                  <span
                    className="inline-flex items-center justify-center rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 h-[44px] sm:h-[36px]"
                    style={{
                      padding: '0 16px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                    }}
                  >
                    Markets +
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Center Column — Regime Monitor + News Items */}
          <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-4">
            {/* Bitcoin Regime Monitor */}
            <div className="card-base">
              <h3
                className="mb-3 text-center"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F7931A',
                }}
              >
                Bitcoin Regime Monitor
              </h3>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-text-secondary" style={{ fontSize: '12px' }}>
                  Current Regime
                </span>
                <span className="text-text-secondary" style={{ fontSize: '12px' }}>
                  Confidence
                </span>
              </div>
              <div className="mb-3 flex items-center justify-between">
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#00C896',
                  }}
                >
                  {regimeMonitor.currentRegime}
                </span>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {regimeMonitor.confidence}%
                </span>
              </div>
              {/* Progress Bar */}
              <div
                className="mb-3 h-1 w-full overflow-hidden rounded-full"
                style={{ background: '#2A2A2A' }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${regimeMonitor.confidence}%`,
                    background: '#00C896',
                  }}
                />
              </div>
              {/* Tabs */}
              <div className="flex gap-1">
                {regimeMonitor.tabs.map((tab) => (
                  <button
                    key={tab}
                    className="flex-1 rounded py-1 text-center transition-colors"
                    style={{
                      fontSize: '10px',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      background:
                        tab === regimeMonitor.activeTab
                          ? 'rgba(247,147,26,0.15)'
                          : 'transparent',
                      color:
                        tab === regimeMonitor.activeTab ? '#F7931A' : '#A0A0A0',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <p
                className="mt-2 text-center text-text-secondary"
                style={{ fontSize: '11px' }}
              >
                Updated: {regimeMonitor.updatedDate}
              </p>
            </div>

            {/* News Items */}
            <div className="flex flex-col gap-3">
              {heroNewsItems.map((item) => (
                <Link
                  key={item.id}
                  href="#"
                  className="card-base flex items-center gap-3 block cursor-pointer hover:translate-y-[-1px]"
                >
                  <div
                    className="shrink-0 overflow-hidden rounded-lg"
                    style={{
                      width: '64px',
                      height: '48px',
                      background: `url(${item.thumbnail}) center/cover`,
                    }}
                  />
                  <div className="min-w-0 flex-1">
                    <span
                      className="mb-1 block"
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#F7931A',
                      }}
                    >
                      {item.category}
                    </span>
                    <p
                      className="text-text-primary"
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        lineHeight: 1.4,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column — Mempool Pressure + Signal Framework */}
          <div className="hidden flex-col gap-4 lg:flex lg:col-span-3">
            {/* Mempool Pressure */}
            <div className="card-base">
              <h3
                className="mb-3 text-center"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F7931A',
                }}
              >
                Mempool Pressure
              </h3>
              <div className="mb-3 text-center">
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#FFB800',
                  }}
                >
                  {mempoolPressure.status}
                </span>
              </div>
              {/* Gauge visualization */}
              <div className="relative mx-auto mb-4" style={{ width: '120px', height: '70px' }}>
                <svg viewBox="0 0 120 70" className="w-full">
                  {/* Background arc */}
                  <path
                    d="M 10 65 A 50 50 0 0 1 110 65"
                    fill="none"
                    stroke="#2A2A2A"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Colored arc segments */}
                  <path
                    d="M 10 65 A 50 50 0 0 1 35 20"
                    fill="none"
                    stroke="#00C896"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 35 20 A 50 50 0 0 1 60 12"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 60 12 A 50 50 0 0 1 85 20"
                    fill="none"
                    stroke="#F7931A"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 85 20 A 50 50 0 0 1 110 65"
                    fill="none"
                    stroke="#FF4D4D"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Needle */}
                  <line
                    x1="60"
                    y1="65"
                    x2="80"
                    y2="25"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="65" r="4" fill="#FFFFFF" />
                </svg>
              </div>
              {/* Stats */}
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

            {/* Bitcoin Signal Framework */}
            <div className="card-base">
              <h3
                className="mb-3"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#F7931A',
                }}
              >
                Bitcoin Signal Framework
              </h3>
              {/* Primary Signals */}
              <p
                className="mb-2"
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#A0A0A0',
                }}
              >
                Primary Signals
              </p>
              <div className="mb-3 flex flex-col gap-2">
                {signalFramework.primary.map((signal) => (
                  <div
                    key={signal.name}
                    className="flex items-center justify-between"
                    style={{ fontSize: '12px' }}
                  >
                    <span className="text-text-secondary">{signal.name}</span>
                    <div className="flex items-center gap-2">
                      {signal.direction === 'up' ? (
                        <ArrowUp size={12} color="#00C896" weight="bold" />
                      ) : signal.direction === 'down' ? (
                        <ArrowDown size={12} color="#FF4D4D" weight="bold" />
                      ) : (
                        <ArrowRight size={12} color="#A0A0A0" weight="bold" />
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

              {/* Secondary / Noise */}
              <p
                className="mb-2"
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#A0A0A0',
                }}
              >
                Secondary / Noise
              </p>
              <div className="mb-3 flex flex-col gap-2">
                {signalFramework.secondary.map((signal) => (
                  <div
                    key={signal.name}
                    className="flex items-center justify-between"
                    style={{ fontSize: '12px' }}
                  >
                    <span className="text-text-secondary">{signal.name}</span>
                    <div className="flex items-center gap-2">
                      {signal.direction === 'up' ? (
                        <ArrowUp size={12} color="#00C896" weight="bold" />
                      ) : signal.direction === 'down' ? (
                        <ArrowDown size={12} color="#FF4D4D" weight="bold" />
                      ) : (
                        <ArrowRight size={12} color="#A0A0A0" weight="bold" />
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

              {/* Market Interpretation */}
              <p
                className="mb-2"
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#F7931A',
                }}
              >
                Market Interpretation
              </p>
              <p className="text-text-secondary" style={{ fontSize: '12px', lineHeight: 1.5 }}>
                {signalFramework.interpretation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
