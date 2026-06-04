'use client';

import { useEffect } from 'react';

export function RevealInit() {
  useEffect(() => {
    const CLASSES = ['.reveal', '.reveal-left', '.reveal-scale'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      CLASSES.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (!el.classList.contains('reveal-visible')) {
            observer.observe(el);
          }
        });
      });
    };

    observe();

    // Re-observe when new elements appear (dynamic content)
    const mutationObserver = new MutationObserver(observe);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
