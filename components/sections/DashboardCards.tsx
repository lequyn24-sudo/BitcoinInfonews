import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  TrendUp,
  Lightning,
  Clock,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, formatPercent, formatDate } from "@/lib/utils";
import type { Article, PriceData } from "@/types";

interface DashboardCardsProps {
  featuredArticle: Article;
  breakingArticle: Article | undefined;
  priceData: PriceData;
  recentArticles: Article[];
}

export function DashboardCards({
  featuredArticle,
  breakingArticle,
  priceData,
  recentArticles,
}: DashboardCardsProps) {
  const isPositive = priceData.change24h >= 0;

  return (
    <section
      className="relative z-[10] max-w-[1200px] mx-auto px-4 lg:px-6 -mt-[40px]"
      aria-label="Dashboard cards"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Card A — Featured Story */}
        <Link
          href={`/${featuredArticle.slug}`}
          className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] p-[16px] flex flex-col gap-3 hover:border-[rgba(247,147,26,0.4)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)] transition-all duration-200 min-h-[280px]"
        >
          <div className="flex items-center justify-between">
            <Badge variant="analysis">Featured</Badge>
            <span className="text-[11px] text-[#A0A0A0]" style={{ fontFamily: "var(--font-mono)" }}>3/5</span>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-[8px] overflow-hidden bg-[#242424]">
            <Image
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.9) 100%)",
              }}
            />
          </div>

          <p className="text-[15px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors">
            {featuredArticle.title}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-[12px] text-[#A0A0A0]">
              {featuredArticle.author} · {formatDate(featuredArticle.date)}
            </span>
            <span className="text-[12px] text-[#F7931A] group-hover:underline">
              Read More →
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-[4px] bg-[#2A2A2A] rounded-full overflow-hidden">
            <div className="h-full w-[82%] bg-[#00C896] rounded-full" />
          </div>
        </Link>

        {/* Card B — Breaking News */}
        {breakingArticle ? (
          <Link
            href={`/${breakingArticle.slug}`}
            className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] p-[16px] flex flex-col gap-3 hover:border-[rgba(247,147,26,0.4)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)] transition-all duration-200 min-h-[280px]"
          >
            <div className="flex items-center justify-between">
              <Badge variant="breaking">Breaking</Badge>
              <span className="flex items-center gap-1 text-[11px] font-[500] text-[#00C896]">
                <span className="w-[5px] h-[5px] rounded-full bg-[#00C896] pulse-dot" />
                LIVE
              </span>
            </div>

            <div className="relative flex-1 rounded-[8px] overflow-hidden bg-[#242424] min-h-[140px]">
              <Image
                src={breakingArticle.imageUrl}
                alt={breakingArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
            </div>

            <p className="text-[15px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors">
              {breakingArticle.title}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-[12px] text-[#A0A0A0]">
                {breakingArticle.author} · {formatDate(breakingArticle.date)}
              </span>
              <ArrowUpRight size={16} className="text-[#A0A0A0] group-hover:text-[#F7931A] transition-colors" />
            </div>
          </Link>
        ) : (
          <div className="bg-[#1A1A1A] border border-dashed border-[#2A2A2A] rounded-[12px] p-[16px] flex flex-col items-center justify-center min-h-[280px] opacity-60">
            <Lightning size={32} className="text-[#A0A0A0] mb-3" />
            <p className="text-[13px] text-[#A0A0A0] text-center">No breaking news right now</p>
            <p className="text-[12px] text-[#666] text-center mt-1">Check back soon</p>
          </div>
        )}

        {/* Card C — Market / Price Widget */}
        <div className="bg-[#242424] border border-[#2A2A2A] rounded-[12px] p-[16px] flex flex-col gap-3 min-h-[280px]">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] flex items-center gap-1">
              <TrendUp size={14} />
              Bitcoin Price
            </p>
            <span className="flex items-center gap-1 text-[11px] font-[500] text-[#00C896] uppercase">
              <span className="w-[5px] h-[5px] rounded-full bg-[#00C896] pulse-dot" />
              Live
            </span>
          </div>

          {/* Sparkline */}
          <div className="flex-1 min-h-[80px] rounded-[4px] overflow-hidden">
            <svg viewBox="0 0 200 80" className="w-full h-full" aria-hidden="true">
              <defs>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={isPositive ? "#00C896" : "#FF4D4D"} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={isPositive ? "#00C896" : "#FF4D4D"} stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points="0,72 28,60 57,45 85,52 114,28 142,18 171,10 200,6 200,80 0,80"
                fill="url(#sparkGrad)"
              />
              <polyline
                points="0,72 28,60 57,45 85,52 114,28 142,18 171,10 200,6"
                fill="none"
                stroke={isPositive ? "#00C896" : "#FF4D4D"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <p
              className="text-[24px] font-[500] text-white leading-[1.2]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {formatPrice(priceData.price)}
            </p>
            <p
              className="text-[14px] font-[500]"
              style={{
                fontFamily: "var(--font-mono)",
                color: isPositive ? "#00C896" : "#FF4D4D",
              }}
            >
              {isPositive ? "▲" : "▼"} {formatPercent(priceData.change24h)}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <p className="text-[12px] text-[#A0A0A0]">7 signals detected</p>
            <Link
              href="/bitcoin-news"
              className="text-[12px] text-[#F7931A] hover:underline"
            >
              VIEW FULL →
            </Link>
          </div>
        </div>

        {/* Card D — News Timeline */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] p-[16px] flex flex-col gap-2 min-h-[280px]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] flex items-center gap-1">
              <Clock size={14} />
              Latest News
            </p>
            <span className="text-[11px] uppercase text-[#A0A0A0]">Upcoming</span>
          </div>

          <ul className="flex flex-col gap-0 flex-1">
            {recentArticles.slice(0, 5).map((article, i) => {
              const isActive = i === 2;
              const isComplete = i < 2;
              const dotColor = isComplete ? "#00C896" : isActive ? "#FFFFFF" : "#2A2A2A";
              const textColor = isComplete ? "#A0A0A0" : isActive ? "#FFFFFF" : "rgba(160,160,160,0.5)";

              return (
                <li key={article.slug} className="relative flex gap-3">
                  {/* Timeline line */}
                  {i < 4 && (
                    <div
                      className="absolute left-[3.5px] top-[10px] w-[1px] bottom-0"
                      style={{ background: "#2A2A2A" }}
                    />
                  )}
                  <div
                    className="w-[8px] h-[8px] rounded-full flex-shrink-0 mt-[6px] relative z-[1]"
                    style={{ background: dotColor, border: isActive ? "1px solid rgba(255,255,255,0.3)" : "none" }}
                  />
                  <div
                    className={`flex-1 pb-3 ${isActive ? "bg-[#242424] border border-[rgba(255,255,255,0.15)] rounded-[8px] p-2 -mt-1" : ""}`}
                  >
                    <Link href={`/${article.slug}`}>
                      <p
                        className="text-[12px] leading-[1.4] hover:text-[#F7931A] transition-colors line-clamp-2"
                        style={{ color: textColor }}
                      >
                        {article.title}
                      </p>
                    </Link>
                    {isActive && (
                      <p className="text-[11px] text-[#A0A0A0] mt-1">ETA 2D 14H</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
