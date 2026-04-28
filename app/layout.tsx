import type { Metadata } from 'next'
import { DM_Serif_Display, Syne, DM_Sans, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import CustomCursor from '@/components/CustomCursor'
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
    'Recurit AI', 'KanbanFlow','Shourya Parashar',
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
        url: '/image.png', // Using the existing image file instead of Shourya_Parashar.jpeg
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
    images: ['/image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
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
    "url": "https://shouryaparashar.in/image.png",
    "contentUrl": "https://shouryaparashar.in/image.png",
    "width": 800,
    "height": 800,
    "caption": "Shourya Parashar — Full Stack Developer",
    "representativeOfPage": true
  },
  "jobTitle": "Full Stack Developer",
  "description": "Full Stack Developer, Founder, and Builder specializing in React, Node.js, Next.js, and TypeScript.",
  "email": "parasharshourya07@gmail.com",
  "knowsAbout": [
    "React", "Node.js", "Next.js", "TypeScript", "Full Stack Development",
    "JavaScript", "MongoDB", "Express.js", "Tailwind CSS", "REST APIs", "Web Development"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "SRM Institute of Science and Technology",
    "url": "https://www.srmist.edu.in"
  },
  "sameAs": [
    "https://github.com/im-shourya",
    "https://www.linkedin.com/in/im-shourya/"
  ],
  "owns": [
    {
      "@type": "WebApplication",
      "name": "Recurit AI",
      "url": "https://recuritai.shouryaparashar.in",
      "description": "AI-powered recruitment platform built by Shourya Parashar",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "author": { "@id": "https://shouryaparashar.in/#person" }
    },
    {
      "@type": "WebApplication",
      "name": "KanbanFlow",
      "url": "https://kanbanflow.shouryaparashar.in",
      "description": "Kanban-based project management tool built by Shourya Parashar",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "Web",
      "author": { "@id": "https://shouryaparashar.in/#person" }
    }
  ]
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

// JSON-LD Structured Data: Organization
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://shouryaparashar.in/#organization",
  "name": "Shourya Parashar",
  "url": "https://shouryaparashar.in/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://shouryaparashar.in/image.png",
    "width": 800,
    "height": 800
  },
  "founder": { "@id": "https://shouryaparashar.in/#person" },
  "mainEntity": { "@id": "https://shouryaparashar.in/#person" },
  "sameAs": [
    "https://github.com/im-shourya",
    "https://www.linkedin.com/in/im-shourya/",
    "https://shouryaparashar.in"
  ]
};

// JSON-LD Structured Data: ProfilePage
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://shouryaparashar.in/#webpage",
  "url": "https://shouryaparashar.in/",
  "name": "Shourya Parashar | Full Stack Developer & Founder",
  "isPartOf": { "@id": "https://shouryaparashar.in/#website" },
  "about": { "@id": "https://shouryaparashar.in/#person" },
  "mainEntity": { "@id": "https://shouryaparashar.in/#person" },
  "primaryImageOfPage": { "@id": "https://shouryaparashar.in/#photo" },
  "dateModified": new Date().toISOString()
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`bg-background ${dmSerif.variable} ${syne.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <head>
        <meta name="theme-color" content="#1B4A44" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
