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
  openGraph: {
    title: 'Projects | Shourya Parashar',
    description: 'Explore the portfolio of Shourya Parashar, featuring production-ready web applications like RecruitAI and KanbanFlow.',
    url: 'https://shouryaparashar.in/projects',
  },
  twitter: {
    title: 'Projects | Shourya Parashar',
    description: 'Explore the portfolio of Shourya Parashar, featuring production-ready web applications like RecruitAI and KanbanFlow.',
  }
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
