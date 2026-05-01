import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const About = dynamic(() => import('@/components/About'));
const Services = dynamic(() => import('@/components/Services'));
const TechStack = dynamic(() => import('@/components/TechStack'));
const Projects = dynamic(() => import('@/components/Projects'));
const Certifications = dynamic(() => import('@/components/Certifications'));
const Experience = dynamic(() => import('@/components/Experience'));
const Leadership = dynamic(() => import('@/components/Leadership'));
const Contact = dynamic(() => import('@/components/Contact'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Certifications />
        <Experience />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
