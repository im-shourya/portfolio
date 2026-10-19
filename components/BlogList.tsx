import Link from 'next/link';
import { ArrowUpRightIcon, CalendarIcon, ClockIcon } from './icons';

import { posts } from '@/data/blogs';
import SectionHeader, { Container } from './SectionHeader';

type Post = (typeof posts)[number];

const href = (post: Post) => (post.date !== 'Coming Soon' ? `/blog/${post.slug}` : '#');

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-4 text-[12px] text-ink-muted">
      <span className="flex items-center gap-1.5">
        <CalendarIcon size={13} />
        {post.date}
      </span>
      <span className="flex items-center gap-1.5">
        <ClockIcon size={13} />
        {post.readTime}
      </span>
    </div>
  );
}

export default function BlogList() {
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <section className="pt-24 sm:pt-28 pb-10 min-h-screen">
      <Container>
        <SectionHeader
          as="h1"
          title="Notes & insights"
          note="Thoughts on software engineering, UI/UX design, and what I learn building production-ready applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bento-grid">
          {featuredPost && (
            <Link href={href(featuredPost)} className="group bento bento-amber md:col-span-2 p-7 sm:p-[55px] flex flex-col min-h-[300px]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-medium text-[#07070B] bg-[#FFC94A] px-2.5 py-1 rounded-md">Featured</span>
                {featuredPost.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="mt-auto pt-10 text-[clamp(1.7rem,3.4vw,2.5rem)] leading-[1.12] font-normal text-ink-strong max-w-[26ch]">
                {featuredPost.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-ink-muted mt-3 max-w-[62ch]">{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between mt-6">
                <Meta post={featuredPost} />
                <ArrowUpRightIcon size={14} className="text-ink-muted group-hover:text-ink-strong transition-colors" />
              </div>
            </Link>
          )}

          {otherPosts.map((post) => (
            <Link key={post.slug} href={href(post)} className="group bento p-7 sm:p-10 flex flex-col">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-[20px] leading-snug font-normal text-ink-strong mt-6">{post.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted mt-2 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-white/[0.07]">
                <Meta post={post} />
                <ArrowUpRightIcon size={13} className="text-ink-muted group-hover:text-ink-strong transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
