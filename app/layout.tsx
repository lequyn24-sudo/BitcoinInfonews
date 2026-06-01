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
  twitter: {
    card: "summary_large_image",
    site: "@btcinfonews",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="bg-[#060608] text-white min-h-screen"
        style={{ fontFamily: "var(--font-inter, Inter), sans-serif" }}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
