import Link from "next/link";
import { ArrowRight, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { formatPrice, formatPercent, formatLargeNumber } from "@/lib/utils";
import type { PriceData } from "@/types";
import { TRENDING_TOPICS, TOP_MOVERS } from "@/lib/api";

interface SidebarProps {
  priceData: PriceData;
}

/* NOVA-mapped glass widget — cool blue-black tint */
const widget = {
  background: "rgba(10,10,20,0.65)",
  backdropFilter: "blur(22px)",
  WebkitBackdropFilter: "blur(22px)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "12px",
  padding: "16px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.30)",
};

const sectionLabel = {
  fontSize: "9px",
  fontWeight: 500,
  textTransform: "uppercase" as const,
  letterSpacing: "0.12em",
  color: "#38384C",   /* NOVA tertiary — cool ghost gray */
  marginBottom: "14px",
  display: "block",
};

export function Sidebar({ priceData }: SidebarProps) {
  const isPositive = priceData.change24h >= 0;
  const priceColor = isPositive ? "#00C896" : "#FF4D4D";

  return (
    <aside className="flex flex-col gap-3" aria-label="Sidebar">

      {/* S1 — Live BTC Price */}
      <div style={{ ...widget, borderLeft: "2px solid rgba(247,147,26,0.35)" }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendUp size={13} style={{ color: "#F7931A" }} />
            <span style={{ ...sectionLabel, marginBottom: 0 }}>Bitcoin</span>
          </div>
          <span className="flex items-center gap-[5px]" style={{ fontSize: "9px", color: "#F7931A", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            {/* Amber live dot — brand accent (maps NOVA's green live) */}
            <span className="w-[4px] h-[4px] rounded-full bg-[#F7931A] pulse-dot dot-glow-amber" />
            Live
          </span>
        </div>

        <div className="flex items-baseline gap-3 mb-1">
          <p
            style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "22px", fontWeight: 500, color: "#fff", lineHeight: 1.1 }}
            aria-live="polite"
          >
            {formatPrice(priceData.price)}
          </p>
          <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", fontWeight: 500, color: priceColor }}>
            {isPositive ? "▲" : "▼"} {formatPercent(priceData.change24h)}
          </p>
        </div>

        {/* Sparkline */}
        <div style={{ height: "36px", marginBottom: "10px" }}>
          <svg viewBox="0 0 200 36" style={{ width: "100%", height: "100%" }} aria-hidden="true">
            <defs>
              <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={priceColor} stopOpacity="0.25" />
                <stop offset="100%" stopColor={priceColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points="0,30 28,24 57,18 85,22 114,10 142,7 171,4 200,2 200,36 0,36"
              fill="url(#sg)"
            />
            <polyline
              points="0,30 28,24 57,18 85,22 114,10 142,7 171,4 200,2"
              fill="none"
              stroke={priceColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex justify-between">
          <span style={{ fontSize: "10px", color: "#38384C"}}>
            H: <span style={{ fontFamily: "var(--font-jetbrains, monospace)", color: "#505050" }}>{formatPrice(priceData.high24h)}</span>
          </span>
          <span style={{ fontSize: "10px", color: "#38384C"}}>
            L: <span style={{ fontFamily: "var(--font-jetbrains, monospace)", color: "#505050" }}>{formatPrice(priceData.low24h)}</span>
          </span>
        </div>
      </div>

      {/* S2 — Trending Topics */}
      <div style={widget}>
        <span style={sectionLabel}>Trending Now</span>
        <ul>
          {TRENDING_TOPICS.map((topic) => (
            <li key={topic.rank}>
              <Link
                href="/bitcoin-news"
                className="flex items-center justify-between py-[10px] group"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", color: "#282828", width: "18px", textAlign: "right" }}>
                    {String(topic.rank).padStart(2, "0")}
                  </span>
                  <span className="group-hover:text-[#F7931A] transition-colors" style={{ fontSize: "13px", color: "#fff" }}>
                    {topic.title}
                  </span>
                </div>
                <ArrowRight size={11} className="text-[#282828] group-hover:text-[#F7931A] transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* S3 — Newsletter */}
      <div style={{
        ...widget,
        background: "rgba(247,147,26,0.04)",
        border: "1px solid rgba(247,147,26,0.12)",
        boxShadow: "0 0 30px rgba(247,147,26,0.05), 0 4px 20px rgba(0,0,0,0.25)",
      }}>
        <span style={sectionLabel}>Stay Informed</span>
        <p style={{ fontSize: "13px", color: "#fff", marginBottom: "12px", lineHeight: 1.5 }}>
          Weekly Bitcoin digest, no noise.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full mb-3 outline-none transition-all duration-200"
          style={{
            height: "40px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "6px",
            padding: "0 14px",
            fontSize: "13px",
            color: "#fff",
          }}
        />
        <button
          className="w-full transition-colors duration-200 hover:bg-[#e8841a]"
          style={{
            height: "40px",
            background: "#F7931A",
            color: "#060608",
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Subscribe →
        </button>
      </div>

      {/* S4 — Top Movers */}
      <div style={widget}>
        <div className="flex items-center justify-between mb-4">
          <span style={{ ...sectionLabel, marginBottom: 0 }}>Top Movers</span>
          <span style={{ fontSize: "9px", color: "#383838", textTransform: "uppercase", letterSpacing: "0.08em" }}>24H</span>
        </div>
        <ul>
          {TOP_MOVERS.map((m) => (
            <li
              key={m.symbol}
              className="flex items-center justify-between py-[10px]"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
            >
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", fontWeight: 500, color: "#fff", width: "32px" }}>
                  {m.symbol}
                </span>
                <span style={{ fontSize: "11px", color: "#38384C"}}>{m.name}</span>
              </div>
              <div className="text-right">
                <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", color: "#fff" }}>
                  {formatPrice(m.price)}
                </p>
                <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", color: m.change24h >= 0 ? "#00C896" : "#FF4D4D" }}>
                  {m.change24h >= 0 ? "+" : ""}{m.change24h.toFixed(2)}%
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* S5 — Volume */}
      <div style={{ ...widget, borderTop: "2px solid rgba(59,158,255,0.20)", borderRadius: "0 0 12px 12px" }}>
        <div className="flex items-center justify-between mb-3">
          <span style={{ ...sectionLabel, marginBottom: 0 }}>Market Volume</span>
          <span style={{ fontSize: "9px", color: "#3B9EFF", textTransform: "uppercase", letterSpacing: "0.08em" }}>24H</span>
        </div>
        <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "18px", fontWeight: 500, color: "#fff" }}>
          {formatLargeNumber(priceData.volume24h)}
        </p>
        <p style={{ fontSize: "10px", color: "#383838", marginTop: "4px" }}>Global trading volume</p>
      </div>
    </aside>
  );
}
