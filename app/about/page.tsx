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
  openGraph: {
    title: 'About Shourya Parashar | Full-Stack Developer',
    description: 'Learn more about Shourya Parashar, a Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.',
    url: 'https://shouryaparashar.in/about',
  },
  twitter: {
    title: 'About Shourya Parashar | Full-Stack Developer',
    description: 'Learn more about Shourya Parashar, a Full-Stack Developer specializing in React, Next.js, Node.js, and TypeScript.',
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <About />
      </div>
      <Footer />
    </main>
  );
}
