import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface ArticleFeedProps {
  articles: Article[];
  showSection?: boolean;
  sectionTitle?: string;
  sectionHref?: string;
}

/* NOVA-mapped glass — low opacity so backdrop bleeds through visibly */
const glassCard = {
  background: "rgba(10,10,20,0.38)",
  backdropFilter: "blur(32px)",
  WebkitBackdropFilter: "blur(32px)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.08),
    inset 0 -1px 0 rgba(0,0,0,0.20),
    0 8px 32px rgba(0,0,0,0.40)
  `,
};

/* Top story — cinematic, large image, glass text overlay */
function TopStoryCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group block overflow-hidden transition-all duration-300 hover:shadow-[0_0_48px_rgba(247,147,26,0.09),0_8px_32px_rgba(0,0,0,0.50)]"
      style={{ ...glassCard, position: "relative" }}
    >
      {/* Full-bleed image — minimum height for visual weight */}
      <div className="relative w-full min-h-[260px] bg-[#0A0A0C]" style={{ aspectRatio: "16/9" }}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-500"
          priority
        />
        {/* Deep bottom gradient for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,12,0.05) 0%, rgba(10,10,12,0.55) 45%, rgba(10,10,12,0.96) 100%)",
          }}
        />

        {/* Badge — absolute top-left inside image */}
        <div className="absolute top-4 left-4 z-[2]">
          {article.isBreaking && <Badge variant="breaking">Breaking</Badge>}
          {article.isSponsored && <Badge variant="sponsored">Sponsored</Badge>}
          {!article.isBreaking && !article.isSponsored && (
            <Badge variant="category">{article.categoryLabel}</Badge>
          )}
        </div>

        {/* Date — top right */}
        <div className="absolute top-4 right-4 z-[2]">
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>
            {formatDate(article.date)}
          </span>
        </div>
      </div>

      {/* Text panel — lives below the image, on the glass surface */}
      <div className="p-5 pt-4">
        <h2
          className="font-[700] text-white leading-[1.25] tracking-[-0.02em] line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200 mb-2"
          style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
        >
          {article.title}
        </h2>
        <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.65" }} className="line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2" style={{ fontSize: "12px", color: "#404040" }}>
            <span>{article.author}</span>
            <span style={{ color: "#222" }}>·</span>
            <span>{article.readTime} min read</span>
          </div>
          <ArrowUpRight
            size={15}
            className="text-[#333] group-hover:text-[#F7931A] transition-colors"
          />
        </div>
      </div>
    </Link>
  );
}

/* Secondary 2-up card */
function SecondaryCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group block overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_rgba(247,147,26,0.08),0_4px_20px_rgba(0,0,0,0.35)]"
      style={glassCard}
    >
      <div className="relative w-full bg-[#0A0A0C]" style={{ aspectRatio: "16/9" }}>
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-300"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,12,0.90) 100%)" }}
        />
      </div>
      <div className="p-4">
        <Badge variant="category" className="mb-2">{article.categoryLabel}</Badge>
        <p
          className="font-[600] text-white leading-[1.35] line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200"
          style={{ fontSize: "15px" }}
        >
          {article.title}
        </p>
        <p style={{ fontSize: "11px", color: "#404040", marginTop: "8px" }}>
          {article.author} · {formatDate(article.date)}
        </p>
      </div>
    </Link>
  );
}

/* Compact list row */
function CompactCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group flex gap-4 py-4 border-b border-[rgba(255,255,255,0.04)] last:border-0 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.02)] rounded-[8px] px-2 -mx-2"
    >
      <div className="relative w-[80px] h-[56px] flex-shrink-0 rounded-[6px] overflow-hidden bg-[#0A0A0C]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          sizes="80px"
          className="object-cover opacity-70 group-hover:opacity-85 transition-opacity"
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
        <p
          className="font-[500] text-white leading-[1.35] line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200"
          style={{ fontSize: "13px" }}
        >
          {article.title}
        </p>
        <p style={{ fontSize: "11px", color: "#383838", marginTop: "4px" }}>
          {article.author} · {formatDate(article.date)}
        </p>
      </div>
    </Link>
  );
}

/* Sponsored card */
function SponsoredCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group block overflow-hidden transition-all duration-300"
      style={{
        ...glassCard,
        borderTop: "2px solid rgba(255,184,0,0.25)",
        borderRadius: "0 0 12px 12px",
      }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="sponsored">▲ Sponsored</Badge>
        </div>
        <div className="relative w-full rounded-[8px] overflow-hidden bg-[#0A0A0C] mb-3" style={{ aspectRatio: "16/9" }}>
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover opacity-70"
          />
        </div>
        <p className="font-[600] text-white line-clamp-2 mb-2" style={{ fontSize: "14px" }}>
          {article.title}
        </p>
        <p style={{ fontSize: "10px", color: "#444", fontStyle: "italic" }}>
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
        <p style={{ fontSize: "14px", color: "#404040" }}>No articles found.</p>
      </div>
    );
  }

  const [topStory, ...rest] = articles;
  const secondary = rest.filter((a) => !a.isSponsored).slice(0, 4);
  const compact = rest.filter((a) => !a.isSponsored).slice(4);
  const sponsored = articles.filter((a) => a.isSponsored);

  return (
    <div className="flex flex-col gap-8">
      {/* Section header — NOVA minimal label */}
      {showSection && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#38384C" }}>
              {sectionTitle}
            </span>
            <div className="w-[32px] h-[1px]" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>
          <Link
            href={sectionHref}
            className="flex items-center gap-1 hover:text-[#F7931A] transition-colors"
            style={{ fontSize: "11px", color: "#383838", textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            All <ArrowRight size={11} />
          </Link>
        </div>
      )}

      {/* Top story */}
      <TopStoryCard article={topStory} />

      {/* Secondary 2-up grid */}
      {secondary.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondary.slice(0, 2).map((a) => (
            <SecondaryCard key={a.slug} article={a} />
          ))}
        </div>
      )}

      {/* Compact list */}
      {compact.length > 0 && (
        <div>
          {compact.map((a) => (
            <CompactCard key={a.slug} article={a} />
          ))}
        </div>
      )}

      {/* Sponsored */}
      {sponsored.length > 0 && (
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#38384C" }}>
              Sponsored
            </span>
            <div className="flex-1 h-[1px]" style={{ background: "rgba(255,255,255,0.04)" }} />
          </div>
          {sponsored.map((a) => (
            <SponsoredCard key={a.slug} article={a} />
          ))}
        </div>
      )}

      {/* Load more — minimal */}
      <button
        className="w-full py-4 rounded-[6px] transition-all duration-200 text-[#383838] hover:text-[#A0A0A0] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.10)]"
        style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.10em" }}
      >
        Load More
      </button>
    </div>
  );
}
