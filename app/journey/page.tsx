import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Experience from '@/components/Experience';

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
