import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const Projects = () => (
  <section id="projects" className="px-6 py-28">
    <div className="max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">02 · Portfolio</p>
      <h2 className="text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
        My <span className="text-accent-red">work.</span>
      </h2>
      <p className="mt-6 max-w-xl text-muted-foreground">
        A collection of digital products and software solutions I've built — focused on
        scalability, performance, and user-centric design.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-3xl border border-border bg-card/50 p-8 hover:bg-card hover:border-primary/40 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="overflow-hidden grid place-items-center w-16 h-16 rounded-2xl bg-secondary text-foreground font-black text-xl shadow-lg border border-border/50">
                {p.logo ? (
                  <img src={p.logo} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  p.initials
                )}
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>

            <div className="mt-6">
              <span className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                {p.category}
              </span>
              <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.tagline}</p>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs rounded-full border border-border bg-background/60 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
