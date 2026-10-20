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
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'Certifications | Shourya Parashar',
    description: 'View the professional certifications and academic achievements of Shourya Parashar.',
    url: 'https://shouryaparashar.in/certifications',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image'],
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
