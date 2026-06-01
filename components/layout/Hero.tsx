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
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "640px", maxHeight: "920px" }}
      aria-label="Hero"
    >
      {/* ══════════════════════════════════════════════════════
          BACKGROUND: Abstract particle wave image
          → Place your image at: /public/images/hero-bg.jpg
          → The orange particle waves create perfect glassmorphism
            backdrop — frosted glass panels blur the particles
            into a beautiful haze visible through every card.
      ══════════════════════════════════════════════════════ */}

      {/* Base void */}
      <div className="absolute inset-0" style={{ background: "#07070F" }} />

      {/* Background — dark amber 3D abstract form
          Positioned right-center so the amber shape sits in the
          center-right visual zone (text stays on dark left)     */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "70% center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Multi-pass overlays for depth and text legibility */}

      {/* Primary directional gradient — left stays dark for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(108deg, rgba(7,7,15,0.95) 0%, rgba(7,7,15,0.72) 30%, rgba(7,7,15,0.08) 60%, rgba(7,7,15,0.45) 100%)",
        }}
      />

      {/* Top darkness — nav area stays clean */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,7,15,0.75) 0%, transparent 22%, transparent 72%, rgba(7,7,15,0.92) 100%)",
        }}
      />

      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)",
        }}
      />

      {/* ─── 3-column grid content (layout unchanged) ─── */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 lg:px-6 h-full flex items-center pt-[56px] lg:pt-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 w-full items-center">

          {/* ── Col 1–4: Left content ── */}
          <div className="lg:col-span-4 flex flex-col gap-[22px]">

            <div className="hero-enter-1">
              <StatusPill status={marketStatus} />
            </div>

            <div className="hero-enter-2">
              <h1 className="font-[800] leading-[1.00] tracking-[-0.04em] uppercase">
                <span className="block text-white" style={{ fontSize: "clamp(32px, 5.2vw, 68px)" }}>
                  UNDERSTAND.
                </span>
                <span className="block text-white" style={{ fontSize: "clamp(32px, 5.2vw, 68px)" }}>
                  VERIFY.
                </span>
                <span
                  className="block text-glow-amber"
                  style={{ fontSize: "clamp(32px, 5.2vw, 68px)", color: "#F7931A" }}
                >
                  INVEST.
                </span>
              </h1>
            </div>

            <p
              className="hero-enter-3 leading-[1.70]"
              style={{ fontSize: "clamp(13px, 1.1vw, 16px)", color: "#9898B0", maxWidth: "360px" }}
            >
              Bitcoin-first intelligence — signal over noise, verified before published.
            </p>

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

            <div className="hidden lg:flex items-center gap-3 mt-1 hero-enter-5">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1px] h-[32px] bg-gradient-to-b from-[rgba(255,255,255,0.12)] to-transparent" />
                <CaretDown size={10} style={{ color: "#38384C" }} className="bounce-down" />
              </div>
              <span style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#38384C" }}>
                Scroll
              </span>
            </div>
          </div>

          {/* ── Col 5–9: Center — floating glass card ── */}
          <div className="hidden md:block lg:col-span-5 relative h-full min-h-[320px]">
            {/* Glass card — particle wave image shows through frosted surface */}
            <div
              className="absolute bottom-[48px] right-0 z-[40] floating hero-enter-6"
              style={{
                background: "rgba(7,7,15,0.22)",
                backdropFilter: "blur(36px) saturate(1.5)",
                WebkitBackdropFilter: "blur(36px) saturate(1.5)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "14px",
                padding: "20px 24px",
                minWidth: "220px",
                boxShadow: `
                  inset 0 1px 0 rgba(255,255,255,0.12),
                  inset 0 -1px 0 rgba(0,0,0,0.30),
                  0 12px 48px rgba(0,0,0,0.55),
                  0 0 0 1px rgba(247,147,26,0.06)
                `,
              }}
            >
              <p style={{ fontSize: "9px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", color: "#52526A", marginBottom: "8px" }}>
                BTC / USD · Target
              </p>
              <p className="text-white" style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "30px", fontWeight: 500, lineHeight: 1.1 }}>
                $100,000
              </p>
              <p className="text-glow-amber" style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", color: "#F7931A", marginTop: "6px" }}>
                ▲ Accumulation zone
              </p>
            </div>
          </div>

          {/* ── Col 10–12: Right stats ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col">
            {[
              {
                icon: <TrendUp size={16} style={{ color: "#38384C" }} />,
                value: formatPrice(priceData.price),
                sub: formatPercent(priceData.change24h),
                subColor: priceColor,
                label: "BTC Price",
                large: true,
              },
              {
                icon: <ChartBar size={16} style={{ color: "#38384C" }} />,
                value: formatLargeNumber(priceData.volume24h),
                label: "24H Volume",
              },
              {
                icon: <Coins size={16} style={{ color: "#38384C" }} />,
                value: `${priceData.dominance.toFixed(1)}%`,
                label: "Dominance",
              },
            ].map((stat, i) => (
              <div key={stat.label}>
                <div className="py-[16px]">
                  <div className="mb-2">{stat.icon}</div>
                  <p
                    className="text-white leading-none"
                    style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: stat.large ? "26px" : "21px", fontWeight: 500 }}
                    aria-live="polite"
                  >
                    {stat.value}
                  </p>
                  {stat.sub && (
                    <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", fontWeight: 500, color: stat.subColor, marginTop: "3px" }}>
                      {stat.sub}
                    </p>
                  )}
                  <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.10em", color: "#38384C", marginTop: "6px" }}>
                    {stat.label}
                  </p>
                </div>
                {i < 2 && <div style={{ color: "#1A1A2A", fontSize: "13px", lineHeight: 1, userSelect: "none" }}>–</div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile stats strip */}
      <div
        className="absolute bottom-0 left-0 right-0 lg:hidden backdrop-blur-[16px]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(7,7,15,0.88)" }}
      >
        <div className="flex items-center justify-around px-4 py-3 gap-4">
          {[
            { v: formatPrice(priceData.price), l: "BTC" },
            { v: formatPercent(priceData.change24h), l: "24H", c: priceColor },
            { v: formatLargeNumber(priceData.volume24h), l: "Vol" },
            { v: `${priceData.dominance.toFixed(1)}%`, l: "Dom" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "12px", fontWeight: 500, color: s.c ?? "#FFFFFF" }}>
                {s.v}
              </p>
              <p style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#38384C", marginTop: "2px" }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
