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

/* NOVA card header pattern: LABEL LEFT · STATUS RIGHT */
function CardHeader({
  label,
  right,
  rightColor = "#38384C",
  pulse = false,
  pulseGlow = "amber",
}: {
  label: string;
  right: string;
  rightColor?: string;
  pulse?: boolean;
  pulseGlow?: "amber" | "green";
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.10em", color: "#52526A" }}>
        {label}
      </span>
      <span className="flex items-center gap-[5px]" style={{ fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", color: rightColor }}>
        {pulse && (
          <span
            className={`w-[4px] h-[4px] rounded-full pulse-dot flex-shrink-0 ${pulseGlow === "amber" ? "dot-glow-amber" : "dot-glow-green"}`}
            style={{ background: rightColor }}
          />
        )}
        {right}
      </span>
    </div>
  );
}

/* Card C — Orbital radar visualization */
function RadarViz({ price, change, isPositive }: { price: number; change: number; isPositive: boolean }) {
  const accentColor = "#F7931A"; /* Bitcoin Amber — maps NOVA radar green */
  const cx = 50;
  const cy = 50;
  const toXY = (a: number, r: number) => ({
    x: cx + r * Math.cos((a * Math.PI) / 180),
    y: cy + r * Math.sin((a * Math.PI) / 180),
  });

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-3 py-2">
      <svg viewBox="0 0 100 100" className="w-[88px] h-[88px] radar-spin" aria-hidden="true">
        {/* Rings — very subtle, NOVA cool-dark style */}
        <circle cx={cx} cy={cy} r={36} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.7" />
        <circle cx={cx} cy={cy} r={22} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.7" />
        <circle cx={cx} cy={cy} r={10} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        {/* Amber orbital dots — self-luminous, maps NOVA green dots */}
        {[{ a: 30, r: 36 }, { a: 150, r: 36 }, { a: 270, r: 36 }].map((d, i) => {
          const { x, y } = toXY(d.a, d.r);
          return (
            <circle key={i} cx={x} cy={y} r={2.2} fill={accentColor}
              style={{ filter: `drop-shadow(0 0 4px ${accentColor}) drop-shadow(0 0 8px rgba(247,147,26,0.4))` }} />
          );
        })}
        {[{ a: 90, r: 22 }, { a: 210, r: 22 }].map((d, i) => {
          const { x, y } = toXY(d.a, d.r);
          return <circle key={i} cx={x} cy={y} r={1.5} fill={accentColor} opacity={0.55} />;
        })}
        <circle cx={cx} cy={cy} r={1.2} fill={accentColor}
          style={{ filter: `drop-shadow(0 0 3px ${accentColor})` }} />
      </svg>
      <div className="text-center">
        <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "18px", fontWeight: 500, color: "#fff", lineHeight: 1.2 }}>
          {formatPrice(price)}
        </p>
        <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", color: isPositive ? "#00C896" : "#FF4D4D", marginTop: "2px" }}>
          {isPositive ? "▲" : "▼"} {formatPercent(change)}
        </p>
      </div>
    </div>
  );
}

