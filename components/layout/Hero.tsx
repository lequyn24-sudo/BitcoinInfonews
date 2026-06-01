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
          ABSTRACT BACKGROUND — SVG COMPOSITION
          5 visual roles mapped from NOVA reference:
          1. Focal sphere   → amber radial gradient (NOVA: planet)
          2. Orbital rings  → thin ellipses (NOVA: orbital paths)
          3. Star field     → scattered dots varying size/opacity
          4. Network nodes  → amber dots + connection lines
          5. Blue accent    → blue radial (NOVA: atmospheric blue)
      ══════════════════════════════════════════════════════ */}

      {/* Base void */}
      <div className="absolute inset-0" style={{ background: "#07070F" }} />

      {/* The SVG composition */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1280 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* 1. Focal sphere — amber, fades outward */}
          <radialGradient id="hFocal" cx="62%" cy="48%" r="35%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#F7931A" stopOpacity="0.22" />
            <stop offset="35%"  stopColor="#F7931A" stopOpacity="0.09" />
            <stop offset="70%"  stopColor="#F7931A" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#F7931A" stopOpacity="0" />
          </radialGradient>
          {/* Inner core — brighter centre */}
          <radialGradient id="hCore" cx="60%" cy="44%" r="13%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#F7931A" stopOpacity="0.42" />
            <stop offset="60%"  stopColor="#F7931A" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#F7931A" stopOpacity="0" />
          </radialGradient>
          {/* Blue accent — top-right corner */}
          <radialGradient id="hBlue" cx="90%" cy="18%" r="28%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#3B9EFF" stopOpacity="0.18" />
            <stop offset="60%"  stopColor="#3B9EFF" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#3B9EFF" stopOpacity="0" />
          </radialGradient>
          {/* Bottom-right ambient glow */}
          <radialGradient id="hBottom" cx="72%" cy="100%" r="32%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#F7931A" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#F7931A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── 1. FOCAL SPHERE ── */}
        <rect x="0" y="0" width="1280" height="900" fill="url(#hFocal)" />
        <rect x="0" y="0" width="1280" height="900" fill="url(#hCore)" />
        {/* Sphere edge rim — bright arc upper-left side of sphere */}
        <circle cx="793" cy="430" r="270"
          fill="none"
          stroke="rgba(247,147,26,0.22)"
          strokeWidth="1.5"
          strokeDasharray="280 1760"
          strokeDashoffset="-60"
        />
        {/* Outer faint halo */}
        <circle cx="793" cy="430" r="320"
          fill="none"
          stroke="rgba(247,147,26,0.07)"
          strokeWidth="1"
        />

        {/* ── 2. ORBITAL RING PATHS ── */}
        <ellipse cx="793" cy="430" rx="350" ry="88"
          fill="none" stroke="rgba(255,255,255,0.050)" strokeWidth="1"
          transform="rotate(-20, 793, 430)"
        />
        <ellipse cx="793" cy="430" rx="260" ry="62"
          fill="none" stroke="rgba(255,255,255,0.035)" strokeWidth="0.8"
          transform="rotate(-32, 793, 430)"
        />
        <ellipse cx="793" cy="430" rx="170" ry="44"
          fill="none" stroke="rgba(247,147,26,0.09)" strokeWidth="0.7"
          transform="rotate(-14, 793, 430)"
        />
        {/* Orbital dot — small marker on ring 1 */}
        <circle cx="1110" cy="380" r="3" fill="rgba(255,255,255,0.50)" />
        <circle cx="1110" cy="380" r="6" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        {/* Orbital dot on ring 2 */}
        <circle cx="555" cy="500" r="2.5" fill="rgba(247,147,26,0.60)" />

        {/* ── 3. STAR FIELD — varying sizes, no regular pattern ── */}
        {/* Bright / large */}
        <circle cx="118"  cy="88"  r="1.8" fill="rgba(255,255,255,0.72)" />
        <circle cx="1142" cy="122" r="2.0" fill="rgba(255,255,255,0.68)" />
        <circle cx="968"  cy="276" r="1.7" fill="rgba(255,255,255,0.62)" />
        <circle cx="672"  cy="634" r="1.8" fill="rgba(255,255,255,0.58)" />
        <circle cx="212"  cy="508" r="1.6" fill="rgba(255,255,255,0.64)" />
        <circle cx="1188" cy="690" r="2.0" fill="rgba(255,255,255,0.52)" />
        <circle cx="440"  cy="76"  r="1.9" fill="rgba(255,255,255,0.60)" />
        {/* Medium */}
        <circle cx="316"  cy="196" r="1.2" fill="rgba(255,255,255,0.46)" />
        <circle cx="562"  cy="148" r="1.1" fill="rgba(255,255,255,0.43)" />
        <circle cx="906"  cy="106" r="1.3" fill="rgba(255,255,255,0.50)" />
        <circle cx="1058" cy="358" r="1.1" fill="rgba(255,255,255,0.42)" />
        <circle cx="482"  cy="724" r="1.2" fill="rgba(255,255,255,0.39)" />
        <circle cx="748"  cy="806" r="1.1" fill="rgba(255,255,255,0.36)" />
        <circle cx="1152" cy="502" r="1.0" fill="rgba(255,255,255,0.40)" />
        <circle cx="138"  cy="342" r="1.2" fill="rgba(255,255,255,0.44)" />
        <circle cx="638"  cy="48"  r="1.1" fill="rgba(255,255,255,0.46)" />
        <circle cx="1020" cy="766" r="1.3" fill="rgba(255,255,255,0.35)" />
        <circle cx="274"  cy="702" r="1.0" fill="rgba(255,255,255,0.38)" />
        <circle cx="844"  cy="828" r="1.2" fill="rgba(255,255,255,0.32)" />
        {/* Small */}
        <circle cx="86"   cy="118" r="0.8" fill="rgba(255,255,255,0.30)" />
        <circle cx="208"  cy="58"  r="0.7" fill="rgba(255,255,255,0.28)" />
        <circle cx="376"  cy="418" r="0.8" fill="rgba(255,255,255,0.26)" />
        <circle cx="534"  cy="312" r="0.7" fill="rgba(255,255,255,0.24)" />
        <circle cx="694"  cy="234" r="0.9" fill="rgba(255,255,255,0.28)" />
        <circle cx="1068" cy="184" r="0.8" fill="rgba(255,255,255,0.30)" />
        <circle cx="1218" cy="338" r="0.7" fill="rgba(255,255,255,0.25)" />
        <circle cx="168"  cy="614" r="0.8" fill="rgba(255,255,255,0.27)" />
        <circle cx="358"  cy="556" r="0.7" fill="rgba(255,255,255,0.24)" />
        <circle cx="916"  cy="574" r="0.8" fill="rgba(255,255,255,0.22)" />
        <circle cx="1086" cy="626" r="0.7" fill="rgba(255,255,255,0.26)" />
        <circle cx="624"  cy="764" r="0.9" fill="rgba(255,255,255,0.24)" />
        <circle cx="46"   cy="442" r="0.8" fill="rgba(255,255,255,0.28)" />
        <circle cx="1234" cy="812" r="0.7" fill="rgba(255,255,255,0.22)" />
        <circle cx="786"  cy="164" r="0.8" fill="rgba(255,255,255,0.30)" />
        <circle cx="1002" cy="468" r="0.7" fill="rgba(255,255,255,0.24)" />

        {/* ── 4. NETWORK NODE CLUSTER ── */}
        {/* Connection lines */}
        <line x1="910" y1="258" x2="990"  y2="312" stroke="rgba(247,147,26,0.14)" strokeWidth="0.8" />
        <line x1="990" y1="312" x2="1028" y2="218" stroke="rgba(247,147,26,0.11)" strokeWidth="0.8" />
        <line x1="910" y1="258" x2="1028" y2="218" stroke="rgba(247,147,26,0.09)" strokeWidth="0.6" />
        <line x1="990" y1="312" x2="1068" y2="354" stroke="rgba(247,147,26,0.10)" strokeWidth="0.7" />
        <line x1="910" y1="258" x2="862"  y2="192" stroke="rgba(247,147,26,0.08)" strokeWidth="0.6" />
        <line x1="1028" y1="218" x2="1108" y2="170" stroke="rgba(247,147,26,0.07)" strokeWidth="0.6" />
        {/* Node dots */}
        <circle cx="910"  cy="258" r="3.2" fill="rgba(247,147,26,0.60)" />
        <circle cx="990"  cy="312" r="2.6" fill="rgba(247,147,26,0.48)" />
        <circle cx="1028" cy="218" r="2.2" fill="rgba(247,147,26,0.44)" />
        <circle cx="1068" cy="354" r="2.8" fill="rgba(247,147,26,0.46)" />
        <circle cx="862"  cy="192" r="2.0" fill="rgba(247,147,26,0.38)" />
        <circle cx="1108" cy="170" r="2.4" fill="rgba(247,147,26,0.40)" />
        {/* Node glow rings */}
        <circle cx="910" cy="258" r="9"  fill="none" stroke="rgba(247,147,26,0.18)" strokeWidth="1" />
        <circle cx="990" cy="312" r="8"  fill="none" stroke="rgba(247,147,26,0.14)" strokeWidth="1" />
        <circle cx="1028" cy="218" r="7" fill="none" stroke="rgba(247,147,26,0.12)" strokeWidth="1" />

        {/* ── 5. BLUE ACCENT + BOTTOM GLOW ── */}
        <rect x="0" y="0" width="1280" height="900" fill="url(#hBlue)" />
        <rect x="0" y="0" width="1280" height="900" fill="url(#hBottom)" />
      </svg>

      {/* Subtle scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.007) 3px, rgba(255,255,255,0.007) 4px)",
        }}
      />

      {/* Left-to-right legibility overlay — text area stays dark */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(108deg, rgba(7,7,15,0.96) 0%, rgba(7,7,15,0.76) 32%, rgba(7,7,15,0.12) 62%, rgba(7,7,15,0.48) 100%)",
        }}
      />

      {/* Top + bottom vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,7,15,0.72) 0%, transparent 20%, transparent 75%, rgba(7,7,15,0.92) 100%)",
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
                  inset 0 1px 0 rgba(255,255,255,0.10),
                  inset 0 -1px 0 rgba(0,0,0,0.30),
                  0 12px 48px rgba(0,0,0,0.55),
                  0 0 0 1px rgba(247,147,26,0.05)
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
