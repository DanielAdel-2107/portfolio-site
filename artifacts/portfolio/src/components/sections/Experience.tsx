import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    role: "Flutter Developer",
    company: "ILC Soft",
    location: "Cairo, Egypt",
    period: "Dec 2024 – Present",
    bullets: [
      "Own Flutter development as the primary mobile developer, translating requirements into complete applications and features built from scratch.",
      "Design application architecture using Clean Architecture, MVVM, and SOLID principles with Cubit, BLoC, Provider, and Riverpod.",
      "Integrate REST APIs, Firebase, and Supabase for authentication, role-based access control, and backend-driven functionality.",
      "Build real-time functionality including live chat, notifications, location-based features, and payment/subscription integrations.",
      "Optimize performance and reliability through targeted testing, debugging, and Git-based workflows, and contribute to releases and publishing.",
      "Contributed to the development and release of Roya & Bushra, including text/voice dream submission, admin-to-interpreter assignment, and anonymous real-time chat.",
    ],
  },
  {
    type: "work",
    role: "Flutter Developer Intern",
    company: "Cellula",
    location: "Remote",
    period: "Feb 2025 – Mar 2025",
    bullets: [
      "Contributed to feature implementation and bug fixing in real-world Flutter applications.",
      "Integrated Firebase services including Authentication and Firestore.",
      "Improved code readability and structure under senior developer mentorship.",
    ],
  },
  {
    type: "work",
    role: "Flutter Developer",
    company: "Freelance",
    location: "Remote",
    period: "Jun 2024 – Dec 2024",
    bullets: [
      "Owned end-to-end Flutter development across 4 client projects, communicating directly with clients to gather requirements.",
      "Independently built complete applications from requirements through development, testing, and delivery.",
      "Delivered production-ready Flutter applications tailored to individual client needs.",
    ],
  },
  {
    type: "education",
    role: "Bachelor’s Degree in Computer Science",
    company: "Egyptian E-Learning University",
    location: "EELU",
    period: "2020 – 2024",
    bullets: [
      "Egyptian E-Learning University (EELU).",
      "GPA: 3.65/4.0.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-24 bg-card/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,210,211,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">My Path</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="mb-14 pl-10 relative"
            >
              {/* Timeline dot with icon */}
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center shadow-[0_0_16px_rgba(0,210,211,0.3)]">
                {exp.type === "work" ? (
                  <Briefcase className="h-4 w-4 text-primary" />
                ) : (
                  <GraduationCap className="h-4 w-4 text-primary" />
                )}
              </div>

              <div className="bg-card/50 border border-white/5 rounded-2xl p-6 md:p-8 space-y-4 hover:border-primary/15 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <h4 className="text-primary font-semibold text-sm">{exp.company}</h4>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className="text-muted-foreground text-xs font-mono">{exp.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
