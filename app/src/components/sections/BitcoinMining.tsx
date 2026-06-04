import {
  miningArticle,
  minerStressDashboard,
  miningRelated,
} from '@/lib/mock-data';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export function BitcoinMining() {
  return (
    <section id="mining" className="w-full">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-[rgba(255,255,255,0.08)] pb-4 reveal">
        <div>
          <span className="section-eyebrow">Mining</span>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            Bitcoin Mining
          </h2>
          <p className="mt-2 text-text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            Difficulty, hashrate, miner economics, and on-chain fundamentals.
          </p>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 whitespace-nowrap text-text-secondary transition-colors hover:text-amber"
          style={{ fontSize: '12px' }}
        >
          Explore section <ArrowRight size={12} />
        </a>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Featured Article */}
        <Link
          href={`/${miningArticle.slug}`}
          className="card-featured overflow-hidden block"
        >
          <div
            className="relative"
            style={{
              height: '160px',
              background: `linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%), url(${miningArticle.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="p-4">
            <span
              className="badge mb-2 inline-block"
              style={{
                background: 'rgba(247,147,26,0.15)',
                color: '#F7931A',
              }}
            >
              {miningArticle.category}
            </span>
            <h3
              className="mb-3 text-text-primary"
              style={{
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {miningArticle.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {miningArticle.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-border px-2 py-1 text-text-secondary"
                  style={{ fontSize: '11px' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Miner Stress Dashboard + Related */}
        <div className="flex flex-col gap-4">
          {/* Miner Stress Dashboard */}
          <div className="card-base">
            <h3
              className="mb-4"
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#F7931A',
              }}
            >
              Miner Stress Dashboard
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div>
                <p className="text-text-secondary" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Hashprice
                </p>
                <p className="font-mono text-text-primary" style={{ fontSize: '18px', fontWeight: 600 }}>
                  {minerStressDashboard.hashprice}
                </p>
                <p className="text-text-secondary" style={{ fontSize: '10px' }}>
                  {minerStressDashboard.hashpriceUnit}
                </p>
              </div>
              <div>
                <p className="text-text-secondary" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Difficulty Trend
                </p>
                <p className="font-mono" style={{ fontSize: '18px', fontWeight: 600, color: '#00C896' }}>
                  {minerStressDashboard.difficultyTrend}
                </p>
                <p className="text-text-secondary" style={{ fontSize: '10px' }}>
                  {minerStressDashboard.difficultyPeriod}
                </p>
              </div>
              <div>
                <p className="text-text-secondary" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Fee Share
                </p>
                <p className="font-mono text-text-primary" style={{ fontSize: '18px', fontWeight: 600 }}>
                  {minerStressDashboard.feeShare}
                </p>
                <p className="text-text-secondary" style={{ fontSize: '10px' }}>
                  {minerStressDashboard.feeShareLabel}
                </p>
              </div>
              <div>
                <p className="text-text-secondary" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Treasury Pressure
                </p>
                <p className="font-mono" style={{ fontSize: '18px', fontWeight: 600, color: '#00C896' }}>
                  {minerStressDashboard.treasuryPressure}
                </p>
                <p className="text-text-secondary" style={{ fontSize: '10px' }}>
                  {minerStressDashboard.treasuryLabel}
                </p>
              </div>
            </div>
          </div>

          {/* Related Coverage */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {miningRelated.map((item, idx) => (
              <div key={idx} className="card-base">
                <span
                  className="mb-1 block text-text-secondary"
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.category}
                </span>
                <p
                  className="text-text-primary"
                  style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.4 }}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
