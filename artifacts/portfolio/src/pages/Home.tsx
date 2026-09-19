import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-8 text-center border-t border-white/5 bg-background">
        <p className="text-muted-foreground font-mono text-sm">
          &copy; {new Date().getFullYear()} Daniel Adel Helmy · Flutter Developer · Cairo, Egypt
        </p>
      </footer>
    </main>
  );
}