import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Shourya Parashar | Full-Stack Developer',
  description: 'Learn more about Shourya Parashar, a Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.',
  alternates: {
    canonical: '/about',
  },
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'About Shourya Parashar | Full-Stack Developer',
    description: 'Learn more about Shourya Parashar, a Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.',
    url: 'https://shouryaparashar.in/about',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image'],
    title: 'About Shourya Parashar | Full-Stack Developer',
    description: 'Learn more about Shourya Parashar, a Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.',
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <About as="h1" />
      </main>
      <Footer />
    </div>
  );
}
