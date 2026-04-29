import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Certifications from '@/components/Certifications';

export default function CertificationsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Certifications />
      </div>
      <Footer />
    </main>
  );
}
