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

[Features](#features) · [Tech Stack](#tech-stack) · [Sections](#sections) · [Getting Started](#getting-started) · [Architecture](#architecture) · [Performance](#performance) · [Workflow](#workflow) · [Deployment](#deployment)

</div>

---

## Overview

This repository contains the source code for [shouryaparashar.in](https://shouryaparashar.in) — a personal portfolio and professional presence for Shourya Parashar. The site is designed from the ground up with an editorial aesthetic, hand-crafted animations, and a strong focus on performance and SEO.

It is not a template. Every section, component, and interaction has been purpose-built.

---

## Features

**Design & Experience**
- Warm-black page with a crayon palette (blue, pink, yellow, orange, green, mint, cyan), ruled-paper lines and film grain
- About, Journey and Contact sit on cream paper bands (torn, zigzag and scalloped edges) between the dark sections
- Handjet pixel display type for titles, DM Mono for labels, a handwritten face for notes; SF Pro / Google Sans for body text
- Projects as full-width colour slabs that stick and stack on scroll, their folder tabs stepping right like a filing drawer
- Tech stack as colour folders: every tool is a paper file hidden inside that fans out on hover or focus (always shown on touch screens), under crossed logo ribbons
- Contact on a scalloped paper band with sticky notes, pixel stickers and tilted link pills
- A ~1.6-second CSS splash on every full load that's different each time: a random mix of background (4), sweep colour (6), reveal direction (4), letter entrance (4) and greeting (5), over 1,700 combinations, never the same twice in a row; skipped for reduced motion
- Both nav bars sit on their own GPU layers and skip `backdrop-filter` on phones, so they stay smooth in iOS Safari; the splash animates only `transform` and `opacity` for the same reason
- Phones get a bottom tab bar with the same six links as the desktop nav (Projects, About, Stack, Journey, Blog, Contact) that highlights the current section or page and clears the iPhone home indicator; small text links have ~44px tap areas
- iOS-style icons (Framework7 Icons) and brand logos from Simple Icons, drawn once as an SVG sprite (`TechLogoSprite`) and reused with `<use>`
- A footer on every page that links to each section's own route

**Performance**
- Sub-second First Contentful Paint via AVIF/WebP image optimisation, `display: swap` fonts, and CSS-level optimisation
- The first project screenshot (the LCP image on `/projects`) loads eagerly with `fetchPriority="high"`; every other image stays lazy
- 1-year immutable `Cache-Control` on static assets
- Framer Motion `LazyMotion` with tree-shakeable feature bundles to minimise JS payload
- Vercel Analytics injected only in production builds

**SEO & Discoverability**
- One `Person` entity (`lib/seo.ts`) shared site-wide: name, photo, affiliation, memberships, live projects and `sameAs` links to GitHub, LinkedIn, dev.to and other profiles
- `ProfilePage` on the home page, `BlogPosting` and `BreadcrumbList` on each post, all pointing back to the same `Person`
- Profile links marked `rel="me"`; the home page `h1` carries the full name
- Share image for the site is the portrait alone (`public/shourya-portrait.webp`, served as JPEG via `sharp` so LinkedIn shows it); each post gets a generated 1200×630 card with the title and a round avatar (`lib/og.tsx`)
- Section pages use the X `summary` card (no 2:1 crop of the portrait); posts use `summary_large_image`
- Post titles drop the name suffix when it would pass 60 characters
- Canonical URLs, `robots.txt`, a web manifest, and a sitemap generated from routes and published posts, with `lastmod` on posts and the photo listed on `/` and `/about`
- Text on every crayon colour meets WCAG AA contrast (4.5:1)
- Google Search Console verification tag, emitted when `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is set
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
| Icons | Framework7 Icons | iOS-style glyphs, wrapped in `components/icons.tsx` |
| Typography | SF Pro / Google Sans, Handjet, DM Mono, Just Me Again Down Here | Body text in SF on Apple devices and Google Sans elsewhere; display, label and handwritten faces via `next/font` |
| Brand logos | Simple Icons | CC0 logo paths for the stack ribbons and folders |
| Share images | `next/og` + sharp | Article cards rendered at build time; the portrait converted to JPEG |
| Analytics | Vercel Analytics | Privacy-friendly, zero-config usage tracking |
| Hosting | Vercel | Deploys from `main`, preview deploys on pull requests |
| CI | GitHub Actions | `npm ci` + `npm run build` on every PR; releases from `v*` tags |

---

## Sections

The portfolio is composed of 10 distinct sections, each accessible via its own route:

| Section | Route | Description |
|---|---|---|
| Hero | `/` | Name in a hand-drawn box with sticky notes, headline, links and résumé |
| About | `/about` | Taped polaroid, background narrative, current roles and highlights on index cards |
| Projects | `/projects` | Sticky, stacking project slabs with screenshots, metrics and links (see below) |
| Skills | `/skills` | Logo ribbons and tech-stack folders by area whose tool files appear on hover, plus a "learning now" folder |
| Services | `/services` | What I build, as a list of service areas |
| Certifications | `/certifications` | Credentials and recognition as certificate cards |
| Leadership | `/leadership` | Hackathon wins, community roles, and organisational leadership |
| Journey | `/journey` | Leadership, communities and education as a dated timeline |
| Blog | `/blog` | Featured post slab, a list of published posts and drafts pinned as sticky notes; posts live in `data/blogs.tsx` |
| Contact | `/contact` | Contact card with email, Cal.com booking and CV, plus social link pills |

### Featured Projects

| Project | Stack | What it does | Links |
|---|---|---|---|
| **Voice RAG** | Python, FastAPI, BM25+, TypeScript | Speech-to-text → hybrid retrieval → grounded answers over an English/Hindi corpus; 7.87 ms P50 core latency against a 200 ms budget, 241 tests | [Live](https://hhgoa-task2.onrender.com) · [Code](https://github.com/im-shourya/Voice-RAG) · [Case study](https://shouryaparashar.in/blog/building-a-voice-rag-system-under-a-200ms-latency-budget) |
| **Archie** | TypeScript, Voice, Simulation | A system-design board you talk to, with a queueing simulator that shows where the system saturates | [Live](https://archie-rb2x.onrender.com) · [Code](https://github.com/im-shourya/Archie) |
| **RECRUIT.AI** | Next.js, FastAPI, MongoDB, TypeScript | Recruitment pipeline for clubs and small teams: drives, applications, recorded interviews, bulk decisions | [Live](https://recruitai.shouryaparashar.in) · [Code](https://github.com/im-shourya/RECURIT.AI) |
| **Club Events Platform** | Next.js, Express, Supabase, Resend | Magic-link auth, one-click registration, QR attendance, mass mailing and feedback analytics | [Live](https://events.shouryaparashar.in) · [Code](https://github.com/im-shourya/event-managment-system) |
| **StratosAI** | Next.js, NestJS, FastAPI, XGBoost | AI readiness assessment: an adaptive interview feeds five ML models forecasting ROI, risk and budget | [Live](https://stratosai.shouryaparashar.in) · [Code](https://github.com/im-shourya/StratosAI) |
| **KanbanFlow** | React, TypeScript, Tailwind, Vite | Zero-backend Kanban board with drag-and-drop, priority tags and `localStorage` persistence | [Live](https://kanbanflow.shouryaparashar.in) · [Code](https://github.com/im-shourya/KanbanFlow) · [Case study](https://shouryaparashar.in/blog/kanbanflow-zero-backend) |
| **Task Management API** | Node.js, Express, MongoDB | REST CRUD API with validation and error handling, under 200 ms average latency | [Code](https://github.com/im-shourya/Task-Management-CRUD-API) |

Project content lives in `components/projects-data.ts`.

---

## Getting Started

### Prerequisites

- **Node.js** >= 20.9 (required by Next.js 16)
- **npm** (the repo's lockfile is `package-lock.json`)

### Install and Run

```bash
# Clone the repository
git clone https://github.com/im-shourya/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
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
│   ├── sitemap.ts                # Sitemap from routes and published posts
│   ├── manifest.ts               # Web app manifest
│   ├── opengraph-image.tsx       # Share image: the portrait as JPEG (also twitter-image.tsx)
│   ├── not-found.tsx             # Custom 404 page
│   ├── about/                    # Route: /about
│   ├── blog/                     # Route: /blog
│   ├── certifications/           # Route: /certifications
│   ├── contact/                  # Route: /contact
│   ├── journey/                  # Route: /journey
│   ├── leadership/               # Route: /leadership
│   ├── projects/                 # Route: /projects
│   ├── services/                 # Route: /services
│   └── skills/                   # Route: /skills
│
├── components/                   # React components
│   ├── Hero.tsx                  # Name card, headline and links
│   ├── About.tsx                 # Polaroid, narrative, roles and highlights
│   ├── Projects.tsx              # Sticky stacking project slabs
│   ├── projects-data.ts          # Project content and crayon colour map
│   ├── TechStack.tsx             # Logo ribbons and tech-stack folders
│   ├── TechLogo.tsx              # Brand logo and the SVG sprite it draws from
│   ├── Experience.tsx            # Journey timeline
│   ├── Services.tsx              # Service areas list
│   ├── BlogList.tsx              # Blog index: featured slab, post list, draft notes
│   ├── Contact.tsx               # Paper band, contact card and link pills
│   ├── Certifications.tsx        # Certificate cards
│   ├── Leadership.tsx            # Awards and community roles
│   ├── Freelance.tsx             # Freelance offers as tickets
│   ├── Header.tsx                # Site navigation
│   ├── Footer.tsx                # Site footer with links to every page
│   ├── Preloader.tsx             # Splash and the script that picks its variant per load
│   ├── SectionHeader.tsx         # Section heading and page-width container
│   ├── icons.tsx                 # Icon set (Framework7 Icons wrappers)
│   ├── ScrollAnimation.tsx       # Scroll-triggered animation wrapper
│   ├── Reveal.tsx                # Fade-up reveal on scroll
│   ├── CalEmbed.tsx              # Cal.com scheduling widget
│   ├── MotionProvider.tsx        # Framer Motion LazyMotion provider
│   ├── theme-provider.tsx        # Theme context
│   └── ui/                      # Primitive UI components
│
├── hooks/                        # Custom React hooks
├── lib/                          # Utilities, SEO structured data (seo.ts) and share images (og.tsx)
├── types/                        # TypeScript type definitions (incl. framework7-icons)
├── public/                       # Static assets (images, favicons, projects/ screenshots)
├── media/                        # Source media files
│
├── next.config.mjs               # Next.js configuration
├── .github/workflows/            # ci.yml (build on PRs) and release.yml (GitHub release on v* tags)
├── vercel.json                   # Vercel headers and caching rules
├── postcss.config.mjs            # PostCSS pipeline
├── tsconfig.json                 # TypeScript compiler options
├── components.json               # UI component configuration
└── package.json                  # Dependencies and scripts
```

---

## Performance

Lighthouse on the live site (October 2026):

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Mobile | 77–96 (varies by run) | 100 | 100 | 100 |
| Desktop | 99 | 100 | 100 | 100 |

Mobile performance swings between runs: it's simulated from one real page load, and the observed paint time on that load ranges from about 0.5 s to 2.6 s. Run it a few times, and against the deployed site rather than `localhost`, where every script lands before the first paint and inflates the simulated LCP.

| Technique | Implementation |
|---|---|
| Image Optimisation | AVIF with WebP fallback via Next.js `<Image>`, responsive `srcSet` across 6 breakpoints (640–1920px) |
| LCP Image | `loading="eager"` and `fetchPriority="high"` on the first project screenshot only |
| Font Loading | System SF Pro needs no download; Google Sans, Handjet, DM Mono and the handwritten face are self-hosted via `next/font` with `display: swap` |
| HTML Size | Brand logos come from one SVG sprite, so their paths aren't repeated in the HTML and the RSC payload |
| Compositor-only Motion | The splash and the nav bars animate only `transform`/`opacity`, which Safari keeps off the main thread |
| Asset Caching | 1-year immutable `Cache-Control` headers on JS, CSS, images, and fonts via `vercel.json` |
| CSS Reduction | `optimizeCss: true` in Next.js experimental config for smaller CSS payloads |
| Animation Budget | Framer Motion `LazyMotion` with `domAnimation` feature bundle — only loads what is used |
| Analytics | Vercel Analytics conditionally rendered via `process.env.NODE_ENV === 'production'` |

---

## Workflow

- `main` is protected: every change goes through a pull request (admins included), and force-pushes and branch deletion are blocked.
- Work on a `fix/…`, `feat/…`, `docs/…` or `ci/…` branch and open a PR against `main`.
- **CI** (`.github/workflows/ci.yml`) runs `npm ci` and `npm run build` on every PR and push to `main`.
- **Releases** (`.github/workflows/release.yml`): pushing a `v*` tag creates a GitHub release with notes from the commits since the previous tag.

```bash
git tag v1.1.0
git push origin v1.1.0
```

---

## Deployment

The site is deployed to [Vercel](https://vercel.com/) on every merge to `main`, and each pull request gets a preview deploy.

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
| LinkedIn | [linkedin.com/in/im-shourya](https://www.linkedin.com/in/im-shourya) |
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
