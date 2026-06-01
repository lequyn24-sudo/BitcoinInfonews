import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Lightning,
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

/** NOVA-style card header: uppercase label LEFT + status/counter RIGHT */
function CardHeader({
  label,
  right,
  rightColor = "#A0A0A0",
  pulse = false,
}: {
  label: string;
  right: string;
  rightColor?: string;
  pulse?: boolean;
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <span className="text-[11px] font-[500] uppercase tracking-[0.07em] text-[#A0A0A0]">
        {label}
      </span>
      <span
        className="flex items-center gap-[5px] text-[11px] font-[500] uppercase tracking-[0.04em]"
        style={{ color: rightColor }}
      >
        {pulse && (
          <span
            className="w-[5px] h-[5px] rounded-full pulse-dot flex-shrink-0"
            style={{ background: rightColor }}
          />
        )}
        {right}
      </span>
    </div>
  );
}

/** Card C — circular radar visualization inspired by NOVA System Scan */
function RadarViz({ price, change, isPositive }: { price: number; change: number; isPositive: boolean }) {
  const color = isPositive ? "#00C896" : "#FF4D4D";
  const cx = 50;
  const cy = 50;

  // Dot positions on orbit rings
  const outerDots = [
    { angle: 30, r: 38 },
    { angle: 145, r: 38 },
    { angle: 260, r: 38 },
  ];
  const innerDots = [
    { angle: 80, r: 25 },
    { angle: 210, r: 25 },
  ];
  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.cos((angle * Math.PI) / 180),
    y: cy + r * Math.sin((angle * Math.PI) / 180),
  });

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2 py-2">
      <svg
        viewBox="0 0 100 100"
        className="w-[90px] h-[90px] radar-spin"
        aria-hidden="true"
      >
        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={38} fill="none" stroke="#2A2A2A" strokeWidth="0.8" />
        {/* Inner ring */}
        <circle cx={cx} cy={cy} r={25} fill="none" stroke="#2A2A2A" strokeWidth="0.8" />
        {/* Innermost dot ring */}
        <circle cx={cx} cy={cy} r={12} fill="none" stroke="#1E1E1E" strokeWidth="0.5" />

        {/* Outer dots */}
        {outerDots.map((d, i) => {
          const { x, y } = toXY(d.angle, d.r);
          return (
            <circle
              key={`o${i}`}
              cx={x}
              cy={y}
              r={2.2}
              fill={color}
              style={{ filter: `drop-shadow(0 0 3px ${color})` }}
            />
          );
        })}
        {/* Inner dots */}
        {innerDots.map((d, i) => {
          const { x, y } = toXY(d.angle, d.r);
          return (
            <circle
              key={`i${i}`}
              cx={x}
              cy={y}
              r={1.6}
              fill={color}
              opacity={0.7}
            />
          );
        })}
        {/* Center cross */}
        <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} stroke="#2A2A2A" strokeWidth="0.6" />
        <line x1={cx} y1={cy - 4} x2={cx} y2={cy + 4} stroke="#2A2A2A" strokeWidth="0.6" />
        {/* Center dot */}
        <circle cx={cx} cy={cy} r={1.5} fill={color} />
      </svg>

      <div className="text-center">
        <p
          className="text-[20px] font-[500] text-white leading-[1.2]"
          style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
        >
          {formatPrice(price)}
        </p>
        <p
          className="text-[13px] font-[500]"
          style={{
            fontFamily: "var(--font-jetbrains, monospace)",
            color: isPositive ? "#00C896" : "#FF4D4D",
          }}
        >
          {isPositive ? "▲" : "▼"} {formatPercent(change)}
        </p>
      </div>
    </div>
  );
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

        {/* ── Card A — Featured Story ── */}
        <Link
          href={`/${featuredArticle.slug}`}
          className="group bg-[#161616] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[16px] flex flex-col gap-3 hover:border-[rgba(247,147,26,0.35)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)] transition-all duration-200 min-h-[280px]"
        >
          {/* NOVA pattern header */}
          <CardHeader label="Featured Story" right="3/5" />

          {/* Article image — capped height */}
          <div className="relative w-full h-[110px] rounded-[8px] overflow-hidden bg-[#242424] flex-shrink-0">
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
                background: "linear-gradient(to bottom, transparent 30%, rgba(10,10,10,0.85) 100%)",
              }}
            />
          </div>

          <p className="text-[14px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors flex-1">
            {featuredArticle.title}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-[11px] text-[#A0A0A0]">
              {featuredArticle.author} · {formatDate(featuredArticle.date)}
            </span>
            <span className="text-[11px] text-[#F7931A] group-hover:underline whitespace-nowrap">
              Read →
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-[3px] bg-[#2A2A2A] rounded-full overflow-hidden">
            <div className="h-full w-[82%] bg-[#00C896] rounded-full" />
          </div>
        </Link>

        {/* ── Card B — Breaking News ── */}
        {breakingArticle ? (
          <Link
            href={`/${breakingArticle.slug}`}
            className="group bg-[#161616] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[16px] flex flex-col gap-3 hover:border-[rgba(247,147,26,0.35)] hover:shadow-[0_0_24px_rgba(247,147,26,0.08)] transition-all duration-200 min-h-[280px]"
          >
            <CardHeader label="Breaking News" right="Live" rightColor="#00C896" pulse />

            {/* Large image — ~60% card height */}
            <div className="relative flex-1 rounded-[8px] overflow-hidden bg-[#242424] min-h-[140px]">
              <Image
                src={breakingArticle.imageUrl}
                alt={breakingArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.8) 100%)",
                }}
              />
              {/* Arrow indicator bottom-right — per NOVA reference */}
              <div className="absolute bottom-3 right-3 w-[28px] h-[28px] rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center bg-[rgba(10,10,10,0.5)]">
                <ArrowUpRight size={14} className="text-white" />
              </div>
            </div>

            <p className="text-[14px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors">
              {breakingArticle.title}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-[11px] text-[#A0A0A0]">
                {breakingArticle.author} · {formatDate(breakingArticle.date)}
              </span>
            </div>
          </Link>
        ) : (
          <div className="bg-[#1A1A1A] border border-dashed border-[#2A2A2A] rounded-[12px] p-[16px] flex flex-col items-center justify-center min-h-[280px] opacity-60">
            <Lightning size={32} className="text-[#A0A0A0] mb-3" />
            <p className="text-[13px] text-[#A0A0A0] text-center">No breaking news right now</p>
            <p className="text-[11px] text-[#666] text-center mt-1">Check back soon</p>
          </div>
        )}

        {/* ── Card C — Market / Price Widget — NOVA radar visualization ── */}
        <div className="bg-[#1E1E1E] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[16px] flex flex-col min-h-[280px]">
          <CardHeader label="Bitcoin Price" right="Live" rightColor="#00C896" pulse />

          <RadarViz
            price={priceData.price}
            change={priceData.change24h}
            isPositive={isPositive}
          />

          <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#2A2A2A]">
            <p className="text-[11px] text-[#A0A0A0]">7 signals detected</p>
            <Link
              href="/bitcoin-news"
              className="text-[11px] text-[#F7931A] hover:underline whitespace-nowrap"
            >
              VIEW FULL →
            </Link>
          </div>
        </div>

        {/* ── Card D — News Timeline ── */}
        <div className="bg-[#161616] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-[16px] flex flex-col min-h-[280px]">
          <CardHeader label="Latest News" right="Upcoming" />

          <ul className="flex flex-col flex-1">
            {recentArticles.slice(0, 5).map((article, i) => {
              const isActive = i === 2;
              const isComplete = i < 2;
              const dotBg = isComplete ? "#00C896" : isActive ? "#FFFFFF" : "#2A2A2A";
              const textColor = isComplete
                ? "#A0A0A0"
                : isActive
                ? "#FFFFFF"
                : "rgba(160,160,160,0.45)";
              const statusLabel = isComplete ? "COMPLETE" : isActive ? "" : "PENDING";
              const statusColor = isComplete ? "#00C896" : "#666";

              return (
                <li key={article.slug} className="relative flex gap-3">
                  {/* Connector line */}
                  {i < 4 && (
                    <div
                      className="absolute w-[1px] bottom-0"
                      style={{ left: "3.5px", top: "10px", background: "#2A2A2A" }}
                    />
                  )}

                  {/* State dot */}
                  <div
                    className="w-[8px] h-[8px] rounded-full flex-shrink-0 mt-[6px] relative z-[1]"
                    style={{
                      background: dotBg,
                      boxShadow: isComplete ? "0 0 5px rgba(0,200,150,0.5)" : "none",
                    }}
                  />

                  {/* Item content */}
                  <div
                    className={`flex-1 pb-3 ${
                      isActive
                        ? "bg-[#242424] border border-[rgba(255,255,255,0.12)] rounded-[8px] px-2 py-2 -mt-1 -ml-1"
                        : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <Link href={`/${article.slug}`}>
                        <p
                          className="text-[11px] leading-[1.45] hover:text-[#F7931A] transition-colors line-clamp-2"
                          style={{ color: textColor }}
                        >
                          {article.title}
                        </p>
                      </Link>
                      {statusLabel && (
                        <span
                          className="text-[9px] uppercase font-[500] tracking-[0.05em] flex-shrink-0 mt-[1px]"
                          style={{ color: statusColor }}
                        >
                          {statusLabel}
                        </span>
                      )}
                    </div>
                    {isActive && (
                      <p className="text-[10px] text-[#A0A0A0] mt-1">ETA 2D 14H</p>
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
