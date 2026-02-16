import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { SpotlightCard } from "@/components/SpotlightCard";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal site showcasing projects, blog, and contact.",
    tech: "HTML, CSS, JS, FontAwesome",
    link: "https://github.com/im-shourya/porfoli",
  },
  {
    title: "Task Manager CRUD API",
    description: "Task management with full CRUD operations and RESTful API.",
    tech: "Node.js, Express, MongoDB",
    link: "https://github.com/im-shourya/Task-Management-CRUD-API-",
  },
];

const Projects = () => (
  <Layout>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 mb-20"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center uppercase mb-10 font-display tracking-tight">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <SpotlightCard className="h-full">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 sm:p-8 block group cursor-pointer h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors font-display tracking-tight">
                    {project.title}
                  </h2>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-primary font-semibold uppercase tracking-widest">
                  {project.tech}
                </p>
              </a>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </Layout>
);

export default Projects;
