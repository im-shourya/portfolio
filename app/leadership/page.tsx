import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Leadership from '@/components/Leadership';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership | Shourya Parashar',
  description: 'Explore the leadership roles, community contributions, and technical management experience of Shourya Parashar.',
  alternates: {
    canonical: '/leadership',
  },
  openGraph: {
    title: 'Leadership | Shourya Parashar',
    description: 'Explore the leadership roles, community contributions, and technical management experience of Shourya Parashar.',
    url: 'https://shouryaparashar.in/leadership',
  },
  twitter: {
    title: 'Leadership | Shourya Parashar',
    description: 'Explore the leadership roles, community contributions, and technical management experience of Shourya Parashar.',
  }
};

export default function LeadershipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Leadership as="h1" />
      </main>
      <Footer />
    </div>
  );
}
