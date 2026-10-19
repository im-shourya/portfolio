import { ogCard, OG_SIZE } from '@/lib/og';

export const alt = 'Shourya Parashar, full-stack developer';
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return ogCard({
    eyebrow: 'Full-stack developer · SRMIST',
    title: 'Shourya Parashar',
    footer: 'TypeScript · Python · Next.js · FastAPI — shouryaparashar.in',
  });
}
