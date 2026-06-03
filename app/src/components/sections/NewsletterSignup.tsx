'use client';

import { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="card-base p-4">
      <h3
        className="mb-1 text-text-primary"
        style={{
          fontSize: '14px',
          fontWeight: 700,
        }}
      >
        Subscribe To Bitcoin Briefing
      </h3>
      <p className="mb-4 text-text-secondary" style={{ fontSize: '11px', lineHeight: 1.4 }}>
        Get curated on-chain fundamentals, mining updates, and market intelligence sent directly to your inbox.
      </p>

      {submitted ? (
        <div className="rounded border border-green/30 bg-green/10 p-3 text-center text-xs text-green">
          Thanks for subscribing! Check your inbox soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-[44px] sm:h-[40px] bg-void border border-border rounded-lg px-3 text-xs text-white placeholder:text-text-tertiary focus:border-amber focus:outline-none"
          />
          <button
            type="submit"
            className="w-full h-[44px] sm:h-[40px] bg-white text-void rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Join the Briefing
          </button>
        </form>
      )}
    </div>
  );
}
