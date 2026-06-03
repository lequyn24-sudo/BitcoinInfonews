import {
  ecosystemArticle,
  bitcoinStackMap,
  capitalRotationFlow,
} from '@/lib/mock-data';
import {
  Cube,
  Lightning,
  Bank,
  Users,
  ArrowRight,
  ArrowsClockwise,
} from '@phosphor-icons/react/dist/ssr';

const stackIcons: Record<string, React.ReactNode> = {
  cube: <Cube size={18} weight="regular" />,
  lightning: <Lightning size={18} weight="regular" />,
  bank: <Bank size={18} weight="regular" />,
  users: <Users size={18} weight="regular" />,
};

export function BitcoinEcosystem() {
  return (
    <section id="ecosystem" className="w-full">
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
            Bitcoin Ecosystem
          </h2>
          <p className="mt-1 text-text-secondary" style={{ fontSize: '12px' }}>
            Long horizon narrative coverage for /bitcoin-ecosystem/lightning, /ordinals, /layer2, and /defi-on-bitcoin.
          </p>
        </div>
      </div>

      {/* Content Grid — 3 columns */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Featured Article */}
        <div className="card-base overflow-hidden">
          <div
            className="relative"
            style={{
              height: '160px',
              background: `linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%), url(${ecosystemArticle.thumbnail})`,
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
              {ecosystemArticle.category}
            </span>
            <h3
              className="mb-3 text-text-primary"
              style={{
                fontSize: '15px',
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              {ecosystemArticle.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {ecosystemArticle.tags.map((tag) => (
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
        </div>

        {/* Bitcoin Stack Map */}
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
            Bitcoin Stack Map
          </h3>
          <p className="mb-4 text-text-secondary" style={{ fontSize: '11px' }}>
            Explore the layers of the Bitcoin economy.
          </p>
          <div className="flex flex-col gap-3">
            {bitcoinStackMap.map((layer) => (
              <div key={layer.title} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex shrink-0 items-center justify-center rounded-lg"
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(247,147,26,0.1)',
                    color: '#F7931A',
                  }}
                >
                  {stackIcons[layer.icon] || <Cube size={18} />}
                </div>
                <div>
                  <span
                    className="block text-text-primary"
                    style={{ fontSize: '13px', fontWeight: 600 }}
                  >
                    {layer.title}
                  </span>
                  <span className="text-text-secondary" style={{ fontSize: '11px' }}>
                    {layer.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bitcoin Capital Rotation Map */}
        <div className="card-base p-4">
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
            Bitcoin Capital Rotation Map
          </h3>
          {/* Flow Diagram */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {capitalRotationFlow.map((step, idx) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div
                    className="mb-1 flex items-center justify-center rounded-lg"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#242424',
                      border: '1px solid #2A2A2A',
                    }}
                  >
                    <ArrowsClockwise size={18} color="#A0A0A0" />
                  </div>
                  <span
                    className="text-center text-text-secondary"
                    style={{ fontSize: '9px', maxWidth: '60px' }}
                  >
                    {step}
                  </span>
                </div>
                {idx < capitalRotationFlow.length - 1 && (
                  <ArrowRight size={14} className="mb-4 text-text-secondary" />
                )}
              </div>
            ))}
          </div>
          <p
            className="mt-4 text-center text-text-secondary"
            style={{ fontSize: '11px', fontStyle: 'italic' }}
          >
            Capital is rotating. Follow the flow.
          </p>
        </div>
      </div>
    </section>
  );
}
