'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Counts a figure such as "1,800+" or "7.87ms" up from zero, keeping its format. */
function countUp(el: HTMLElement) {
  const final = el.textContent ?? '';
  const match = final.match(/^(\D*)([\d,]*\.?\d+)(.*)$/);
  if (!match) return;
  const [, prefix, digits, suffix] = match;
  const target = parseFloat(digits.replace(/,/g, ''));
  const decimals = digits.split('.')[1]?.length ?? 0;
  const format = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: digits.includes(','),
  });
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / 1600, 1);
    el.textContent = t < 1 ? prefix + format.format(target * easeOutExpo(t)) + suffix : final;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Drives the site's motion with no animation library: scroll reveals for
 * [data-reveal], count-ups for [data-count], and the pointer effects for
 * [data-magnetic] buttons and [data-spotlight] cards. The animations
 * themselves are CSS (see "Motion" in globals.css).
 *
 * Content is never hidden before this runs: whatever is on screen at that
 * point is left as rendered, and only what's below the fold waits to be
 * revealed. Without JS, or with reduced motion, everything simply shows.
 */
export default function Motion() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-count]');

    // The splash only plays on a full load, so after a client-side
    // navigation the hero needn't wait for it.
    if (!firstLoad.current) root.style.setProperty('--hero-delay', '0.05s');
    firstLoad.current = false;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const fold = window.innerHeight;
    for (const el of targets) {
      if (el.getBoundingClientRect().top < fold) el.classList.add('is-seen');
    }
    root.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add('is-in');
          if (el.dataset.count !== undefined) countUp(el);
          observer.unobserve(el);
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    for (const el of targets) {
      if (!el.classList.contains('is-seen')) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let magnet: HTMLElement | null = null;
    const release = () => {
      magnet?.style.removeProperty('--mx');
      magnet?.style.removeProperty('--my');
      magnet = null;
    };

    const onMove = (e: PointerEvent) => {
      if (!(e.target instanceof Element)) return;

      // Spotlight: a soft glow that follows the cursor across a card.
      const spot = e.target.closest<HTMLElement>('[data-spotlight]');
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty('--sx', `${e.clientX - r.left}px`);
        spot.style.setProperty('--sy', `${e.clientY - r.top}px`);
      }

      // Magnetic: the button leans a quarter of the way toward the cursor.
      const next = e.target.closest<HTMLElement>('[data-magnetic]');
      if (next !== magnet) release();
      if (next) {
        magnet = next;
        const r = next.getBoundingClientRect();
        next.style.setProperty('--mx', `${(e.clientX - r.left - r.width / 2) * 0.25}px`);
        next.style.setProperty('--my', `${(e.clientY - r.top - r.height / 2) * 0.3}px`);
      }
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', release);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', release);
    };
  }, []);

  return null;
}
