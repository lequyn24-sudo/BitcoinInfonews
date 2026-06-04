import { Article } from '@/lib/mock-data';
import { ArrowRight, Hash } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

interface HomeCategorySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  articles: Article[];
  accentColor?: string;
}

function TrendingTags({ articles, accentColor }: { articles: Article[]; accentColor: string }) {
  // Count tag frequency across all articles
  const freq: Record<string, number> = {};
  articles.forEach((a) => a.tags.forEach((t) => { freq[t] = (freq[t] ?? 0) + 1; }));
  const sorted = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([tag]) => tag);

  return (
    <div className="card-base">
      <div className="flex items-center gap-2 mb-3">
        <Hash size={12} style={{ color: accentColor }} />
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: accentColor }}>
          Trending Tags
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {sorted.map((tag) => (
          <span
            key={tag}
            className="cursor-pointer rounded-full transition-all duration-150 hover:border-amber/50 hover:text-amber"
            style={{
              fontSize: '11px',
              fontWeight: 500,
              padding: '4px 10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.10)',
              color: '#A0A0A0',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HomeCategorySection({
  id,
  eyebrow,
  title,
  description,
  href,
  articles,
  accentColor = '#F7931A',
}: HomeCategorySectionProps) {
  const [featured, ...related] = articles.slice(0, 4);

  return (
    <section id={id} className="w-full">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between border-b border-[rgba(255,255,255,0.08)] pb-4">
        <div>
          <span className="section-eyebrow">{eyebrow}</span>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </h2>
          <p className="mt-2 text-text-secondary" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="flex items-center gap-1 whitespace-nowrap text-text-secondary transition-colors hover:text-amber"
          style={{ fontSize: '12px' }}
        >
          Explore section <ArrowRight size={12} />
        </Link>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Featured Article */}
        {featured && (
          <Link
            href={`/${featured.slug}`}
            className="card-featured overflow-hidden block !p-0 group"
          >
            <div
              className="relative"
              style={{
                height: '200px',
                background: `linear-gradient(to top, rgba(6,6,6,0.93) 0%, rgba(10,10,10,0.25) 60%), url(${featured.thumbnail})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="p-4">
              <span
                className="badge mb-2 inline-block"
                style={{ background: `${accentColor}20`, color: accentColor }}
              >
                {featured.category}
              </span>
              <h3
                className="mb-3 text-text-primary group-hover:text-amber transition-colors"
                style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.3 }}
              >
                {featured.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {featured.tags.slice(0, 3).map((tag) => (
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
          </Link>
        )}

        {/* Related Articles + Trending Tags */}
        <div className="flex flex-col gap-3">
          {related.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/${article.slug}`}
              className="card-base flex flex-col justify-center group cursor-pointer"
            >
              <span
                className="mb-1 block"
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: accentColor,
                }}
              >
                {article.category}
              </span>
              <p
                className="text-text-primary group-hover:text-amber transition-colors"
                style={{ fontSize: '14px', fontWeight: 600, lineHeight: 1.4 }}
              >
                {article.title}
              </p>
              <p className="mt-1 text-text-secondary" style={{ fontSize: '12px' }}>
                {article.date} · {article.readTime}
              </p>
            </Link>
          ))}

          {/* Trending Tags — fills remaining height */}
          <TrendingTags articles={articles} accentColor={accentColor ?? '#F7931A'} />
        </div>
      </div>
    </section>
  );
}
