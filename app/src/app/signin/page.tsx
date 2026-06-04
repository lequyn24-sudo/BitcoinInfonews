'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { Eye, EyeSlash, GoogleLogo, AppleLogo } from '@phosphor-icons/react';

export default function SignInPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');

  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-[440px]">

          {/* Logo area */}
          <div className="mb-8 text-center">
            <span className="section-eyebrow">BitcoinInfoNews</span>
            <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              {tab === 'signin' ? 'Welcome back' : 'Create account'}
            </h1>
            <p className="mt-2 text-text-secondary" style={{ fontSize: '14px' }}>
              {tab === 'signin'
                ? 'Sign in to access your Bitcoin intelligence dashboard.'
                : 'Join 50,000+ Bitcoin-first readers today.'}
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex rounded-lg p-1 mb-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {(['signin', 'signup'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 rounded-md transition-all duration-150"
                style={{
                  height: '36px',
                  fontSize: '13px',
                  fontWeight: 600,
                  background: tab === t ? 'rgba(255,255,255,0.10)' : 'transparent',
                  color: tab === t ? '#FFFFFF' : '#666',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {t === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Social login */}
          <div className="flex flex-col gap-3 mb-6">
            <button
              className="flex items-center justify-center gap-3 w-full rounded-lg transition-all hover:bg-white/10"
              style={{ height: '44px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}
            >
              <GoogleLogo size={18} weight="bold" />
              Continue with Google
            </button>
            <button
              className="flex items-center justify-center gap-3 w-full rounded-lg transition-all hover:bg-white/10"
              style={{ height: '44px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#FFFFFF', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}
            >
              <AppleLogo size={18} weight="bold" />
              Continue with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
            <span className="text-text-secondary" style={{ fontSize: '12px' }}>or continue with email</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Form */}
          <div className="flex flex-col gap-4">
            {tab === 'signup' && (
              <div>
                <label className="block mb-1.5 text-text-secondary" style={{ fontSize: '12px', fontWeight: 500 }}>Full Name</label>
                <input
                  type="text"
                  placeholder="Satoshi Nakamoto"
                  className="w-full rounded-lg border border-border px-4 text-text-primary placeholder:text-text-tertiary focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
                  style={{ height: '44px', background: 'rgba(255,255,255,0.05)', fontSize: '14px' }}
                />
              </div>
            )}

            <div>
              <label className="block mb-1.5 text-text-secondary" style={{ fontSize: '12px', fontWeight: 500 }}>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border px-4 text-text-primary placeholder:text-text-tertiary focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
                style={{ height: '44px', background: 'rgba(255,255,255,0.05)', fontSize: '14px' }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-text-secondary" style={{ fontSize: '12px', fontWeight: 500 }}>Password</label>
                {tab === 'signin' && (
                  <a href="#" className="text-text-secondary hover:text-amber transition-colors" style={{ fontSize: '12px' }}>
                    Forgot password?
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border px-4 pr-11 text-text-primary placeholder:text-text-tertiary focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/20"
                  style={{ height: '44px', background: 'rgba(255,255,255,0.05)', fontSize: '14px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-white transition-colors"
                >
                  {showPass ? <EyeSlash size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              className="w-full rounded-lg font-semibold transition-all hover:opacity-90 mt-2"
              style={{ height: '48px', background: '#F7931A', color: '#000', fontSize: '15px', cursor: 'pointer' }}
            >
              {tab === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </div>

          {/* Footer link */}
          <p className="mt-6 text-center text-text-secondary" style={{ fontSize: '13px' }}>
            {tab === 'signin' ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setTab(tab === 'signin' ? 'signup' : 'signin')}
              className="text-amber hover:underline transition-colors"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}
            >
              {tab === 'signin' ? 'Sign up free' : 'Sign in'}
            </button>
          </p>

          <p className="mt-4 text-center text-text-secondary" style={{ fontSize: '11px', lineHeight: 1.6 }}>
            By continuing, you agree to our{' '}
            <a href="#" className="hover:text-amber transition-colors">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="hover:text-amber transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
