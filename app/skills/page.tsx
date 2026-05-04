import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';

export default function SkillsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <TechStack />
      </div>
      <Footer />
    </main>
  );
}
