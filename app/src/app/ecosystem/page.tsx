import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ecosystemArticle, bitcoinStackMap } from '@/lib/mock-data';
import Link from 'next/link';

export default function EcosystemPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-12">
        <div className="mb-8">
          <span className="section-eyebrow">Category</span>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Bitcoin Ecosystem
          </h1>
          <p className="mt-2 text-text-secondary" style={{ fontSize: '14px' }}>
            Lightning Network, Layer-2 protocols, DeFi on Bitcoin, and developer activity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Link href={`/${ecosystemArticle.slug}`} className="card-featured overflow-hidden block !p-0 group lg:col-span-2">
            <div style={{ height: '220px', background: `linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(10,10,10,0.2) 60%), url(${ecosystemArticle.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="p-5">
              <span className="badge mb-2 inline-block" style={{ background: 'rgba(247,147,26,0.15)', color: '#F7931A' }}>{ecosystemArticle.category}</span>
              <h2 className="mb-2 text-text-primary group-hover:text-amber transition-colors" style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.3 }}>{ecosystemArticle.title}</h2>
              <p className="text-text-secondary mb-3" style={{ fontSize: '14px', lineHeight: 1.6 }}>{ecosystemArticle.excerpt}</p>
              <p className="text-text-secondary" style={{ fontSize: '12px' }}>{ecosystemArticle.author} · {ecosystemArticle.date}</p>
            </div>
          </Link>

          <div className="card-base">
            <h3 className="mb-4" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F7931A' }}>
              Bitcoin Stack Map
            </h3>
            <div className="flex flex-col gap-4">
              {bitcoinStackMap.map((layer) => (
                <div key={layer.title} className="flex items-start gap-3">
                  <div className="shrink-0 rounded-lg flex items-center justify-center" style={{ width: '32px', height: '32px', background: 'rgba(247,147,26,0.1)', color: '#F7931A', fontSize: '14px' }}>→</div>
                  <div>
                    <p className="text-text-primary" style={{ fontSize: '13px', fontWeight: 600 }}>{layer.title}</p>
                    <p className="text-text-secondary" style={{ fontSize: '11px' }}>{layer.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
