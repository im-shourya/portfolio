import { useEffect, useRef, useState } from "react";

const isTouchDevice = () =>
  typeof window !== "undefined" &&
  (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window);

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (isTouchDevice()) {
      setIsTouch(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    const onDown = () => document.body.classList.add("clicking");
    const onUp = () => document.body.classList.remove("clicking");

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    let raf: number;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // hover targets
    const addHover = () => {
      document.querySelectorAll("a,button,.sk,.exp-row,.cl,.nd").forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
      });
    };
    const t = setTimeout(addHover, 3000);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div id="c" className="fixed pointer-events-none z-[8500]" style={{ mixBlendMode: "difference" }}>
      <div
        ref={dotRef}
        id="c-dot"
        className="absolute w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "hsl(var(--lime))",
          transition: "width .2s ease, height .2s ease, border-radius .2s ease",
        }}
      />
      <div
        ref={ringRef}
        id="c-ring"
        className="absolute w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          border: "1px solid rgba(200,240,32,.3)",
          transition: "width .45s var(--ease-out), height .45s var(--ease-out), opacity .3s ease, border-color .3s ease",
        }}
      />
    </div>
  );
};

export default CustomCursor;
