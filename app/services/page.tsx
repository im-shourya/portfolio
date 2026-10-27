import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Shourya Parashar',
  description: 'Professional web development services offered by Shourya Parashar, including frontend architecture, full-stack web applications, and technical consulting.',
  alternates: {
    canonical: '/services',
  },
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'Services | Shourya Parashar',
    description: 'Professional web development services offered by Shourya Parashar, including frontend architecture, full-stack web applications, and technical consulting.',
    url: 'https://shouryaparashar.in/services',
  },
  twitter: {
    card: 'summary',
    images: ['/twitter-image'],
    title: 'Services | Shourya Parashar',
    description: 'Professional web development services offered by Shourya Parashar, including frontend architecture, full-stack web applications, and technical consulting.',
  }
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Services as="h1" />
      </main>
      <Footer />
    </div>
  );
}
