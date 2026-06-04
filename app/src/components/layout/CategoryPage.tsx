import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Article } from '@/lib/mock-data';
import Link from 'next/link';

interface CategoryPageProps {
  eyebrow: string;
  title: string;
  description: string;
  articles: Article[];
  accentColor?: string;
}

export function CategoryPage({ eyebrow, title, description, articles, accentColor = '#F7931A' }: CategoryPageProps) {
  const [featured, ...rest] = articles;

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-12">
        {/* Header */}
        <div className="mb-10 reveal">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            {title}
          </h1>
          <p className="mt-3 text-text-secondary" style={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '560px' }}>
            {description}
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <Link href={`/${featured.slug}`} className="card-featured overflow-hidden block !p-0 group mb-8 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                style={{
                  minHeight: '280px',
                  background: `linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 80%), url(${featured.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-6 flex flex-col justify-center">
                <span className="badge mb-3 inline-block" style={{ background: `${accentColor}20`, color: accentColor }}>
                  {featured.category}
                </span>
                <h2 className="mb-3 text-text-primary group-hover:text-amber transition-colors" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.3 }}>
                  {featured.title}
                </h2>
                <p className="text-text-secondary mb-4" style={{ fontSize: '14px', lineHeight: 1.65 }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-text-secondary" style={{ fontSize: '12px' }}>
                    {featured.author} · {featured.date} · {featured.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, i) => (
            <Link
              key={article.id}
              href={`/${article.slug}`}
              className={`card-featured overflow-hidden block !p-0 group reveal reveal-delay-${Math.min(i % 3 + 1, 5) as 1|2|3}`}
            >
              <div
                style={{
                  height: '180px',
                  background: `linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(10,10,10,0.2) 60%), url(${article.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="p-4">
                <span className="badge mb-2 inline-block" style={{ background: `${accentColor}18`, color: accentColor }}>
                  {article.category}
                </span>
                <h3 className="mb-2 text-text-primary group-hover:text-amber transition-colors" style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.35 }}>
                  {article.title}
                </h3>
                <p className="text-text-secondary" style={{ fontSize: '12px' }}>
                  {article.date} · {article.readTime}
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
