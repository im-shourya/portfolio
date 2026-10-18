'use client';

import { ArrowUpRightIcon, BrushIcon, CalendarIcon, ClockIcon, RocketIcon, WrenchIcon } from './icons';
import { useOpenCalPopup } from './CalEmbed';
import SectionHeader, { Container } from './SectionHeader';

const freelanceServices = [
  {
    Icon: RocketIcon,
    color: 'text-[#5EEAD4]',
    title: 'MVP Development',
    description:
      'Full-stack MVPs from concept to launch: Next.js frontend, Node.js or FastAPI backend, database design and hosting.',
    deliverables: ['Responsive Web App', 'REST API', 'Database Setup', 'Deployment'],
    timeline: '2 to 4 weeks',
  },
  {
    Icon: BrushIcon,
    color: 'text-[#FFC94A]',
    title: 'Frontend Engineering',
    description:
      'Polished React and Next.js interfaces with Tailwind CSS. Responsive layouts, smooth motion and performance tuning.',
    deliverables: ['React Components', 'Responsive Design', 'Animations', 'Performance Audit'],
    timeline: '1 to 2 weeks',
  },
  {
    Icon: WrenchIcon,
    color: 'text-[#FF8A6B]',
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
    <section id="freelance" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader
          title="Freelance"
          note="From idea to deployment, I build production-ready products with clean code and modern architecture."
          action={
            <span className="inline-flex items-center gap-2 text-[13px] text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" aria-hidden />
              Available for hire
            </span>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 bento-grid">
          {freelanceServices.map((service) => (
            <div key={service.title} className="bento p-7 sm:p-9 flex flex-col">
              <span
                className={`w-11 h-11 rounded-[10px] bg-white/[0.06] flex items-center justify-center ${service.color}`}
              >
                <service.Icon size={19} />
              </span>
              <h3 className="text-[22px] font-normal leading-tight text-ink-strong mt-5">{service.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted mt-2 flex-1">{service.description}</p>
              <ul className="flex flex-wrap gap-1.5 mt-5">
                {service.deliverables.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-5 mt-6 border-t border-white/[0.08]">
                <span className="inline-flex items-center gap-1.5 text-[13px] text-ink">
                  <ClockIcon size={14} className="text-ink-muted" />
                  {service.timeline}
                </span>
                <button
                  onClick={() => openCalPopup()}
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-ink-strong hover:underline underline-offset-4"
                >
                  Book a call <ArrowUpRightIcon size={11} />
                </button>
              </div>
            </div>
          ))}

          <div className="bento bento-teal md:col-span-3 p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <h3 className="text-[24px] font-normal leading-tight text-ink-strong">Have something in mind?</h3>
              <p className="text-[14px] text-ink-muted mt-1">Free 30-minute discovery call.</p>
            </div>
            <button onClick={() => openCalPopup()} className="btn-light self-start sm:self-auto">
              <CalendarIcon size={15} />
              Schedule a call
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
