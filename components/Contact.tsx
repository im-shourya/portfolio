'use client';

import Image from 'next/image';
import {
  MailIcon, LinkedinIcon, GithubIcon, WriteIcon, LocationIcon, ClockIcon, BriefcaseIcon,
  ArrowUpRightIcon, CalendarIcon, DocIcon,
} from './icons';
import { useOpenCalPopup } from './CalEmbed';
import SectionHeader, { Container } from './SectionHeader';

const socials = [
  { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya' },
  { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/im-shourya' },
  { Icon: WriteIcon, label: 'dev.to', href: 'https://dev.to/im-shourya' },
];

const info = [
  { Icon: LocationIcon, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
  { Icon: BriefcaseIcon, label: 'Open To', value: 'Internships, freelance & collabs' },
  { Icon: ClockIcon, label: 'Response Time', value: 'Within 24 hours' },
];

const stackButton =
  'flex items-center justify-center w-[70px] h-[70px] text-white hover:bg-white/10 transition-colors';

export default function Contact() {
  const openCalPopup = useOpenCalPopup();

  return (
    <section id="contact" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader title="Contact" />
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-5">
          <div className="bento bento-flame corner-d relative p-7 sm:p-[44px] min-h-[420px]">
            <div className="relative z-[2] max-w-[340px]">
              <h3 className="text-[28px] sm:text-[34px] leading-[1.15] font-normal text-white">Contact me</h3>
              <p className="text-[16px] leading-[1.45] text-white/75 mt-3">
                Hiring full-stack or frontend interns? I&apos;m also open to freelance projects and ambitious
                collaborations.
              </p>
              <a
                href="mailto:parasharshourya07@gmail.com"
                className="inline-block text-[15px] text-white underline underline-offset-4 decoration-white/40 hover:decoration-white mt-4 break-all"
              >
                parasharshourya07@gmail.com
              </a>

              {/* Stacked icon buttons, as on the reference's contact card */}
              <div className="mt-7 flex w-fit flex-col rounded-[8px] border border-white/15 bg-white/[0.04] divide-y divide-white/15 overflow-hidden">
                <a href="mailto:parasharshourya07@gmail.com" aria-label="Email me" title="Email me" className={stackButton}>
                  <MailIcon size={24} />
                </a>
                <button type="button" onClick={() => openCalPopup()} aria-label="Book a call" title="Book a call" className={stackButton}>
                  <CalendarIcon size={24} />
                </button>
                <a href="/Shourya.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV" title="Download CV" className={stackButton}>
                  <DocIcon size={24} />
                </a>
              </div>
            </div>
            {/* Fixed size (no `sizes`) so this lazy copy resolves to its own URL, separate from the hero's LCP image. */}
            <Image
              src="/image.webp"
              alt=""
              width={300}
              height={400}
              className="absolute bottom-0 right-0 sm:right-4 h-[62%] sm:h-[88%] w-auto object-contain object-bottom pointer-events-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 bento-grid">
            <div className="bento p-7 sm:p-9">
              <div className="text-[13px] text-ink-muted mb-3">Connect</div>
              <ul className="space-y-1">
                {socials.map(({ Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 py-2 text-[16px] text-ink hover:text-ink-strong transition-colors"
                    >
                      <Icon size={18} className="text-ink-muted" />
                      {label}
                      <ArrowUpRightIcon size={11} className="ml-auto text-ink-faint group-hover:text-ink-strong transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bento p-7 sm:p-9">
              <dl className="space-y-5">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.Icon size={18} className="text-ink-muted mt-0.5" />
                    <div>
                      <dt className="text-[13px] text-ink-muted">{item.label}</dt>
                      <dd className="text-[16px] text-ink-strong">{item.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
