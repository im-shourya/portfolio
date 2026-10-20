import type { MetadataRoute } from 'next';
import { posts } from '@/data/blogs';

const SITE = 'https://shouryaparashar.in';

// Every route under app/, so new pages and published posts can't be left out.
const routes: { path: string; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/projects', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/skills', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/journey', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/certifications', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/leadership', changeFrequency: 'monthly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = routes.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? SITE : `${SITE}${path}`,
    changeFrequency,
    priority,
  }));
  // Drafts have no page yet (they 404), so only published posts are listed.
  const articles = posts
    .filter((post) => post.date !== 'Coming Soon')
    .map((post) => ({
      url: `${SITE}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  return [...pages, ...articles];
}
