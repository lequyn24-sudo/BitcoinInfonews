import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';
import { HeroSection } from '@/components/sections/HeroSection';
import { DashboardCards } from '@/components/sections/DashboardCards';
import { BitcoinMarkets } from '@/components/sections/BitcoinMarkets';
import { BitcoinGuides } from '@/components/sections/BitcoinGuides';
import { BitcoinMining } from '@/components/sections/BitcoinMining';
import { BitcoinEcosystem } from '@/components/sections/BitcoinEcosystem';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Zone 2 — Hero Section */}
        <HeroSection />

        {/* Zone 3 — Dashboard Cards */}
        <DashboardCards />

        {/* Zone 4 — Main Content Grid with Sidebar */}
        <div
          className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 sm:px-6 pt-8 pb-16"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="flex flex-col gap-12 lg:col-span-8">
              <BitcoinMarkets />
              <BitcoinGuides />
              <BitcoinMining />
              <BitcoinEcosystem />
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky" style={{ top: '88px' }}>
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
