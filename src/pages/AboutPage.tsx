import About from "@/components/About";
import Skill from "@/components/Skill";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";
import usePageMeta from "@/hooks/usePageMeta";

const words2 = ["NEXUS", "KanbanFlow", "Task API", "PharmaGo", "Open Source", "HackerRank", "SRMIST"];

const AboutPage = () => {
  useScrollReveal();
  usePageMeta({
    title: "About",
    description: "CSE student at SRMIST, Full Stack Developer, and Founder at Team Hypothesis. Building scalable systems since 2020.",
  });

  return (
    <div style={{ paddingTop: "84px" }}>
      <About />
      <Ticker words={words2} reverse />
    </div>
  );
};

export default AboutPage;
