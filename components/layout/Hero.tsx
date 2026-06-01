import Link from "next/link";
import { ArrowRight, Plus, TrendUp, ChartBar, Coins, CaretDown, Play } from "@phosphor-icons/react/dist/ssr";
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
      {/* ── Background: dark atmospheric server/tech image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1920&auto=format&fit=crop&q=80')",
        }}
      />

      {/* Primary left-to-right overlay — keeps left column nearly black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.40) 45%, rgba(10,10,10,0.65) 100%)",
        }}
      />

      {/* Radial edge vignette — darkens all four edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(10,10,10,0.70) 100%)",
        }}
      />

      {/* Aurora amber glow — centered on hero image area */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(247,147,26,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 lg:px-6 h-full flex items-center pt-[56px] lg:pt-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 w-full items-center">

          {/* ── Left column — col 1-4 ── */}
          <div className="lg:col-span-4 flex flex-col gap-5">

            {/* Status badge */}
            <div className="hero-enter-1">
              <StatusPill status={marketStatus} />
            </div>

            {/* Display Headline */}
            <div className="hero-enter-2">
              <h1 className="font-[800] leading-[1.05] tracking-[-0.03em] uppercase">
                <span className="block text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] xl:text-[64px]">
                  UNDERSTAND.
                </span>
                <span className="block text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] xl:text-[64px]">
                  VERIFY.
                </span>
                <span
                  className="block text-[28px] sm:text-[32px] md:text-[40px] lg:text-[56px] xl:text-[64px]"
                  style={{ color: "#F7931A" }}
                >
                  INVEST.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-[#A0A0A0] text-[15px] lg:text-[17px] font-[400] leading-[1.65] max-w-[380px] hero-enter-3">
              Bitcoin-first news, market analysis, and tools for investors who value signal over hype.
            </p>

            {/* CTA buttons — sharp 4px radius matching NOVA reference */}
            <div className="flex items-center gap-3 hero-enter-4">
              {/* Play circle — NOVA reference detail */}
              <button
                aria-label="Play"
                className="hidden sm:flex w-[44px] h-[44px] rounded-full border border-[rgba(255,255,255,0.25)] items-center justify-center text-white hover:border-[rgba(255,255,255,0.5)] transition-all flex-shrink-0"
              >
                <Play size={16} weight="fill" />
              </button>

              <div className="flex flex-col sm:flex-row gap-3 flex-1">
                <Link href="/bitcoin-news" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto !rounded-[4px]">
                    Read Top Stories <ArrowRight size={16} weight="bold" />
                  </Button>
                </Link>
                <Link href="/bitcoin-news" className="w-full sm:w-auto">
                  <Button variant="ghost" size="lg" className="w-full sm:w-auto !rounded-[4px]">
                    Live Prices <Plus size={16} weight="bold" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Center — col 5-9 — floating glass card ── */}
          <div className="hidden md:block lg:col-span-5 relative h-full min-h-[320px]">
            <div
              className="absolute bottom-[40px] right-[8px] z-[40] rounded-[12px] p-[16px_20px] min-w-[210px] hero-enter-6"
              style={{
                background: "rgba(17,17,17,0.80)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <p className="text-[11px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-1">
                BTC Price Target
              </p>
              <p
                className="text-[28px] font-[500] leading-[1.2] text-white"
                style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
              >
                $100,000
              </p>
            </div>
          </div>

          {/* ── Right column — col 10-12 — Live Market Stats ── */}
          {/* Fix 3: dash separators instead of border lines */}
          <div className="hidden lg:flex lg:col-span-3 flex-col">

            {/* BTC Price tile */}
            <div className="py-[16px]">
              <TrendUp size={18} className="text-[#A0A0A0] mb-2" />
              <p
                className="text-[28px] font-[500] text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
                aria-live="polite"
              >
                {formatPrice(priceData.price)}
              </p>
              <p
                className="text-[13px] font-[500] mt-[2px]"
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  color: isPositive ? "#00C896" : "#FF4D4D",
                }}
              >
                {isPositive ? "▲" : "▼"} {formatPercent(priceData.change24h)}
              </p>
              <p className="text-[10px] uppercase tracking-[0.08em] text-[#A0A0A0] mt-1">
                BTC Price
              </p>
            </div>

            {/* Dash separator — NOVA reference pattern */}
            <div className="text-[#2A2A2A] text-[14px] leading-none select-none pl-[2px]">–</div>

            {/* Volume tile */}
            <div className="py-[16px]">
              <ChartBar size={18} className="text-[#A0A0A0] mb-2" />
              <p
                className="text-[24px] font-[500] text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
                aria-live="polite"
              >
                {formatLargeNumber(priceData.volume24h)}
              </p>
              <p className="text-[10px] uppercase tracking-[0.08em] text-[#A0A0A0] mt-1">
                24H Volume
              </p>
            </div>

            {/* Dash separator */}
            <div className="text-[#2A2A2A] text-[14px] leading-none select-none pl-[2px]">–</div>

            {/* Dominance tile */}
            <div className="py-[16px]">
              <Coins size={18} className="text-[#A0A0A0] mb-2" />
              <p
                className="text-[24px] font-[500] text-white leading-[1.2]"
                style={{ fontFamily: "var(--font-jetbrains, monospace)" }}
                aria-live="polite"
              >
                {priceData.dominance.toFixed(1)}%
              </p>
              <p className="text-[10px] uppercase tracking-[0.08em] text-[#A0A0A0] mt-1">
                BTC Dominance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Left-edge vertical scroll indicator ── */}
      <div
        className="absolute hidden md:flex flex-col items-center gap-2 z-[50]"
        style={{ left: "24px", bottom: "72px" }}
      >
        <div className="w-[6px] h-[6px] rounded-full border border-[#333] bg-transparent" />
        <div className="w-[1px] h-[56px] bg-[#2A2A2A]" />
        <CaretDown size={12} className="text-[#555] bounce-down" />
      </div>

      {/* ── Mobile stats strip — bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 lg:hidden border-t border-[#2A2A2A] bg-[rgba(10,10,10,0.92)] backdrop-blur-[8px]">
        <div className="flex items-center justify-around px-4 py-3 overflow-x-auto gap-4">
          {[
            { value: formatPrice(priceData.price), label: "BTC" },
            {
              value: formatPercent(priceData.change24h),
              label: "24H",
              color: isPositive ? "#00C896" : "#FF4D4D",
            },
            { value: formatLargeNumber(priceData.volume24h), label: "Vol" },
            { value: `${priceData.dominance.toFixed(1)}%`, label: "Dom" },
          ].map((stat) => (
            <div key={stat.label} className="text-center flex-shrink-0">
              <p
                className="text-[13px] font-[500]"
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  color: stat.color ?? "#FFFFFF",
                }}
              >
                {stat.value}
              </p>
              <p className="text-[10px] uppercase text-[#A0A0A0]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
