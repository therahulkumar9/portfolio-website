import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowGif(false), 1800);
    return () => window.clearTimeout(timeout);
  }, []);

  const logoSrc = showGif ? "/animated-profile.gif" : "/rahul.jpg";
  const logoAlt = showGif ? "Animated Rahul Kumar logo" : "Rahul Kumar profile photo";

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 md:px-12 lg:px-20">
      <nav className="w-full max-w-5xl flex items-center justify-between gap-4 rounded-full border border-border bg-card/70 backdrop-blur-xl pl-6 pr-2 py-2 shadow-2xl">
        <a href="#" className="flex items-center gap-2 font-semibold shrink-0">
          <span className="relative w-8 h-8 rounded-lg overflow-hidden">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="w-full h-full object-cover"
            />
            {showGif ? <span className="wipe-overlay" /> : null}
          </span>
          <span className="hidden sm:inline">Rahul Kumar</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <li><a href="#work" className="hover:text-foreground transition font-medium">Work</a></li>
          <li><a href="#about" className="hover:text-foreground transition font-medium">About</a></li>
          <li><a href="#skills" className="hover:text-foreground transition font-medium">Skills</a></li>
          <li><a href="#contact" className="hover:text-foreground transition font-medium">Contact</a></li>
        </ul>
        <a
          href="mailto:therahulkumar.dev@gmail.com"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:opacity-90 transition"
        >
          Contact <ArrowUpRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
};
