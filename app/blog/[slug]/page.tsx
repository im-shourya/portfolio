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
      
      <div className="flex-1 pt-32 pb-24">
        <article className="max-w-[800px] mx-auto px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] text-ink-muted hover:text-ink-strong transition-colors mb-10 group"
          >
            <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center">
              <ArrowLeftIcon size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Articles
          </Link>

          <header className="mb-16">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-[clamp(2.2rem,5vw,3.6rem)] font-medium text-ink-strong leading-[1.08] tracking-tight mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-[13px] text-ink-muted border-t border-white/[0.08] pt-6">
              <span className="flex items-center gap-2">
                <CalendarIcon size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon size={14} />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none 
            text-ink leading-relaxed
            [&>p]:mb-6
            [&>h2]:text-[1.75rem] [&>h2]:font-medium [&>h2]:tracking-tight [&>h2]:text-ink-strong [&>h2]:mt-16 [&>h2]:mb-6
            [&>h3]:text-[1.3rem] [&>h3]:font-medium [&>h3]:text-ink-strong [&>h3]:mt-12 [&>h3]:mb-4
            [&>ul]:mb-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:pl-2
            [&>ol]:mb-8 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2 [&>ol>li]:pl-2
            [&>pre]:bg-[#0F0E17] [&>pre]:border [&>pre]:border-white/[0.08] [&>pre]:text-ink [&>pre]:p-6 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:mb-8 [&>pre]:text-sm
            [&>code]:bg-white/[0.07] [&>code]:text-ink-strong [&>code]:px-2 [&>code]:py-1 [&>code]:rounded-md [&>code]:text-[0.9em]
            [&>pre>code]:bg-transparent [&>pre>code]:text-inherit [&>pre>code]:p-0
            [&>table]:w-full [&>table]:mb-8 [&>table]:border-collapse [&>table]:text-sm
            [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:p-4 [&>table>thead>tr>th]:border-b [&>table>thead>tr>th]:border-white/15 [&>table>thead>tr>th]:font-medium [&>table>thead>tr>th]:text-ink-strong
            [&>table>tbody>tr>td]:p-4 [&>table>tbody>tr>td]:border-b [&>table>tbody>tr>td]:border-white/[0.08]
            [&_a]:text-[#FFC94A] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white transition-colors
            [&>strong]:text-ink-strong [&>strong]:font-semibold
          ">
            {post.content}
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
