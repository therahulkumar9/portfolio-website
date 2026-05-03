import { ArrowUpRight } from "lucide-react";

export const Nav = () => (
  <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-6 md:px-12 lg:px-20">
    <nav className="w-full max-w-5xl flex items-center justify-between gap-4 rounded-full border border-border bg-card/70 backdrop-blur-xl pl-6 pr-2 py-2 shadow-2xl">
      <a href="#" className="flex items-center gap-2 font-semibold shrink-0">
        <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-red-700 text-primary-foreground font-black">
          R
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
