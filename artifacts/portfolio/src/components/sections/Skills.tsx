import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Database,
  Gauge,
  LockKeyhole,
  MapPinned,
  Network,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: Gauge,
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Responsive UI", "Localization", "RTL"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Architecture & Design Patterns",
    skills: ["Clean Architecture", "MVVM", "SOLID Principles", "Dependency Injection (GetIt)", "Repository Pattern"],
  },
  {
    icon: Network,
    title: "State Management",
    skills: ["Cubit", "BLoC", "Provider", "Riverpod"],
  },
  {
    icon: Server,
    title: "Backend & Networking",
    skills: ["REST APIs", "Dio", "Retrofit", "Firebase", "Supabase", "JSON Serialization", "Freezed", "json_serializable", "build_runner"],
  },
  {
    icon: LockKeyhole,
    title: "Authentication & Security",
    skills: ["Authentication", "Authorization", "Role-Based Access Control", "Secure Storage", "Session Management"],
  },
  {
    icon: Database,
    title: "Database & Local Storage",
    skills: ["Supabase", "Firebase", "SharedPreferences", "Hive", "Offline Caching"],
  },
  {
    icon: MapPinned,
    title: "Real-Time, Notifications & Location",
    skills: ["Real-Time Systems", "Real-Time Chat", "Push/Local Notifications", "Google Maps", "Geolocator", "Live Location Tracking"],
  },
  {
    icon: Wrench,
    title: "Payments, Media & Development Tools",
    skills: ["Paymob", "Stripe", "Fawry", "InstaPay", "Image/File Uploads", "Media Compression", "Unit/Widget/Integration Testing", "GoRouter", "Git", "Postman", "Android Studio", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-24 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,211,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">What I Work With</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            The tools, patterns, and production practices listed in my CV — organized by the kind of problem they help solve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-card border border-white/5 rounded-2xl p-6 hover:border-primary/25 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <group.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 + skillIndex * 0.02 }}
                    className="px-3 py-1.5 rounded-full bg-secondary border border-white/5 font-mono text-xs text-foreground/80 hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}