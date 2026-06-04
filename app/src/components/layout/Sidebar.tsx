'use client';

import { mostReadArticles, calendarEvents, pressReleases, sidebarSponsored } from '@/lib/mock-data';
import { allCategoryArticles } from '@/lib/mock-articles';
import { ArrowRight, Hash } from '@phosphor-icons/react';
import { useState } from 'react';

// Collect + rank tags from all articles
function getTrendingTags(limit = 14) {
  const freq: Record<string, number> = {};
  allCategoryArticles.forEach((a) => a.tags.forEach((t) => { freq[t] = (freq[t] ?? 0) + 1; }));
  return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, limit).map(([tag]) => tag);
}

export function Sidebar() {
  const [email, setEmail] = useState('');
  const trendingTags = getTrendingTags();

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
              className="group flex items-center gap-3 transition-colors"
            >
              <span
                className="shrink-0 font-mono"
                style={{ fontSize: '13px', fontWeight: 700, color: '#F7931A', width: '16px' }}
              >
                {idx + 1}
              </span>
              <div
                className="shrink-0 rounded overflow-hidden"
                style={{
                  width: '56px', height: '40px',
                  background: `url(${article.thumbnail}) center/cover no-repeat`,
                  flexShrink: 0,
                }}
              />
              <span
                className="text-text-secondary transition-colors group-hover:text-text-primary"
                style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.4 }}
              >
                {article.title}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Trending Tags */}
      <div className="card-base">
        <div className="flex items-center gap-2 mb-3">
          <Hash size={12} color="#F7931A" />
          <h3
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#F7931A',
            }}
          >
            Trending Tags
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <span
              key={tag}
              className="cursor-pointer rounded-full transition-all duration-150 hover:text-amber"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#A0A0A0',
              }}
            >
              {tag}
            </span>
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
              className="group flex items-center gap-3 transition-colors"
            >
              <div
                className="shrink-0 rounded overflow-hidden"
                style={{
                  width: '56px', height: '40px',
                  background: `url(${item.thumbnail}) center/cover no-repeat`,
                }}
              />
              <div className="min-w-0">
                <span
                  className="block mb-0.5"
                  style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#FFB800' }}
                >
                  {item.label}
                </span>
                <span
                  className="text-text-secondary transition-colors group-hover:text-text-primary"
                  style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.4 }}
                >
                  {item.title}
                </span>
              </div>
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
              className="group flex items-start gap-3 transition-colors"
            >
              <div
                className="shrink-0 rounded overflow-hidden mt-0.5"
                style={{
                  width: '56px', height: '40px',
                  background: `url(${pr.thumbnail}) center/cover no-repeat`,
                }}
              />
              <div className="min-w-0">
                <span
                  className="block mb-0.5"
                  style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#3B9EFF' }}
                >
                  {pr.company}
                </span>
                <span
                  className="text-text-secondary transition-colors group-hover:text-text-primary block"
                  style={{ fontSize: '12px', fontWeight: 500, lineHeight: 1.4 }}
                >
                  {pr.headline}
                </span>
                <span className="text-text-secondary" style={{ fontSize: '11px' }}>
                  {pr.date}
                </span>
              </div>
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
