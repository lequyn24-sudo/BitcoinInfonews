import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-16">
        <div className="max-w-[720px]">
          <span className="section-eyebrow">Company</span>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '16px' }}>
            About BitcoinInfoNews
          </h1>
          <p className="text-text-secondary" style={{ fontSize: '16px', lineHeight: 1.75, marginBottom: '32px' }}>
            BitcoinInfoNews is a Bitcoin-first news platform covering markets, mining, network fundamentals, and ecosystem developments with a cleaner editorial structure built for serious readers.
          </p>

          <div className="flex flex-col gap-8">
            <div className="card-base">
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>Our Mission</h2>
              <p className="text-text-secondary" style={{ fontSize: '14px', lineHeight: 1.75 }}>
                We believe Bitcoin represents one of the most significant monetary innovations in history. Our mission is to provide accurate, signal-dense coverage that helps investors, builders, and curious minds understand the Bitcoin network at a fundamental level — without the noise.
              </p>
            </div>

            <div className="card-base">
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>Editorial Philosophy</h2>
              <p className="text-text-secondary" style={{ fontSize: '14px', lineHeight: 1.75 }}>
                Every article published on BitcoinInfoNews is written with a Bitcoin-first perspective. We prioritize on-chain data, network fundamentals, and economic analysis over speculation and price prediction. Our coverage spans regulation, mining economics, ETF flows, and ecosystem infrastructure.
              </p>
            </div>

            <div className="card-base">
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>The Team</h2>
              <p className="text-text-secondary" style={{ fontSize: '14px', lineHeight: 1.75 }}>
                Our editorial team consists of Bitcoin analysts, market researchers, and technical writers with deep backgrounds in financial markets, cryptography, and distributed systems. We are independent, reader-funded, and committed to journalistic integrity.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
