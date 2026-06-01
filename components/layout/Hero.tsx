import Link from "next/link";
import { ArrowRight, Plus, TrendUp, ChartBar, Coins } from "@phosphor-icons/react/dist/ssr";
import { StatusPill } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatPrice, formatPercent, formatLargeNumber } from "@/lib/utils";
import type { PriceData, MarketStatus } from "@/types";

interface HeroProps {
  priceData: PriceData;
  marketStatus: MarketStatus;
}

export function Hero({ priceData, marketStatus }: HeroProps) {
  const isPositive = priceData.change24h >= 0;

  return (
    <section
      className="relative min-h-[640px] max-h-[860px] h-[90vh] lg:h-screen w-full overflow-visible"
      aria-label="Hero section"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/bitcoin-hero/1920/1080')",
        }}
      />
      {/* Left-to-right gradient overlay (per spec) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.75) 100%)",
        }}
      />
      {/* Aurora amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 50%, rgba(247,147,26,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 lg:px-6 h-full flex items-center pt-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 w-full items-center">

          {/* Left column — col 1-4 */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Status badge */}
            <div>
              <StatusPill status={marketStatus} />
            </div>

            {/* Headline */}
            <div>
              <h1
                className="font-[800] leading-[1.05] tracking-[-0.03em] uppercase"
                style={{ fontSize: "clamp(28px, 5vw, 64px)" }}
              >
                <span className="block text-white fade-in-up" style={{ animationDelay: "0ms" }}>
                  UNDERSTAND.
                </span>
                <span className="block text-white fade-in-up" style={{ animationDelay: "100ms" }}>
                  VERIFY.
                </span>
                <span
                  className="block fade-in-up"
                  style={{ color: "#F7931A", animationDelay: "200ms" }}
                >
                  INVEST.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p
              className="text-[#A0A0A0] text-[16px] lg:text-[18px] font-[400] leading-[1.6] max-w-[380px] fade-in-up"
              style={{ animationDelay: "350ms" }}
            >
              Bitcoin-first news, market analysis, and tools for investors who value signal over hype.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 fade-in-up"
              style={{ animationDelay: "450ms" }}
            >
              <Link href="/bitcoin-news">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Read Top Stories <ArrowRight size={16} weight="bold" />
                </Button>
              </Link>
              <Link href="/bitcoin-news">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Live Prices <Plus size={16} weight="bold" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Center — col 5-9 (hidden on mobile) */}
          <div className="hidden md:block lg:col-span-5 relative h-full min-h-[300px]">
            {/* Floating glass card */}
            <div
              className="absolute bottom-[32px] right-0 z-[40] rounded-[12px] p-[16px_20px] min-w-[200px]"
              style={{
                background: "rgba(17,17,17,0.75)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-1">
                BTC Price Target
              </p>
              <p
                className="text-[28px] font-[500] leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                $100,000
              </p>
            </div>
          </div>

          {/* Right column — stats (hidden below lg) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-0">
            {/* BTC Price */}
            <div className="py-[20px] border-b border-[#2A2A2A]">
              <TrendUp size={24} className="text-[#A0A0A0] mb-2" />
              <p
                className="text-[32px] font-[500] text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-mono)" }}
                aria-live="polite"
              >
                {formatPrice(priceData.price)}
              </p>
              <p
                className="text-[14px] font-[500] mt-1"
                style={{
                  color: isPositive ? "#00C896" : "#FF4D4D",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {isPositive ? "▲" : "▼"} {formatPercent(priceData.change24h)}
              </p>
              <p className="text-[11px] uppercase tracking-[0.06em] text-[#A0A0A0] mt-1">
                BTC Price
              </p>
            </div>

            {/* Volume */}
            <div className="py-[20px] border-b border-[#2A2A2A]">
              <ChartBar size={24} className="text-[#A0A0A0] mb-2" />
              <p
                className="text-[28px] font-[500] text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-mono)" }}
                aria-live="polite"
              >
                {formatLargeNumber(priceData.volume24h)}
              </p>
              <p className="text-[11px] uppercase tracking-[0.06em] text-[#A0A0A0] mt-1">
                24H Volume
              </p>
            </div>

            {/* Dominance */}
            <div className="py-[20px]">
              <Coins size={24} className="text-[#A0A0A0] mb-2" />
              <p
                className="text-[28px] font-[500] text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-mono)" }}
                aria-live="polite"
              >
                {priceData.dominance.toFixed(1)}%
              </p>
              <p className="text-[11px] uppercase tracking-[0.06em] text-[#A0A0A0] mt-1">
                BTC Dominance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[48px] left-4 lg:left-6 hidden md:flex flex-col items-center gap-2 z-[50] opacity-0 animate-[fade-in-up_400ms_ease-out_2s_forwards]">
        <div className="w-[1px] h-[48px] bg-[#2A2A2A]" />
        <p className="text-[10px] uppercase tracking-[0.1em] text-[#A0A0A0] [writing-mode:vertical-rl] rotate-180">
          Scroll to explore
        </p>
      </div>

      {/* Mobile stats strip */}
      <div className="absolute bottom-0 left-0 right-0 lg:hidden border-t border-[#2A2A2A] bg-[rgba(10,10,10,0.9)] backdrop-blur-[8px]">
        <div className="flex items-center justify-around px-4 py-3 overflow-x-auto gap-6">
          <div className="text-center flex-shrink-0">
            <p
              className="text-[14px] font-[500] text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {formatPrice(priceData.price)}
            </p>
            <p className="text-[10px] uppercase text-[#A0A0A0]">BTC</p>
          </div>
          <div className="text-center flex-shrink-0">
            <p
              className="text-[14px] font-[500]"
              style={{
                fontFamily: "var(--font-mono)",
                color: isPositive ? "#00C896" : "#FF4D4D",
              }}
            >
              {formatPercent(priceData.change24h)}
            </p>
            <p className="text-[10px] uppercase text-[#A0A0A0]">24H</p>
          </div>
          <div className="text-center flex-shrink-0">
            <p
              className="text-[14px] font-[500] text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {formatLargeNumber(priceData.volume24h)}
            </p>
            <p className="text-[10px] uppercase text-[#A0A0A0]">Vol</p>
          </div>
          <div className="text-center flex-shrink-0">
            <p
              className="text-[14px] font-[500] text-white"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {priceData.dominance.toFixed(1)}%
            </p>
            <p className="text-[10px] uppercase text-[#A0A0A0]">Dom</p>
          </div>
        </div>
      </div>
    </section>
  );
}
