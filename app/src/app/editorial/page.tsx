import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

const standards = [
  { title: 'Accuracy First', body: 'All factual claims must be verified through at least two independent sources. On-chain data takes precedence over secondary analysis.' },
  { title: 'No Paid Editorial', body: 'No article is published in exchange for payment. Sponsored content is clearly labeled and separated from editorial coverage.' },
  { title: 'Corrections Policy', body: 'Errors are corrected promptly with a visible correction notice. We do not silently edit published articles.' },
  { title: 'Source Transparency', body: 'Primary sources are linked wherever possible. Anonymous sources are used only when necessary and validated independently.' },
  { title: 'Conflict of Interest', body: 'Editorial staff disclose any personal financial positions in assets covered. Holdings do not influence coverage decisions.' },
  { title: 'Bitcoin-First Lens', body: 'Coverage is evaluated through the lens of Bitcoin\'s long-term network health, not short-term price speculation.' },
];

export default function EditorialPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-16">
        <div className="max-w-[720px]">
          <span className="section-eyebrow">Company</span>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px' }}>
            Editorial Standards
          </h1>
          <p className="text-text-secondary" style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '40px' }}>
            BitcoinInfoNews is committed to accurate, transparent, and independent journalism. These standards govern every piece of content we publish.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {standards.map((s) => (
              <div key={s.title} className="card-base">
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle size={16} color="#00C896" weight="fill" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF' }}>{s.title}</h3>
                </div>
                <p className="text-text-secondary" style={{ fontSize: '13px', lineHeight: 1.6, paddingLeft: '28px' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
