'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'up' | 'left' | 'scale';
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  threshold?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

const variantClass = {
  up:    'reveal',
  left:  'reveal-left',
  scale: 'reveal-scale',
};

export function ScrollReveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  threshold = 0.12,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';
  const combined = [variantClass[variant], delayClass, className].filter(Boolean).join(' ');

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={combined}>
      {children}
    </Tag>
  );
}
