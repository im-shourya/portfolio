'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowUpRight, PenLine } from 'lucide-react';

const posts = [
  {
    slug: 'building-recruit-ai',
    title: 'Building RECURIT.AI — How I Built an AI-Powered Recruitment Platform',
    excerpt:
      'A deep dive into the architecture, ML pipeline, and lessons learned building an end-to-end recruitment automation tool with Next.js and Node.js.',
    date: 'Coming Soon',
    readTime: '8 min read',
    tags: ['Next.js', 'Node.js', 'AI'],
    featured: true,
  },
  {
    slug: 'kanbanflow-zero-backend',
    title: 'Zero-Backend Architecture: Building KanbanFlow with Pure Client-Side State',
    excerpt:
      'How I achieved instant persistence with localStorage, drag-and-drop with React DnD, and sub-50ms state updates — all without a backend.',
    date: 'Coming Soon',
    readTime: '6 min read',
    tags: ['React', 'Architecture'],
    featured: false,
  },
  {
    slug: 'rest-api-best-practices',
    title: 'Production-Grade REST APIs: Patterns I Learned Building Task Management API',
    excerpt:
      'Error handling, input validation, response patterns, and performance optimizations for Express.js APIs serving 50+ requests/minute.',
    date: 'Coming Soon',
    readTime: '7 min read',
    tags: ['Node.js', 'Express'],
    featured: false,
  },
  {
    slug: 'lighthouse-95-plus',
    title: 'How I Achieved 95+ Lighthouse Scores on My Portfolio',
    excerpt:
      'Font loading strategies, image optimization, CSS performance, and the small tweaks that moved my scores from 70s to 95+.',
    date: 'Coming Soon',
    readTime: '5 min read',
    tags: ['Performance', 'SEO'],
    featured: false,
  },
  {
    slug: 'organizing-techformers',
    title: 'Organizing TECHFORMERS 1.0: Running a 1,800+ Participant Coding Competition',
    excerpt:
      'Behind the scenes of designing algorithmic problems, managing real-time hackathon support, and the tools we used to run everything smoothly.',
    date: 'Coming Soon',
    readTime: '6 min read',
    tags: ['Community', 'Leadership'],
    featured: false,
  },
];

export default function BlogList() {
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F9F6F0] min-h-screen relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#E8A325]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Navigation & Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row justify-between md:items-end gap-10 mb-20 border-b border-[#143B36]/10 pb-10"
        >
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-syne text-[10px] font-bold tracking-[2px] uppercase text-[#143B36]/50 hover:text-[#E8A325] transition-colors mb-10 group"
            >
              <div className="w-8 h-8 rounded-full border border-[#143B36]/10 flex items-center justify-center group-hover:border-[#E8A325] transition-colors">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              Back to Home
            </Link>
            <h1 className="font-sans text-[clamp(3.5rem,8vw,6rem)] font-extrabold text-[#143B36] leading-[0.95] tracking-tight">
              Notes &amp;<br className="hidden md:block"/> Insights
            </h1>
          </div>
          <p className="text-[16px] text-[#2A3E3B] max-w-[380px] font-medium leading-relaxed pb-2">
            A collection of thoughts on software engineering, UI/UX design, and the things I learn building production-ready applications.
          </p>
        </motion.div>

        {/* Featured Post (Massive Editorial Layout) */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16 lg:mb-24"
          >
            <div className="group relative bg-[#143B36] rounded-[32px] lg:rounded-[48px] p-8 sm:p-12 lg:p-16 overflow-hidden cursor-pointer flex flex-col justify-between min-h-[450px]">
              {/* Background gradient/noise effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B4A44] to-[#143B36] opacity-50 pointer-events-none" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E8A325]/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:bg-[#E8A325]/20 transition-colors duration-700" />

              <div className="relative z-10 flex flex-wrap items-center gap-4 mb-16 lg:mb-24">
                <div className="inline-flex items-center gap-2 bg-[#E8A325] text-[#143B36] font-syne text-[10px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full">
                  <PenLine size={14} />
                  Featured
                </div>
                <div className="flex gap-2">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="font-syne text-[10px] font-bold tracking-[1.5px] uppercase text-[#F9F6F0]/60 border border-[#F9F6F0]/20 px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
                <div>
                  <h2 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#F9F6F0] leading-[1.05] tracking-tight mb-6 max-w-[800px] group-hover:text-[#E8A325] transition-colors duration-500">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[16px] lg:text-[18px] text-[#F9F6F0]/70 leading-relaxed max-w-[650px] font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#F9F6F0] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <ArrowUpRight size={28} className="text-[#143B36] group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {otherPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-[24px] lg:rounded-[32px] p-8 lg:p-10 border border-[#143B36]/[0.04] hover:shadow-[0_20px_40px_rgba(20,59,54,0.04)] hover:-translate-y-1 transition-all duration-500 cursor-pointer group flex flex-col h-full"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-syne text-[9px] font-bold tracking-[1.5px] uppercase text-[#143B36]/60 bg-[#143B36]/5 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-sans text-[1.5rem] lg:text-[1.8rem] font-bold text-[#143B36] leading-[1.1] tracking-tight mb-4 group-hover:text-[#E8A325] transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-[15px] text-[#2A3E3B] leading-relaxed mb-10 font-medium flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[#143B36]/5 mt-auto">
                <div className="flex items-center gap-4 text-[11px] font-bold tracking-[1px] uppercase text-[#143B36]/40 font-syne">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} strokeWidth={2.5} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} strokeWidth={2.5} />
                    {post.readTime}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#143B36]/10 flex items-center justify-center group-hover:bg-[#143B36] group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center mt-20 lg:mt-28"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-[#143B36]/5 rounded-full px-6 py-3 shadow-[0_10px_30px_rgba(20,59,54,0.03)]">
            <span className="w-2 h-2 bg-[#E8A325] rounded-full animate-ping" />
            <span className="font-syne text-[10px] font-bold tracking-[2.5px] uppercase text-[#143B36]/60">
              New articles published weekly
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
