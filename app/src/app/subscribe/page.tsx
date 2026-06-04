'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import { CheckCircle, Envelope, Lightning, ChartLineUp, Cube, ArrowRight } from '@phosphor-icons/react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Essential Bitcoin news coverage for casual readers.',
    features: [
      'Daily Bitcoin news digest',
      'Market price alerts',
      'Weekly newsletter',
      'Access to all articles',
    ],
    cta: 'Subscribe Free',
    accent: '#A0A0A0',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/month',
    description: 'Deep analysis and real-time intelligence for serious investors.',
    features: [
      'Everything in Free',
      'Real-time market alerts',
      'On-chain signal reports',
      'Mining economics briefing',
      'Ad-free experience',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    accent: '#F7931A',
    highlight: true,
  },
  {
    name: 'Institutional',
    price: '$49',
    period: '/month',
    description: 'Full intelligence suite for professional traders and funds.',
    features: [
      'Everything in Pro',
      'Custom research reports',
      'API data access',
      'Team seats (up to 10)',
      'Dedicated account manager',
      'White-label newsletter',
    ],
    cta: 'Contact Sales',
    accent: '#3B9EFF',
    highlight: false,
  },
];

const benefits = [
  { icon: <Envelope size={20} />, title: 'Daily Briefing', desc: 'Curated Bitcoin news every morning, signal-to-noise optimized.' },
  { icon: <Lightning size={20} />, title: 'Real-Time Alerts', desc: 'Price moves, on-chain anomalies, and breaking news instantly.' },
  { icon: <ChartLineUp size={20} />, title: 'Market Intelligence', desc: 'ETF flows, regime monitor, miner stress — data-driven coverage.' },
  { icon: <Cube size={20} />, title: 'Ecosystem Depth', desc: 'Lightning, Layer-2, and Bitcoin DeFi in plain language.' },
];

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pt-16 pb-12 text-center">
          <span className="section-eyebrow">Newsletter</span>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            Stay ahead of Bitcoin.
          </h1>
          <p className="mx-auto text-text-secondary" style={{ fontSize: '18px', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            Join 50,000+ readers getting Bitcoin market intelligence, mining fundamentals, and ecosystem coverage — delivered daily.
          </p>

          {/* Quick subscribe */}
          {!submitted ? (
            <div className="mx-auto flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-lg border border-border px-4 text-text-primary placeholder:text-text-tertiary focus:border-amber focus:outline-none"
                style={{ height: '48px', background: 'rgba(255,255,255,0.05)', fontSize: '14px' }}
              />
              <button
                onClick={() => email && setSubmitted(true)}
                className="rounded-lg font-semibold transition-all hover:opacity-90 shrink-0"
                style={{ height: '48px', padding: '0 24px', background: '#F7931A', color: '#000', fontSize: '14px' }}
              >
                Subscribe Free
              </button>
            </div>
          ) : (
            <div className="mx-auto flex items-center justify-center gap-3 max-w-md card-base" style={{ height: '56px' }}>
              <CheckCircle size={20} color="#00C896" weight="fill" />
              <span style={{ color: '#00C896', fontWeight: 600 }}>You&apos;re subscribed! Check your inbox.</span>
            </div>
          )}
          <p className="mt-3 text-text-secondary" style={{ fontSize: '12px' }}>No spam. Unsubscribe anytime.</p>
        </section>

        {/* Benefits */}
        <section className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pb-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="card-base">
                <div className="mb-3 flex items-center justify-center rounded-lg" style={{ width: '40px', height: '40px', background: 'rgba(247,147,26,0.1)', color: '#F7931A' }}>
                  {b.icon}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>{b.title}</h3>
                <p className="text-text-secondary" style={{ fontSize: '13px', lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mx-auto w-full max-w-full lg:max-w-[960px] xl:max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-0 pb-20">
          <div className="mb-10 text-center">
            <span className="section-eyebrow">Pricing</span>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em' }}>Choose your plan</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={plan.highlight ? 'card-featured' : 'card-base'}
                style={plan.highlight ? { position: 'relative' } : {}}
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1"
                    style={{ background: '#F7931A', color: '#000', fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}
                  >
                    Most Popular
                  </span>
                )}
                <div className="mb-4">
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: plan.accent }}>{plan.name}</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-mono)' }}>{plan.price}</span>
                    <span className="text-text-secondary" style={{ fontSize: '14px' }}>{plan.period}</span>
                  </div>
                  <p className="text-text-secondary mt-2" style={{ fontSize: '13px', lineHeight: 1.5 }}>{plan.description}</p>
                </div>
                <div className="flex flex-col gap-2 mb-6 border-t border-[rgba(255,255,255,0.08)] pt-4">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle size={14} color={plan.accent} weight="fill" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span className="text-text-secondary" style={{ fontSize: '13px' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full rounded-lg font-semibold transition-all hover:opacity-90"
                  style={{
                    height: '44px',
                    background: plan.highlight ? '#F7931A' : 'rgba(255,255,255,0.07)',
                    color: plan.highlight ? '#000' : '#FFFFFF',
                    border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.15)',
                    fontSize: '14px',
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
