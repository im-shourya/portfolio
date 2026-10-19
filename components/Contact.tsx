'use client';

import Image from 'next/image';
import { siDevdotto, siGithub, type SimpleIcon } from 'simple-icons';
import { MailFillIcon, LinkedinIcon, ArrowUpRightIcon, CalendarIcon, DocIcon } from './icons';
import { useOpenCalPopup } from './CalEmbed';
import { Container } from './SectionHeader';

const EMAIL = 'parasharshourya07@gmail.com';

// Bumaga's social tapes: long tilted pills carrying only an icon, with outlined
// circle stickers between them. Positions are % of a 1650x470 board, so the
// whole cluster scales with its width.
function BrandMark({ icon }: { icon: SimpleIcon }) {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden focusable="false">
      <path d={icon.path} />
    </svg>
  );
}

const pills = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/im-shourya',
    mark: <LinkedinIcon className="w-full h-full" />,
    bg: 'bg-c-blue',
    x: 35.8, y: 29.8, w: 33, r: 19,
  },
  {
    label: 'Email',
    href: `mailto:${EMAIL}`,
    mark: <MailFillIcon className="w-full h-full" />,
    bg: 'bg-c-yellow',
    x: 19.4, y: 71, w: 32.7, r: 22,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/im-shourya',
    mark: <BrandMark icon={siGithub} />,
    bg: 'bg-[#92D14F]',
    x: 55.5, y: 61.7, w: 41, r: -24,
  },
  {
    label: 'dev.to',
    href: 'https://dev.to/im-shourya',
    mark: <BrandMark icon={siDevdotto} />,
    bg: 'bg-c-pink',
    x: 82.6, y: 78.7, w: 33.6, r: 12,
  },
];

const stickers = [
  { x: 4.7, y: 83.6, color: 'var(--c-blue)', shape: 'dot' },
  { x: 24.7, y: 47.9, color: '#92D14F', shape: 'burst' },
  { x: 56, y: 31.5, color: 'var(--c-pink)', shape: 'sparkle' },
  { x: 62.3, y: 83.6, color: 'var(--c-yellow)', shape: 'heart' },
  { x: 79.9, y: 48.5, color: 'var(--c-blue)', shape: 'star' },
] as const;

const stickerPaths: Record<(typeof stickers)[number]['shape'], React.ReactNode> = {
  dot: (
    <>
      <circle cx="20" cy="20" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="6" fill="currentColor" />
    </>
  ),
  burst: (
    <path
      fill="currentColor"
      d="M20 9l2.3 4.4 4.6-1.7-.8 4.9 4.9.9-3.3 3.7 3.3 3.7-4.9.9.8 4.9-4.6-1.7L20 33l-2.3-4.4-4.6 1.7.8-4.9-4.9-.9 3.3-3.7-3.3-3.7 4.9-.9-.8-4.9 4.6 1.7z"
    />
  ),
  sparkle: <path fill="currentColor" d="M20 9c1 6.2 4.8 10 11 11-6.2 1-10 4.8-11 11-1-6.2-4.8-10-11-11 6.2-1 10-4.8 11-11z" />,
  heart: (
    <path
      fill="currentColor"
      d="M20 30s-9-5.4-9-11.6C11 15 13.3 13 16 13c1.8 0 3.2.9 4 2.3.8-1.4 2.2-2.3 4-2.3 2.7 0 5 2 5 5.4C29 24.6 20 30 20 30z"
    />
  ),
  star: <path fill="currentColor" d="M20 10l2.9 6.8 7.4.6-5.6 4.8 1.7 7.2L20 25.6l-6.4 3.8 1.7-7.2-5.6-4.8 7.4-.6z" />,
};

