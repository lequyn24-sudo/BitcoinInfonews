import Image from 'next/image';
import {
  InstagramLogo,
} from '@phosphor-icons/react/dist/ssr';

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full border-t border-border"
      style={{ background: '#0A0A0A' }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="InfoNews Logo"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
            </div>
            <p
              className="mb-4 text-text-secondary"
              style={{ fontSize: '13px', lineHeight: 1.6, maxWidth: '280px' }}
            >
              Bitcoin-focused news platform covering markets, mining, and network
              fundamentals with a cleaner editorial structure.
            </p>
            <p className="text-text-secondary" style={{ fontSize: '12px' }}>
              © 2025 InfoNews.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#A0A0A0',
              }}
            >
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {['About Us', 'Editorial Standards', 'Disclaimer'].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-text-primary transition-colors hover:text-amber"
                    style={{ fontSize: '14px' }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Follow Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#A0A0A0',
              }}
            >
              Follow
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
                style={{ fontSize: '13px' }}
              >
                <span style={{ fontSize: '13px', fontWeight: 500 }}>f</span>
                <span>Facebook</span>
              </a>
              <span className="text-text-secondary">→</span>
              <a
                href="#"
                className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
                style={{ fontSize: '13px' }}
              >
                <span style={{ fontSize: '13px', fontWeight: 700 }}>𝕏</span>
              </a>
              <span className="text-text-secondary">-</span>
              <a
                href="#"
                className="flex items-center gap-2 text-text-secondary transition-colors hover:text-text-primary"
                style={{ fontSize: '13px' }}
              >
                <InstagramLogo size={16} weight="regular" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 flex items-center justify-between border-t border-border pt-6"
        >
          <p className="text-text-secondary" style={{ fontSize: '12px' }}>
            © 2025 InfoNews. All rights reserved.
          </p>
          <p className="text-text-secondary" style={{ fontSize: '12px' }}>
            Built by Bitcoin.
          </p>
        </div>
      </div>
    </footer>
  );
}
