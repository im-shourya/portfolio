import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Freelance from '@/components/Freelance';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import type { Metadata } from 'next';
import { profilePageJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      {/* Only the home page is the profile page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }} />
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Experience />
        <Certifications />
        <Services />
        <Freelance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
