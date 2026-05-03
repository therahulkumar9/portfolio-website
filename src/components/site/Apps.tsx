import { apps } from "@/data/apps";
import { Star, ExternalLink } from "lucide-react";

export const Apps = () => (
  <section id="apps" className="px-6 py-28">
    <div className="max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">The catalog</p>
      <h2 className="text-5xl md:text-7xl font-black leading-[0.95] max-w-3xl">
        Real apps. <span className="text-muted-foreground">Real people.</span>
      </h2>
      <p className="mt-6 max-w-xl text-muted-foreground">
        Each product is built end-to-end — idea, design, engineering, launch and support.
      </p>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.map((a) => (
          <article
            key={a.name}
            className="group relative rounded-3xl border border-border bg-card/50 p-6 hover:bg-card hover:border-primary/40 transition"
          >
            <div className="flex items-start gap-4">
              <div className={`grid place-items-center w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} text-white font-black text-lg shadow-lg`}>
                {a.initials}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold truncate">{a.name}</h3>
                <p className="text-sm text-muted-foreground truncate">{a.tagline}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  {a.rating} · {a.installs}
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed min-h-[3rem]">
              {a.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground/70">
                {a.category}
              </span>
              <div className="flex gap-2">
                {a.play && (
                  <a
                    href={a.play}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium rounded-full border border-border px-3 py-1.5 hover:bg-secondary transition"
                  >
                    Play <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {a.ios && (
                  <a
                    href={a.ios}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium rounded-full border border-border px-3 py-1.5 hover:bg-secondary transition"
                  >
                    iOS <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
