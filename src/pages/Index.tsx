import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import useScrollReveal from "@/hooks/useScrollReveal";

const words1 = ["React", "Node.js", "MongoDB", "TypeScript", "Python", "Next.js", "Java", "C++", "Docker", "Supabase", "Express", "PostgreSQL"];

const Index = () => {
  useScrollReveal();

  return (
    <>
      <Loader />
      <Hero />
      <Ticker words={words1} />
    </>
  );
};

export default Index;
