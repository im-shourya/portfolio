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
  openGraph: {
    title: 'Journey | Shourya Parashar',
    description: 'Explore the academic and professional journey of Shourya Parashar, detailing the evolution of his skills in web development.',
    url: 'https://shouryaparashar.in/journey',
  },
  twitter: {
    title: 'Journey | Shourya Parashar',
    description: 'Explore the academic and professional journey of Shourya Parashar, detailing the evolution of his skills in web development.',
  }
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
