import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
