import { dashboardCards } from '@/lib/mock-data';
import {
  ChartLineUp,
  Globe,
  HardDrive,
  Timer,
  LinkSimple,
  Fire,
} from '@phosphor-icons/react/dist/ssr';

const iconMap: Record<string, React.ReactNode> = {
  etf: <ChartLineUp size={20} weight="regular" />,
  macro: <Globe size={20} weight="regular" />,
  miner: <HardDrive size={20} weight="regular" />,
  options: <Timer size={20} weight="regular" />,
  onchain: <LinkSimple size={20} weight="regular" />,
};

export function DashboardCards() {
  return (
    <section
      id="dashboard"
      className="relative w-full"
      style={{ background: '#0A0A0A' }}
    >
      <div className="mx-auto max-w-[1200px] px-6 pb-8">
        {/* Section Header */}
        <div
          className="mb-4 flex items-center gap-2 border-b border-border pb-3"
        >
          <h2
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            What Moves Bitcoin This Week
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dashboardCards.map((card) => (
            <div key={card.title} className="card-base p-4">
              {/* Icon + Title */}
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'rgba(247,147,26,0.1)',
                    color: '#F7931A',
                  }}
                >
                  {iconMap[card.icon] || <Fire size={20} weight="regular" />}
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  {card.title}
                </span>
              </div>

              {/* Description */}
              <p
                className="mb-3 text-text-secondary"
                style={{
                  fontSize: '12px',
                  lineHeight: 1.5,
                }}
              >
                {card.description}
              </p>

              {/* Impact Level */}
              <div className="flex items-center justify-between">
                <span className="text-text-secondary" style={{ fontSize: '11px' }}>
                  Impact:{' '}
                  <span style={{ color: card.impactColor, fontWeight: 600 }}>
                    {card.impact}
                  </span>
                </span>
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: '20px',
                    height: '20px',
                    background: `${card.impactColor}20`,
                    color: card.impactColor,
                  }}
                >
                  <Fire size={12} weight="fill" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
