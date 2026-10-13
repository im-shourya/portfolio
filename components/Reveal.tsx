'use client';

import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

/** Apple-style entrance: rises, unblurs and fades in once when scrolled into view. */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <m.div
      initial={{ opacity: 0, y, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay, ease }}
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </m.div>
  );
}
