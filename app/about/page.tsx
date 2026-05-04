import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <About />
      </div>
      <Footer />
    </main>
  );
}
