export type CrayonColor = 'blue' | 'paper' | 'yellow' | 'pink' | 'orange' | 'mint' | 'cyan' | 'green';

/** Background and text pair for each crayon colour, as Tailwind classes. */
export const crayon: Record<CrayonColor, { bg: string; text: string; onDark: boolean }> = {
  blue: { bg: 'bg-c-blue', text: 'text-white', onDark: true },
  green: { bg: 'bg-c-green', text: 'text-c-ink', onDark: false },
  paper: { bg: 'bg-c-paper', text: 'text-c-ink', onDark: false },
  yellow: { bg: 'bg-c-yellow', text: 'text-c-ink', onDark: false },
  pink: { bg: 'bg-c-pink', text: 'text-c-ink', onDark: false },
  orange: { bg: 'bg-c-orange', text: 'text-c-ink', onDark: false },
  mint: { bg: 'bg-c-mint', text: 'text-c-ink', onDark: false },
  cyan: { bg: 'bg-c-cyan', text: 'text-c-ink', onDark: false },
};

/** Anchor id for a project's slab, used by the hero cards. */
export const projectId = (title: string) => `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;

export type Project = {
  label: string;
  title: string;
  tags: string[];
  desc: string;
  metrics: { value: string; label: string }[];
  /** Screenshot of the live site, captured at 1440x900. */
  image?: string;
  /** Crayon colour for the project's slab and hero card. */
  color: CrayonColor;
  live?: string;
  github?: string;
  caseStudy?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    label: 'AI / Retrieval · HH Goa 2026',
    title: 'Voice RAG',
    tags: ['Python', 'FastAPI', 'BM25+', 'TypeScript'],
    desc: 'Speech-to-text → hybrid retrieval → grounded answers over an English/Hindi corpus. Three-layer guardrails decline rather than guess when the corpus has no answer.',
    metrics: [
      { value: '7.87ms', label: 'P50 core latency' },
      { value: '25x', label: 'under 200ms budget' },
      { value: '241', label: 'tests' },
    ],
    image: '/projects/voice-rag.webp',
    color: 'blue',
    live: 'https://hhgoa-task2.onrender.com',
    github: 'https://github.com/im-shourya/Voice-RAG',
    caseStudy: '/blog/building-a-voice-rag-system-under-a-200ms-latency-budget',
    featured: true,
  },
  {
    label: 'System Design / AI',
    title: 'Archie',
    tags: ['TypeScript', 'Voice', 'Simulation'],
    desc: 'A system-design board you talk to. Describe changes out loud, watch the diagram update, and a queueing simulator shows where the system saturates and why.',
    metrics: [
      { value: '<1ms', label: 'local commands' },
      { value: '6', label: 'interview problems' },
    ],
    image: '/projects/archie.webp',
    color: 'paper',
    live: 'https://archie-rb2x.onrender.com',
    github: 'https://github.com/im-shourya/Archie',
  },
  {
    label: 'Full-Stack / Hiring',
    title: 'RECRUIT.AI',
    tags: ['Next.js', 'FastAPI', 'MongoDB', 'TypeScript'],
    desc: 'Recruitment pipeline for clubs and small teams: publish a drive, collect applications and task submissions, run a recorded interview, and decide in one place.',
    metrics: [
      { value: '5 min', label: 'per candidate' },
      { value: '100', label: 'bulk decisions' },
      { value: '3', label: 'team roles' },
    ],
    image: '/projects/recruit-ai.webp',
    color: 'yellow',
    live: 'https://recruitai.shouryaparashar.in',
    github: 'https://github.com/im-shourya/RECURIT.AI',
  },
  {
    label: 'Full-Stack / Events',
    title: 'Club Events Platform',
    tags: ['Next.js', 'Express', 'Supabase', 'Resend'],
    desc: 'Event platform for student clubs with magic-link auth, one-click registration, QR-code attendance, mass mailing and post-event feedback analytics.',
    metrics: [
      { value: 'QR', label: 'check-ins' },
      { value: 'RLS', label: 'secured data' },
    ],
    image: '/projects/club-events.webp',
    color: 'pink',
    live: 'https://events.shouryaparashar.in',
    github: 'https://github.com/im-shourya/event-managment-system',
  },
  {
    label: 'AI / Strategy',
    title: 'StratosAI',
    tags: ['Next.js', 'NestJS', 'FastAPI', 'XGBoost'],
    desc: 'AI strategy and readiness assessment engine. An adaptive chatbot interview feeds five ML models that forecast ROI, risk and budget allocation.',
    metrics: [
      { value: '5', label: 'ML models' },
      { value: '14', label: 'question flow' },
    ],
    image: '/projects/stratosai.webp',
    color: 'orange',
    live: 'https://stratosai.shouryaparashar.in',
    github: 'https://github.com/im-shourya/StratosAI',
  },
  {
    label: 'Web App / TypeScript',
    title: 'KanbanFlow',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    desc: 'Drag-and-drop Kanban board with custom columns, priority tags, live search and themes. Zero backend: everything persists in localStorage.',
    metrics: [
      { value: '0', label: 'backend deps' },
      { value: '∞', label: 'columns' },
    ],
    image: '/projects/kanbanflow.webp',
    color: 'mint',
    live: 'https://kanbanflow.shouryaparashar.in',
    github: 'https://github.com/im-shourya/KanbanFlow',
    caseStudy: '/blog/kanbanflow-zero-backend',
  },
  {
    label: 'Backend / REST API',
    title: 'Task Management API',
    tags: ['Node.js', 'Express', 'MongoDB'],
    desc: 'RESTful CRUD API with validation, robust error handling and concurrent session support.',
    metrics: [
      { value: '<200ms', label: 'avg latency' },
      { value: '50+', label: 'req / min' },
    ],
    color: 'cyan',
    github: 'https://github.com/im-shourya/Task-Management-CRUD-API',
  },
];
