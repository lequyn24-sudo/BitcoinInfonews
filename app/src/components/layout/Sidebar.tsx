'use client';

import { mostReadArticles, calendarEvents, pressReleases, sidebarSponsored } from '@/lib/mock-data';
import { ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';

export function Sidebar() {
  const [email, setEmail] = useState('');

  return (
    <aside className="flex flex-col gap-4">
      {/* Reader Intent — Most Read */}
      <div className="card-base">
        <h3
          className="mb-2"
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F7931A',
          }}
        >
          Reader Intent
        </h3>
        <h4
          className="mb-3"
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
          Most Read
        </h4>
        <div className="flex flex-col gap-3">
          {mostReadArticles.map((article, idx) => (
            <a
              key={idx}
              href="#"
              className="group flex items-start gap-3 transition-colors"
            >
              <span
                className="shrink-0 font-mono"
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#F7931A',
                  width: '20px',
                }}
              >
                {idx + 1}
              </span>
              <span
                className="text-text-secondary transition-colors group-hover:text-text-primary"
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {article}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Bitcoin Calendar Radar */}
      <div className="card-base">
        <h3
          className="mb-3"
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F7931A',
          }}
        >
          Bitcoin Calendar Radar
        </h3>
        <div className="flex flex-col gap-3">
          {calendarEvents.map((event, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div
                className="mt-1 shrink-0 rounded-full"
                style={{
                  width: '8px',
                  height: '8px',
                  background: event.color,
                }}
              />
              <div>
                <span
                  className="block font-mono"
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: event.color,
                  }}
                >
                  {event.date}
                </span>
                <span
                  className="text-text-primary"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  {event.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="mt-3 flex items-center gap-1 text-text-secondary transition-colors hover:text-amber"
          style={{ fontSize: '12px' }}
        >
          View full calendar <ArrowRight size={12} />
        </a>
      </div>

      {/* Sponsored */}
      <div className="card-base">
        <h3
          className="mb-3"
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#FFB800',
          }}
        >
          Sponsored
        </h3>
        <div className="flex flex-col gap-3">
          {sidebarSponsored.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group flex flex-col gap-1 transition-colors"
            >
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: '#FFB800',
                }}
              >
                {item.label}
              </span>
              <span
                className="text-text-secondary transition-colors group-hover:text-text-primary"
                style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.4 }}
              >
                {item.title}
              </span>
            </a>
          ))}
        </div>
        <a
          href="/sponsored"
          className="mt-3 flex items-center gap-1 text-text-secondary transition-colors hover:text-amber"
          style={{ fontSize: '12px' }}
        >
          View all sponsored <ArrowRight size={12} />
        </a>
      </div>

      {/* Press Release */}
      <div className="card-base">
        <h3
          className="mb-3"
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#3B9EFF',
          }}
        >
          Press Release
        </h3>
        <div className="flex flex-col gap-3">
          {pressReleases.map((pr, idx) => (
            <a
              key={idx}
              href="#"
              className="group flex flex-col gap-1 transition-colors"
            >
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#3B9EFF',
                }}
              >
                {pr.company}
              </span>
              <span
                className="text-text-secondary transition-colors group-hover:text-text-primary"
                style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.4 }}
              >
                {pr.headline}
              </span>
              <span
                className="text-text-secondary"
                style={{ fontSize: '11px' }}
              >
                {pr.date}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="card-base">
        <h3
          className="mb-2"
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#F7931A',
          }}
        >
          Newsletter
        </h3>
        <h4
          className="mb-2"
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: '#FFFFFF',
          }}
        >
          Subscribe To Bitcoin Briefing
        </h4>
        <p
          className="mb-4 text-text-secondary"
          style={{ fontSize: '12px', lineHeight: 1.5 }}
        >
          Get the biggest Bitcoin market, mining, and ecosystem stories in one cleaner daily email.
        </p>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border px-4 text-text-primary placeholder:text-text-tertiary focus:border-amber focus:outline-none"
            style={{
              height: '44px',
              background: '#1A1A1A',
              fontSize: '14px',
            }}
          />
          <button
            className="w-full rounded-lg font-medium text-void transition-colors hover:opacity-90"
            style={{
              height: '44px',
              background: '#F7931A',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Subscribe.
          </button>
        </div>
      </div>
    </aside>
  );
}
