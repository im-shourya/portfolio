import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("v");
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -36px 0px" }
    );

    document.querySelectorAll(".r").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);
};

export default useScrollReveal;
