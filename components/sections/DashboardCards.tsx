import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Lightning } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, formatPercent, formatDate } from "@/lib/utils";
import type { Article, PriceData } from "@/types";

interface DashboardCardsProps {
  featuredArticle: Article;
  breakingArticle: Article | undefined;
  priceData: PriceData;
  recentArticles: Article[];
}

/* NOVA card header: uppercase label LEFT · status/counter RIGHT */
function CardHeader({
  label,
  right,
  rightColor = "#383838",
  pulse = false,
}: {
  label: string;
  right: string;
  rightColor?: string;
  pulse?: boolean;
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span
        style={{
          fontSize: "10px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.10em",
          color: "#383838",
        }}
      >
        {label}
      </span>
      <span
        className="flex items-center gap-[5px]"
        style={{
          fontSize: "10px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: rightColor,
        }}
      >
        {pulse && (
          <span
            className="w-[4px] h-[4px] rounded-full pulse-dot flex-shrink-0"
            style={{ background: rightColor }}
          />
        )}
        {right}
      </span>
    </div>
  );
}

/* Card C — NOVA-style circular orbital visualization */
function RadarViz({ price, change, isPositive }: { price: number; change: number; isPositive: boolean }) {
  const color = isPositive ? "#00C896" : "#FF4D4D";
  const cx = 50;
  const cy = 50;
  const toXY = (angle: number, r: number) => ({
    x: cx + r * Math.cos((angle * Math.PI) / 180),
    y: cy + r * Math.sin((angle * Math.PI) / 180),
  });
  const outerDots = [{ a: 30, r: 36 }, { a: 150, r: 36 }, { a: 270, r: 36 }];
  const innerDots = [{ a: 80, r: 22 }, { a: 220, r: 22 }];

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 py-2">
      <svg viewBox="0 0 100 100" className="w-[88px] h-[88px] radar-spin" aria-hidden="true">
        <circle cx={cx} cy={cy} r={36} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
        <circle cx={cx} cy={cy} r={22} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.8" />
        <circle cx={cx} cy={cy} r={10} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        {outerDots.map((d, i) => {
          const { x, y } = toXY(d.a, d.r);
          return (
            <circle key={i} cx={x} cy={y} r={2.0} fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
          );
        })}
        {innerDots.map((d, i) => {
          const { x, y } = toXY(d.a, d.r);
          return <circle key={i} cx={x} cy={y} r={1.4} fill={color} opacity={0.60} />;
        })}
        <circle cx={cx} cy={cy} r={1.2} fill={color} />
      </svg>
      <div className="text-center">
        <p
          style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "18px", fontWeight: 500, color: "#fff", lineHeight: 1.2 }}
        >
          {formatPrice(price)}
        </p>
        <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", color, marginTop: "2px" }}>
          {isPositive ? "▲" : "▼"} {formatPercent(change)}
        </p>
      </div>
    </div>
  );
}

/* Shared NOVA glass card wrapper */
const cardBase = {
  background: "rgba(10,10,12,0.68)",
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "12px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.30)",
};

