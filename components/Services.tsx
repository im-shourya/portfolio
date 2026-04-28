'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, Brain, Database, Rocket, Code2 } from 'lucide-react';

const services = [
  {
    Icon: Monitor,
    color: 'bg-[#1B4A44]',
    iconColor: 'text-white',
    title: 'Frontend Development',
    text: 'Building responsive, performant UIs with React, Next.js, and Tailwind CSS. Pixel-perfect, accessible, fast.',
    tags: 'React, Next.js, Tailwind',
  },
  {
    Icon: Server,
    color: 'bg-[#E8A325]',
    iconColor: 'text-white',
    title: 'Backend Engineering',
    text: 'Designing RESTful APIs with Node.js and Express.js — under 200ms response latency, clean MVC architecture.',
    tags: 'Node.js, Express, MongoDB',
  },
  {
    Icon: Brain,
    color: 'bg-[#E55B3C]',
    iconColor: 'text-white',
    title: 'AI / ML Integration',
    text: 'Building AI-powered features — like ML-based resume screening that reduced manual effort by 60-70%.',
    tags: 'RESTful APIs, AI/ML',
  },
  {
    Icon: Database,
    color: 'bg-[#2D7A6E]',
    iconColor: 'text-white',
    title: 'Database Design',
    text: 'Modeling and querying with MongoDB and Supabase. Optimizing for concurrent sessions and low latency.',
    tags: 'MongoDB, Supabase',
  },
  {
    Icon: Rocket,
    color: 'bg-[#1B4A44]',
    iconColor: 'text-white',
    title: 'Deployment & Tooling',
    text: 'Deploying on Vercel with CI/CD pipelines, achieving 95+ Lighthouse scores and sub-second load times.',
    tags: 'Vercel, Git, Postman',
  },
  {
    Icon: Code2,
    color: 'bg-[#E8A325]',
    iconColor: 'text-white',
    title: 'Technical Problem Solving',
    text: 'Competitive programming, algorithmic problem design, and mentoring teams at hackathons and coding contests.',
    tags: 'DSA, C++, Python',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 px-6 lg:px-16 bg-[#F4EFE6]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header - Binjan style */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="section-label mb-3">What I Build</div>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-[#1B4A44] leading-tight">
              What do I help?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[14px] text-[#4A6360] max-w-[300px] lg:text-right leading-relaxed font-light self-end"
          >
            I help bring ideas to life with clean code and modern technology — from UI to deployment.
          </motion.p>
        </div>

        {/* Service Cards - Left list + Right description like Binjan */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          {/* Left - Service list */}
          <div className="space-y-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/60 transition-all duration-300 cursor-default group"
              >
                <div className={`w-11 h-11 rounded-full ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <service.Icon size={18} className={service.iconColor} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="font-syne text-[13px] font-bold text-[#151F1E]">{service.title}</div>
                  <div className="text-[11px] text-[#4A6360] font-syne tracking-[0.5px]">{service.tags}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Description & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <p className="text-[#4A6360] text-[15px] leading-[1.8] mb-4 font-light">
              I will help you with building scalable solutions and solving your problems. I use modern frameworks and best practices to create digital products that perform beautifully and scale efficiently.
            </p>
            <p className="text-[#4A6360] text-[15px] leading-[1.8] mb-10 font-light">
              From designing responsive UIs to engineering robust APIs, I bring end-to-end capabilities. Every project is built with clean architecture, comprehensive testing, and performance optimization.
            </p>

            {/* Stats - like Binjan's 285+ / 190+ */}
            <div className="flex gap-16">
              <div>
                <div className="font-syne text-[48px] font-extrabold text-[#151F1E] leading-none">
                  4<span className="text-[#E8A325]">+</span>
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[2px] text-[#4A6360] mt-2">
                  Projects Deployed
                </div>
              </div>
              <div>
                <div className="font-syne text-[48px] font-extrabold text-[#151F1E] leading-none">
                  5<span className="text-[#E8A325]">+</span>
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[2px] text-[#4A6360] mt-2">
                  Active Communities
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
