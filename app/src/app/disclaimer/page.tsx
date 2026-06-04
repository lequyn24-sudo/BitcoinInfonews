import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 py-16">
        <div className="max-w-[720px]">
          <span className="section-eyebrow">Legal</span>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '8px' }}>
            Disclaimer
          </h1>
          <p className="text-text-secondary mb-10" style={{ fontSize: '13px' }}>Last updated: June 1, 2025</p>

          <div className="flex flex-col gap-6 article-content">
            {[
              { title: 'Not Financial Advice', body: 'All content published on BitcoinInfoNews is for informational purposes only. Nothing on this site constitutes financial, investment, legal, or tax advice. Always conduct your own research before making any investment decisions.' },
              { title: 'No Investment Recommendations', body: 'BitcoinInfoNews does not recommend the purchase, sale, or holding of any digital asset. Past performance of any asset mentioned on this site does not guarantee future results.' },
              { title: 'Accuracy of Information', body: 'While we strive to provide accurate and up-to-date information, BitcoinInfoNews makes no representations or warranties about the completeness, accuracy, or reliability of any content. Market data and prices may be delayed.' },
              { title: 'Third-Party Links', body: 'This site may contain links to third-party websites. BitcoinInfoNews is not responsible for the content, accuracy, or practices of any third-party sites and does not endorse their products or services.' },
              { title: 'Sponsored Content', body: 'Some articles and sections on this site are sponsored by third parties. Sponsored content is clearly labeled. The views expressed in sponsored content do not necessarily represent the views of BitcoinInfoNews.' },
              { title: 'Limitation of Liability', body: 'BitcoinInfoNews and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on any content published here.' },
            ].map((section) => (
              <div key={section.title} className="card-base">
                <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>{section.title}</h2>
                <p className="text-text-secondary" style={{ fontSize: '14px', lineHeight: 1.75 }}>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
