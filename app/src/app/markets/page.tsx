import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { marketsArticle } from '@/lib/mock-data';
import { marketsRelated } from '@/lib/mock-data';
import Link from 'next/link';

export default function MarketsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-12">
        <div className="mb-8">
          <span className="section-eyebrow">Category</span>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Bitcoin Markets
          </h1>
          <p className="mt-2 text-text-secondary" style={{ fontSize: '14px' }}>
            Price structure, ETF flows, macro liquidity, and cycle-focused market coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured */}
          <Link href={`/${marketsArticle.slug}`} className="card-featured overflow-hidden block !p-0 group">
            <div
              className="relative"
              style={{
                height: '240px',
                background: `linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(10,10,10,0.2) 60%), url(${marketsArticle.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="p-5">
              <span className="badge mb-2 inline-block" style={{ background: 'rgba(255,77,77,0.15)', color: '#FF4D4D' }}>
                {marketsArticle.category}
              </span>
              <h2 className="mb-2 text-text-primary group-hover:text-amber transition-colors" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3 }}>
                {marketsArticle.title}
              </h2>
              <p className="text-text-secondary mb-3" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {marketsArticle.excerpt}
              </p>
              <p className="text-text-secondary" style={{ fontSize: '12px' }}>
                {marketsArticle.author} · {marketsArticle.date} · {marketsArticle.readTime}
              </p>
            </div>
          </Link>

          {/* Related */}
          <div className="flex flex-col gap-4">
            {marketsRelated.map((item, i) => (
              <div key={i} className="card-base">
                <span className="mb-1 block" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F7931A' }}>
                  {item.tag}
                </span>
                <p className="text-text-primary" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4 }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
