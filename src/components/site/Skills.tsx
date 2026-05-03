import { skills } from "@/data/projects";

export const Skills = () => (
  <section id="skills" className="px-6 md:px-12 lg:px-20 py-12 md:py-16">
    <div className="max-w-5xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 font-bold">04 · Skills</p>
      <h2 className="text-4xl md:text-6xl font-black leading-[1.1] max-w-3xl">
        Technologies I <span className="text-accent-red">work with.</span>
      </h2>

      <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
        {Object.entries(skills).map(([cat, list], i) => (
          <div key={cat} className="bg-background p-8 md:p-10 hover:bg-card transition group">
            <div className="text-[10px] md:text-xs text-primary font-mono mb-4 opacity-50 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
              {cat}
            </div>
            <h3 className="text-lg md:text-xl font-bold tracking-tight">{cat}</h3>
            <div className="mt-5 md:mt-6 flex flex-wrap gap-2">
              {list.map((s) => (
                <span key={s} className="text-[11px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-border bg-card/60 px-4 py-1.5 hover:border-primary/30 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
