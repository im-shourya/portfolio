import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Shourya Parashar',
  description: 'Explore the portfolio of Shourya Parashar, featuring production-ready web applications like RecruitAI and KanbanFlow built with Next.js, Node.js, and TypeScript.',
  alternates: {
    canonical: '/projects',
  },
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'Projects | Shourya Parashar',
    description: 'Explore the portfolio of Shourya Parashar, featuring production-ready web applications like RecruitAI and KanbanFlow.',
    url: 'https://shouryaparashar.in/projects',
  },
  twitter: {
    card: 'summary',
    images: ['/twitter-image'],
    title: 'Projects | Shourya Parashar',
    description: 'Explore the portfolio of Shourya Parashar, featuring production-ready web applications like RecruitAI and KanbanFlow.',
  }
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Projects as="h1" />
      </main>
      <Footer />
    </div>
  );
}
