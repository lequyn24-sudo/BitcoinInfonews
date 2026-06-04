import Image from 'next/image';
import Link from 'next/link';
import { InstagramLogo, XLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';

const catCol1 = [
  { label: 'Bitcoin News',     href: '/bitcoin-news' },
  { label: 'Alt Coin News',    href: '/altcoin-news' },
  { label: 'Mining',           href: '/mining' },
  { label: 'Blockchain Event', href: '/blockchain-events' },
  { label: 'Top Project',      href: '/top-projects' },
  { label: 'CMC',              href: '#' },
];

const catCol2 = [
  { label: 'Crypto News',       href: '/news' },
  { label: 'News',              href: '/news' },
  { label: 'Millionaire',       href: '#' },
  { label: 'Other',             href: '/other' },
  { label: 'Sponsored Articles',href: '/sponsored' },
  { label: 'Press Release',     href: '#' },
];

const companyLinks = ['About Us', 'Editorial Standards', 'Disclaimer', 'Advertise'];

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full border-t border-[rgba(255,255,255,0.08)]"
      style={{
        background: 'rgba(6, 6, 6, 0.80)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      <div className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/images/logo.png" alt="BitcoinInfoNews" width={120} height={28} className="h-7 w-auto" />
            </div>
            <p className="mb-4 text-text-secondary" style={{ fontSize: '13px', lineHeight: 1.6, maxWidth: '220px' }}>
              Bitcoin-first news covering markets, mining, and network fundamentals.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-text-secondary hover:text-white transition-colors" aria-label="Facebook">
                <FacebookLogo size={18} weight="regular" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors" aria-label="X">
                <XLogo size={18} weight="regular" />
              </a>
              <a href="#" className="text-text-secondary hover:text-white transition-colors" aria-label="Instagram">
                <InstagramLogo size={18} weight="regular" />
              </a>
            </div>
          </div>

          {/* Category Card 1 */}
          <div className="card-base">
            <h4
              className="mb-4"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#F7931A' }}
            >
              Bitcoin Coverage
            </h4>
            <div className="flex flex-col gap-2.5">
              {catCol1.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-text-secondary transition-colors hover:text-white"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Category Card 2 */}
          <div className="card-base">
            <h4
              className="mb-4"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#F7931A' }}
            >
              More Sections
            </h4>
            <div className="flex flex-col gap-2.5">
              {catCol2.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-text-secondary transition-colors hover:text-white"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-4"
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A0A0A0' }}
            >
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-text-secondary transition-colors hover:text-white"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <Link
                href="/subscribe"
                className="inline-flex items-center justify-center w-full rounded-lg font-semibold transition-all hover:opacity-90"
                style={{ height: '40px', background: '#F7931A', color: '#000', fontSize: '13px' }}
              >
                Subscribe Free →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-2 items-center text-center sm:flex-row sm:justify-between sm:text-left border-t border-[rgba(255,255,255,0.08)] pt-6">
          <p className="text-text-secondary" style={{ fontSize: '12px' }}>
            © 2025 BitcoinInfoNews. All rights reserved.
          </p>
          <p className="text-text-secondary" style={{ fontSize: '12px' }}>
            Built by Bitcoin.
          </p>
        </div>
      </div>
    </footer>
  );
}
