import Skill from "@/components/Skill";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";
import usePageMeta from "@/hooks/usePageMeta";

const words2 = ["NEXUS", "KanbanFlow", "Task API", "Shourya", "Open Source", "HackerRank", "SRMIST"];

const SkillsPage = () => {
  useScrollReveal();
  usePageMeta({
    title: "Skills",
    description: "Shourya Parashar's tech stack — React, Node.js, Python, MongoDB, TypeScript, Java, Next.js, PostgreSQL, and more.",
  });

  return (
    <div style={{ paddingTop: "84px" }}>
      < Skill/>
      <Ticker words={words2} reverse />
    </div>
  );
};

export default SkillsPage;
