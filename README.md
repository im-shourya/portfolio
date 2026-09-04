<div align="center">

# shouryaparashar.in

**Personal Portfolio — Shourya Parashar**

Full Stack Developer · Founder · Builder

A performance-first, production-grade portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

<br />

<a href="https://shouryaparashar.in">
  <img src="https://img.shields.io/badge/Live-shouryaparashar.in-1B4A44?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Site" />
</a>

<br />

<img src="https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
<img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />

<br />

[Features](#features) · [Tech Stack](#tech-stack) · [Sections](#sections) · [Getting Started](#getting-started) · [Architecture](#architecture) · [Performance](#performance) · [Deployment](#deployment)

</div>

---

## Overview

This repository contains the source code for [shouryaparashar.in](https://shouryaparashar.in) — a personal portfolio and professional presence for Shourya Parashar. The site is designed from the ground up with an editorial aesthetic, hand-crafted animations, and a strong focus on performance and SEO.

It is not a template. Every section, component, and interaction has been purpose-built.

---

## Features

**Design & Experience**
- Bespoke editorial design with curated typography (DM Serif Display, Syne, DM Sans, Caveat)
- Painterly SVG brush-stroke motifs rendered with `feTurbulence` displacement filters
- Magnetic custom cursor with `mix-blend-mode` on desktop viewports
- Dedicated mobile and desktop layouts per section — not just responsive breakpoints, but entirely distinct compositions
- Horizontal swipe-scroll project cards on mobile with snap scrolling

**Performance**
- Sub-second First Contentful Paint via AVIF/WebP image optimisation, `display: swap` fonts, and CSS-level optimisation
- 1-year immutable `Cache-Control` on all static assets
- Framer Motion `LazyMotion` with tree-shakeable feature bundles to minimise JS payload
- Vercel Analytics injected only in production builds

**SEO & Discoverability**
- Structured JSON-LD markup: `Person`, `WebSite`, `ProfilePage`, and `WebApplication` schemas
- Open Graph and Twitter Card meta for rich social previews
- Canonical URLs, `robots.txt`, and programmatic sitemap generation
- Semantic HTML5 throughout

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js 16 (App Router) | Server-side rendering, routing, image optimisation |
| UI | React 19 | Component architecture |
| Language | TypeScript 5.7 | Type safety and developer experience |
| Styling | Tailwind CSS v4 + tw-animate-css | Utility-first CSS with animation presets |
| Animations | Framer Motion 12 | Layout animations, scroll-triggered reveals, gesture handling |
| Icons | Lucide React | Consistent, tree-shakeable icon system |
| Typography | Google Fonts | DM Serif Display · Syne · DM Sans · Caveat |
| Analytics | Vercel Analytics | Privacy-friendly, zero-config usage tracking |
| Hosting | Vercel | Edge deployment with automatic CI/CD |

---

## Sections

The portfolio is composed of 11 distinct sections, each accessible via its own route:

| Section | Route | Description |
|---|---|---|
| Hero | `/` | Animated landing with portrait, brush-stroke SVGs, and key statistics |
| About | `/about` | Background narrative and personal highlights |
| Experience | `/experience` | Professional roles and work history |
| Projects | `/projects` | Showcase of production-ready applications (see below) |
| Skills | `/skills` | Full tech-stack breakdown with "Currently Exploring" tracker |
| Services | `/services` | Freelance and consulting offerings |
| Certifications | `/certifications` | Verified credentials and professional badges |
| Leadership | `/leadership` | Hackathon wins, community roles, and organisational leadership |
| Journey | `/journey` | Education and milestone timeline |
| Blog | `/blog` | Technical articles sourced from dev.to and Medium |
| Contact | `/contact` | Contact form with integrated Cal.com scheduling |

### Featured Projects

| Project | Stack | Impact |
|---|---|---|
| **RecruitAI** | Next.js, Node.js, RESTful APIs, ML | AI-powered recruitment — 60–70% reduction in manual screening; ML-based resume matching across 100+ resumes |
| **KanbanFlow** | React, TypeScript, Tailwind CSS, Vite | Zero-backend Kanban board with drag-and-drop and `localStorage` persistence |
| **Task Management API** | Node.js, Express.js, MongoDB | Production REST API handling 50+ req/min with sub-200ms response latency |
| **Personal Portfolio** | Next.js, TypeScript, Vercel | 95+ Lighthouse score, sub-second load times, automated deployment |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** (recommended) or npm

### Install and Run

```bash
# Clone the repository
git clone https://github.com/im-shourya/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The site will be available at `http://localhost:3000`.

### Production Build

```bash
pnpm build
pnpm start
```

### Linting

```bash
pnpm lint
```

---

## Architecture

```
portfolio/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout: fonts, metadata, JSON-LD, analytics
│   ├── page.tsx                  # Home page composition
│   ├── globals.css               # Global styles and design tokens
│   ├── robots.ts                 # Programmatic robots.txt
│   ├── not-found.tsx             # Custom 404 page
│   ├── about/                    # Route: /about
│   ├── blog/                     # Route: /blog
│   ├── certifications/           # Route: /certifications
│   ├── contact/                  # Route: /contact
│   ├── experience/               # Route: /experience
│   ├── journey/                  # Route: /journey
│   ├── leadership/               # Route: /leadership
│   ├── projects/                 # Route: /projects
│   ├── services/                 # Route: /services
│   └── skills/                   # Route: /skills
│
├── components/                   # React components
│   ├── Hero.tsx                  # Landing section with portrait and brush strokes
│   ├── About.tsx                 # About narrative
│   ├── Projects.tsx              # Project cards with hover/tap overlays
│   ├── TechStack.tsx             # Skills grid with category breakdown
│   ├── Experience.tsx            # Work experience timeline
│   ├── Services.tsx              # Freelance offerings
│   ├── BlogList.tsx              # Blog article cards
│   ├── Contact.tsx               # Contact form
│   ├── Certifications.tsx        # Certification display
│   ├── Leadership.tsx            # Awards and community roles
│   ├── Freelance.tsx             # Freelance CTA section
│   ├── Header.tsx                # Site navigation
│   ├── Footer.tsx                # Site footer
│   ├── CustomCursor.tsx          # Magnetic cursor (desktop only)
│   ├── ScrollAnimation.tsx       # Scroll-triggered animation wrapper
│   ├── CalEmbed.tsx              # Cal.com scheduling widget
│   ├── MotionProvider.tsx        # Framer Motion LazyMotion provider
│   ├── theme-provider.tsx        # Theme context
│   └── ui/                      # Primitive UI components
│
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── types/                        # TypeScript type definitions
├── public/                       # Static assets (images, icons, favicons)
├── media/                        # Source media files
│
├── next.config.mjs               # Next.js configuration
├── vercel.json                   # Vercel headers and caching rules
├── postcss.config.mjs            # PostCSS pipeline
├── tsconfig.json                 # TypeScript compiler options
├── components.json               # UI component configuration
└── package.json                  # Dependencies and scripts
```

---

## Performance

The site is engineered for a **95+ Lighthouse score** across all categories. Key optimisation strategies:

| Technique | Implementation |
|---|---|
| Image Optimisation | AVIF with WebP fallback via Next.js `<Image>`, responsive `srcSet` across 6 breakpoints (640–1920px) |
| Font Loading | `display: swap` on all four Google Fonts families to eliminate Flash of Invisible Text |
| Asset Caching | 1-year immutable `Cache-Control` headers on JS, CSS, images, and fonts via `vercel.json` |
| CSS Reduction | `optimizeCss: true` in Next.js experimental config for smaller CSS payloads |
| Animation Budget | Framer Motion `LazyMotion` with `domAnimation` feature bundle — only loads what is used |
| Analytics | Vercel Analytics conditionally rendered via `process.env.NODE_ENV === 'production'` |
| Priority Hints | `fetchPriority="high"` and `priority` on hero images to optimise LCP |

---

## Deployment

The site is continuously deployed to [Vercel](https://vercel.com/) on every push to `main`.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/im-shourya/portfolio)

### Manual Deploy via CLI

```bash
npm i -g vercel
vercel
```

---

## Connect

| Platform | Link |
|---|---|
| Website | [shouryaparashar.in](https://shouryaparashar.in) |
| LinkedIn | [linkedin.com/in/im-shourya](https://www.linkedin.com/in/im-shourya/) |
| GitHub | [github.com/im-shourya](https://github.com/im-shourya) |
| X (Twitter) | [@im_SParashar](https://x.com/im_SParashar/) |
| Dev.to | [dev.to/im-shourya](https://dev.to/im-shourya) |
| Medium | [medium.com/@im-shourya](https://medium.com/@im-shourya) |
| Instagram | [@imshourya.in](https://www.instagram.com/imshourya.in) |
| Email | [parasharshourya07@gmail.com](mailto:parasharshourya07@gmail.com) |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built by [Shourya Parashar](https://shouryaparashar.in)**

</div>
