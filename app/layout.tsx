import type { Metadata } from 'next'
import { DM_Serif_Display, Syne, DM_Sans, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CustomCursor from '@/components/CustomCursor'
import MotionProvider from '@/components/MotionProvider'
import './globals.css'

const dmSerif = DM_Serif_Display({ 
  subsets: ["latin"], 
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});
const syne = Syne({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});
const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shouryaparashar.in'),
  title: 'Shourya Parashar | Full Stack Developer & Founder',
  description: 'Shourya Parashar is a Full Stack Developer, Founder, and Builder specializing in React, Node.js, Next.js, and TypeScript. Explore projects like Recurit AI and KanbanFlow.',
  keywords: [
    'Shourya Parashar', 'Shaurya Parashar', 'Full Stack Developer', 'Software Engineer', 
    'React Developer', 'Node.js Developer', 'Next.js', 'TypeScript', 'im-shourya', 
    'Recurit AI', 'KanbanFlow',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript',
    'Node.js',
    'SRMIST',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    'shouryaparashar.in',
    'Software Engineer',
    'Web Application Developer',
    'MERN Stack',
    'React Portfolio',
    'Developer India',
    'SRM Institute of Science and Technology',
  ],
  authors: [{ name: 'Shourya Parashar' }],
  creator: 'Shourya Parashar',
  publisher: 'Shourya Parashar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://shouryaparashar.in/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shouryaparashar.in/',
    siteName: 'Shourya Parashar',
    title: 'Shourya Parashar | Full Stack Developer & Founder',
    description: 'Shourya Parashar is a Full Stack Developer, Founder, and Builder specializing in React, Node.js, Next.js, and TypeScript.',
    images: [
      {
        url: '/Shourya_Parashar.jpeg',
        width: 800,
        height: 800,
        alt: 'Shourya Parashar - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shourya Parashar | Full Stack Developer & Founder',
    description: 'Shourya Parashar is a Full Stack Developer, Founder, and Builder specializing in React, Node.js, Next.js, and TypeScript.',
    images: ['/Shourya_Parashar.jpeg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=2', type: 'image/x-icon' },
      { url: '/favicon.png?v=2', type: 'image/png' },
    ],
    apple: '/favicon.png?v=2',
  },
}

