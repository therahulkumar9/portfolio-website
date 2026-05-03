import { ArrowRight } from "lucide-react";

const stats = [
  { v: "2+", l: "Years experience" },
  { v: "15+", l: "Projects shipped" },
  { v: "2", l: "SaaS startups" },
  { v: "20+", l: "Technologies" },
];

export const Hero = () => (
  <section className="relative pt-24 pb-4 px-6 md:px-12 lg:px-20 overflow-hidden text-left">
    {/* Background Glows */}
    <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent-red/5 blur-[120px] rounded-full -translate-y-1/2 -z-10" />
    
    <div className="max-w-5xl mx-auto w-full flex flex-col items-start px-0 mt-4">
      {/* Label Section */}
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 md:mb-10 font-bold">The Founder</p>

      {/* Content Section - Left Aligned Layout */}
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-black tracking-tight mb-8 md:mb-10">
          Building digital <br />
          <span className="text-accent-red">products</span> that matter.
        </h1>
        
        <p className="max-w-2xl text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 md:mb-12">
          I'm a <span className="text-foreground font-semibold">Full Stack Developer</span> specialized in 
          crafting clean, functional web experiences and high-performance SaaS solutions. 
          Currently shipping products for the global market from Bihar, India.
        </p>
        
        <div className="flex flex-wrap justify-start gap-4 mb-16 md:mb-20">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm md:text-base font-bold glow-red hover:scale-[1.02] transition"
          >
            Explore Portfolio
            <span className="grid place-items-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-primary-foreground group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
              <ArrowRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </span>
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 rounded-2xl md:rounded-[2rem] overflow-hidden border border-border/50 w-full">
        {stats.map((s) => (
          <div key={s.l} className="bg-background/40 backdrop-blur-sm p-5 md:p-8 lg:p-10 hover:bg-card/50 transition duration-500 text-left">
            <div className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter text-foreground">{s.v}</div>
            <div className="text-[9px] md:text-[10px] text-muted-foreground mt-2 md:mt-3 font-black uppercase tracking-[0.2em]">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
