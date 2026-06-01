import Link from "next/link";
import { ArrowRight, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { Card } from "@/components/ui/Card";
import { formatPrice, formatPercent, formatLargeNumber } from "@/lib/utils";
import type { PriceData } from "@/types";
import { TRENDING_TOPICS, TOP_MOVERS } from "@/lib/api";

interface SidebarProps {
  priceData: PriceData;
}

export function Sidebar({ priceData }: SidebarProps) {
  const isPositive = priceData.change24h >= 0;

  return (
    <aside className="flex flex-col gap-4" aria-label="Sidebar">
      {/* S1 — Live Bitcoin Price Widget */}
      <div
        className="rounded-[12px] p-[16px] border border-[#2A2A2A] bg-[#111111]"
        style={{ borderLeft: "2px solid #F7931A" }}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-white flex items-center gap-2">
            <TrendUp size={16} className="text-[#F7931A]" />
            Bitcoin
          </p>
          <span className="flex items-center gap-1 text-[11px] font-[500] uppercase tracking-[0.04em] text-[#00C896]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#00C896] pulse-dot" />
            Live
          </span>
        </div>

        <div className="flex items-baseline gap-3 mb-1">
          <p
            className="text-[24px] font-[500] text-white leading-[1.2]"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-live="polite"
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

        {/* Sparkline placeholder */}
        <div className="h-[40px] my-3 rounded-[4px] overflow-hidden">
          <svg viewBox="0 0 200 40" className="w-full h-full" aria-hidden="true">
            <polyline
              points="0,35 28,28 57,20 85,25 114,12 142,8 171,5 200,3"
              fill="none"
              stroke={isPositive ? "#00C896" : "#FF4D4D"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex justify-between text-[12px] text-[#A0A0A0]">
          <span>24H High <span className="text-white" style={{ fontFamily: "var(--font-mono)" }}>{formatPrice(priceData.high24h)}</span></span>
          <span>Low <span className="text-white" style={{ fontFamily: "var(--font-mono)" }}>{formatPrice(priceData.low24h)}</span></span>
        </div>
      </div>

      {/* S2 — Trending Topics */}
      <Card hover={false}>
        <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-3">
          Trending Now
        </p>
        <ul className="space-y-0">
          {TRENDING_TOPICS.map((topic) => (
            <li key={topic.rank}>
              <Link
                href={`/bitcoin-news`}
                className="flex items-center justify-between py-[10px] border-b border-[#2A2A2A] last:border-0 group"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-[12px] font-[500] w-[20px] flex-shrink-0"
                    style={{ fontFamily: "var(--font-mono)", color: "#A0A0A0" }}
                  >
                    {String(topic.rank).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] text-white group-hover:text-[#F7931A] transition-colors">
                    {topic.title}
                  </span>
                </div>
                <ArrowRight size={14} className="text-[#A0A0A0] group-hover:text-[#F7931A] transition-colors flex-shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </Card>

      {/* S3 — Newsletter Signup */}
      <div
        className="rounded-[12px] p-[16px] border border-[#2A2A2A]"
        style={{ background: "rgba(247,147,26,0.05)", borderColor: "rgba(247,147,26,0.2)" }}
      >
        <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-2">
          Stay Informed
        </p>
        <p className="text-[13px] text-white mb-4">
          Weekly Bitcoin digest, no noise.
        </p>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full h-[44px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-[8px] px-[16px] text-[14px] text-white placeholder:text-[#666] outline-none focus:border-[#F7931A] mb-3"
        />
        <button className="w-full h-[44px] bg-[#F7931A] text-[#0A0A0A] text-[13px] font-[600] uppercase tracking-[0.04em] rounded-[8px] hover:bg-[#e8841a] transition-colors">
          Subscribe →
        </button>
      </div>

      {/* S4 — Top Movers */}
      <Card hover={false}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0]">
            Top Movers
          </p>
          <span className="text-[11px] uppercase text-[#A0A0A0]">24H</span>
        </div>
        <ul className="space-y-0">
          {TOP_MOVERS.map((mover) => (
            <li
              key={mover.symbol}
              className="flex items-center justify-between py-[10px] border-b border-[#2A2A2A] last:border-0"
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-[13px] font-[500] text-white w-[32px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {mover.symbol}
                </span>
                <span className="text-[12px] text-[#A0A0A0]">{mover.name}</span>
              </div>
              <div className="text-right">
                <p
                  className="text-[13px] font-[400] text-white"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {formatPrice(mover.price)}
                </p>
                <p
                  className="text-[12px]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: mover.change24h >= 0 ? "#00C896" : "#FF4D4D",
                  }}
                >
                  {formatPercent(mover.change24h)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* S5 — Volume info */}
      <div className="rounded-[12px] p-[16px] border-t-[2px] border-t-[#3B9EFF] border border-[#2A2A2A] bg-[#1A1A1A]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0]">
            Market Volume
          </p>
          <span className="text-[11px] text-[#3B9EFF] uppercase font-[500]">PR</span>
        </div>
        <p
          className="text-[20px] font-[500] text-white"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {formatLargeNumber(priceData.volume24h)}
        </p>
        <p className="text-[12px] text-[#A0A0A0] mt-1">24h trading volume</p>
      </div>
    </aside>
  );
}
