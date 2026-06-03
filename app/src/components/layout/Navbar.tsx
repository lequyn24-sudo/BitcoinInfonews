'use client';

import Image from 'next/image';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Bitcoin News', href: '/#news' },
  { label: 'Bitcoin Guides', href: '/#guides' },
  { label: 'Bitcoin Markets', href: '/#markets' },
  { label: 'Bitcoin Mining', href: '/#mining' },
  { label: 'Bitcoin Ecosystem', href: '/#ecosystem' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [priceData, setPriceData] = useState<{ price: number; change24h: number } | null>(null);

  useEffect(() => {
    fetch('/api/price')
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setPriceData({ price: data.price, change24h: data.change24h });
        }
      })
      .catch((err) => console.error('Error fetching price in Navbar:', err));
  }, []);

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-100 w-full border-b border-border"
      style={{ background: '#111111', height: '64px' }}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="InfoNews Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <span
            className="hidden text-text-secondary lg:block"
            style={{
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Bitcoin. Maximalist With Deep Network Fundamentals Focus
          </span>
        </div>

        {/* Live Ticker */}
        {priceData && (
          <div className="hidden items-center gap-2 font-mono text-xs md:flex rounded bg-void/50 border border-border px-3 py-1">
            <span className="text-text-secondary">BTC:</span>
            <span className="font-semibold text-white">
              ${priceData.price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </span>
            <span
              className={`font-semibold ${
                priceData.change24h >= 0 ? 'text-green' : 'text-red'
              }`}
            >
              {priceData.change24h >= 0 ? '+' : ''}
              {priceData.change24h.toFixed(2)}%
            </span>
          </div>
        )}

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-secondary transition-colors duration-150 hover:text-text-primary"
              style={{
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
          style={{ width: '44px', height: '44px' }}
        >
          <List size={24} weight="regular" color="#FFFFFF" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-110 flex flex-col"
          style={{ background: 'rgba(10,10,10,0.98)' }}
        >
          <div
            className="flex items-center justify-between border-b border-border px-6"
            style={{ height: '56px' }}
          >
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="InfoNews Logo"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
              style={{ width: '44px', height: '44px' }}
              className="flex items-center justify-center"
            >
              <X size={24} weight="regular" color="#FFFFFF" />
            </button>
          </div>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center border-b border-border px-6 text-text-primary"
                style={{
                  height: '56px',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
