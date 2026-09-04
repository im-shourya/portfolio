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
  openGraph: {
    title: 'Contact | Shourya Parashar',
    description: 'Get in touch with Shourya Parashar for collaboration, project inquiries, or freelance web development opportunities.',
    url: 'https://shouryaparashar.in/contact',
  },
  twitter: {
    title: 'Contact | Shourya Parashar',
    description: 'Get in touch with Shourya Parashar for collaboration, project inquiries, or freelance web development opportunities.',
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
