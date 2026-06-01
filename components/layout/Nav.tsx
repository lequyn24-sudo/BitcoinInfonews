"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MagnifyingGlass,
  Bell,
  List,
  X,
  CaretDown,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "News", href: "/bitcoin-news" },
  { label: "Bitcoin News", href: "/bitcoin-news" },
  { label: "Altcoin News", href: "/altcoin-news" },
  { label: "Mining", href: "/mining" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Blockchain Events", href: "/blockchain-events" },
      { label: "Top Projects", href: "/top-projects" },
      { label: "Other", href: "/other" },
      { label: "Sponsored", href: "/sponsored" },
    ],
  },
];

const mainNavLinks = [
  { label: "Bitcoin News", href: "/bitcoin-news" },
  { label: "Altcoin News", href: "/altcoin-news" },
  { label: "Mining", href: "/mining" },
  { label: "Blockchain Events", href: "/blockchain-events" },
  { label: "Top Projects", href: "/top-projects" },
  { label: "Other", href: "/other" },
  { label: "Sponsored", href: "/sponsored" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] border-b border-[#2A2A2A] transition-all duration-200",
          scrolled
            ? "bg-[rgba(17,17,17,0.95)] backdrop-blur-[16px]"
            : "bg-[#111111]"
        )}
        aria-label="Main navigation"
      >
        <div className="max-w-[1200px] mx-auto px-4 lg:px-6 flex items-center justify-between h-[56px] lg:h-[64px]">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 mr-6">
            <Image
              src="/logo.png"
              alt="BitcoinInfoNews"
              width={120}
              height={28}
              className="h-[28px] lg:h-[32px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden xl:flex items-center gap-1 flex-1">
            {mainNavLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-[14px] py-[8px] text-[14px] font-[500] transition-colors duration-150 rounded-[6px] whitespace-nowrap",
                  isActive(link.href)
                    ? "text-[#F7931A]"
                    : "text-[#A0A0A0] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-[14px] py-[8px] text-[14px] font-[500] text-[#A0A0A0] hover:text-white transition-colors duration-150">
                More <CaretDown size={14} weight="bold" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.4)] py-2 min-w-[160px] z-[70]">
                  {mainNavLinks.slice(4).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center px-4 py-[10px] text-[13px] transition-colors duration-100",
                        isActive(link.href)
                          ? "text-[#F7931A] bg-[#242424]"
                          : "text-[#A0A0A0] hover:text-white hover:bg-[#242424]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative flex items-center">
              {searchOpen && (
                <input
                  autoFocus
                  type="text"
                  placeholder="Search Bitcoin news…"
                  className="w-[200px] lg:w-[260px] h-[36px] bg-[#1A1A1A] border border-[#F7931A] rounded-[8px] px-[12px] text-[14px] text-white placeholder:text-[#666] outline-none transition-all duration-200"
                  onBlur={() => setSearchOpen(false)}
                />
              )}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-[44px] h-[44px] flex items-center justify-center text-[#A0A0A0] hover:text-white transition-colors"
                aria-label="Search"
              >
                <MagnifyingGlass size={20} />
              </button>
            </div>

            <button
              className="w-[44px] h-[44px] hidden xl:flex items-center justify-center text-[#A0A0A0] hover:text-white transition-colors relative"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-[10px] right-[10px] w-[6px] h-[6px] bg-[#FF4D4D] rounded-full" />
            </button>

            <Link
              href="/sponsored"
              className="hidden xl:flex items-center gap-1 h-[36px] px-[14px] bg-[#F7931A] text-[#0A0A0A] text-[12px] font-[600] uppercase tracking-[0.04em] rounded-[6px] hover:bg-[#e8841a] transition-colors"
            >
              Advertise <ArrowUpRight size={14} weight="bold" />
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-[44px] h-[44px] flex items-center justify-center text-[#A0A0A0] hover:text-white transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[110] xl:hidden"
          style={{ background: "rgba(10,10,10,0.98)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between h-[56px] px-4 border-b border-[#2A2A2A]">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logo.png"
                alt="BitcoinInfoNews"
                width={120}
                height={28}
                className="h-[28px] w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-[44px] h-[44px] flex items-center justify-center text-[#A0A0A0]"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="overflow-y-auto">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between h-[56px] px-6 text-[18px] font-[500] border-b border-[#2A2A2A] transition-colors",
                  isActive(link.href) ? "text-[#F7931A]" : "text-white"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                <ArrowUpRight size={18} className="text-[#A0A0A0]" />
              </Link>
            ))}
            <div className="p-6">
              <input
                type="text"
                placeholder="Search Bitcoin news…"
                className="w-full h-[44px] bg-[#1A1A1A] border border-[#2A2A2A] rounded-[8px] px-[16px] text-[16px] text-white placeholder:text-[#666] outline-none focus:border-[#F7931A]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
