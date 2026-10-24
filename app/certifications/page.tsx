import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';


import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications | Shourya Parashar',
  description: 'View the professional certifications and academic achievements of Shourya Parashar.',
  alternates: {
    canonical: '/certifications',
  },
  openGraph: {
    title: 'Certifications | Shourya Parashar',
    description: 'View the professional certifications and academic achievements of Shourya Parashar.',
    url: 'https://shouryaparashar.in/certifications',
  },
  twitter: {
    title: 'Certifications | Shourya Parashar',
    description: 'View the professional certifications and academic achievements of Shourya Parashar.',
  }
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Certifications as="h1" />
      </main>
      <Footer />
    </div>
  );
}
