import Projects from "@/components/Projects";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";

const words3 = ["Full Stack", "System Design", "REST APIs", "Machine Learning", "DSA", "Clean Code", "Ship It Fast"];

const WorkPage = () => {
  useScrollReveal();

  return (
    <div style={{ paddingTop: "84px" }}>
      <Projects />
      <Ticker words={words3} />
    </div>
  );
};

export default WorkPage;
