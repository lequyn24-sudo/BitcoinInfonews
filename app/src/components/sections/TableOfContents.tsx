'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Highlight the first intersecting element
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-88px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      toc.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [toc]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 88; // 64px nav + 24px buffer
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveId(id);
    }
  };

  return (
    <div className="card-base p-4">
      <h3
        className="mb-3 text-text-secondary"
        style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        In This Article
      </h3>
      <ul className="flex flex-col gap-2.5">
        {toc.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full transition-all duration-200"
                style={{
                  background: isActive ? '#F7931A' : 'transparent',
                  transform: isActive ? 'scale(1)' : 'scale(0)',
                }}
              />
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="transition-colors duration-150"
                style={{
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#F7931A' : '#A0A0A0',
                }}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
