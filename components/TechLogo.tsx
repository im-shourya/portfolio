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
  if (l < 0.02) return '#FDFDFB';
  if (l < 0.12) return `color-mix(in srgb, #${hex} 65%, white)`;
  return `#${hex}`;
}

/**
 * Every distinct logo's path, once, as <symbol>s that TechLogo points at with <use>.
 * Render it once per page, before the logos. Inlining the path in each logo
 * repeated ~180 KB of paths in the HTML and again in the RSC payload.
 */
export function TechLogoSprite({ icons }: { icons: SimpleIcon[] }) {
  const unique = [...new Map(icons.map((icon) => [icon.slug, icon])).values()];
  return (
    <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
      {unique.map((icon) => (
        <symbol key={icon.slug} id={`si-${icon.slug}`} viewBox="0 0 24 24">
          <path d={icon.path} />
        </symbol>
      ))}
    </svg>
  );
}

/**
 * Brand logo from Simple Icons (CC0), drawn from TechLogoSprite's symbols.
 * `tone="dark"` for dark surfaces, `"light"` for white tiles.
 */
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
      <use href={`#si-${icon.slug}`} />
    </svg>
  );
}
