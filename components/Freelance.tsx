'use client';

import { ArrowUpRightIcon, BrushIcon, CalendarIcon, ClockIcon, RocketIcon, WrenchIcon } from './icons';
import { calIntentProps, useOpenCalPopup } from './CalEmbed';
import { Container } from './SectionHeader';

const freelanceServices = [
  {
    Icon: RocketIcon,
    color: 'bg-c-mint',
    title: 'MVP Development',
    description:
      'Full-stack MVPs from concept to launch: Next.js frontend, Node.js or FastAPI backend, database design and hosting.',
    deliverables: ['Responsive Web App', 'REST API', 'Database Setup', 'Deployment'],
    timeline: '2 to 4 weeks',
  },
  {
    Icon: BrushIcon,
    color: 'bg-c-yellow',
    title: 'Frontend Engineering',
    description:
      'Polished React and Next.js interfaces with Tailwind CSS. Responsive layouts, smooth motion and performance tuning.',
    deliverables: ['React Components', 'Responsive Design', 'Animations', 'Performance Audit'],
    timeline: '1 to 2 weeks',
  },
  {
    Icon: WrenchIcon,
    color: 'bg-c-cyan',
    title: 'Technical Consulting',
    description:
      'Architecture reviews, code audits and performance work on existing projects. Find the bottleneck, then fix it.',
    deliverables: ['Code Review Report', 'Architecture Plan', 'Performance Fixes', 'Best Practices'],
    timeline: '3 to 5 days',
  },
];

export default function Freelance() {
  const openCalPopup = useOpenCalPopup();

  return (
    <section id="freelance" className="defer-render py-16 sm:py-24 scroll-mt-20">
      <Container>
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p data-reveal className="font-hand text-[22px] text-ink">need a hand?</p>
            <h2 data-reveal="title" className="font-display mt-3 text-[clamp(4rem,12vw,8rem)] text-ink-strong">Freelance</h2>
            <p className="mt-4 text-[16px] text-ink-muted max-w-[52ch]">
              From idea to deployment, I build production-ready products with clean code and modern architecture.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start sm:self-auto label-mono !text-[11px] text-ink">
            <span className="w-2 h-2 rounded-full bg-c-green" aria-hidden />
            Available for hire
          </span>
        </header>

        <ul className="mt-14 grid md:grid-cols-3 gap-6">
          {freelanceServices.map((service, i) => (
            <li
              key={service.title}
              data-reveal
              data-spotlight
              style={{ ['--d' as string]: i }}
              className={`ticket lift [--spot:rgba(255,255,255,0.5)] ${service.color} text-c-ink flex flex-col`}>
              <div className="p-7 flex-1 flex flex-col">
                <service.Icon size={26} />
                <h3 className="mt-6 text-[26px] leading-tight font-semibold tracking-tight">{service.title}</h3>
                <p className="text-[15px] leading-relaxed mt-2 opacity-85">{service.description}</p>
                <ul className="mt-5 space-y-1.5 text-[14px]">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-c-ink rotate-45" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ticket-tear" aria-hidden />
              <div className="h-[92px] px-7 flex items-center justify-between gap-4">
                <span className="flex items-center gap-2">
                  <ClockIcon size={16} />
                  <span className="font-display text-[34px] leading-none">{service.timeline}</span>
                </span>
                <button
                  {...calIntentProps}
                  onClick={() => openCalPopup()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-c-ink text-c-paper px-4 py-2.5 text-[13px] hover:bg-c-blue transition-colors"
                >
                  Book a call <ArrowUpRightIcon size={10} />
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-6 text-center">
          <p className="font-hand text-[24px] text-ink-strong">Have something in mind? Free 30-minute discovery call.</p>
          <button {...calIntentProps} onClick={() => openCalPopup()} data-magnetic className="btn-light self-center">
            <CalendarIcon size={15} />
            Schedule a call
          </button>
        </div>
      </Container>
    </section>
  );
}
