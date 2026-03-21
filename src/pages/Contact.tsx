import Contact from "@/components/Contact";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";
import usePageMeta from "@/hooks/usePageMeta";

const words3 = ["Full Stack", "System Design", "REST APIs", "Machine Learning", "DSA", "Clean Code", "Ship It Fast"];

const WorkPage = () => {
  useScrollReveal();
  usePageMeta({
    title: "Contact",
    description: "Get in touch with Shourya Parashar — open to internships, collaborations, and interesting projects.",
  });

  return (
    <div style={{ paddingTop: "84px" }}>
      <Contact />
    </div>
  );
};

export default WorkPage;
