import { useEffect, useRef, useState } from "react";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) {
      setIsTouch(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number;
    let dots: { x: number; y: number; ox: number; oy: number }[] = [];
    let mouseX = 0, mouseY = 0;
    let t = 0;
    let raf: number;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      dots = [];
      const spacing = 38;
      for (let x = 0; x < w + spacing; x += spacing) {
        for (let y = 0; y < h + spacing; y += spacing) {
          dots.push({ x, y, ox: x, oy: y });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
    };
    document.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.006;
      dots.forEach((d) => {
        const dx = mouseX - d.x, dy = mouseY - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - dist / 120);
        d.x += (d.ox + Math.sin(t + d.ox * 0.018) * 3 - d.x) * 0.08 - (dx / dist || 0) * force * 2.5;
        d.y += (d.oy + Math.cos(t + d.oy * 0.018) * 3 - d.y) * 0.08 - (dy / dist || 0) * force * 2.5;
        const proximity = Math.max(0, 1 - dist / 160);
        const r = 1 + proximity * 1.5;
        const alpha = 0.12 + proximity * 0.28;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,240,32,${alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return <div className="absolute inset-0 pointer-events-none z-0" />;

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-35" />;
};

export default HeroCanvas;
