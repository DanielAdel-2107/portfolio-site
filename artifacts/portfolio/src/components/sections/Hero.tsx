import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Download, MapPin, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const roles = [
  "Flutter Developer",
  "Mid-Level Flutter Developer",
  "Clean Architecture + MVVM",
  "Real-Time Mobile Systems",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 58);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
    } else {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden px-6 lg:px-24"
    >
      {/* ── Layered background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(0,210,211,0.14),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_-5%_60%,rgba(0,210,211,0.07),transparent)] pointer-events-none" />

      {/* Animated ring decorations */}
      <motion.div
        className="absolute top-1/4 right-16 w-72 h-72 rounded-full border border-primary/10 pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 right-16 w-48 h-48 rounded-full border border-primary/15 pointer-events-none hidden lg:block"
        style={{ top: "calc(25% + 3rem)", right: "calc(4rem + 3rem)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/4 right-[calc(4rem+6rem)] translate-y-[calc(3rem+3rem)] w-3 h-3 rounded-full bg-primary shadow-[0_0_16px_rgba(0,210,211,0.8)] pointer-events-none hidden lg:block" />

      {/* Dot grid */}
      <div className="absolute top-20 right-20 grid grid-cols-8 gap-3 opacity-10 pointer-events-none hidden xl:grid">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-primary"
            animate={{ opacity: [0.15, 1, 0.15] }}
            transition={{ duration: 2.5 + (i % 6) * 0.3, repeat: Infinity, delay: i * 0.06 }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div style={{ y, opacity }} className="max-w-5xl z-10 space-y-6 pt-24 pb-16">

        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-muted-foreground font-mono text-xs tracking-widest"
        >
          <MapPin className="h-3 w-3 text-primary" />
          CAIRO, EGYPT
        </motion.div>

        {/* Name — big and bold */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-[clamp(52px,9vw,96px)] font-bold tracking-tight text-white leading-[1.0]">
            Daniel{" "}
            <em className="text-primary font-serif not-italic">Adel</em>
            <br />
            <span className="text-white/90">Helmy</span>
          </h1>
        </motion.div>

        {/* Typing badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/8 font-mono text-sm text-primary"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
          {displayed}
          <span className="w-px h-4 bg-primary/70 animate-pulse" />
        </motion.div>

        {/* One-liner */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground font-light max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          2+ years · Production-ready apps · Clean Architecture · Real-Time Systems.{" "}
          <span className="text-foreground/80">I take Flutter features from architecture through delivery.</span>
        </motion.p>

        {/* Stats bar */}
        <motion.div
          className="flex flex-wrap gap-x-8 gap-y-4 py-2 border-t border-b border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
            {[
            { v: "2+", l: "Years Exp." },
            { v: "6", l: "Featured Projects" },
            { v: "1", l: "Google Play Release" },
            { v: "4", l: "Freelance Projects" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <span className="text-2xl font-bold text-primary leading-none">{s.v}</span>
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-0.5">{s.l}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-3 pt-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 shadow-[0_0_28px_rgba(0,210,211,0.3)] hover:shadow-[0_0_40px_rgba(0,210,211,0.55)] transition-all"
            asChild
            data-testid="button-view-work"
          >
            <a href="#projects">
              View Work <ChevronRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-white/15 hover:bg-white/5 font-semibold transition-all gap-2"
            asChild
            data-testid="button-download-cv"
          >
            <a href="/Daniel_Adel_Helmy_CV.pdf" download="Daniel_Adel_Helmy_CV.pdf">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>

          <a
            href="tel:+201225084331"
            className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm px-2"
            data-testid="link-phone"
          >
            <Phone className="h-3.5 w-3.5" />
            +20 122 508 4331
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
