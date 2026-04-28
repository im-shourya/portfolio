import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Blog — Shourya Parashar | Full Stack Developer',
  description: 'Weekly articles about web development, React, Next.js, Node.js, TypeScript, system design, and software engineering. Written by Shourya Parashar.',
  openGraph: {
    title: 'Blog — Shourya Parashar',
    description: 'Weekly articles about web development and software engineering.',
    url: 'https://shouryaparashar.in/blog',
  },
  alternates: {
    canonical: 'https://shouryaparashar.in/blog',
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-[70px]">
        <BlogList />
      </main>
      <Footer />
    </>
  );
}
