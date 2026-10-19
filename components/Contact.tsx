'use client';

import Image from 'next/image';
import { MailIcon, LinkedinIcon, GithubIcon, WriteIcon, ArrowUpRightIcon, CalendarIcon, DocIcon } from './icons';
import { useOpenCalPopup } from './CalEmbed';
import { Container } from './SectionHeader';

const EMAIL = 'parasharshourya07@gmail.com';

// Tilted pill links, like the social tapes at the foot of bumaga.
const pills = [
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya', className: 'bg-c-blue text-white -rotate-[9deg]' },
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya', className: 'bg-[#92D14F] text-c-ink rotate-[6deg]' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya', className: 'bg-c-pink text-c-ink -rotate-[4deg]' },
  { Icon: MailIcon, label: 'Email', href: `mailto:${EMAIL}`, className: 'bg-c-yellow text-c-ink rotate-[8deg]' },
];

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

function Rings({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="20" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="20" cy="20" r="4.5" fill="currentColor" />
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

export default function Contact() {
  const openCalPopup = useOpenCalPopup();

  return (
    <section id="contact" className="mt-16 scroll-mt-20">
      <div className="scallop bg-c-paper text-c-ink">
        <div className="grid-lines relative overflow-hidden">
          {/* Stickers */}
          <Star className="hidden sm:block absolute left-[7%] top-[14%] w-12 text-c-blue wobble" />
          <Sparkle className="hidden sm:block absolute right-[9%] top-[12%] w-10 text-c-pink" />
          <Rings className="hidden sm:block absolute left-[10%] bottom-[22%] w-14 text-[#5FA82E]" />
          <PixelHeart className="hidden sm:block absolute right-[12%] bottom-[30%] w-11 text-c-orange wobble" />
          <Sparkle className="hidden md:block absolute left-[22%] top-[38%] w-6 text-c-yellow" />

          <Container className="relative py-24 sm:py-32 text-center">
            <p className="font-hand text-[22px] sm:text-[26px] leading-snug max-w-[34ch] mx-auto">
              Got a project, a hard problem, or just want to say hi? I read every message.
            </p>
            <h2 className="font-display mt-6 text-[clamp(4rem,13vw,9.5rem)]">
              Let&apos;s work
              <br />
              together?
            </h2>

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

            <ul className="mt-20 flex flex-wrap justify-center items-center gap-x-2 gap-y-6 sm:gap-x-0">
              {pills.map(({ Icon, label, href, className }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className={`flex items-center justify-center gap-3 w-[180px] sm:w-[230px] h-[60px] sm:h-[72px] rounded-full text-[17px] font-semibold shadow-[0_10px_24px_rgba(25,21,16,0.18)] transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0 ${className}`}
                  >
                    <Icon size={22} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </section>
  );
}
