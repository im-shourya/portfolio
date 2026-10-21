import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Blog | Shourya Parashar | Full Stack Developer',
  description: 'Articles about web development, React, Next.js, Node.js, TypeScript, system design, and software engineering. Written by Shourya Parashar.',
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'Blog | Shourya Parashar',
    description: 'Articles about web development and software engineering.',
    url: 'https://shouryaparashar.in/blog',
  },
  alternates: {
    canonical: '/blog',
  },
  twitter: {
    card: 'summary',
    images: ['/twitter-image'],
    title: 'Blog | Shourya Parashar | Full Stack Developer',
    description: 'Articles about web development, React, Next.js, Node.js, TypeScript, system design, and software engineering. Written by Shourya Parashar.',
  }
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
