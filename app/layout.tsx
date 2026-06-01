import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "BitcoinInfoNews — Understand. Verify. Invest.",
    template: "%s | BitcoinInfoNews",
  },
  description:
    "Bitcoin-first news, market analysis, and tools for investors who value signal over hype. Live prices, in-depth analysis, and educational content.",
  keywords: ["Bitcoin", "BTC", "crypto news", "Bitcoin price", "cryptocurrency", "blockchain"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitcoininfonews.com",
    siteName: "BitcoinInfoNews",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "BitcoinInfoNews" }],
  },
  twitter: { card: "summary_large_image", site: "@btcinfonews" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="text-white min-h-screen relative"
        style={{ backgroundColor: "#07070F", fontFamily: "var(--font-inter, Inter), sans-serif" }}
      >
        {/* ══════════════════════════════════════════════════════════════
            GLOBAL FIXED ABSTRACT BACKDROP
            Visible through all glass panels as users scroll.
            Uses: perspective grid + multi-scale scatter dots + amber orbs
        ══════════════════════════════════════════════════════════════ */}
        <div
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", backgroundColor: "#07070F" }}
        >
          {/* ── Perspective grid SVG — fading lines add spatial depth ── */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            aria-hidden="true"
          >
            <defs>
              {/* Horizontal line gradient — fades at edges */}
              <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
                <stop offset="20%"  stopColor="rgba(255,255,255,0.06)" />
                <stop offset="80%"  stopColor="rgba(255,255,255,0.06)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              {/* Vertical line gradient — fades at edges */}
              <linearGradient id="vg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
                <stop offset="20%"  stopColor="rgba(255,255,255,0.05)" />
                <stop offset="80%"  stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              {/* Amber diagonal gradient */}
              <linearGradient id="ag" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="rgba(247,147,26,0)" />
                <stop offset="40%"  stopColor="rgba(247,147,26,0.05)" />
                <stop offset="100%" stopColor="rgba(247,147,26,0)" />
              </linearGradient>
            </defs>

            {/* Horizontal lines */}
            {([10, 20, 30, 40, 50, 60, 70, 80, 90] as number[]).map((pct) => (
              <line key={`h${pct}`} x1="0%" y1={`${pct}%`} x2="100%" y2={`${pct}%`}
                stroke="url(#hg)" strokeWidth="1" />
            ))}

            {/* Vertical lines */}
            {([10, 20, 30, 40, 50, 60, 70, 80, 90] as number[]).map((pct) => (
              <line key={`v${pct}`} x1={`${pct}%`} y1="0%" x2={`${pct}%`} y2="100%"
                stroke="url(#vg)" strokeWidth="1" />
            ))}

            {/* Diagonal accent lines — adds dynamism, Bitcoin-chart feeling */}
            <line x1="0%" y1="100%" x2="60%" y2="0%"
              stroke="url(#ag)" strokeWidth="1" />
            <line x1="10%" y1="100%" x2="70%" y2="0%"
              stroke="url(#ag)" strokeWidth="0.8" />
            <line x1="55%" y1="100%" x2="100%" y2="30%"
              stroke="url(#ag)" strokeWidth="0.7" />
          </svg>

          {/* ── Multi-scale scatter dots — NOT a uniform grid ──
              Three staggered offsets create organic irregular pattern
              that looks like a star field when blurred through glass   */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `
                radial-gradient(circle, rgba(255,255,255,0.22) 1.5px, transparent 1.5px),
                radial-gradient(circle, rgba(255,255,255,0.12) 1.0px, transparent 1.0px),
                radial-gradient(circle, rgba(255,255,255,0.08) 0.7px, transparent 0.7px)
              `,
              backgroundSize: "160px 160px, 80px 80px, 40px 40px",
              backgroundPosition: "0 0, 40px 40px, 20px 20px",
            }}
          />

          {/* ── Two amber orbs for color warmth ── */}
          <div className="bg-orb bg-orb-primary" />
          <div className="bg-orb bg-orb-secondary" />

          {/* Subtle scanlines */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.006) 3px, rgba(255,255,255,0.006) 4px)",
            }}
          />

          {/* Noise grain — material texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.016,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.90' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />
        </div>

        {/* Page content */}
        <div className="relative" style={{ zIndex: 1 }}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
