import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills | Shourya Parashar',
  description: 'Technical skills and technologies used by Shourya Parashar, focusing on React, Next.js, Node.js, TypeScript, and modern web development tools.',
  alternates: {
    canonical: '/skills',
  },
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'Skills | Shourya Parashar',
    description: 'Technical skills and technologies used by Shourya Parashar, focusing on React, Next.js, Node.js, TypeScript, and modern web development tools.',
    url: 'https://shouryaparashar.in/skills',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image'],
    title: 'Skills | Shourya Parashar',
    description: 'Technical skills and technologies used by Shourya Parashar, focusing on React, Next.js, Node.js, TypeScript, and modern web development tools.',
  }
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <TechStack as="h1" />
      </main>
      <Footer />
    </div>
  );
}
