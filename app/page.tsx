import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Freelance from '@/components/Freelance';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Freelance />
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
