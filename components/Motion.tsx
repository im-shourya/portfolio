'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

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
 * [data-reveal], count-ups for [data-count], the phone project stack
 * ([data-stack]), and the pointer effects for
 * [data-magnetic] buttons and [data-spotlight] cards. The animations
 * themselves are CSS (see "Motion" in globals.css).
 *
 * Content is never hidden before this runs: whatever is on screen at that
 * point is left as rendered, and only what's below the fold waits to be
 * revealed. Without JS, or with reduced motion, everything simply shows.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-count]');

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

  // Phone project stack: as each [data-stack] card is slid over by the next,
  // --cover runs 0 → 1 so the CSS can shrink and dim it.
  useEffect(() => {
    const cards = [...document.querySelectorAll<HTMLElement>('[data-stack]')];
    if (cards.length < 2) return;
    const phone = window.matchMedia('(max-width: 767px)');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    let frame = 0;
    const update = () => {
      frame = 0;
      const live = phone.matches && !reduce.matches;
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        let cover = 0;
        if (live && next) {
          const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top;
          cover = Math.min(Math.max(1 - gap / card.offsetHeight, 0), 1);
        }
        card.style.setProperty('--cover', cover.toFixed(3));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
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
