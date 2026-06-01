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
            Stays in place as content scrolls over it.
            All glass panels throughout the page blur this backdrop,
            making the frosted glass effect visible everywhere.
        ══════════════════════════════════════════════════════════════ */}
        <div
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", backgroundColor: "#07070F" }}
        >
          {/* Dot grid — 1.5px dots at 18% opacity, 28px spacing.
              Must be visible enough to create a clear frosted haze
              pattern when blurred by glass panels above.            */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Primary amber orb — upper right quadrant */}
          <div className="bg-orb bg-orb-primary" />

          {/* Secondary amber orb — mid left */}
          <div className="bg-orb bg-orb-secondary" />

          {/* Blue accent orb — top right edge */}
          <div className="bg-orb bg-orb-accent" />

          {/* Bottom orb — for dashboard card / feed area */}
          <div className="bg-orb bg-orb-bottom" />

          {/* Subtle scanlines for sci-fi texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.006) 3px, rgba(255,255,255,0.006) 4px)",
            }}
          />

          {/* Noise grain — adds material warmth */}
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

        {/* Page content sits above backdrop */}
        <div className="relative" style={{ zIndex: 1 }}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
