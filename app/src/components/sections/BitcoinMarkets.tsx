import { marketsArticle, marketsRelated } from '@/lib/mock-data';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

export function BitcoinMarkets() {
  return (
    <section id="markets" className="w-full">
      {/* Section Header */}
      <div className="mb-2 flex items-end justify-between border-b border-border pb-3">
        <div>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            Bitcoin Markets
          </h2>
          <p className="mt-1 text-text-secondary" style={{ fontSize: '12px' }}>
            Built from /bitcoin-markets with trader intent, price structure, and cycle-focused coverage.
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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Featured Article */}
        <Link
          href={`/${marketsArticle.slug}`}
          className="card-base overflow-hidden block"
        >
          <div
            className="relative"
            style={{
              height: '200px',
              background: `linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%), url(${marketsArticle.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="p-4">
            <span
              className="badge mb-2 inline-block"
              style={{
                background: 'rgba(255,77,77,0.15)',
                color: '#FF4D4D',
              }}
            >
              {marketsArticle.category}
            </span>
            <h3
              className="mb-3 text-text-primary"
              style={{
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {marketsArticle.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {marketsArticle.tags.map((tag) => (
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

        {/* Related Coverage */}
        <div className="flex flex-col gap-4">
          {marketsRelated.map((item, idx) => (
            <div
              key={idx}
              className="card-base flex flex-col justify-center p-4"
            >
              <span
                className="mb-1 text-text-secondary"
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {item.category}
              </span>
              <h4
                className="mb-2 text-text-primary"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {item.title}
              </h4>
              <span
                className="inline-flex w-fit rounded border border-border px-2 py-0.5 text-text-secondary"
                style={{ fontSize: '11px' }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
