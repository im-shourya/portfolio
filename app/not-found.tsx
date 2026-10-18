import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] flex items-center justify-center px-6 relative overflow-hidden">
      <div className="orb w-[460px] h-[460px] bg-[#4EADA0]/25 -top-20 -left-20" />
      <div className="orb w-[420px] h-[420px] bg-[#E8A325]/25 -bottom-20 -right-20" />
      <div className="glass relative rounded-[36px] px-10 py-12 text-center max-w-[440px]">
        <div className="font-syne text-[100px] font-extrabold text-[#1B4A44]/10 leading-none mb-2">
          404
        </div>
        <h1 className="font-serif text-[2rem] text-[#1B4A44] mb-3">
          Page Not Found
        </h1>
        <p className="text-[#4A6360] text-[15px] mb-8 font-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