const cardHoverBase =
  "transition-all duration-300 hover:border-[rgba(247,147,26,0.20)] hover:shadow-[0_0_40px_rgba(247,147,26,0.08),0_4px_24px_rgba(0,0,0,0.40)]";

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
      aria-label="Dashboard"
    >
      {/* 4-up card grid — layout unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">

        {/* Card A — Featured Story */}
        <Link
          href={`/${featuredArticle.slug}`}
          className={`group flex flex-col min-h-[280px] p-4 ${cardHoverBase}`}
          style={cardBase}
        >
          <CardHeader label="Featured Story" right="3/5" />

          {/* Article image */}
          <div className="relative w-full rounded-[8px] overflow-hidden flex-shrink-0 bg-[#0A0A0C]" style={{ height: "112px" }}>
            <Image
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              fill
              sizes="300px"
              className="object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-300"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(10,10,12,0.90) 100%)" }}
            />
          </div>

          <p className="text-[13px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200 flex-1 mt-3">
            {featuredArticle.title}
          </p>

          <div className="flex items-center justify-between mt-auto pt-3">
            <span style={{ fontSize: "10px", color: "#383838" }}>
              {featuredArticle.author} · {formatDate(featuredArticle.date)}
            </span>
            <span style={{ fontSize: "10px", color: "#F7931A" }} className="group-hover:underline">
              Read →
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="h-full w-[82%] rounded-full" style={{ background: "#00C896", boxShadow: "0 0 6px rgba(0,200,150,0.5)" }} />
          </div>
        </Link>

        {/* Card B — Breaking News */}
        {breakingArticle ? (
          <Link
            href={`/${breakingArticle.slug}`}
            className={`group flex flex-col min-h-[280px] p-4 ${cardHoverBase}`}
            style={cardBase}
          >
            <CardHeader label="Breaking News" right="Live" rightColor="#00C896" pulse />

            {/* Large image — dominant visual, ~60% card */}
            <div className="relative flex-1 rounded-[8px] overflow-hidden min-h-[140px]" style={{ background: "#0A0A0C" }}>
              <Image
                src={breakingArticle.imageUrl}
                alt={breakingArticle.title}
                fill
                sizes="300px"
                className="object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-300"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, rgba(10,10,12,0.10) 0%, rgba(10,10,12,0.85) 100%)" }}
              />
              {/* NOVA arrow indicator — bottom right */}
              <div className="absolute bottom-3 right-3 w-[26px] h-[26px] rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(10,10,12,0.60)" }}>
                <ArrowUpRight size={12} className="text-[#606060]" />
              </div>
            </div>

            <p className="text-[13px] font-[600] text-white leading-[1.4] line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200 mt-3">
              {breakingArticle.title}
            </p>
            <span className="mt-2" style={{ fontSize: "10px", color: "#383838" }}>
              {breakingArticle.author} · {formatDate(breakingArticle.date)}
            </span>
          </Link>
        ) : (
          <div
            className="flex flex-col items-center justify-center min-h-[280px] p-4 opacity-40"
            style={{ ...cardBase, borderStyle: "dashed" }}
          >
            <Lightning size={28} style={{ color: "#383838", marginBottom: "10px" }} />
            <p style={{ fontSize: "12px", color: "#383838" }}>No breaking news</p>
          </div>
        )}

        {/* Card C — Bitcoin Price · Orbital visualization */}
        <div
          className="flex flex-col min-h-[280px] p-4"
          style={{ ...cardBase, background: "rgba(12,12,15,0.75)" }}
        >
          <CardHeader label="Bitcoin Price" right="Live" rightColor="#00C896" pulse />
          <RadarViz price={priceData.price} change={priceData.change24h} isPositive={isPositive} />
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-[rgba(255,255,255,0.04)]">
            <span style={{ fontSize: "10px", color: "#383838" }}>7 signals detected</span>
            <Link href="/bitcoin-news" style={{ fontSize: "10px", color: "#F7931A" }} className="hover:underline">
              VIEW →
            </Link>
          </div>
        </div>

        {/* Card D — News Timeline */}
        <div className="flex flex-col min-h-[280px] p-4" style={cardBase}>
          <CardHeader label="Latest News" right="Upcoming" />

          <ul className="flex flex-col flex-1">
            {recentArticles.slice(0, 5).map((article, i) => {
              const isActive = i === 2;
              const isDone = i < 2;
              const dotBg = isDone ? "#00C896" : isActive ? "#FFFFFF" : "rgba(255,255,255,0.08)";
              const textColor = isDone ? "#505050" : isActive ? "#FFFFFF" : "rgba(80,80,80,0.50)";

              return (
                <li key={article.slug} className="relative flex gap-3">
                  {i < 4 && (
                    <div
                      className="absolute w-[1px] bottom-0"
                      style={{ left: "3.5px", top: "10px", background: "rgba(255,255,255,0.04)" }}
                    />
                  )}
                  <div
                    className="w-[8px] h-[8px] rounded-full flex-shrink-0 mt-[5px] relative z-[1]"
                    style={{
                      background: dotBg,
                      boxShadow: isDone ? "0 0 6px rgba(0,200,150,0.45)" : "none",
                    }}
                  />
                  <div
                    className={`flex-1 pb-3 ${isActive ? "px-2 py-2 -mt-1 -ml-1 rounded-[8px]" : ""}`}
                    style={isActive ? { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" } : {}}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <Link href={`/${article.slug}`}>
                        <p
                          className="text-[11px] leading-[1.4] hover:text-[#F7931A] transition-colors line-clamp-2"
                          style={{ color: textColor }}
                        >
                          {article.title}
                        </p>
                      </Link>
                      {isDone && (
                        <span style={{ fontSize: "8px", color: "#00C896", textTransform: "uppercase", letterSpacing: "0.05em", flexShrink: 0, marginTop: "1px" }}>
                          Done
                        </span>
                      )}
                    </div>
                    {isActive && (
                      <p style={{ fontSize: "9px", color: "#404040", marginTop: "4px" }}>ETA 2D 14H</p>
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
