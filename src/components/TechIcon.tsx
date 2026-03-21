import { cn } from "@/lib/utils";

const techColors: Record<string, string> = {
  HTML: "bg-orange-500/15 text-orange-400",
  CSS: "bg-blue-400/15 text-blue-400",
  JS: "bg-yellow-400/15 text-yellow-300",
  "Node.js": "bg-green-500/15 text-green-400",
  Express: "bg-muted text-muted-foreground",
  MongoDB: "bg-green-600/15 text-green-500",
  React: "bg-cyan-400/15 text-cyan-300",
  TypeScript: "bg-blue-500/15 text-blue-400",
  Python: "bg-yellow-500/15 text-yellow-400",
  FontAwesome: "bg-blue-600/15 text-blue-300",
};

const TechIcon = ({ name }: { name: string }) => {
  const colorClass = techColors[name] || "bg-muted text-muted-foreground";
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider",
        colorClass
      )}
    >
      {name}
    </span>
  );
};

export default TechIcon;
