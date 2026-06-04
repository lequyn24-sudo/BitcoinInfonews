import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { guidesArticle, guideUseCasePaths } from '@/lib/mock-data';
import Link from 'next/link';

export default function GuidesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-12">
        <div className="mb-8">
          <span className="section-eyebrow">Category</span>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Bitcoin Guides
          </h1>
          <p className="mt-2 text-text-secondary" style={{ fontSize: '14px' }}>
            Evergreen guides for wallets, custody, halving, security, and buying Bitcoin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured */}
          <Link href={`/${guidesArticle.slug}`} className="card-featured overflow-hidden block !p-0 group">
            <div
              style={{
                height: '240px',
                background: `linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(10,10,10,0.2) 60%), url(${guidesArticle.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="p-5">
              <span className="badge mb-2 inline-block" style={{ background: 'rgba(247,147,26,0.15)', color: '#F7931A' }}>
                {guidesArticle.category}
              </span>
              <h2 className="mb-2 text-text-primary group-hover:text-amber transition-colors" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.3 }}>
                {guidesArticle.title}
              </h2>
              <p className="text-text-secondary mb-3" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                {guidesArticle.excerpt}
              </p>
              <p className="text-text-secondary" style={{ fontSize: '12px' }}>
                {guidesArticle.author} · {guidesArticle.date} · {guidesArticle.readTime}
              </p>
            </div>
          </Link>

          {/* Use Case Paths */}
          <div className="card-base">
            <h3 className="mb-1" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#F7931A' }}>
              Choose Your Path
            </h3>
            <p className="mb-4 text-text-secondary" style={{ fontSize: '13px' }}>
              Find the right guide for your Bitcoin journey.
            </p>
            <div className="flex flex-col gap-3">
              {guideUseCasePaths.map((path) => (
                <div key={path.title} className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-white/5 cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex shrink-0 items-center justify-center rounded-lg" style={{ width: '40px', height: '40px', background: 'rgba(247,147,26,0.1)', color: '#F7931A' }}>
                    <span style={{ fontSize: '18px' }}>→</span>
                  </div>
                  <div>
                    <p className="text-text-primary" style={{ fontSize: '14px', fontWeight: 600 }}>{path.title}</p>
                    <p className="text-text-secondary" style={{ fontSize: '12px' }}>{path.subtitle}</p>
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
