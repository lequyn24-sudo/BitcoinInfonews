import { getArticleBySlug, allArticles } from '@/lib/api';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ReadingProgressBar } from '@/components/sections/ReadingProgressBar';
import { TableOfContents } from '@/components/sections/TableOfContents';
import { LivePriceWidget } from '@/components/sections/LivePriceWidget';
import { NewsletterSignup } from '@/components/sections/NewsletterSignup';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related articles (exclude current one)
  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <ReadingProgressBar />

      <main style={{ background: '#0A0A0A' }} className="min-h-screen">
        {/* Zone A — Article Header */}
        <div
          className="relative w-full overflow-hidden min-h-[320px] md:h-[400px] flex items-end py-8 md:py-0"
          style={{
            background: `linear-gradient(to top, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.6) 100%), url(${article.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-end px-6 pb-8 pt-24 md:pt-0">
            <div className="max-w-[860px]">
              {/* Breadcrumb */}
              <div className="mb-4 flex items-center gap-1.5 font-mono text-[11px] text-text-secondary">
                <Link href="/" className="hover:text-amber transition-colors">
                  HOME
                </Link>
                <span>›</span>
                <span className="uppercase text-white">{article.category}</span>
              </div>

              {/* Title */}
              <h1
                className="mb-4 text-text-primary text-2xl sm:text-3xl md:text-4xl font-extrabold"
                style={{
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-text-secondary">
                <span className="text-white font-semibold">{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span className="rounded bg-carbon px-2 py-0.5 border border-border text-[10px] text-amber uppercase font-semibold">
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Zone B — Article Body + Sidebar */}
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Column - Article Body */}
            <div className="lg:col-span-8">
              <article
                className="prose prose-invert max-w-[720px] text-text-primary text-[16px] leading-[1.75]"
                style={{
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {/* Dynamically Inject HTML Content */}
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />
              </article>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border px-2.5 py-1 text-text-secondary font-mono"
                    style={{ fontSize: '11px' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Zone C — Share Buttons */}
              <div className="mt-8 flex items-center gap-4 rounded-xl border border-border p-4 bg-carbon">
                <span className="text-xs text-text-secondary font-mono uppercase tracking-wider">
                  Share Article:
                </span>
                <div className="flex gap-2">
                  {['Twitter', 'LinkedIn', 'Telegram'].map((platform) => (
                    <button
                      key={platform}
                      className="rounded border border-border bg-void px-3 py-1.5 font-mono text-xs text-text-secondary hover:border-amber hover:text-white transition-colors cursor-pointer"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4">
              <div className="flex flex-col gap-6 lg:sticky" style={{ top: '88px' }}>
                {/* AS1 — Table of Contents */}
                {article.toc && article.toc.length > 0 && (
                  <TableOfContents toc={article.toc} />
                )}

                {/* AS2 — Live Price */}
                <LivePriceWidget />

                {/* AS3 — Related Articles */}
                <div className="card-base p-4">
                  <h3
                    className="mb-3 text-text-secondary"
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Related Coverage
                  </h3>
                  <div className="flex flex-col gap-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/${rel.slug}`}
                        className="group block border-b border-border pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="block font-mono text-[9px] text-amber uppercase tracking-wider mb-1">
                          {rel.category}
                        </span>
                        <h4 className="text-xs text-text-primary font-semibold group-hover:text-amber transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* AS4 — Newsletter */}
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
