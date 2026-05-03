import { projects } from "@/data/projects";
import { ArrowUpRight, Globe } from "lucide-react";

export const Experience = () => (
  <section id="work" className="px-6 py-12 md:py-16 bg-background">
    <div className="max-w-5xl mx-auto">
      {/* Header Section from Image */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 font-bold">The Catalog</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
            Web apps. <span className="text-accent-red text-opacity-90">Real impact.</span>
          </h2>
        </div>
        <div className="md:max-w-sm">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            Each product is built end-to-end — from architecture and design to full-stack engineering and scaling. Tap any card to explore.
          </p>
        </div>
      </div>

      {/* Grid Section from Image */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-3xl md:rounded-[2rem] border border-border/50 bg-card/30 p-6 md:p-8 hover:bg-card/60 hover:border-accent-red/30 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute top-6 md:top-8 right-6 md:right-8 text-muted-foreground/30 group-hover:text-accent-red/50 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>

            <div>
              <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                <div className="overflow-hidden grid place-items-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] bg-secondary text-foreground font-black text-lg md:text-xl shadow-xl shadow-black/20 border border-border/50">
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    p.initials
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{p.name}</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-medium">{p.tagline}</p>
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6 md:mb-8 line-clamp-3">
                {p.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest rounded-full border border-border bg-background/50 px-3 md:px-4 py-2 hover:bg-secondary transition-colors">
                  <Globe className="w-3 h-3" />
                  Visit Site
                </div>
              </div>
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-muted-foreground/40">
                {p.category}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
