import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";
import usePageMeta from "@/hooks/usePageMeta";

const words4 = ["2020", "Java", "SRMIST", "DSA", "MERN", "PharmaGo", "2026", "Founder", "Full Stack"];

const JourneyPage = () => {
  useScrollReveal();
  usePageMeta({
    title: "Journey",
    description: "From writing first Java in 2020 to founding a startup in 2026 — Shourya Parashar's developer journey.",
  });

  return (
    <div style={{ paddingTop: "84px" }}>
      <Experience />
    </div>
  );
};

export default JourneyPage;
