import type { SimpleIcon } from 'simple-icons';

/** Relative luminance of a hex colour (WCAG formula), 0 = black, 1 = white. */
function luminance(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Brand colour that stays visible on the dark cards: near-black marks (Next.js, Vercel…)
 * switch to white, and dark brand colours are lifted toward white.
 */
function onDark(hex: string) {
  const l = luminance(hex);
  if (l < 0.02) return '#F4F4F7';
  if (l < 0.12) return `color-mix(in srgb, #${hex} 65%, white)`;
  return `#${hex}`;
}

/** Brand logo from Simple Icons (CC0). `tone="dark"` for dark surfaces, `"light"` for white tiles. */
export default function TechLogo({
  icon,
  size = 14,
  tone = 'dark',
}: {
  icon: SimpleIcon;
  size?: number;
  tone?: 'dark' | 'light';
}) {
  const fill = tone === 'dark' ? onDark(icon.hex) : `#${icon.hex}`;
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill={fill} aria-hidden focusable="false">
      <path d={icon.path} />
    </svg>
  );
}
