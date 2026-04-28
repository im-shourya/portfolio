'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const allProjects = [
  {
    id: 1,
    title: 'Nexus Athlete App',
    description: 'A comprehensive fitness tracking application for athletes with real-time performance analytics and training management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    category: 'Full Stack',
    gradient: 'from-primary to-primary/60',
    link: '#',
    github: 'https://github.com/im-shourya',
    featured: true
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Modern portfolio showcasing web development projects with smooth animations and interactive components.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
    gradient: 'from-secondary to-secondary/60',
    link: '#',
    github: 'https://github.com/im-shourya',
    featured: true
  },
  {
    id: 3,
    title: 'REQS Platform',
    description: 'Requirements management system for collaborative project planning and team coordination.',
    tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
    category: 'Full Stack',
    gradient: 'from-accent to-accent/60',
    link: '#',
    github: 'https://github.com/im-shourya',
    featured: true
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'Collaborative task management tool with real-time updates and team collaboration features.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    category: 'Frontend',
    gradient: 'from-primary/80 to-secondary/80',
    link: '#',
    github: 'https://github.com/im-shourya'
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with product catalog, shopping cart, and payment integration.',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'Node.js'],
    category: 'Full Stack',
    gradient: 'from-secondary/80 to-accent/80',
    link: '#',
    github: 'https://github.com/im-shourya'
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'Data visualization and analytics dashboard with interactive charts and real-time metrics.',
    tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    category: 'Full Stack',
    gradient: 'from-primary/70 to-accent/70',
    link: '#',
    github: 'https://github.com/im-shourya'
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 -left-40 w-80 h-80 bg-primary/8 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-6xl sm:text-7xl font-bold text-foreground mb-6 text-balance">
              Featured Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Showcasing my work in web development, from concept to production
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg font-syne font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background border border-border text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group cursor-pointer h-full"
              >
                <div className={`relative h-72 rounded-2xl bg-gradient-to-br ${project.gradient} p-8 flex flex-col justify-between mb-4 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300`}>
                  {/* Background blur effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/90 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white font-medium hover:bg-white/30 transition-colors"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/5 transition-colors"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border border-border p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
