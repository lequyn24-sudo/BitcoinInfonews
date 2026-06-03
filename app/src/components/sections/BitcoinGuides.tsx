import { guidesArticle, guideUseCasePaths } from '@/lib/mock-data';
import {
  RocketLaunch,
  ShieldCheck,
  Hammer,
  ChartLineUp,
  CaretRight,
  ArrowRight,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const pathIcons: Record<string, React.ReactNode> = {
  rocket: <RocketLaunch size={20} weight="regular" />,
  shield: <ShieldCheck size={20} weight="regular" />,
  pickaxe: <Hammer size={20} weight="regular" />,
  chart: <ChartLineUp size={20} weight="regular" />,
};

export function BitcoinGuides() {
  return (
    <section id="guides" className="w-full">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-[rgba(255,255,255,0.08)] pb-4">
        <div>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            Bitcoin Guides
          </h2>
          <p className="mt-1 text-text-secondary" style={{ fontSize: '12px' }}>
            Evergreen SEO cluster powered by /bitcoin-guides/wallets, /halving, /security, and /buying-bitcoin.
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
        {/* Featured Guide */}
        <Link
          href={`/${guidesArticle.slug}`}
          className="card-base overflow-hidden block"
        >
          <div
            className="relative"
            style={{
              height: '200px',
              background: `linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%), url(${guidesArticle.thumbnail})`,
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
              {guidesArticle.category}
            </span>
            <h3
              className="mb-3 text-text-primary"
              style={{
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {guidesArticle.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {guidesArticle.tags.map((tag) => (
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

        {/* Guide Use Case Path */}
        <div className="card-base p-4">
          <h3
            className="mb-1"
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#F7931A',
            }}
          >
            Guide Use Case Path
          </h3>
          <p className="mb-4 text-text-secondary" style={{ fontSize: '12px' }}>
            Choose your path to find the right guides.
          </p>
          <div className="flex flex-col gap-2">
            {guideUseCasePaths.map((path) => (
              <a
                key={path.title}
                href="#"
                className="flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-amber/40 hover:bg-graphite"
              >
                <div
                  className="flex shrink-0 items-center justify-center rounded-lg"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(247,147,26,0.1)',
                    color: '#F7931A',
                  }}
                >
                  {pathIcons[path.icon] || <RocketLaunch size={20} />}
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className="block text-text-primary"
                    style={{ fontSize: '13px', fontWeight: 600 }}
                  >
                    {path.title}
                  </span>
                  <span
                    className="block text-text-secondary"
                    style={{ fontSize: '11px' }}
                  >
                    {path.subtitle}
                  </span>
                </div>
                <CaretRight size={16} className="shrink-0 text-text-secondary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
