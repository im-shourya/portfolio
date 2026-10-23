import { posts } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@/components/icons';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return posts.filter(p => p.date !== 'Coming Soon').map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Shourya Parashar`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Shourya Parashar`,
      description: post.excerpt,
      url: `https://shouryaparashar.in/blog/${post.slug}`,
    },
    twitter: {
      title: `${post.title} | Shourya Parashar`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post || post.date === 'Coming Soon') {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 pt-28 sm:pt-36 pb-24">
        <article className="max-w-[820px] mx-auto px-4 sm:px-6 relative z-10">
          <Link
            href="/blog"
            className="label-mono inline-flex items-center gap-2 text-ink-muted hover:text-ink-strong transition-colors group"
          >
            <ArrowLeftIcon size={13} className="group-hover:-translate-x-1 transition-transform" />
            All notes
          </Link>

          {/* Title card, taped to the page */}
          <header className="relative mt-10 mb-20 bg-c-paper text-c-ink p-7 sm:p-12 -rotate-[0.6deg] shadow-[10px_12px_0_rgba(0,0,0,0.45)]">
            <span className="tape -top-2.5 left-10 -rotate-6 !bg-c-yellow/80" aria-hidden />
            <span className="tape -top-2.5 right-10 rotate-6 !bg-c-pink/70" aria-hidden />
            <ul className="flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag} className="tag-cut label-mono !text-[10px] !tracking-[0.12em] bg-c-ink text-white">
                  {tag}
                </li>
              ))}
            </ul>

            <h1 className="mt-7 text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              {post.title}
            </h1>

            <div className="mt-8 pt-5 border-t-2 border-dashed border-c-ink/25 flex flex-wrap items-center gap-x-6 gap-y-2 label-mono !text-[11px]">
              <span className="flex items-center gap-2">
                <CalendarIcon size={13} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon size={13} />
                {post.readTime}
              </span>
              <span className="font-hand normal-case tracking-normal text-[19px] ml-auto">by Shourya</span>
            </div>
          </header>

          <div className="prose-crayon">{post.content}</div>

          <footer className="mt-20 pt-10 border-t border-white/[0.09] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="font-hand text-[24px] text-ink-strong">thanks for reading!</p>
            <Link href="/blog" className="btn-light self-start sm:self-auto">
              <ArrowLeftIcon size={14} /> More notes
            </Link>
          </footer>
        </article>
      </div>

      <Footer />
    </main>
  );
}
