'use client';

import { m } from 'framer-motion';
import { Mail, Linkedin, Github, PenLine, MapPin, Clock, Briefcase, ArrowUpRight, Calendar, FileText } from 'lucide-react';
import { useOpenCalPopup } from './CalEmbed';
import Reveal from './Reveal';

const socials = [
  { Icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/im-shourya' },
  { Icon: Github, label: 'GitHub', href: 'https://github.com/im-shourya' },
  { Icon: PenLine, label: 'dev.to', href: 'https://dev.to/im-shourya' },
];

const info = [
  { Icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India' },
  { Icon: Briefcase, label: 'Open To', value: 'Internships, freelance & collabs' },
  { Icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
];

export default function Contact() {
  const openCalPopup = useOpenCalPopup();

  return (
    <section id="contact" className="relative py-24 lg:py-36 px-6 lg:px-12 bg-[#151F1E] overflow-hidden">
      <div className="orb w-[700px] h-[520px] bg-[#E8A325]/15 -bottom-40 -right-40" />
      <div className="orb w-[600px] h-[600px] bg-[#2D7A6E]/30 -top-60 -left-40 [animation-delay:-8s]" />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <div className="text-center max-w-[900px] mx-auto">
          <Reveal>
            <div className="glass-dark inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-[#E8A325] animate-ping opacity-70" />
                <span className="relative w-2 h-2 bg-[#E8A325] rounded-full" />
              </span>
              <span className="font-syne text-[10px] font-bold tracking-[2.5px] uppercase text-[#E8A325]">
                Let&apos;s work together
              </span>
            </div>

            <h2 className="font-serif text-[clamp(3.2rem,8vw,6.5rem)] text-[#F4EFE6] leading-[0.95] tracking-tight mb-8">
              Let&apos;s build something <br className="hidden md:block" />
              <em className="italic bg-gradient-to-r from-[#F5C842] via-[#E8A325] to-[#E55B3C] bg-clip-text text-transparent pr-2">
                extraordinary.
              </em>
            </h2>

            <p className="text-[#F4EFE6]/60 text-[16px] lg:text-[18px] max-w-[520px] mx-auto leading-relaxed mb-12 font-light">
              Hiring full-stack or frontend interns? I&apos;m also open to freelance projects and ambitious collaborations.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="mailto:parasharshourya07@gmail.com"
              className="btn btn-amber w-full sm:w-auto normal-case tracking-normal text-[13px]"
            >
              <Mail size={17} />
              parasharshourya07@gmail.com
            </a>
            <button onClick={() => openCalPopup()} className="btn glass-dark w-full sm:w-auto">
              <Calendar size={16} />
              Book a call
            </button>
            <a href="/Shourya.pdf" target="_blank" rel="noopener noreferrer" className="btn glass-dark w-full sm:w-auto">
              <FileText size={16} />
              Download CV
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-20 lg:mt-24">
          <m.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="glass-dark rounded-[26px] p-7"
          >
            <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#F4EFE6]/40 mb-5">Connect</div>
            <div className="flex flex-col gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[#F4EFE6]/85 hover:text-[#E8A325] transition-colors font-syne font-medium text-[13px]"
                >
                  <Icon size={17} />
                  <span className="apple-link">{label}</span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </m.div>

          {info.map((item, idx) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: (idx + 1) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="glass-dark glass-sheen rounded-[26px] p-7 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="relative z-[2]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center mb-6">
                  <item.Icon size={18} className="text-[#E8A325]" />
                </div>
                <div className="font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#F4EFE6]/40 mb-2">{item.label}</div>
                <div className="text-[#F4EFE6] text-[15px] font-light leading-snug">{item.value}</div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
