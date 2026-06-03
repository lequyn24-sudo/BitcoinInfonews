'use client';

import { useEffect, useState } from 'react';

export function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed left-0 z-99 w-full bg-void"
      style={{ top: '64px', height: '3px' }}
    >
      <div
        className="h-full bg-amber transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
