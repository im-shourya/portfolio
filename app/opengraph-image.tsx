import { portraitResponse, PORTRAIT_SIZE } from '@/lib/og';

// Just the portrait (public/shourya-portrait.webp), served as JPEG.
export const alt = 'Shourya Parashar, full-stack developer';
export const size = PORTRAIT_SIZE;
export const contentType = 'image/jpeg';

export default function Image() {
  return portraitResponse();
}
