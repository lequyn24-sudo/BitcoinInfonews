import Link from "next/link";
import { ArrowRight, Plus, TrendUp, ChartBar, Coins, CaretDown } from "@phosphor-icons/react/dist/ssr";
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
  const priceColor = isPositive ? "#00C896" : "#FF4D4D";

  return (
    <section
      className="relative w-full overflow-visible"
      style={{ height: "100svh", minHeight: "640px", maxHeight: "900px" }}
      aria-label="Hero"
    >
      {/* Base void */}
      <div className="absolute inset-0 bg-[#060608]" />

      {/* Cinematic background — dark atmospheric Bitcoin image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1639762681057-408e52192e55?w=1920&auto=format&fit=crop&q=85')",
        }}
      />

      {/* Multi-pass atmospheric overlays */}
      {/* Primary: heavy left, transparent center-right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(6,6,8,0.97) 0%, rgba(6,6,8,0.80) 36%, rgba(6,6,8,0.28) 62%, rgba(6,6,8,0.72) 100%)",
        }}
      />
      {/* Top + bottom darkness */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,6,8,0.80) 0%, transparent 25%, transparent 72%, rgba(6,6,8,0.95) 100%)",
        }}
      />
      {/* Radial edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 55% 48%, transparent 22%, rgba(6,6,8,0.70) 100%)",
        }}
      />
      {/* Soft amber volumetric light — center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 60% 52%, rgba(247,147,26,0.07) 0%, transparent 48%)",
        }}
      />

      {/* ─── Content: 3-column grid layout (unchanged structure) ─── */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 lg:px-6 h-full flex items-center pt-[56px] lg:pt-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 w-full items-center">

          {/* ── Col 1–4: Left content ── */}
          <div className="lg:col-span-4 flex flex-col gap-[22px]">

            {/* Status badge */}
            <div className="hero-enter-1">
              <StatusPill status={marketStatus} />
            </div>

            {/* Display headline — NOVA scale, tight tracking */}
            <div className="hero-enter-2">
              <h1 className="font-[800] leading-[1.00] tracking-[-0.04em] uppercase">
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(32px, 5.2vw, 68px)" }}
                >
                  UNDERSTAND.
                </span>
                <span
                  className="block text-white"
                  style={{ fontSize: "clamp(32px, 5.2vw, 68px)" }}
                >
                  VERIFY.
                </span>
                <span
                  className="block"
                  style={{ fontSize: "clamp(32px, 5.2vw, 68px)", color: "#F7931A" }}
                >
                  INVEST.
                </span>
              </h1>
            </div>

            {/* Subheadline — muted, relaxed */}
            <p
              className="text-[#666] leading-[1.70] hero-enter-3"
              style={{ fontSize: "clamp(13px, 1.1vw, 16px)", maxWidth: "360px" }}
            >
              Bitcoin-first intelligence — signal over noise, verified before published.
            </p>

            {/* CTAs — NOVA: sharp 4px radius */}
            <div className="flex flex-col sm:flex-row gap-3 hero-enter-4">
              <Link href="/bitcoin-news">
                <Button variant="primary" size="lg" className="w-full sm:w-auto !rounded-[4px]">
                  Read Top Stories <ArrowRight size={15} weight="bold" />
                </Button>
              </Link>
              <Link href="/bitcoin-news">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto !rounded-[4px]">
                  Live Prices <Plus size={15} weight="bold" />
                </Button>
              </Link>
            </div>

            {/* Left-edge scroll indicator */}
            <div className="hidden lg:flex items-center gap-3 mt-2 hero-enter-5">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1px] h-[32px] bg-gradient-to-b from-[rgba(255,255,255,0.10)] to-transparent" />
                <CaretDown size={10} className="text-[#333] bounce-down" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.14em] text-[#333]">
                Scroll
              </span>
            </div>
          </div>

          {/* ── Col 5–9: Center — floating glass card ── */}
          <div className="hidden md:block lg:col-span-5 relative h-full min-h-[320px]">
            {/* Floating glass card — glassmorphism, NOVA-level frosting */}
            <div
              className="absolute bottom-[48px] right-0 z-[40] floating hero-enter-6"
              style={{
                background: "rgba(10,10,12,0.72)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                padding: "20px 24px",
                minWidth: "220px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.04) inset",
              }}
            >
              <p
                className="mb-1"
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#404040",
                }}
              >
                BTC / USD · Target
              </p>
              <p
                className="text-white"
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: "30px",
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                $100,000
              </p>
              <p
                className="mt-1"
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: "12px",
                  color: "#00C896",
                }}
              >
                ▲ Accumulation zone
              </p>
            </div>
          </div>

          {/* ── Col 10–12: Right — live market stats ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col">
            {[
              {
                icon: <TrendUp size={16} className="text-[#333]" />,
                value: formatPrice(priceData.price),
                sub: formatPercent(priceData.change24h),
                subColor: priceColor,
                label: "BTC Price",
              },
              {
                icon: <ChartBar size={16} className="text-[#333]" />,
                value: formatLargeNumber(priceData.volume24h),
                label: "24H Volume",
              },
              {
                icon: <Coins size={16} className="text-[#333]" />,
                value: `${priceData.dominance.toFixed(1)}%`,
                label: "Dominance",
              },
            ].map((stat, i) => (
              <div key={stat.label}>
                <div className="py-[18px]">
                  <div className="mb-2">{stat.icon}</div>
                  <p
                    className="text-white leading-none"
                    style={{
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: i === 0 ? "26px" : "22px",
                      fontWeight: 500,
                    }}
                    aria-live="polite"
                  >
                    {stat.value}
                  </p>
                  {stat.sub && (
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: "var(--font-jetbrains, monospace)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: stat.subColor,
                      }}
                    >
                      {stat.sub}
                    </p>
                  )}
                  <p
                    className="mt-[6px]"
                    style={{
                      fontSize: "9px",
                      textTransform: "uppercase",
                      letterSpacing: "0.10em",
                      color: "#383838",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
                {i < 2 && (
                  <div className="text-[#1C1C1C] text-[13px] leading-none select-none">
                    –
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stats strip */}
      <div className="absolute bottom-0 left-0 right-0 lg:hidden border-t border-[rgba(255,255,255,0.04)] bg-[rgba(6,6,8,0.90)] backdrop-blur-[16px]">
        <div className="flex items-center justify-around px-4 py-3 gap-4">
          {[
            { v: formatPrice(priceData.price), l: "BTC" },
            { v: formatPercent(priceData.change24h), l: "24H", c: priceColor },
            { v: formatLargeNumber(priceData.volume24h), l: "Vol" },
            { v: `${priceData.dominance.toFixed(1)}%`, l: "Dom" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p
                style={{
                  fontFamily: "var(--font-jetbrains, monospace)",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: s.c ?? "#FFFFFF",
                }}
              >
                {s.v}
              </p>
              <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#404040", marginTop: "2px" }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
