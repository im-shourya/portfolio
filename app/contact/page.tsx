import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Shourya Parashar',
  description: 'Get in touch with Shourya Parashar for collaboration, project inquiries, or freelance web development opportunities.',
  alternates: {
    canonical: '/contact',
  },
  // Section pages replace the root openGraph, so restate the shared fields and image.
  openGraph: {
    type: 'website',
    siteName: 'Shourya Parashar',
    locale: 'en_US',
    images: ['/opengraph-image'],
    title: 'Contact | Shourya Parashar',
    description: 'Get in touch with Shourya Parashar for collaboration, project inquiries, or freelance web development opportunities.',
    url: 'https://shouryaparashar.in/contact',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/twitter-image'],
    title: 'Contact | Shourya Parashar',
    description: 'Get in touch with Shourya Parashar for collaboration, project inquiries, or freelance web development opportunities.',
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Contact as="h1" />
      </main>
      <Footer />
    </div>
  );
}
