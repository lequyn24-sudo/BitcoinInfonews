import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { allArticles } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-12">
        <div className="mb-8">
          <span className="section-eyebrow">Category</span>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Bitcoin News
          </h1>
          <p className="mt-2 text-text-secondary" style={{ fontSize: '14px' }}>
            Latest coverage on Bitcoin markets, regulation, and network fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allArticles.map((article) => (
            <Link key={article.id} href={`/${article.slug}`} className="card-featured overflow-hidden block !p-0 group">
              <div
                className="relative"
                style={{
                  height: '200px',
                  background: `linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(10,10,10,0.2) 60%), url(${article.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-4">
                <span className="badge mb-2 inline-block" style={{ background: 'rgba(247,147,26,0.15)', color: '#F7931A' }}>
                  {article.category}
                </span>
                <h2 className="mb-2 text-text-primary group-hover:text-amber transition-colors" style={{ fontSize: '16px', fontWeight: 700, lineHeight: 1.3 }}>
                  {article.title}
                </h2>
                <p className="text-text-secondary" style={{ fontSize: '12px' }}>
                  {article.author} · {article.date} · {article.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
