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
  openGraph: {
    title: 'Services | Shourya Parashar',
    description: 'Professional web development services offered by Shourya Parashar, including frontend architecture, full-stack web applications, and technical consulting.',
    url: 'https://shouryaparashar.in/services',
  },
  twitter: {
    title: 'Services | Shourya Parashar',
    description: 'Professional web development services offered by Shourya Parashar, including frontend architecture, full-stack web applications, and technical consulting.',
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
