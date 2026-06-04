import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';
import { HeroSection } from '@/components/sections/HeroSection';
import { DashboardCards } from '@/components/sections/DashboardCards';
import { BtcPriceChart } from '@/components/sections/BtcPriceChart';
import { HomeCategorySection } from '@/components/sections/HomeCategorySection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import {
  bitcoinNewsArticles,
  altcoinNewsArticles,
  miningArticles,
  blockchainEventArticles,
} from '@/lib/mock-articles';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Zone 2 — Hero Section */}
        <HeroSection />

        {/* Zone 2.5 — BTC Price Chart Section */}
        <ScrollReveal variant="up">
          <div className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pt-6 pb-6">
            <BtcPriceChart />
          </div>
        </ScrollReveal>

        {/* Zone 3 — Dashboard Cards */}
        <ScrollReveal variant="up" delay={1}>
          <DashboardCards />
        </ScrollReveal>

        {/* Zone 4 — Main Content Grid with Sidebar */}
        <div
          className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pt-6 pb-12"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="flex flex-col gap-16 lg:col-span-8">
              <ScrollReveal variant="up">
                <HomeCategorySection
                  id="bitcoin-news"
                  eyebrow="Bitcoin News"
                  title="Bitcoin News"
                  description="Latest Bitcoin market coverage, ETF flows, institutional adoption, and network fundamentals."
                  href="/bitcoin-news"
                  articles={bitcoinNewsArticles}
                  accentColor="#F7931A"
                />
              </ScrollReveal>
              <ScrollReveal variant="up" delay={1}>
                <HomeCategorySection
                  id="altcoin-news"
                  eyebrow="Alt Coin News"
                  title="Alt Coin News"
                  description="Ethereum, Solana, BNB, XRP and the broader altcoin ecosystem from a Bitcoin-first perspective."
                  href="/altcoin-news"
                  articles={altcoinNewsArticles}
                  accentColor="#3B9EFF"
                />
              </ScrollReveal>
              <ScrollReveal variant="up" delay={1}>
                <HomeCategorySection
                  id="mining"
                  eyebrow="Mining"
                  title="Mining"
                  description="Difficulty, hashrate, miner economics, hardware cycles, and energy integration strategies."
                  href="/mining"
                  articles={miningArticles}
                  accentColor="#F7931A"
                />
              </ScrollReveal>
              <ScrollReveal variant="up" delay={1}>
                <HomeCategorySection
                  id="blockchain-events"
                  eyebrow="Blockchain Event"
                  title="Blockchain Event"
                  description="Key milestones, conference coverage, regulatory decisions, and protocol events."
                  href="/blockchain-events"
                  articles={blockchainEventArticles}
                  accentColor="#FFB800"
                />
              </ScrollReveal>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <ScrollReveal variant="left" delay={2}>
                <div className="lg:sticky" style={{ top: '88px' }}>
                  <Sidebar />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
