import Image from 'next/image';
import { MailIcon, GithubIcon, LinkedinIcon, WriteIcon, DocIcon, ArrowDownIcon } from './icons';
import { Container } from './SectionHeader';

const socials = [
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya' },
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya' },
];

export default function Hero() {
  return (
    <section id="home" className="pt-20 sm:pt-28 pb-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[804fr_392fr] gap-5">
          {/* Hello card */}
          <div className="bento bento-amber corner-a p-7 sm:p-[58px] sm:pt-[44px] flex flex-col min-h-[420px] md:min-h-[457px]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="relative w-12 h-12 rounded-full overflow-hidden bg-[#FFC94A] shrink-0">
                  <Image
                    src="/image.webp"
                    alt=""
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-top scale-125 translate-y-1"
                  />
                </span>
                <div>
                  <div className="text-[18px] sm:text-[20px] leading-tight text-ink-strong">Hi, I&apos;m Shourya.</div>
                  <div className="text-[14px] text-ink-faint mt-0.5">Full-stack developer</div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-tile">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <h1 className="mt-10 sm:mt-12 text-[clamp(2.4rem,5vw,3.5rem)] leading-[1.15] font-normal text-ink-strong max-w-[14ch]">
              Fast, tested software that&apos;s honest.
            </h1>
            <p className="mt-6 text-[17px] sm:text-[20px] leading-[1.7] text-ink-strong/60 max-w-[46ch]">
              CSE undergrad at SRMIST building full-stack apps in TypeScript and Python. My last build&apos;s core
              pipeline runs at a 7.87ms P50, and declines when it doesn&apos;t know.
            </p>

            <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
              <a href="mailto:parasharshourya07@gmail.com" className="btn-light">
                <MailIcon size={16} /> Email me
              </a>
              <a href="/Shourya.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <DocIcon size={16} /> Résumé
              </a>
              <a href="#projects" className="btn-ghost">
                <ArrowDownIcon size={14} /> Projects
              </a>
              <div className="flex sm:hidden items-center gap-2 w-full pt-2">
                {socials.map(({ Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-tile">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait card */}
          <div className="bento bento-sun corner-d relative min-h-[360px] md:min-h-0 flex items-end justify-center">
            <span className="absolute top-6 left-6 z-10 inline-flex items-center gap-2 text-[12px] text-[#1A1200] bg-white/45 backdrop-blur px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" aria-hidden />
              Open to internships
            </span>
            <Image
              src="/image.webp"
              alt="Shourya Parashar"
              width={600}
              height={800}
              sizes="(max-width: 768px) 80vw, 392px"
              className="relative w-auto h-[90%] max-h-[440px] object-contain object-bottom"
              preload
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