function SocialTapes() {
  return (
    <div className="relative mx-auto mt-20 w-full max-w-[1000px] aspect-[1650/620] sm:aspect-[1650/470] [container-type:inline-size]">
      {stickers.map((s) => (
        <svg
          key={s.shape}
          viewBox="0 0 40 40"
          className="absolute w-[8.8%] -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${s.x}%`, top: `${s.y}%`, color: s.color }}
          aria-hidden
        >
          <circle cx="20" cy="20" r="18.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
          {stickerPaths[s.shape]}
        </svg>
      ))}
      <ul>
        {pills.map((pill) => (
          <li key={pill.label}>
            <a
              href={pill.href}
              target={pill.href.startsWith('mailto') ? undefined : '_blank'}
              rel={pill.href.startsWith('mailto') ? undefined : 'me noopener noreferrer'}
              aria-label={pill.label}
              title={pill.label}
              className={`tape-pill absolute flex items-center justify-center h-[25.5%] min-h-[34px] rounded-full text-c-ink ${pill.bg}`}
              style={{
                left: `${pill.x}%`,
                top: `${pill.y}%`,
                width: `${pill.w}%`,
                ['--r' as string]: `${pill.r}deg`,
              }}
            >
              <span className="block w-[4.6cqw] h-[4.6cqw] min-w-[18px] min-h-[18px]">{pill.mark}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Star({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 3l4.9 11 12 1.2-9 8 2.6 11.8L20 29l-10.5 6 2.6-11.8-9-8 12-1.2z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

function Sparkle({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 2c1.5 10 8 16.5 18 18-10 1.5-16.5 8-18 18-1.5-10-8-16.5-18-18 10-1.5 16.5-8 18-18z" fill="currentColor" />
    </svg>
  );
}

// 7x7 pixel heart, after bumaga's pixel stickers.
const HEART = ['0110110', '1111111', '1111111', '1111111', '0111110', '0011100', '0001000'];
function PixelHeart({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 7 7" className={className} shapeRendering="crispEdges" aria-hidden>
      {HEART.flatMap((row, y) =>
        [...row].map((on, x) => (on === '1' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" /> : null)),
      )}
    </svg>
  );
}

// `as` is h1 on the section's own route, h2 on the home page.
export default function Contact({ as: Heading = 'h2' }: { as?: 'h1' | 'h2' } = {}) {
  const openCalPopup = useOpenCalPopup();

  return (
    <section id="contact" className="mt-16 scroll-mt-20">
      <div className="scallop bg-c-paper text-c-ink">
        <div className="grid-lines relative overflow-hidden">
          {/* Stickers */}
          <Star className="hidden sm:block absolute left-[7%] top-[14%] w-12 text-c-blue wobble" />
          <Sparkle className="hidden sm:block absolute right-[9%] top-[12%] w-10 text-c-pink" />
          <PixelHeart className="hidden sm:block absolute right-[12%] bottom-[30%] w-11 text-c-orange wobble" />
          <Sparkle className="hidden md:block absolute left-[22%] top-[38%] w-6 text-c-yellow" />

          <Container className="relative py-24 sm:py-32 text-center">
            <p className="font-hand text-[22px] sm:text-[26px] leading-snug max-w-[34ch] mx-auto">
              Got a project, a hard problem, or just want to say hi? I read every message.
            </p>
            <Heading className="font-display mt-6 text-[clamp(4rem,13vw,9.5rem)]">
              Let&apos;s work
              <br />
              together?
            </Heading>

            {/* Crayon contact card, with a sticky-note bio pinned to its corner */}
            <div className="relative mx-auto mt-16 max-w-[720px]">
              <div className="note absolute z-[2] -left-2 sm:-left-16 -top-12 sm:-top-14 w-[230px] -rotate-[5deg] bg-c-cyan text-left p-4">
                <span className="tape -top-3 -left-4 -rotate-[30deg] !w-14 !bg-c-yellow/70" aria-hidden />
                <span className="tape -top-3 -right-4 rotate-[30deg] !w-14 !bg-c-pink/60" aria-hidden />
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-full overflow-hidden bg-c-yellow shrink-0">
                    <Image src="/image.webp" alt="" width={72} height={72} className="w-full h-full object-cover object-top scale-125 translate-y-0.5" />
                  </span>
                  <span className="text-[14px] font-semibold">Shourya Parashar</span>
                </div>
                <p className="text-[13px] leading-snug mt-2">
                  Open to internships, freelance and collabs. Chennai, India. Replies within 24 hours.
                </p>
              </div>

              <div className="doodle-box bg-c-yellow border-2 border-c-ink shadow-[8px_10px_0_#191510] px-6 pt-20 pb-12 sm:pt-16 sm:pb-14">
                <p className="font-hand text-[24px]">let&apos;s make something together</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-display block mt-3 text-[clamp(4rem,12vw,7.5rem)] hover:text-c-blue transition-colors"
                >
                  Contact
                </a>
                <a href={`mailto:${EMAIL}`} className="label-mono inline-flex items-center gap-2 mt-4 border-b-2 border-current pb-1 break-all">
                  Drop a line <ArrowUpRightIcon size={11} />
                </a>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => openCalPopup()}
                    className="inline-flex items-center gap-2 rounded-full bg-c-ink text-c-paper px-5 py-3 text-[14px] hover:bg-c-blue transition-colors"
                  >
                    <CalendarIcon size={16} /> Book a call
                  </button>
                  <a
                    href="/Shourya.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-c-ink px-5 py-2.5 text-[14px] hover:bg-c-ink hover:text-c-paper transition-colors"
                  >
                    <DocIcon size={16} /> Résumé
                  </a>
                </div>
              </div>
            </div>

            <SocialTapes />
          </Container>
        </div>
      </div>
    </section>
  );
}
