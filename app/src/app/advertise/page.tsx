import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ChartLineUp, Users, Newspaper, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr';

const formats = [
  { icon: <Newspaper size={20} />, name: 'Sponsored Article', desc: 'Full editorial-style article published in your target category with your brand and key messages.', price: 'From $500' },
  { icon: <ChartLineUp size={20} />, name: 'Banner Placement', desc: 'Strategic placement across homepage and category pages with high-intent Bitcoin audience.', price: 'From $200/week' },
  { icon: <EnvelopeSimple size={20} />, name: 'Newsletter Inclusion', desc: 'Dedicated section in our daily Bitcoin Briefing newsletter sent to 50,000+ subscribers.', price: 'From $350/send' },
  { icon: <Users size={20} />, name: 'Content Partnership', desc: 'Long-term brand integration across editorial coverage, events, and distribution channels.', price: 'Custom pricing' },
];

export default function AdvertisePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-16">
        <div className="mb-12 max-w-[560px]">
          <span className="section-eyebrow">Company</span>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px' }}>
            Advertise With Us
          </h1>
          <p className="text-text-secondary" style={{ fontSize: '16px', lineHeight: 1.75 }}>
            Reach 50,000+ Bitcoin-first readers — investors, miners, developers, and institutional professionals who trust BitcoinInfoNews for market intelligence.
          </p>
        </div>

        {/* Audience stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-12">
          {[
            { value: '50K+', label: 'Monthly Readers' },
            { value: '12K+', label: 'Newsletter Subscribers' },
            { value: '8 min', label: 'Avg. Time on Site' },
            { value: '65%', label: 'Return Visitors' },
          ].map((s) => (
            <div key={s.label} className="card-base text-center">
              <p style={{ fontSize: '28px', fontWeight: 800, color: '#F7931A', fontFamily: 'var(--font-mono)', lineHeight: 1.1 }}>{s.value}</p>
              <p className="text-text-secondary mt-1" style={{ fontSize: '12px' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Ad formats */}
        <div className="mb-12">
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>Advertising Formats</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {formats.map((f) => (
              <div key={f.name} className="card-base">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center rounded-lg" style={{ width: '36px', height: '36px', background: 'rgba(247,147,26,0.1)', color: '#F7931A' }}>
                    {f.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>{f.name}</p>
                    <p style={{ fontSize: '12px', color: '#F7931A', fontWeight: 600 }}>{f.price}</p>
                  </div>
                </div>
                <p className="text-text-secondary" style={{ fontSize: '13px', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="card-base max-w-[480px]">
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Get in touch</h3>
          <p className="text-text-secondary mb-4" style={{ fontSize: '13px', lineHeight: 1.6 }}>
            Contact our advertising team for media kit, audience demographics, and custom packages.
          </p>
          <a
            href="mailto:ads@bitcoininfornews.com"
            className="inline-flex items-center gap-2 rounded-lg font-semibold transition-all hover:opacity-90"
            style={{ height: '44px', padding: '0 20px', background: '#F7931A', color: '#000', fontSize: '14px' }}
          >
            <EnvelopeSimple size={16} />
            ads@bitcoininfornews.com
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
