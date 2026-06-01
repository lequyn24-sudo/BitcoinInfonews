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
        style={{
          backgroundColor: "#07070F",
          fontFamily: "var(--font-inter, Inter), sans-serif",
        }}
      >
        {/* ─────────────────────────────────────────────────────────────
            FIXED ATMOSPHERIC BACKDROP
            This stays fixed while all glass panels scroll over it.
            Glassmorphism requires a rich background to blur through.
            Maps NOVA's space imagery as a persistent depth layer.
        ───────────────────────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            /* Base void */
            backgroundColor: "#07070F",
            /* Multi-point atmospheric glow — mimics NOVA's planetary light sources */
            backgroundImage: `
              radial-gradient(ellipse at 15% 25%, rgba(247,147,26,0.055) 0%, transparent 42%),
              radial-gradient(ellipse at 85% 15%, rgba(247,147,26,0.030) 0%, transparent 38%),
              radial-gradient(ellipse at 75% 75%, rgba(59,158,255,0.025) 0%, transparent 40%),
              radial-gradient(ellipse at 30% 80%, rgba(247,147,26,0.020) 0%, transparent 35%)
            `,
          }}
        />

        {/* Subtle noise grain — makes the void feel material, not digital flat */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.018,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.90' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* All page content sits above the fixed backdrop (z-index: 1+) */}
        <div className="relative" style={{ zIndex: 1 }}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
