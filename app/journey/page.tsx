import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journey | Shourya Parashar',
  description: 'Explore the academic and professional journey of Shourya Parashar, detailing the evolution of his skills in web development.',
  alternates: {
    canonical: '/journey',
  },
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'Journey | Shourya Parashar',
    description: 'Explore the academic and professional journey of Shourya Parashar, detailing the evolution of his skills in web development.',
    url: 'https://shouryaparashar.in/journey',
  },
  twitter: {
    card: 'summary',
    images: ['/twitter-image'],
    title: 'Journey | Shourya Parashar',
    description: 'Explore the academic and professional journey of Shourya Parashar, detailing the evolution of his skills in web development.',
  }
};

export default function JourneyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Experience as="h1" />
      </main>
      <Footer />
    </div>
  );
}
