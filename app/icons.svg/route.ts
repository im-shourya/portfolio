import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { glyphs } from '@/components/icons';

// Built once at build time and served as a static, cacheable file.
export const dynamic = 'force-static';

const SVG_DIR = path.join(process.cwd(), 'node_modules/framework7-icons/svg');

/** Sprite of every icon in components/icons.tsx, one <symbol> per glyph. */
export async function GET() {
  const symbols = await Promise.all(
    glyphs.map(async (glyph) => {
      const svg = await readFile(path.join(SVG_DIR, `${glyph}.svg`), 'utf8');
      const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
      return `<symbol id="${glyph}" viewBox="0 0 56 56">${inner}</symbol>`;
    }),
  );
  return new Response(`<svg xmlns="http://www.w3.org/2000/svg">${symbols.join('')}</svg>`, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