// JSON-LD Structured Data: Person
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://shouryaparashar.in/#person",
  "name": "Shourya Parashar",
  "alternateName": "Shaurya Parashar",
  "url": "https://shouryaparashar.in/",
  "image": {
    "@type": "ImageObject",
    "@id": "https://shouryaparashar.in/#photo",
    "url": "https://shouryaparashar.in/Shourya_Parashar.jpeg",
    "contentUrl": "https://shouryaparashar.in/Shourya_Parashar.jpeg",
    "width": 800,
    "height": 800,
    "caption": "Shourya Parashar — Full Stack Developer",
    "representativeOfPage": true
  },
  "jobTitle": "Full Stack Developer",
  "description": "Full Stack Developer, Founder, and Builder specializing in React, Node.js, Next.js, and TypeScript.",
  "email": "parasharshourya07@gmail.com",
  "knowsAbout": [
    { "@type": "Thing", "name": "React", "sameAs": "https://en.wikipedia.org/wiki/React_(JavaScript_library)" },
    { "@type": "Thing", "name": "Node.js", "sameAs": "https://en.wikipedia.org/wiki/Node.js" },
    { "@type": "Thing", "name": "Next.js", "sameAs": "https://en.wikipedia.org/wiki/Next.js" },
    { "@type": "Thing", "name": "TypeScript", "sameAs": "https://en.wikipedia.org/wiki/TypeScript" },
    { "@type": "Thing", "name": "JavaScript", "sameAs": "https://en.wikipedia.org/wiki/JavaScript" },
    { "@type": "Thing", "name": "MongoDB", "sameAs": "https://en.wikipedia.org/wiki/MongoDB" },
    { "@type": "Thing", "name": "Express.js", "sameAs": "https://en.wikipedia.org/wiki/Express.js" },
    { "@type": "Thing", "name": "Tailwind CSS", "sameAs": "https://en.wikipedia.org/wiki/Tailwind_CSS" },
    { "@type": "Thing", "name": "REST APIs", "sameAs": "https://en.wikipedia.org/wiki/REST" },
    { "@type": "Thing", "name": "Web Development", "sameAs": "https://en.wikipedia.org/wiki/Web_development" }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "SRM Institute of Science and Technology",
    "url": "https://www.srmist.edu.in",
    "sameAs": [
      "https://en.wikipedia.org/wiki/SRM_Institute_of_Science_and_Technology",
      "https://www.wikidata.org/wiki/Q1053006"
    ]
  },
  "award": [
    {
      "@type": "Thing",
      "name": "HackerRank Campus Crew — Transformer 1.0 Winner",
      "description": "Won HackerRank Campus Crew Transformer 1.0 hackathon"
    },
    {
      "@type": "Thing",
      "name": "Google Developer Group Kernel Panic — Winner",
      "description": "Won GDG on Campus Kernel Panic event"
    }
  ],
  "sameAs": [
    "https://github.com/im-shourya",
    "https://www.linkedin.com/in/im-shourya/",
    "https://x.com/im_SParashar/",
    "https://dev.to/im-shourya",
    "https://forem.com/im-shourya",
    "https://www.instagram.com/imshourya.in",
    "https://medium.com/@im-shourya"
  ],
  "owns": [
    {
      "@type": "WebApplication",
      "name": "Recurit AI",
      "url": "https://recuritai.shouryaparashar.in",
      "description": "AI-powered recruitment platform built by Shourya Parashar",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "author": { "@id": "https://shouryaparashar.in/#person" },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly"
      }
    },
    {
      "@type": "WebApplication",
      "name": "KanbanFlow",
      "url": "https://kanbanflow.shouryaparashar.in",
      "description": "Kanban-based project management tool built by Shourya Parashar",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "Web",
      "author": { "@id": "https://shouryaparashar.in/#person" },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/OnlineOnly"
      }
    }
  ],
  "birthPlace": {
  "@type": "Country",
  "name": "India",
  "sameAs": "https://www.wikidata.org/wiki/Q668"
},
"nationality": {
  "@type": "Country",
  "name": "India",
  "sameAs": "https://www.wikidata.org/wiki/Q668"
},
"address": {
  "@type": "PostalAddress",
  "addressLocality": "Chennai",
  "addressCountry": "India"
},
"mainEntityOfPage": {
  "@type": "ProfilePage",
  "@id": "https://shouryaparashar.in/#webpage"
},
"knowsLanguage": [
  {
    "@type": "Language",
    "name": "English",
    "sameAs": "https://www.wikidata.org/wiki/Q1860"
  },
  {
    "@type": "Language",
    "name": "Hindi",
    "sameAs": "https://www.wikidata.org/wiki/Q1568"
  }
],
};


// JSON-LD Structured Data: WebSite
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://shouryaparashar.in/#website",
  "url": "https://shouryaparashar.in/",
  "name": "Shourya Parashar",
  "description": "Portfolio of Shourya Parashar, Full Stack Developer and Founder",
  "inLanguage": "en",
  "publisher": { "@id": "https://shouryaparashar.in/#person" },
  "mainEntity": { "@id": "https://shouryaparashar.in/#person" }
};

// JSON-LD Structured Data: ProfilePage
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://shouryaparashar.in/#webpage",
  "url": "https://shouryaparashar.in/",
  "name": "Shourya Parashar | Full Stack Developer & Founder",
  "inLanguage": "en",
  "isPartOf": { "@id": "https://shouryaparashar.in/#website" },
  "about": { "@id": "https://shouryaparashar.in/#person" },
  "mainEntity": { "@id": "https://shouryaparashar.in/#person" },
  "primaryImageOfPage": { "@id": "https://shouryaparashar.in/#photo" },
  "datePublished": "2024-01-01T00:00:00Z",
  "dateModified": new Date().toISOString(),
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Shourya Parashar",
        "item": "https://shouryaparashar.in/"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      data-scroll-behavior="smooth"
      className={`bg-background ${dmSerif.variable} ${syne.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <head>
        <meta name="theme-color" content="#1B4A44" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>
          <CustomCursor />
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </MotionProvider>
      </body>
    </html>
  )
}
