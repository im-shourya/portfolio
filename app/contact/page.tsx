import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

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
