import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shourya Parashar',
    short_name: 'Shourya',
    description: 'Portfolio and blog of Shourya Parashar, full-stack developer',
    start_url: '/',
    display: 'browser',
    background_color: '#191510',
    theme_color: '#191510',
    icons: [
      { src: '/favicon.png', sizes: 'any', type: 'image/png' },
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
