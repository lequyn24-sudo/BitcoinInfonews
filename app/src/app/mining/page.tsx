import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { miningArticle, minerStressDashboard, miningRelated } from '@/lib/mock-data';
import Link from 'next/link';

export default function MiningPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-12">
        <div className="mb-8">
          <span className="section-eyebrow">Category</span>
          <h1 style={{ fontSize: '36px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            Bitcoin Mining
          </h1>
          <p className="mt-2 text-text-secondary" style={{ fontSize: '14px' }}>
            Difficulty, hashrate, miner economics, hardware cycles, and energy strategies.
          </p>
        </div>

        {/* Miner Dashboard */}
        <div className="card-base mb-6">
          <h3 className="mb-4" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F7931A' }}>
            Miner Stress Dashboard
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Hashprice', value: minerStressDashboard.hashprice, sub: minerStressDashboard.hashpriceUnit },
              { label: 'Difficulty Trend', value: minerStressDashboard.difficultyTrend, sub: minerStressDashboard.difficultyPeriod, color: '#00C896' },
              { label: 'Fee Share', value: minerStressDashboard.feeShare, sub: minerStressDashboard.feeShareLabel },
              { label: 'Treasury Pressure', value: minerStressDashboard.treasuryPressure, sub: minerStressDashboard.treasuryLabel, color: '#00C896' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-text-secondary" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{stat.label}</p>
                <p className="font-mono" style={{ fontSize: '22px', fontWeight: 700, color: stat.color ?? '#FFFFFF' }}>{stat.value}</p>
                <p className="text-text-secondary" style={{ fontSize: '10px' }}>{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Link href={`/${miningArticle.slug}`} className="card-featured overflow-hidden block !p-0 group">
            <div style={{ height: '220px', background: `linear-gradient(to top, rgba(6,6,6,0.92) 0%, rgba(10,10,10,0.2) 60%), url(${miningArticle.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="p-5">
              <span className="badge mb-2 inline-block" style={{ background: 'rgba(247,147,26,0.15)', color: '#F7931A' }}>{miningArticle.category}</span>
              <h2 className="mb-2 text-text-primary group-hover:text-amber transition-colors" style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.3 }}>{miningArticle.title}</h2>
              <p className="text-text-secondary" style={{ fontSize: '12px' }}>{miningArticle.author} · {miningArticle.date}</p>
            </div>
          </Link>

          <div className="flex flex-col gap-4">
            {miningRelated.map((item, i) => (
              <div key={i} className="card-base">
                <span className="mb-1 block" style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#F7931A' }}>Mining Coverage</span>
                <p className="text-text-primary" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4 }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
