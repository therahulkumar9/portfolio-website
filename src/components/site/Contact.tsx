import { ArrowUpRight } from "lucide-react";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.486h2.039L6.486 3.24H4.298l13.31 17.398z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const Contact = () => (
  <section id="contact" className="px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t border-border bg-background">
    <div className="max-w-5xl mx-auto text-center">
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 font-bold">Let's talk</p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">

        Got an idea?<br />
        Drop me a <span className="text-accent-red">note.</span>
      </h2>
      <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-sm md:text-base leading-relaxed">
        Freelance, collabs, product feedback — I read every email and reply
        personally. No autoresponders, no funnels.
      </p>
      
      <div className="mt-12 flex flex-col items-center gap-8">
        <a
          href="mailto:therahulkumar.dev@gmail.com"
          className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 md:px-8 py-4 md:py-4.5 text-base md:text-lg font-bold glow-red hover:scale-[1.02] transition duration-300"
        >
          therahulkumar.dev@gmail.com
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          <a 
            href="https://twitter.com/therahulkumar9" 
            target="_blank" 
            rel="noopener" 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/60 text-muted-foreground hover:bg-card hover:text-foreground hover:border-primary/30 transition-all duration-300 group shadow-lg"
          >
            <XIcon />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">Twitter / X</span>
          </a>
          <a 
            href="https://linkedin.com/in/therahulkumar9" 
            target="_blank" 
            rel="noopener" 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/60 text-muted-foreground hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-500 group shadow-lg"
          >
            <LinkedInIcon />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/therahulkumar9" 
            target="_blank" 
            rel="noopener" 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/60 text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-500 group shadow-lg"
          >
            <GithubIcon />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">GitHub</span>
          </a>
        </div>
      </div>
    </div>

    <footer className="max-w-5xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 text-center sm:text-left">
      <div>© {new Date().getFullYear()} Rahul Kumar — Built in Bihar, India.</div>
      <div className="hidden sm:block">Ship fast · Iterate faster</div>
    </footer>
  </section>
);
