import { posts } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
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
    <main className="min-h-screen bg-[#F9F6F0] flex flex-col relative overflow-hidden">
      <Header />
      
      <div className="flex-1 pt-32 pb-24">
        {/* Decorative Blur */}
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#E8A325]/10 rounded-full blur-[100px] pointer-events-none" />

        <article className="max-w-[800px] mx-auto px-6 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#143B36]/50 hover:text-[#E8A325] transition-colors mb-12 group"
          >
            <div className="w-8 h-8 rounded-full border border-[#143B36]/10 flex items-center justify-center group-hover:border-[#E8A325] transition-colors">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Articles
          </Link>

          <header className="mb-16">
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="font-syne text-[10px] font-bold tracking-[1.5px] uppercase text-[#143B36]/60 border border-[#143B36]/20 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-[#143B36] leading-[1.05] tracking-tight mb-8">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-[12px] font-bold tracking-[1px] uppercase text-[#143B36]/50 font-syne border-t border-[#143B36]/10 pt-8">
              <span className="flex items-center gap-2">
                <Calendar size={14} strokeWidth={2.5} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} strokeWidth={2.5} />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none 
            text-[#2A3E3B] font-medium leading-relaxed
            [&>p]:mb-6
            [&>h2]:font-sans [&>h2]:text-[2rem] [&>h2]:font-bold [&>h2]:text-[#143B36] [&>h2]:mt-16 [&>h2]:mb-6
            [&>h3]:font-sans [&>h3]:text-[1.5rem] [&>h3]:font-bold [&>h3]:text-[#143B36] [&>h3]:mt-12 [&>h3]:mb-4
            [&>ul]:mb-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:pl-2
            [&>ol]:mb-8 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol>li]:mb-2 [&>ol>li]:pl-2
            [&>pre]:bg-[#143B36] [&>pre]:text-[#F9F6F0] [&>pre]:p-6 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:mb-8 [&>pre]:text-sm
            [&>code]:bg-[#143B36]/5 [&>code]:text-[#143B36] [&>code]:px-2 [&>code]:py-1 [&>code]:rounded-md [&>code]:text-[0.9em]
            [&>pre>code]:bg-transparent [&>pre>code]:text-inherit [&>pre>code]:p-0
            [&>table]:w-full [&>table]:mb-8 [&>table]:border-collapse [&>table]:text-sm
            [&>table>thead>tr>th]:text-left [&>table>thead>tr>th]:p-4 [&>table>thead>tr>th]:border-b [&>table>thead>tr>th]:border-[#143B36]/20 [&>table>thead>tr>th]:font-bold [&>table>thead>tr>th]:text-[#143B36]
            [&>table>tbody>tr>td]:p-4 [&>table>tbody>tr>td]:border-b [&>table>tbody>tr>td]:border-[#143B36]/10
            [&_a]:text-[#E8A325] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-[#143B36] transition-colors
            [&>strong]:text-[#143B36] [&>strong]:font-bold
          ">
            {post.content}
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}
