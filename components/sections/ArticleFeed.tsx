import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Article, ArticleCategory } from "@/types";

interface ArticleFeedProps {
  articles: Article[];
  showSection?: boolean;
  sectionTitle?: string;
  sectionHref?: string;
}

function TopStoryCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group block bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] overflow-hidden hover:border-[rgba(247,147,26,0.4)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)] transition-all duration-200"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] bg-[#242424]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.9) 100%)",
          }}
        />
        <div className="absolute top-3 left-3">
          {article.isBreaking && <Badge variant="breaking">Breaking</Badge>}
          {article.isSponsored && <Badge variant="sponsored">Sponsored</Badge>}
          {!article.isBreaking && !article.isSponsored && (
            <Badge variant="category">{article.categoryLabel}</Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-[24px] font-[700] text-white leading-[1.3] line-clamp-2 group-hover:text-[#F7931A] transition-colors mb-2">
          {article.title}
        </p>
        <p className="text-[16px] text-[#A0A0A0] leading-[1.6] line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 text-[13px] text-[#A0A0A0]">
          <span>{article.author}</span>
          <span>·</span>
          <span>{formatDate(article.date)}</span>
          <span>·</span>
          <span>{article.readTime} min read</span>
          <ArrowUpRight size={14} className="ml-auto text-[#A0A0A0] group-hover:text-[#F7931A] transition-colors" />
        </div>
      </div>
    </Link>
  );
}

function SecondaryCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group block bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] overflow-hidden hover:border-[rgba(247,147,26,0.4)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)] transition-all duration-200"
    >
      <div className="relative w-full aspect-[16/9] bg-[#242424]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
      </div>
      <div className="p-[12px]">
        <Badge variant="category" className="mb-2">{article.categoryLabel}</Badge>
        <p className="text-[16px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors">
          {article.title}
        </p>
        <p className="text-[12px] text-[#A0A0A0] mt-2">
          {article.author} · {formatDate(article.date)}
        </p>
      </div>
    </Link>
  );
}

function CompactCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group flex gap-3 py-[12px] border-b border-[#2A2A2A] last:border-0 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-[80px] h-[80px] flex-shrink-0 rounded-[8px] overflow-hidden bg-[#242424]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          {article.isBreaking && <Badge variant="breaking">Breaking</Badge>}
          {article.isSponsored && <Badge variant="sponsored">Sponsored</Badge>}
          {!article.isBreaking && !article.isSponsored && (
            <Badge variant="category">{article.categoryLabel}</Badge>
          )}
        </div>
        <p className="text-[14px] font-[500] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors">
          {article.title}
        </p>
        <p className="text-[12px] text-[#A0A0A0] mt-1">
          {article.author} · {formatDate(article.date)}
        </p>
      </div>
    </Link>
  );
}

function SponsoredCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group block bg-[#1A1A1A] border border-[#2A2A2A] border-t-[2px] border-t-[#FFB800] rounded-[12px] overflow-hidden hover:border-[rgba(247,147,26,0.4)] transition-all duration-200"
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="sponsored">▲ Sponsored</Badge>
          <span className="text-[11px] text-[#A0A0A0]">SPONSOR</span>
        </div>
        <div className="relative w-full aspect-[16/9] rounded-[8px] overflow-hidden bg-[#242424] mb-3">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        <p className="text-[16px] font-[600] text-white line-clamp-2 mb-2">
          {article.title}
        </p>
        <p className="text-[11px] text-[#A0A0A0] italic">
          This is sponsored content.
        </p>
      </div>
    </Link>
  );
}

export function ArticleFeed({
  articles,
  showSection = true,
  sectionTitle = "Latest News",
  sectionHref = "/bitcoin-news",
}: ArticleFeedProps) {
  if (!articles.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-[16px] text-[#A0A0A0]">No articles found.</p>
      </div>
    );
  }

  const [topStory, ...rest] = articles;
  const secondary = rest.filter((a) => !a.isSponsored).slice(0, 4);
  const compact = rest.filter((a) => !a.isSponsored).slice(4);
  const sponsored = articles.filter((a) => a.isSponsored);

  return (
    <div className="flex flex-col gap-6">
      {/* Section header */}
      {showSection && (
        <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3">
          <p className="text-[13px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0]">
            {sectionTitle}
          </p>
          <Link
            href={sectionHref}
            className="flex items-center gap-1 text-[12px] text-[#F7931A] hover:underline"
          >
            View All <ArrowRight size={12} />
          </Link>
        </div>
      )}

      {/* Top story */}
      <TopStoryCard article={topStory} />

      {/* Secondary 2-up grid */}
      {secondary.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondary.slice(0, 2).map((article) => (
            <SecondaryCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {/* Compact list */}
      {compact.length > 0 && (
        <div>
          {compact.map((article) => (
            <CompactCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {/* Sponsored */}
      {sponsored.length > 0 && (
        <div className="mt-2">
          <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-3 mb-4">
            <p className="text-[13px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0]">
              Sponsored Content
            </p>
          </div>
          {sponsored.map((article) => (
            <SponsoredCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {/* Load more */}
      <button className="w-full h-[48px] border border-[#2A2A2A] rounded-[8px] text-[13px] font-[500] uppercase tracking-[0.04em] text-[#A0A0A0] hover:border-[rgba(247,147,26,0.4)] hover:bg-[rgba(247,147,26,0.04)] hover:text-white transition-all duration-200">
        Load More Stories
      </button>
    </div>
  );
}
