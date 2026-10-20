import Link from 'next/link';
import { ArrowUpRightIcon } from './icons';

import { posts } from '@/data/blogs';
import { Container } from './SectionHeader';

type Post = (typeof posts)[number];

const isPublished = (post: Post) => post.date !== 'Coming Soon';

// Drafts pinned as sticky notes, cycling through the crayon colours.
const draftNotes = [
  'bg-c-yellow -rotate-2',
  'bg-c-mint rotate-1',
  'bg-c-pink-soft -rotate-1',
  'bg-c-cyan rotate-2',
];

function Tags({ tags, dark = false }: { tags: string[]; dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className={`tag-cut label-mono !text-[10px] !tracking-[0.12em] ${dark ? 'bg-white text-c-ink' : 'bg-c-ink text-white'}`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Featured({ post }: { post: Post }) {
  return (
    <article className="relative mt-20">
      <div className="absolute bottom-[calc(100%-1px)] left-0 slab-tab-left bg-c-blue text-white label-mono whitespace-nowrap pl-6 pr-12 h-11 flex items-center">
        ✦ Featured
      </div>
      <div className="bg-c-blue text-white grid md:grid-cols-[1fr_300px] gap-10 p-7 sm:p-12">
        <div className="flex flex-col">
          <p className="label-mono flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-current" aria-hidden />
            {post.date}
          </p>
          <h2 className="mt-5 text-[32px] sm:text-[48px] leading-[1.02] font-semibold tracking-[-0.03em] max-w-[22ch]">
            <Link href={`/blog/${post.slug}`} className="hover:underline decoration-2 underline-offset-[6px]">
              {post.title}
            </Link>
          </h2>
          <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed opacity-85 max-w-[56ch]">{post.excerpt}</p>
          <div className="mt-8">
            <Link
              href={`/blog/${post.slug}`}
              className="label-mono inline-flex items-center gap-2 border-b-2 border-current pb-1 hover:opacity-70 transition-opacity"
            >
              Read the post <ArrowUpRightIcon size={11} />
            </Link>
          </div>
          <div className="mt-auto pt-10">
            <Tags tags={post.tags} dark />
          </div>
        </div>

        {/* Read time on a taped note */}
        <div className="relative self-center justify-self-center md:justify-self-end w-[240px] rotate-3 bg-c-paper text-c-ink p-6 shadow-[0_18px_40px_rgba(0,0,0,0.3)]">
          <span className="tape -top-2.5 left-1/2 -translate-x-1/2 -rotate-3" aria-hidden />
          <p className="font-hand text-[20px]">grab a coffee, it&apos;s a</p>
          <p className="font-display text-[88px] mt-2">{post.readTime.replace(' read', '')}</p>
          <p className="font-hand text-[20px] text-right">read</p>
        </div>
      </div>
    </article>
  );
}

export default function BlogList() {
  const featured = posts.find((p) => p.featured && isPublished(p));
  const published = posts.filter((p) => isPublished(p) && p !== featured);
  const drafts = posts.filter((p) => !isPublished(p));

  return (
    <section className="pt-28 sm:pt-36 pb-20 min-h-screen">
      <Container>
        <header className="text-center">
          <p className="font-hand text-[22px] text-ink">notes from the desk</p>
          <h1 className="font-display mt-3 text-[clamp(4.5rem,14vw,10rem)] text-ink-strong">Notes</h1>
          <p className="note mt-6 bg-c-tan -rotate-2 text-[14px] max-w-[40ch]">
            Thoughts on software engineering, UI/UX design, and what I learn building production-ready applications.
          </p>
        </header>

        {featured && <Featured post={featured} />}

        {published.length > 0 && (
          <div className="mt-20">
            <h2 className="label-mono text-ink-muted">More posts</h2>
            <ol className="mt-5 border-t border-white/[0.09]">
              {published.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid md:grid-cols-[170px_1fr_auto] items-center gap-x-8 gap-y-3 py-8 px-2 border-b border-white/[0.09] hover:bg-c-yellow hover:text-c-ink transition-colors"
                  >
                    <span className="label-mono !text-[11px] text-ink-muted group-hover:text-c-ink">
                      {post.date} · {post.readTime}
                    </span>
                    <span>
                      <span className="block text-[22px] sm:text-[28px] leading-tight font-semibold tracking-tight text-ink-strong group-hover:text-c-ink">
                        {post.title}
                      </span>
                      <span className="block text-[15px] leading-relaxed text-ink-muted group-hover:text-c-ink/80 mt-2 max-w-[70ch]">
                        {post.excerpt}
                      </span>
                    </span>
                    <span className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center justify-self-start md:justify-self-end text-ink-strong group-hover:text-c-ink group-hover:rotate-45 transition-transform">
                      <ArrowUpRightIcon size={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        )}

        {drafts.length > 0 && (
          <div className="mt-24">
            <div className="text-center">
              <p className="font-hand text-[22px] text-ink">still in the drafts folder</p>
              <h2 className="font-display mt-2 text-[clamp(3rem,8vw,5.5rem)] text-ink-strong">Coming soon</h2>
            </div>
            {/* Unpublished posts are previews, not links to nowhere. */}
            <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {drafts.map((post, i) => (
                <li
                  key={post.slug}
                  className={`relative ${draftNotes[i % draftNotes.length]} text-c-ink p-6 pt-8 shadow-[0_16px_34px_rgba(0,0,0,0.4)] flex flex-col`}
                >
                  <span className="tape -top-2.5 left-1/2 -translate-x-1/2 rotate-2" aria-hidden />
                  <span className="label-mono !text-[10px] !tracking-[0.14em] self-start border-2 border-c-ink/70 px-2 py-0.5 -rotate-6 opacity-70">
                    Draft
                  </span>
                  <h3 className="mt-5 text-[19px] leading-snug font-semibold tracking-tight">{post.title}</h3>
                  <p className="text-[14px] leading-relaxed mt-2 opacity-80 flex-1">{post.excerpt}</p>
                  <p className="font-hand text-[18px] mt-5">
                    {post.tags.join(', ')} · {post.readTime}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
