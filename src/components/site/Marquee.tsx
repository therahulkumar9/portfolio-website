const items = [
  "Full Stack Developer",
  "Built solo, loved worldwide",
  "SaaS Founder",
  // "Next.js · TypeScript · AI",
  "Ship fast, iterate faster",
];

export const Marquee = () => {
  return (
    <div className="overflow-hidden py-3 bg-background/50 backdrop-blur-sm">
      <div className="flex w-max marquee">
        <div className="flex items-center gap-12 px-6 whitespace-nowrap text-2xl md:text-3xl font-medium">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-muted-foreground">
              {t}
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            </span>
          ))}
        </div>
        <div className="flex items-center gap-12 px-6 whitespace-nowrap text-2xl md:text-3xl font-medium" aria-hidden="true">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-muted-foreground">
              {t}
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
