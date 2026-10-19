import Image from 'next/image';
import { MailIcon, GithubIcon, LinkedinIcon, WriteIcon, DocIcon, ArrowDownIcon } from './icons';
import { Container } from './SectionHeader';

const socials = [
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya' },
];

function Cursor({ name, color, className }: { name: string; color: string; className: string }) {
  return (
    <div className={`absolute hidden lg:flex flex-col items-start pointer-events-none ${className}`} aria-hidden>
      <svg width="18" height="18" viewBox="0 0 18 18" className="-mb-0.5 ml-[-2px]" style={{ color }}>
        <path d="M1 1l15 6-6.5 2.2L7 16 1 1z" fill="currentColor" stroke="#191510" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <span className="ml-3 px-2.5 py-1 rounded-full text-[12px] text-c-ink" style={{ background: color }}>
        {name}
      </span>
    </div>
  );
}

function Smiley() {
  return (
    <svg viewBox="0 0 64 64" className="w-16 h-16 wobble" aria-hidden>
      <circle cx="32" cy="32" r="29" fill="var(--c-yellow)" stroke="#191510" strokeWidth="2.5" />
      <rect x="22" y="20" width="5" height="12" rx="2.5" fill="#191510" />
      <rect x="37" y="20" width="5" height="12" rx="2.5" fill="#191510" />
      <circle cx="17" cy="38" r="4.5" fill="#FF8A8A" opacity="0.8" />
      <circle cx="47" cy="38" r="4.5" fill="#FF8A8A" opacity="0.8" />
      <path d="M20 40c6 8 18 8 24 0" fill="none" stroke="#191510" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Soft glows behind the headline and the cards */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[760px] h-[420px] rounded-full bg-c-orange/[0.10] blur-[120px]" />
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1000px] h-[300px] rounded-full bg-c-blue/[0.16] blur-[120px]" />
      </div>

      <Cursor name="recruiter" color="var(--c-mint)" className="left-[9%] top-[30%] float-a" />
      <Cursor name="you" color="var(--c-pink)" className="right-[10%] top-[44%] float-b" />

      <Container className="relative text-center">
        <p className="inline-flex items-center gap-2 text-[13px] text-ink">
          <span className="w-1.5 h-1.5 rounded-full bg-c-green" aria-hidden />
          <span className="text-c-yellow">Open to internships</span>
          <span className="text-ink-faint">—</span> full-stack &amp; frontend
        </p>

        {/* Name, Crayon style: hand note, doodled box, stickies around it */}
        <div className="relative mx-auto mt-8 sm:mt-10 w-fit">
          <p className="font-hand text-[22px] text-ink leading-none">my name is</p>
          <svg viewBox="0 0 80 8" className="w-16 mx-auto mt-0.5 text-ink-muted" aria-hidden>
            <path d="M2 3c20-2 50-2 76 0M10 6.5c18-1.5 40-1.5 60 0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <div className="doodle-box border-2 border-c-orange mt-2 px-6 sm:px-10 pt-4 pb-3">
            <div className="font-display text-[clamp(4.5rem,15vw,9rem)] text-ink-strong">Shourya</div>
          </div>

          <span className="note hidden sm:inline-block absolute -left-24 -top-1 -rotate-[8deg] bg-c-mint label-mono !text-[10px] !tracking-[0.14em] rounded-full">
            Ships things
          </span>
          <span className="note hidden sm:inline-block absolute -right-24 top-2 rotate-[7deg] bg-c-tan label-mono !text-[10px] !tracking-[0.14em] rounded-full">
            Sweats the tests
          </span>
          <span className="note absolute -left-6 sm:-left-16 -bottom-6 -rotate-[4deg] bg-c-yellow font-hand text-[17px]">
            Full-stack dev
          </span>
          <span className="note absolute -right-4 sm:-right-14 -bottom-7 rotate-[5deg] bg-c-mint font-hand text-[17px]">
            Chennai, IN
          </span>

          <span className="hidden md:block absolute -left-44 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full overflow-hidden border-[3px] border-c-orange bg-c-yellow">
            <Image
              src="/image.webp"
              alt="Shourya Parashar"
              width={160}
              height={160}
              className="w-full h-full object-cover object-top scale-125 translate-y-2"
              preload
              loading="eager"
              fetchPriority="high"
            />
          </span>
          <span className="hidden md:block absolute -right-40 top-1/2 -translate-y-1/2">
            <Smiley />
          </span>
        </div>

        <h1 className="mt-14 sm:mt-16 text-[clamp(2.2rem,5vw,4rem)] leading-[1.08] font-semibold tracking-[-0.02em] text-ink-strong">
          Fast, tested software
          <br />
          that&apos;s <span className="font-hand font-normal text-c-yellow text-[1.25em] leading-none">honest.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:parasharshourya07@gmail.com" className="btn-light">
            <MailIcon size={16} /> Email me
          </a>
          <a href="/Shourya.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <DocIcon size={16} /> Résumé
          </a>
          <a href="#projects" className="btn-ghost">
            <ArrowDownIcon size={14} /> Projects
          </a>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {socials.map(({ Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-tile">
              <Icon size={18} />
            </a>
          ))}
        </div>

      </Container>
    </section>
  );
}
