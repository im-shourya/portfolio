import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const s = document.documentElement;
      const scrolled = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;
      setWidth(scrolled);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-0.5 z-[9000]"
      style={{
        width: `${width}%`,
        background: "hsl(var(--lime))",
        boxShadow: "0 0 8px hsl(var(--lime))",
        transition: "width .1s linear",
      }}
    />
  );
};

export default ScrollProgress;
