import { Quote } from "lucide-react";

export const About = () => (
  <section id="about" className="px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-background">
    <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
      <div>
        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 font-bold">About the founder</p>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8 md:mb-10">
          Hey, I'm <span className="text-accent-red">Rahul.</span>
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
          <p>
            I'm a full-stack developer and founder of a one-person studio. I'm the developer, 
            designer, and support team — the kind of indie maker who codes the app, 
            draws the icon, and replies to your email at midnight.
          </p>
          <p>
            I focus on web apps that solve real human needs — efficiency, creativity, and 
            automation. Small surface area, sharp execution, zero fluff.
          </p>
        </div>
      </div>

      <div className="relative mt-8 lg:mt-0">
        <div className="rounded-3xl md:rounded-[2rem] border border-border/40 bg-card/20 p-8 md:p-14 relative overflow-hidden group">
          {/* Subtle Glow Effect */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-red/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-accent-red mb-8 md:mb-10 fill-accent-red/10" />
          
          <blockquote className="text-xl md:text-3xl font-bold leading-tight tracking-tight text-foreground mb-10 md:mb-12">
            People trust me because I deliver — and I keep delivering.
          </blockquote>
          
          <div className="w-full h-px bg-border/50 mb-8 md:mb-10" />
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-accent-red/20 shrink-0">
              <img 
                src="/rahul.jpg" 
                alt="Rahul Kumar" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
            </div>
            <div>
              <div className="font-bold text-sm md:text-base text-foreground">Rahul Kumar</div>
              <div className="text-[10px] md:text-xs text-muted-foreground">Founder · Toolghar</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
