import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Leadership from '@/components/Leadership';

export default function LeadershipPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Leadership />
      </div>
      <Footer />
    </main>
  );
}
