import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "skills", "projects", "experience", "contact"];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sectionElements = sections.map((id) => document.getElementById(id));
      let current = "home";
      sectionElements.forEach((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) current = el.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setMobileOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-lg" : "py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("home"); }}
            className="relative group flex items-center gap-2"
            data-testid="nav-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
              <span className="font-mono font-bold text-primary text-sm tracking-tight">DA</span>
            </div>
            <span className="hidden sm:block font-semibold text-sm text-foreground/80 group-hover:text-foreground transition-colors">
              Daniel Adel
            </span>
          </a>

          {/* Desktop Nav pill */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-1 bg-card/70 backdrop-blur-xl border border-white/8 rounded-full px-2 py-1.5 shadow-xl">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(section); }}
                    className="relative px-4 py-1.5 rounded-full capitalize font-mono text-xs tracking-widest transition-colors block"
                    data-testid={`nav-${section}`}
                  >
                    {activeSection === section && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-primary/15 rounded-full border border-primary/25"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors ${
                      activeSection === section ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}>
                      {section}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:danieladel217@gmail.com"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-[0_0_16px_rgba(0,210,211,0.25)] hover:shadow-[0_0_24px_rgba(0,210,211,0.4)]"
              data-testid="nav-hire-me"
            >
              Hire Me
            </a>
            <button
              className="md:hidden w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              data-testid="nav-mobile-toggle"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-4 right-4 z-40 bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <ul className="py-2">
              {sections.map((section, i) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={`#${section}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(section); }}
                    className={`flex items-center gap-3 px-5 py-3 capitalize font-mono text-sm tracking-wider transition-colors ${
                      activeSection === section ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {activeSection === section && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                    {section}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
