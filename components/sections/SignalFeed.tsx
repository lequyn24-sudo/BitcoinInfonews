import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

interface SignalFeedProps {
  articles: Article[];
  label?: string;
  href?: string;
}

export function SignalFeed({
  articles,
  label = "Signal Feed",
  href = "/bitcoin-news",
}: SignalFeedProps) {
  if (!articles.length) return null;

  return (
    <section className="w-full bg-[#060608] py-6 lg:py-8">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6">

        {/* Section header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#404040]">
              {label}
            </span>
            <div className="w-[40px] h-[1px] bg-[rgba(255,255,255,0.06)]" />
          </div>
          <Link
            href={href}
            className="text-[11px] uppercase tracking-[0.08em] text-[#404040] hover:text-[#F7931A] transition-colors flex items-center gap-1"
          >
            All <ArrowUpRight size={11} />
          </Link>
        </div>

        {/* Signal rows — terminal / data-display style */}
        <div className="flex flex-col">
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="signal-row group flex items-center gap-5 py-5 border-b border-[rgba(255,255,255,0.04)] last:border-0"
            >
              {/* Index */}
              <span
                className="hidden lg:block text-[11px] font-[500] text-[#282828] flex-shrink-0 w-[20px] text-right"
                style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Thumbnail */}
              <div className="relative w-[120px] h-[68px] flex-shrink-0 rounded-[6px] overflow-hidden bg-[#0F0F12]">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="120px"
                  className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  {article.isBreaking ? (
                    <Badge variant="breaking">Breaking</Badge>
                  ) : article.isSponsored ? (
                    <Badge variant="sponsored">Sponsored</Badge>
                  ) : (
                    <Badge variant="category">{article.categoryLabel}</Badge>
                  )}
                  <span className="text-[11px] text-[#303030]">
                    {formatDate(article.date)}
                  </span>
                </div>
                <p className="text-[15px] lg:text-[17px] font-[600] text-white leading-[1.3] line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200">
                  {article.title}
                </p>
                <p className="hidden lg:block text-[13px] text-[#404040] leading-[1.5] mt-1 line-clamp-1">
                  {article.excerpt}
                </p>
              </div>

              {/* Read time + arrow */}
              <div className="hidden lg:flex flex-col items-end gap-2 flex-shrink-0">
                <span className="text-[11px] text-[#303030]">
                  {article.readTime} min
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-[#282828] group-hover:text-[#F7931A] transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Load more — minimal */}
        <button className="mt-8 w-full flex items-center justify-center gap-2 py-4 border border-[rgba(255,255,255,0.04)] rounded-[6px] text-[11px] uppercase tracking-[0.10em] text-[#404040] hover:text-white hover:border-[rgba(255,255,255,0.10)] transition-all duration-200">
          Load More Signals
        </button>
      </div>
    </section>
  );
}
