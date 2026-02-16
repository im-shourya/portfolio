import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import TiltCard from "@/components/TiltCard";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡", note: "Learning" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "⚙️" },
  { name: "Node.js", icon: "🟢", note: "Learning" },
  { name: "MongoDB", icon: "🍃", note: "Learning" },
];

const allSkills = [...skills, ...skills];

const Skills = () => (
  <Layout>
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 sm:mt-20 mb-20"
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center uppercase mb-12 font-display tracking-tight">
        Skills
      </h1>

      <div className="overflow-hidden w-full relative">
        <div className="flex gap-6 animate-scroll-skills w-max py-8 hover:[animation-play-state:paused]">
          {allSkills.map((skill, i) => (
            <TiltCard
              key={`${skill.name}-${i}`}
              className="flex flex-col items-center justify-center text-center min-w-[140px] sm:min-w-[160px] min-h-[180px] sm:min-h-[220px] px-6 py-5 cursor-pointer group"
            >
              <span className="text-5xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                {skill.icon}
              </span>
              <span className="text-base font-medium text-foreground">
                {skill.name}
              </span>
              {skill.note && (
                <span className="text-xs text-primary mt-1">({skill.note})</span>
              )}
            </TiltCard>
          ))}
        </div>
      </div>
    </motion.section>
  </Layout>
);

export default Skills;
