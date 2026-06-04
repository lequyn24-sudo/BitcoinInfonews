'use client';

import Image from 'next/image';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';

const navLinks = [
  { label: 'News', href: '/news' },
  { label: 'Guides', href: '/guides' },
  { label: 'Markets', href: '/markets' },
  { label: 'Mining', href: '/mining' },
  { label: 'Ecosystem', href: '/ecosystem' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      id="navbar"
      className="sticky top-0 z-100 w-full border-b border-[rgba(255,255,255,0.08)]"
      style={{
        background: 'rgba(10, 10, 10, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        height: '64px',
        boxShadow: '0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)',
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] items-center justify-between px-4 md:px-6 lg:px-8 xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="BitcoinInfoNews"
            width={140}
            height={32}
            className="h-7 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav Links — center */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-text-secondary transition-colors duration-150 hover:text-white hover:bg-white/5"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Subscribe + Sign In + Hamburger */}
        <div className="flex items-center gap-2">
          {/* Subscribe */}
          <Link
            href="#newsletter"
            className="hidden md:inline-flex items-center justify-center rounded-md font-semibold transition-all duration-150 hover:opacity-90"
            style={{
              height: '36px',
              padding: '0 16px',
              background: '#F7931A',
              color: '#000000',
              fontSize: '13px',
              letterSpacing: '0.02em',
            }}
          >
            Subscribe
          </Link>

          {/* Sign In */}
          <button
            className="hidden md:inline-flex items-center justify-center rounded-md font-medium transition-all duration-150 hover:bg-white/5"
            style={{
              height: '36px',
              padding: '0 14px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#FFFFFF',
              fontSize: '13px',
            }}
          >
            Sign In
          </button>

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
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-110 flex flex-col"
          style={{ background: 'rgba(8, 8, 8, 0.92)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
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
          <div className="flex flex-col px-4 pt-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center rounded-lg px-4 text-text-primary hover:bg-white/5 transition-colors"
                style={{ height: '52px', fontSize: '16px', fontWeight: 500 }}
              >
                Bitcoin {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
