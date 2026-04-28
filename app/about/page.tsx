'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  const journey = [
    {
      year: '2020',
      title: 'Started Learning Web Development',
      description: 'Began my journey with HTML, CSS, and JavaScript. Completed several online courses and built my first projects.'
    },
    {
      year: '2021',
      title: 'Full-Stack Development',
      description: 'Mastered React and Node.js. Started building full-stack applications and understanding database design.'
    },
    {
      year: '2022',
      title: 'Professional Development',
      description: 'Worked on real-world projects, collaborated with teams, and learned best practices in software engineering.'
    },
    {
      year: '2023',
      title: 'Advanced Technologies',
      description: 'Explored TypeScript, Next.js, and modern DevOps practices. Improved performance and scalability skills.'
    },
    {
      year: '2024',
      title: 'Current Focus',
      description: 'Building production-grade applications, mentoring junior developers, and creating open-source contributions.'
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
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
            className="text-center mb-12"
          >
            <h1 className="font-serif text-6xl sm:text-7xl font-bold text-foreground mb-6 text-balance">
              My Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm Shourya, a full-stack developer passionate about creating beautiful and functional web applications that solve real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a full-stack developer with a passion for creating elegant solutions to complex problems. With expertise in React, Node.js, and modern web technologies, I build applications that are not only functional but also delightful to use.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              My journey in web development started with curiosity and has evolved into a dedicated career. I&apos;ve worked on various projects ranging from startup MVPs to enterprise applications, always focusing on clean code, performance, and user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community through blogs and mentoring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex gap-8 md:gap-12"
              >
                {/* Timeline line and dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white font-bold text-lg shadow-lg"
                  >
                    {item.year}
                  </motion.div>
                  {index !== journey.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-primary/60 to-primary/20 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow pt-2 pb-8">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="group/card bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <h3 className="font-syne font-semibold text-2xl text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-0 -left-60 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Projects' },
              { number: '30+', label: 'Clients' },
              { number: '4+', label: 'Years' },
              { number: '100%', label: 'Passion' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
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
