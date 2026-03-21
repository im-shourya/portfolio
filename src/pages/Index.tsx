import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";
import usePageMeta from "@/hooks/usePageMeta";

const words1 = ["React", "Node.js", "MongoDB", "TypeScript", "Python", "Next.js", "Java", "C++", "Docker", "Supabase", "Express", "PostgreSQL"];

const Index = () => {
  useScrollReveal();
  usePageMeta({
    title: "Shourya Parashar",
    description: "Full Stack Developer, Founder & CSE student at SRMIST. Building NEXUS and PharmaGo. MERN · Python · Next.js · System Design.",
  });

  return (
    <>
      <Loader />
      <Hero />
      <Ticker words={words1} />
    </>
  );
};

export default Index;
