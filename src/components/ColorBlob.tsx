interface ColorBlobProps {
  position?: "top-right" | "bottom-left";
}

const ColorBlob = ({ position = "top-right" }: ColorBlobProps) => {
  const positionClasses =
    position === "top-right" ? "top-0 right-2" : "bottom-2 left-2";

  const gradient =
    position === "top-right"
      ? "radial-gradient(circle, hsl(270 100% 60%), hsl(240 50% 30%))"
      : "radial-gradient(circle, hsl(190 100% 50%), hsl(270 80% 40%))";

  const delay = position === "top-right" ? "0s" : "4s";

  return (
    <div
      className={`fixed ${positionClasses} w-[300px] h-[300px] rounded-full -z-10 opacity-40 blur-[90px] pointer-events-none animate-blob-float`}
      style={{
        background: gradient,
        animationDelay: delay,
      }}
    />
  );
};

export default ColorBlob;
