import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false as const,
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.08,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none" as const,
          outModes: { default: "bounce" as const },
        },
        number: {
          value: 60,
          density: { enable: true },
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.25,
              color: "#00F2FF",
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-20 pointer-events-none"
      options={options}
    />
  );
};

export default ParticlesBackground;
