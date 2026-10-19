import { CodeIcon, DataIcon, DesktopIcon, RocketIcon, SparklesIcon, StackIcon } from './icons';
import SectionHeader, { Container } from './SectionHeader';

const services = [
  {
    Icon: DesktopIcon,
    color: 'text-[#5EEAD4]',
    title: 'Frontend Development',
    text: 'Responsive, accessible interfaces in React, Next.js and Tailwind CSS, tuned for fast loads and smooth motion.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    Icon: StackIcon,
    color: 'text-[#FFC94A]',
    title: 'Backend Engineering',
    text: 'APIs in Node.js, Express, NestJS and FastAPI with clear contracts, validation and sub-200ms responses.',
    tags: ['Node.js', 'NestJS', 'FastAPI'],
  },
  {
    Icon: SparklesIcon,
    color: 'text-[#FF8A6B]',
    title: 'AI & Retrieval',
    text: 'Grounded AI features: hybrid retrieval, guardrails that refuse rather than guess, and latency you can measure.',
    tags: ['RAG', 'Python', 'ML'],
  },
  {
    Icon: DataIcon,
    color: 'text-[#7DD3FC]',
    title: 'Data & Auth',
    text: 'Schemas and queries in PostgreSQL, MongoDB and Supabase, with row-level security and magic-link auth.',
    tags: ['PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    Icon: RocketIcon,
    color: 'text-[#A78BFA]',
    title: 'Deployment & Tooling',
    text: 'Dockerised services shipped to Vercel and Render, with CI that keeps the build green.',
    tags: ['Docker', 'Vercel', 'Git'],
  },
  {
    Icon: CodeIcon,
    color: 'text-[#FDBA74]',
    title: 'Problem Solving',
    text: 'Competitive programming, algorithmic problem design, and mentoring teams at hackathons.',
    tags: ['DSA', 'C++', 'Python'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-8 sm:py-12 scroll-mt-20">
      <Container>
        <SectionHeader
          title="What I build"
          note="From the first sketch to production: interface, API, data and deployment, all built to be measured."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 bento-grid">
          {services.map((service) => (
            <div key={service.title} className="bento p-7 sm:p-9 flex flex-col">
              <span
                className={`w-11 h-11 rounded-[10px] bg-white/[0.06] flex items-center justify-center ${service.color}`}
              >
                <service.Icon size={19} />
              </span>
              <h3 className="text-[22px] font-normal leading-tight text-ink-strong mt-5">{service.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-muted mt-2 flex-1">{service.text}</p>
              <ul className="flex flex-wrap gap-1.5 mt-5">
                {service.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
