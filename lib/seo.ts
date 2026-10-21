import { projects } from '@/components/projects-data';

/**
 * One description of who Shourya is, shared by every page's structured data.
 * Google builds a person's knowledge panel and profile results from signals
 * like these, so the name, photo and profile links must match the profiles
 * themselves, and every claim must also appear on the site.
 */
export const SITE = 'https://shouryaparashar.in';
export const PERSON_ID = `${SITE}/#person`;
export const WEBSITE_ID = `${SITE}/#website`;

export const NAME = 'Shourya Parashar';
export const DESCRIPTION =
  'Shourya Parashar is a full-stack developer and CS undergraduate at SRMIST, Chennai, building with TypeScript, Python, React, Next.js, Node.js and FastAPI.';

/** Profiles that are his; each also links back to this site where the platform allows. */
export const PROFILES = {
  github: 'https://github.com/im-shourya',
  linkedin: 'https://www.linkedin.com/in/im-shourya/',
  devto: 'https://dev.to/im-shourya',
  x: 'https://x.com/im_SParashar',
  instagram: 'https://www.instagram.com/imshourya.in',
  medium: 'https://medium.com/@im-shourya',
  forem: 'https://forem.com/im-shourya',
};

const SRMIST = {
  '@type': 'CollegeOrUniversity',
  name: 'SRM Institute of Science and Technology',
  alternateName: 'SRMIST',
  url: 'https://www.srmist.edu.in',
  sameAs: ['https://en.wikipedia.org/wiki/SRM_Institute_of_Science_and_Technology', 'https://www.wikidata.org/wiki/Q1053006'],
};

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: NAME,
  givenName: 'Shourya',
  familyName: 'Parashar',
  alternateName: ['im-shourya', 'Shourya'],
  url: `${SITE}/`,
  image: {
    '@type': 'ImageObject',
    '@id': `${SITE}/#photo`,
    url: `${SITE}/Shourya_Parashar.jpeg`,
    contentUrl: `${SITE}/Shourya_Parashar.jpeg`,
    width: 800,
    height: 800,
    caption: 'Shourya Parashar, full-stack developer',
  },
  jobTitle: 'Full-Stack Developer',
  description: DESCRIPTION,
  email: 'mailto:parasharshourya07@gmail.com',
  // A current student, so affiliated with SRMIST rather than an alumnus of it.
  affiliation: SRMIST,
  memberOf: [
    { '@type': 'Organization', name: 'Google Developer Groups on Campus SRM' },
    { '@type': 'Organization', name: 'HackerRank Campus Crew SRMIST' },
    { '@type': 'Organization', name: 'Quantum Computing Club SRM' },
    { '@type': 'Organization', name: 'IEEE Computer Society SRMIST' },
    { '@type': 'Organization', name: 'SRMIST ACM Student Chapter' },
  ],
  knowsAbout: [
    'TypeScript', 'JavaScript', 'Python', 'React', 'Next.js', 'Node.js', 'NestJS', 'FastAPI',
    'PostgreSQL', 'MongoDB', 'Docker', 'Retrieval-augmented generation', 'System design', 'Web development',
  ],
  knowsLanguage: [
    { '@type': 'Language', name: 'English', sameAs: 'https://www.wikidata.org/wiki/Q1860' },
    { '@type': 'Language', name: 'Hindi', sameAs: 'https://www.wikidata.org/wiki/Q1568' },
  ],
  nationality: { '@type': 'Country', name: 'India', sameAs: 'https://www.wikidata.org/wiki/Q668' },
  address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
  sameAs: Object.values(PROFILES),
  // Live projects, as shown in the Projects section.
  owns: projects
    .filter((p) => p.live)
    .map((p) => ({
      '@type': 'WebApplication',
      name: p.title,
      url: p.live,
      description: p.desc,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      ...(p.github ? { sameAs: p.github } : {}),
      author: { '@id': PERSON_ID },
    })),
  mainEntityOfPage: { '@id': `${SITE}/#webpage` },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE}/`,
  name: NAME,
  alternateName: ['shouryaparashar.in', 'Shourya Parashar portfolio'],
  description: `Portfolio and blog of ${NAME}, full-stack developer`,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
  author: { '@id': PERSON_ID },
};

/** ProfilePage: tells Google the home page is about one person. dateModified is the deploy time. */
export const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE}/#webpage`,
  url: `${SITE}/`,
  name: `${NAME} | Full-Stack Developer`,
  inLanguage: 'en',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
  mainEntity: { '@id': PERSON_ID },
  primaryImageOfPage: { '@id': `${SITE}/#photo` },
  dateCreated: '2024-01-01T00:00:00Z',
  dateModified: new Date().toISOString(),
};

const MONTHS: Record<string, string> = {
  jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
  jul: '07', aug: '08', sep: '09', sept: '09', oct: '10', nov: '11', dec: '12',
};

/** "Sept 5, 2026" -> "2026-09-05"; null for drafts or anything unparseable. */
export function isoDate(display: string): string | null {
  const m = display.match(/^([A-Za-z]+)\.?\s+(\d{1,2}),\s*(\d{4})$/);
  const month = m && MONTHS[m[1].toLowerCase()];
  return m && month ? `${m[3]}-${month}-${m[2].padStart(2, '0')}` : null;
}

/** BlogPosting plus breadcrumbs for one article, credited to the same Person. */
export function articleJsonLd(post: { slug: string; title: string; excerpt: string; date: string; tags: string[] }) {
  const url = `${SITE}/blog/${post.slug}`;
  const published = isoDate(post.date);
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.excerpt,
      url,
      mainEntityOfPage: url,
      image: `${url}/opengraph-image`,
      ...(published ? { datePublished: published, dateModified: published } : {}),
      keywords: post.tags.join(', '),
      inLanguage: 'en',
      author: { '@id': PERSON_ID, '@type': 'Person', name: NAME, url: `${SITE}/` },
      publisher: { '@id': PERSON_ID },
      isPartOf: { '@id': WEBSITE_ID },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: NAME, item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
}
