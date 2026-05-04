import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] flex items-center justify-center px-6">
      <div className="text-center max-w-[400px]">
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1B4A44] text-[#F4EFE6] font-syne text-[11px] font-bold tracking-[1.5px] uppercase hover:bg-[#E8A325] hover:text-[#151F1E] transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
