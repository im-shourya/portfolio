import type { Metadata, Viewport } from 'next'
import { Google_Sans, Handjet, DM_Mono, Just_Me_Again_Down_Here } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Motion from '@/components/Motion'
import Preloader, { SPLASH_SCRIPT } from '@/components/Preloader'
import { DESCRIPTION, personJsonLd, websiteJsonLd } from '@/lib/seo'
import './globals.css'

// SF Pro is used where the OS ships it (Apple devices); Google Sans covers everything else.
const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-google-sans",
  display: "swap",
  // Next has no fallback metrics for Google Sans; skip the adjusted fallback and use a plain system stack.
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});

// Crayon accents: pixel display for big titles, mono for labels, a handwritten face for notes.
const handjet = Handjet({
  subsets: ["latin"],
  axes: ["ELGR", "ELSH"],
  variable: "--font-display",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const handwriting = Just_Me_Again_Down_Here({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

// viewport-fit=cover lets the phone tab bar pad itself clear of the home indicator.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#191510',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://shouryaparashar.in'),
  title: 'Shourya Parashar | Full Stack Developer',
  description: DESCRIPTION,
  applicationName: 'Shourya Parashar',
  category: 'technology',
  keywords: [
    'Shourya Parashar', 'im-shourya', 'Full Stack Developer', 'Software Engineer', 'SRMIST',
    'SRM Institute of Science and Technology', 'Next.js', 'TypeScript', 'React', 'Node.js', 'FastAPI', 'Python',
    'Voice RAG', 'RECRUIT.AI', 'KanbanFlow', 'Portfolio', 'Chennai',
  ],
  authors: [{ name: 'Shourya Parashar', url: 'https://shouryaparashar.in' }],
  creator: 'Shourya Parashar',
  publisher: 'Shourya Parashar',
  other: { copyright: '© 2026 Shourya Parashar. All rights reserved.' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Search Console ownership tag; set the token in Vercel to emit it.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  // Share images come from app/opengraph-image.tsx (and each post's own).
  openGraph: {
    type: 'profile',
    firstName: 'Shourya',
    lastName: 'Parashar',
    username: 'im-shourya',
    locale: 'en_US',
    url: 'https://shouryaparashar.in/',
    siteName: 'Shourya Parashar',
    title: 'Shourya Parashar | Full Stack Developer',
    description: DESCRIPTION,
  },
  // summary: the share image is a near-square portrait, which the large card would crop to 2:1.
  twitter: {
    card: 'summary',
    creator: '@im_SParashar',
    site: '@im_SParashar',
    title: 'Shourya Parashar | Full Stack Developer',
    description: DESCRIPTION,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      data-scroll-behavior="smooth"
      // SPLASH_SCRIPT sets the splash variant attributes before React hydrates.
      suppressHydrationWarning
      className={`bg-background ${googleSans.variable} ${handjet.variable} ${dmMono.variable} ${handwriting.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SPLASH_SCRIPT }} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased paper-lines">
        <Preloader />
        <div className="grain" aria-hidden />
        {children}
        <Motion />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
