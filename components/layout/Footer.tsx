import Link from "next/link";
import Image from "next/image";
import {
  XLogo,
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react/dist/ssr";

const contentLinks = [
  { label: "Bitcoin News", href: "/bitcoin-news" },
  { label: "Altcoin News", href: "/altcoin-news" },
  { label: "Mining", href: "/mining" },
  { label: "Top Projects", href: "/top-projects" },
  { label: "Other", href: "/other" },
];

const eventLinks = [
  { label: "Blockchain Events", href: "/blockchain-events" },
  { label: "Sponsored Articles", href: "/sponsored" },
  { label: "Press Releases", href: "/sponsored" },
  { label: "Advertise", href: "/sponsored" },
];

const companyLinks = [
  { label: "About Us", href: "/other" },
  { label: "Contact", href: "/other" },
  { label: "Advertise / PR", href: "/sponsored" },
  { label: "Press Kit", href: "/other" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 pt-[64px] pb-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="BitcoinInfoNews"
                width={140}
                height={32}
                className="h-[28px] w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-[#A0A0A0] leading-[1.6] max-w-[240px] mb-6">
              Useful Bitcoin information should be easier to find, easier to understand, easier to trust.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/btcinfonews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-[#A0A0A0] hover:text-white transition-colors"
              >
                <XLogo size={20} />
              </a>
              <a
                href="https://facebook.com/BitcoinInfoNews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#A0A0A0] hover:text-white transition-colors"
              >
                <FacebookLogo size={20} />
              </a>
              <a
                href="https://instagram.com/btcinfonews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#A0A0A0] hover:text-white transition-colors"
              >
                <InstagramLogo size={20} />
              </a>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[12px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-4">
              Content
            </p>
            <ul className="space-y-0">
              {contentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-[8px] text-[14px] text-white hover:text-[#F7931A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events & Sponsored */}
          <div>
            <p className="text-[12px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-4">
              Events & Sponsored
            </p>
            <ul className="space-y-0">
              {eventLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-[8px] text-[14px] text-white hover:text-[#F7931A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[12px] font-[500] uppercase tracking-[0.06em] text-[#A0A0A0] mb-4">
              Company
            </p>
            <ul className="space-y-0">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-[8px] text-[14px] text-white hover:text-[#F7931A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[11px] text-[#A0A0A0] italic leading-[1.5]">
              This content is for informational purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 py-[20px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#A0A0A0]">
            © 2026 BitcoinInfoNews
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {["Privacy Policy", "Terms", "Content Disclaimer", "Cookies"].map((item) => (
              <Link
                key={item}
                href="/other"
                className="text-[12px] text-[#A0A0A0] hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
