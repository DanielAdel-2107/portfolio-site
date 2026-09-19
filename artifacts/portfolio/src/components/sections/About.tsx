import { motion } from "framer-motion";
import { Code2, Layers, Zap, Users, Globe, Award } from "lucide-react";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiSupabase,
  SiGit,
} from "react-icons/si";

const stats = [
  { value: "2+", label: "Years of Experience", icon: Award },
  { value: "6", label: "Featured Projects", icon: Layers },
  { value: "1", label: "Google Play Release", icon: Globe },
  { value: "4", label: "Freelance Projects", icon: Zap },
];

const techStack = [
  { icon: SiFlutter, name: "Flutter", color: "text-sky-400" },
  { icon: SiDart, name: "Dart", color: "text-blue-400" },
  { icon: SiFirebase, name: "Firebase", color: "text-yellow-400" },
  { icon: SiSupabase, name: "Supabase", color: "text-emerald-400" },
  { icon: SiGit, name: "Git", color: "text-orange-400" },
];

const pillars = [
  { icon: Layers, title: "Clean Architecture", desc: "MVVM and SOLID principles for maintainable production code." },
  { icon: Code2, title: "Role-Based Apps", desc: "Authentication, authorization, and separate user, staff, and admin flows." },
  { icon: Zap, title: "Real-Time Systems", desc: "Live chat, notifications, maps, tracking, and backend-driven workflows." },
  { icon: Users, title: "End-to-End Ownership", desc: "From requirements and architecture through testing, release, and publishing." },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,210,211,0.06),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20">

        {/* Header + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Turning ideas into<br />
              <span className="text-primary font-serif italic">polished apps.</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed font-light"
          >
            <p>
              Flutter Developer with <span className="text-foreground font-medium">2+ years</span> of
              professional and hands-on experience building scalable, production-ready mobile applications.
            </p>
            <p>
              I combine Clean Architecture, MVVM, and SOLID principles with Cubit/BLoC state management,
              REST APIs, Firebase, and Supabase. Currently at{" "}
              <span className="text-primary font-semibold">ILC Soft</span>, Cairo.
            </p>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-white/5 rounded-2xl p-6 text-center group hover:border-primary/25 hover:bg-card/80 transition-all duration-300"
            >
              <s.icon className="h-5 w-5 text-primary mx-auto mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card/50 border border-white/5 rounded-2xl p-6 space-y-3 hover:border-primary/25 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{p.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech stack + education row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-card border border-white/5 rounded-2xl p-7 space-y-5 hover:border-primary/15 transition-colors"
          >
            <p className="font-mono text-primary text-xs tracking-widest uppercase">Core Stack</p>
            <div className="flex flex-wrap gap-4">
              {techStack.map((t) => (
                <div key={t.name} className="flex items-center gap-2">
                  <t.icon className={`text-xl ${t.color}`} />
                  <span className="text-foreground text-sm font-medium">{t.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {["BLoC", "Cubit", "Provider", "Riverpod", "REST APIs", "Dio", "Supabase", "Postman"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-secondary border border-white/5 font-mono text-xs text-foreground/70">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education + language */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5"
          >
            <div className="bg-card border border-white/5 rounded-2xl p-7 space-y-3 hover:border-primary/15 transition-colors">
              <p className="font-mono text-primary text-xs tracking-widest uppercase">Education</p>
              <p className="text-foreground font-semibold">B.Sc. Computer Science</p>
              <p className="text-muted-foreground text-sm">Egyptian E-Learning University</p>
              <p className="text-muted-foreground font-mono text-xs">2020 – 2024 · GPA: 3.65/4.0</p>
            </div>
            <div className="bg-card border border-white/5 rounded-2xl p-7 space-y-4 hover:border-primary/15 transition-colors">
              <p className="font-mono text-primary text-xs tracking-widest uppercase">Languages</p>
              {[
                { lang: "Arabic", level: "Native" },
                { lang: "English", level: "Intermediate (B1)" },
              ].map(l => (
                <div key={l.lang} className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{l.lang}</span>
                  </div>
                  <span className="text-muted-foreground font-mono text-xs">{l.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