/* ── NOVA glass card — very low opacity so bright orbs show through ── */
const CARD: React.CSSProperties = {
  background: "rgba(10,10,20,0.18)",
  backdropFilter: "blur(28px) saturate(1.4)",
  WebkitBackdropFilter: "blur(28px) saturate(1.4)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "12px",
  boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.10),
    inset 0 -1px 0 rgba(0,0,0,0.25),
    0 8px 32px rgba(0,0,0,0.35)
  `,
};

export function DashboardCards({ featuredArticle, breakingArticle, priceData, recentArticles }: DashboardCardsProps) {
  const isPositive = priceData.change24h >= 0;

  return (
    <section className="relative z-[10] max-w-[1200px] mx-auto px-4 lg:px-6 -mt-[40px]" aria-label="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">

        {/* Card A — Featured Story */}
        <Link
          href={`/${featuredArticle.slug}`}
          className="group flex flex-col min-h-[280px] p-4 transition-all duration-300"
          style={CARD}
        >
          <CardHeader label="Featured Story" right="3/5" />

          <div className="relative w-full rounded-[8px] overflow-hidden flex-shrink-0" style={{ height: "108px", background: "#0A0A16" }}>
            <Image src={featuredArticle.imageUrl} alt={featuredArticle.title} fill sizes="300px"
              className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 20%, rgba(10,10,20,0.92) 100%)" }} />
          </div>

          <p className="text-[13px] font-[600] text-white leading-[1.4] line-clamp-2 flex-1 mt-3 transition-colors duration-200"
            style={{ color: "inherit" }}
          >
            <span className="group-hover:text-[#F7931A] transition-colors duration-200">
              {featuredArticle.title}
            </span>
          </p>

          <div className="flex items-center justify-between mt-auto pt-3">
            <span style={{ fontSize: "10px", color: "#38384C" }}>
              {featuredArticle.author} · {formatDate(featuredArticle.date)}
            </span>
            <span className="group-hover:underline" style={{ fontSize: "10px", color: "#F7931A" }}>Read →</span>
          </div>

          {/* Progress bar — amber with glow (maps NOVA green progress) */}
          <div className="mt-3 h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="h-full w-[82%] rounded-full" style={{
              background: "#F7931A",
              boxShadow: "0 0 8px rgba(247,147,26,0.55), 0 0 16px rgba(247,147,26,0.25)",
            }} />
          </div>
        </Link>

        {/* Card B — Breaking News */}
        {breakingArticle ? (
          <Link href={`/${breakingArticle.slug}`} className="group flex flex-col min-h-[280px] p-4 transition-all duration-300" style={CARD}>
            {/* LIVE dot: green (semantic — live data) not amber */}
            <CardHeader label="Breaking News" right="Live" rightColor="#00C896" pulse pulseGlow="green" />

            <div className="relative flex-1 rounded-[8px] overflow-hidden min-h-[140px]" style={{ background: "#0A0A16" }}>
              <Image src={breakingArticle.imageUrl} alt={breakingArticle.title} fill sizes="300px"
                className="object-cover opacity-65 group-hover:opacity-85 transition-opacity duration-300" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,20,0.05), rgba(10,10,20,0.88))" }} />
              <div className="absolute bottom-3 right-3 w-[26px] h-[26px] rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(255,255,255,0.10)", background: "rgba(10,10,20,0.65)" }}>
                <ArrowUpRight size={12} style={{ color: "#52526A" }} />
              </div>
            </div>

            <p className="text-[13px] font-[600] leading-[1.4] line-clamp-2 mt-3 transition-colors duration-200">
              <span className="text-white group-hover:text-[#F7931A] transition-colors duration-200">
                {breakingArticle.title}
              </span>
            </p>
            <span className="mt-2" style={{ fontSize: "10px", color: "#38384C" }}>
              {breakingArticle.author} · {formatDate(breakingArticle.date)}
            </span>
          </Link>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[280px] p-4 opacity-35" style={{ ...CARD, borderStyle: "dashed" }}>
            <Lightning size={28} style={{ color: "#38384C", marginBottom: "10px" }} />
            <p style={{ fontSize: "12px", color: "#38384C" }}>No breaking news</p>
          </div>
        )}

        {/* Card C — Bitcoin Price · Orbital viz */}
        <div className="flex flex-col min-h-[280px] p-4" style={{ ...CARD, background: "rgba(14,10,26,0.20)" }}>
          {/* LIVE dot: amber (brand accent) */}
          <CardHeader label="Bitcoin Price" right="Live" rightColor="#F7931A" pulse pulseGlow="amber" />
          <RadarViz price={priceData.price} change={priceData.change24h} isPositive={isPositive} />
          <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <span style={{ fontSize: "10px", color: "#38384C" }}>7 signals detected</span>
            <Link href="/bitcoin-news" className="hover:underline" style={{ fontSize: "10px", color: "#F7931A" }}>VIEW →</Link>
          </div>
        </div>

        {/* Card D — News Timeline */}
        <div className="flex flex-col min-h-[280px] p-4" style={CARD}>
          <CardHeader label="Latest News" right="Upcoming" />

          <ul className="flex flex-col flex-1">
            {recentArticles.slice(0, 5).map((article, i) => {
              const isActive = i === 2;
              const isDone = i < 2;
              /* Done: amber glow (maps NOVA green COMPLETE). Active: white. Pending: ghost */
              const dotBg = isDone ? "#F7931A" : isActive ? "#FFFFFF" : "rgba(255,255,255,0.07)";
              const dotGlow = isDone ? "0 0 6px rgba(247,147,26,0.60), 0 0 12px rgba(247,147,26,0.25)" : "none";
              const textColor = isDone ? "#52526A" : isActive ? "#FFFFFF" : "#2A2A3A";

              return (
                <li key={article.slug} className="relative flex gap-3">
                  {i < 4 && (
                    <div className="absolute w-[1px] bottom-0" style={{ left: "3.5px", top: "10px", background: "rgba(255,255,255,0.04)" }} />
                  )}
                  <div className="w-[8px] h-[8px] rounded-full flex-shrink-0 mt-[5px] relative z-[1]"
                    style={{ background: dotBg, boxShadow: dotGlow }} />
                  <div
                    className={`flex-1 pb-3 ${isActive ? "px-2 py-2 -mt-1 -ml-1 rounded-[8px]" : ""}`}
                    style={isActive ? { background: "rgba(247,147,26,0.04)", border: "1px solid rgba(247,147,26,0.12)" } : {}}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <Link href={`/${article.slug}`}>
                        <p className="text-[11px] leading-[1.4] hover:text-[#F7931A] transition-colors line-clamp-2" style={{ color: textColor }}>
                          {article.title}
                        </p>
                      </Link>
                      {isDone && (
                        /* COMPLETE in amber — maps NOVA's green COMPLETE text */
                        <span className="text-glow-amber" style={{ fontSize: "8px", color: "#F7931A", textTransform: "uppercase", letterSpacing: "0.05em", flexShrink: 0, marginTop: "1px" }}>
                          Done
                        </span>
                      )}
                    </div>
                    {isActive && <p style={{ fontSize: "9px", color: "#52526A", marginTop: "4px" }}>ETA 2D 14H</p>}
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
