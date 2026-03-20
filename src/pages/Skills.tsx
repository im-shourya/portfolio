import Skill from "@/components/Skill";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";

const words2 = ["NEXUS", "KanbanFlow", "Task API", "PharmaGo", "Open Source", "HackerRank", "SRMIST"];

const SkillsPage = () => {
  useScrollReveal();

  return (
    <div style={{ paddingTop: "84px" }}>
      < Skill/>
      <Ticker words={words2} reverse />
    </div>
  );
};

export default SkillsPage;
