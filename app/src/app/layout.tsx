import type { Metadata } from "next";
import "./globals.css";
import { RevealInit } from '@/components/ui/RevealInit';

export const metadata: Metadata = {
  title: "InfoNews. | Bitcoin-Focused News & Deep Network Fundamentals",
  description: "Bitcoin-first news platform covering markets, mining, and network fundamentals with a cleaner editorial structure.",
  keywords: "Bitcoin, BTC, cryptocurrency, Bitcoin news, market analysis, mining, blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-void text-text-primary font-sans antialiased">
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
