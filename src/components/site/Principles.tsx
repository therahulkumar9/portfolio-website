const principles = [
  { t: "Ship fast, iterate faster", d: "Indie velocity, production polish. Get it in front of real users, then sharpen based on what they actually do." },
  { t: "Performance matters", d: "Lean code, fast loads, smooth interactions. Respect the user's device, data and time — every millisecond counts." },
  { t: "Build for real people", d: "Solve a real human problem. Honest copy, fair pricing, no dark patterns — ever." },
  { t: "Quality over quantity", d: "Two great products beat ten mediocre ones. I'd rather ship less and keep it sharp." },
  { t: "Own the full stack", d: "Design, frontend, backend, infra, marketing, support. End-to-end ownership = end-to-end accountability." },
  { t: "Listen, then build", d: "Reviews and emails aren't noise — they're the roadmap. Every message gets read. Every reply matters." },
];

export const Principles = () => (
  <section id="principles" className="px-6 py-28 border-t border-border">
    <div className="max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">05 · Principles</p>
      <h2 className="text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
        Built on a few <span className="text-accent-red">non-negotiables.</span>
      </h2>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
        {principles.map((p, i) => (
          <div key={p.t} className="bg-background p-8 hover:bg-card transition">
            <div className="text-sm text-primary font-mono mb-4">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="text-xl font-bold">{p.t}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
