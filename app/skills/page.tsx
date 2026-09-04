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
  openGraph: {
    title: 'Skills | Shourya Parashar',
    description: 'Technical skills and technologies used by Shourya Parashar, focusing on React, Next.js, Node.js, TypeScript, and modern web development tools.',
    url: 'https://shouryaparashar.in/skills',
  },
  twitter: {
    title: 'Skills | Shourya Parashar',
    description: 'Technical skills and technologies used by Shourya Parashar, focusing on React, Next.js, Node.js, TypeScript, and modern web development tools.',
  }
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <TechStack />
      </div>
      <Footer />
    </main>
  );
}
