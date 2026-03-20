import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";

const words4 = ["2020", "Java", "SRMIST", "DSA", "MERN", "PharmaGo", "2026", "Founder", "Full Stack"];

const JourneyPage = () => {
  useScrollReveal();

  return (
    <div style={{ paddingTop: "84px" }}>
      <Experience />
    </div>
  );
};

export default JourneyPage;
