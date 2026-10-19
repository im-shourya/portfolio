import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bento bento-violet px-8 py-12 sm:px-12 text-center max-w-[440px] w-full">
        <div className="text-[64px] font-medium tracking-tight leading-none text-ink-faint">404</div>
        <h1 className="text-[24px] font-medium tracking-tight text-ink-strong mt-4">Page not found</h1>
        <p className="text-[14px] text-ink-muted mt-2 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-light">
          Back to home
        </Link>
      </div>
    </div>
  );
}
