import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';
import { HeroSection } from '@/components/sections/HeroSection';
import { DashboardCards } from '@/components/sections/DashboardCards';
import { BtcPriceChart } from '@/components/sections/BtcPriceChart';
import { BitcoinMarkets } from '@/components/sections/BitcoinMarkets';
import { BitcoinGuides } from '@/components/sections/BitcoinGuides';
import { BitcoinMining } from '@/components/sections/BitcoinMining';
import { BitcoinEcosystem } from '@/components/sections/BitcoinEcosystem';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Zone 2 — Hero Section */}
        <HeroSection />

        {/* Zone 2.5 — BTC Price Chart Section */}
        <ScrollReveal variant="up">
          <div className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pt-2 pb-0">
            <BtcPriceChart />
          </div>
        </ScrollReveal>

        {/* Zone 3 — Dashboard Cards */}
        <ScrollReveal variant="up" delay={1}>
          <DashboardCards />
        </ScrollReveal>

        {/* Zone 4 — Main Content Grid with Sidebar */}
        <div
          className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pt-12 pb-12"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="flex flex-col gap-16 lg:col-span-8">
              <ScrollReveal variant="up"><BitcoinMarkets /></ScrollReveal>
              <ScrollReveal variant="up" delay={1}><BitcoinGuides /></ScrollReveal>
              <ScrollReveal variant="up" delay={1}><BitcoinMining /></ScrollReveal>
              <ScrollReveal variant="up" delay={1}><BitcoinEcosystem /></ScrollReveal>
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
