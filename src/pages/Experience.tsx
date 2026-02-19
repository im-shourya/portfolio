import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { GraduationCap, Rocket, Code, Laptop, Briefcase } from "lucide-react";

// Improved data structure with specific dates, tags, and action-oriented text
const timeline = [
  {
    id: 1,
    year: "2026",
    title: "Founder & Lead Developer",
    organization: "Team Hypothesis",
    description: "Spearheading the development of PharmaGo, a SaaS platform digitizing pharmacy operations. Leading a cross-functional team to build scalable inventory management and billing systems.",
    tags: ["Next.js", "PostgreSQL", "System Design", "Entrepreneurship"],
    icon: Rocket,
    current: true, // Special highlighting for current role
  },
  {
    id: 2,
    year: "2025",
    title: "Full Stack Developer",
    organization: "Open Source & Freelance",
    description: "Architected full-stack applications using the MERN stack. contributed to community repositories and built high-performance web solutions focused on SEO and accessibility.",
    tags: ["Node.js", "MongoDB", "React", "Docker"],
    icon: Code,
  },
  {
    id: 3,
    year: "2025",
    title: "B.Tech in Computer Science",
    organization: "SRM Institute (SRMIST)",
    description: "Pursuing specialized coursework in Data Structures, Algorithms, and Software Engineering. Active member of technical clubs and hackathons.",
    tags: ["Data Structures", "Algorithms", "Java", "Python"],
    icon: GraduationCap,
  },
  {
    id: 4,
    year: "2020",
    title: "Started Programming",
    organization: "School & Self-Learning", 
    description: "Built a strong foundation with 3 years of academic Java. Simultaneously self-learned advanced Web Development beyond the school's basic HTML/CSS curriculum.",
    tags: ["Java", "HTML/CSS", "Web Development"],
    icon: Laptop,
  },
];

const Experience = () => (
  <Layout>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-24 mb-20 max-w-3xl mx-auto px-4"
    >
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground uppercase font-display tracking-tight">
          Experience
        </h1>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          My journey from writing my first line of code to building scalable startups.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line - stopped short of the bottom to look cleaner */}
        <div className="absolute left-6 top-2 bottom-6 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

        <div className="space-y-16">
          {timeline.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }} // Animate when scrolling into view
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20 sm:pl-24 group"
              >
                {/* Dot / Icon Container */}
                <div 
                  className={`absolute left-1 top-1 w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 flex items-center justify-center z-10 transition-colors duration-300
                    ${item.current 
                      ? "bg-primary border-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)]" 
                      : "bg-background border-muted-foreground/20 text-muted-foreground group-hover:border-primary group-hover:text-primary"
                    }`}
                >
                  <Icon size={18} />
                </div>

                {/* Date Label */}
                <span className={`inline-block px-3 py-1 mb-2 text-xs font-bold rounded-full border 
                  ${item.current 
                    ? "bg-primary/10 text-primary border-primary/20" 
                    : "bg-muted text-muted-foreground border-transparent"
                  }`}>
                  {item.year}
                </span>

                {/* Content Card */}
                <div className="relative">
                  <h2 className="text-xl font-bold text-foreground font-display tracking-tight">
                    {item.title}
                  </h2>
                  <h3 className="text-sm font-semibold text-primary mt-0.5">
                    {item.organization}
                  </h3>
                  
                  <p className="text-sm sm:text-base font-light text-muted-foreground leading-relaxed mt-3 max-w-xl">
                    {item.description}
                  </p>

                  {/* Tech Stack Tags */}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  </Layout>
);

export default Experience;