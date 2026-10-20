import { posts } from '@/data/blogs';
import { ogCard, OG_SIZE } from '@/lib/og';

export const alt = 'Article by Shourya Parashar';
export const size = OG_SIZE;
export const contentType = 'image/png';

export function generateStaticParams() {
  return posts.filter((p) => p.date !== 'Coming Soon').map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return ogCard({
    eyebrow: `Notes · ${post?.readTime ?? ''}`,
    title: post?.title ?? 'Notes',
    footer: 'Shourya Parashar — shouryaparashar.in/blog',
  });
}
