import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Experience } from "@/components/site/Experience";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Contact } from "@/components/site/Contact";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
    <Nav />
    <Hero />
    <Experience />
    <About />
    <Skills />
    <Contact />
  </main>
);


export default Index;
