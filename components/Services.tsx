import { CodeIcon, DataIcon, DesktopIcon, RocketIcon, SparklesIcon, StackIcon } from './icons';
import { Container } from './SectionHeader';

const services = [
  {
    Icon: DesktopIcon,
    color: 'bg-c-mint',
    title: 'Frontend Development',
    text: 'Responsive, accessible interfaces in React, Next.js and Tailwind CSS, tuned for fast loads and smooth motion.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    Icon: StackIcon,
    color: 'bg-c-yellow',
    title: 'Backend Engineering',
    text: 'APIs in Node.js, Express, NestJS and FastAPI with clear contracts, validation and sub-200ms responses.',
    tags: ['Node.js', 'NestJS', 'FastAPI'],
  },
  {
    Icon: SparklesIcon,
    color: 'bg-c-pink',
    title: 'AI & Retrieval',
    text: 'Grounded AI features: hybrid retrieval, guardrails that refuse rather than guess, and latency you can measure.',
    tags: ['RAG', 'Python', 'ML'],
  },
  {
    Icon: DataIcon,
    color: 'bg-c-cyan',
    title: 'Data & Auth',
    text: 'Schemas and queries in PostgreSQL, MongoDB and Supabase, with row-level security and magic-link auth.',
    tags: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    Icon: RocketIcon,
    color: 'bg-c-orange',
    title: 'Deployment & Tooling',
    text: 'Dockerised services shipped to Vercel and Render, with CI that keeps the build green.',
    tags: ['Docker', 'Vercel', 'Git'],
  },
  {
    Icon: CodeIcon,
    color: 'bg-[#92D14F]',
    title: 'Problem Solving',
    text: 'Competitive programming, algorithmic problem design, and mentoring teams at hackathons.',
    tags: ['DSA', 'C++', 'Python'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 scroll-mt-20">
      <Container>
        <header className="relative text-center">
          <span className="inline-block rounded-full bg-[#92D14F] text-c-ink px-4 py-1.5 text-[14px] font-semibold -rotate-3">
            what do I do?
          </span>
          <h2 className="font-display mt-4 text-[clamp(4rem,12vw,8rem)] text-ink-strong">
            What I build
          </h2>
          <p className="mt-5 text-[16px] text-ink-muted max-w-[52ch] mx-auto">
            From the first sketch to production: interface, API, data and deployment, all built to be measured.
          </p>
        </header>

        <ul className="mt-14 grid lg:grid-cols-2 gap-x-16 border-t border-white/[0.09]">
          {services.map((service) => (
            <li
              key={service.title}
              className="group grid grid-cols-[52px_1fr] gap-x-5 py-7 border-b border-white/[0.09]"
            >
              <span
                className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-c-ink ${service.color} transition-transform duration-300 group-hover:-rotate-6`}
              >
                <service.Icon size={24} />
              </span>
              <div>
                <h3 className="text-[24px] sm:text-[28px] leading-tight font-semibold tracking-tight uppercase text-ink-strong">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink-muted mt-2 max-w-[48ch]">{service.text}</p>
                <p className="label-mono !text-[10px] !tracking-[0.14em] text-ink-faint mt-3">
                  {service.tags.join(' · ')}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
