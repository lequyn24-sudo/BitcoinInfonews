'use client';

import Image from 'next/image';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';

const navLinks = [
  { label: 'Bitcoin News', href: '#news' },
  { label: 'Bitcoin Guides', href: '#guides' },
  { label: 'Bitcoin Markets', href: '#markets' },
  { label: 'Bitcoin Mining', href: '#mining' },
  { label: 'Bitcoin Ecosystem', href: '#ecosystem' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-100 w-full border-b border-border"
      style={{ background: '#111111', height: '64px' }}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="InfoNews Logo"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span
            className="hidden text-text-secondary xl:block"
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

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary transition-colors duration-150 hover:text-text-primary"
              style={{
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center xl:hidden"
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
            <Image
              src="/images/logo.png"
              alt="InfoNews Logo"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
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
              <a
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
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
