import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Elite Car",
    subtitle: "Multi-Application Car Washing Ecosystem",
    description:
      "Built a multi-application car washing service ecosystem from scratch, with separate User, Employee, and Admin apps supporting role-based booking, driver assignment, pickup, and delivery workflows. Includes weekly, monthly, and per-wash subscriptions, cash and InstaPay payments, live order tracking, Google Maps, secure authentication and storage, offline support, caching, and RTL localization.",
    tags: ["Flutter", "Clean Architecture", "Subscriptions", "InstaPay", "Google Maps", "RTL"],
    image: "/images/project-productivity.png",
    badge: "Completed · Google Play prep",
    links: { github: "https://github.com/DanielAdel-2107/elite_car" },
  },
  {
    title: "Roya & Bushra",
    subtitle: "Subscription-Based Dream Interpretation Platform",
    description:
      "Built a subscription-based platform from scratch for text and voice dream submissions, with per-submission subscriptions and cash and Fawry payment integration. Designed anonymous real-time chat between users and interpreters, interpreter reassignment, admin conversation monitoring, role-based customer/interpreter/admin workflows, dream assignment, and Supabase-powered push notifications.",
    tags: ["Flutter", "Supabase", "Fawry", "Real-Time Chat", "Role-Based Access", "Push Notifications"],
    image: "/images/project-health.png",
    badge: "Released on Google Play",
    links: { github: "https://github.com/DanielAdel-2107/Absher-App" },
  },
  {
    title: "Servio",
    subtitle: "Two-Sided Service Marketplace",
    description:
      "Built a two-sided marketplace connecting users with technicians through direct technician selection or broadcast service requests with defined service type and budget. Implemented nearby technician discovery by proximity, real-time chat, push notifications, problem image/file uploads, Supabase integration, Firebase Cloud Messaging, and the full request lifecycle through cash payment.",
    tags: ["Flutter", "Supabase", "FCM", "Google Maps", "Real-Time Chat", "File Uploads"],
    image: "/images/project-social.png",
    links: { github: "https://github.com/DanielAdel-2107/Servio" },
  },
  {
    title: "Dive Connect",
    subtitle: "Tourist × Diver Platform",
    description:
      "Built a multilingual, two-application platform connecting tourists with divers, enabling trip browsing and diver selection by rating and spoken languages. Designed admin-managed review, approval, and assignment workflows, diver course management, live Google Maps trip tracking, and an emergency response system for real-time issue alerts.",
    tags: ["Flutter", "Multilingual", "Google Maps", "Live Tracking", "Emergency Response", "Admin Workflows"],
    image: "/images/project-fintech.png",
    badge: "In development · Google Play prep",
    links: { github: "https://github.com/DanielAdel-2107/Dive-Connect-App" },
  },
  {
    title: "Markety",
    subtitle: "E-Commerce & Social Commerce Platform",
    description:
      "Built a combined e-commerce and social commerce platform from scratch for User, Merchant, and Admin roles across product management, ordering, and search. Added shareable merchant content for product promotion, social discovery and engagement, multiple payment methods including Paymob, Fawry, and cash, and Supabase-powered real-time notifications.",
    tags: ["Flutter", "Supabase", "Paymob", "Fawry", "Social Commerce", "Real-Time Notifications"],
    image: "/images/project-ecommerce.png",
    links: { github: "https://github.com/DanielAdel-2107/Markety" },
  },
  {
    title: "Dwellio",
    subtitle: "Accommodation Marketplace",
    description:
      "Built a two-sided accommodation marketplace connecting students and users with property owners, featuring location-based property discovery with search and filtering. Implemented booking, favorites, and in-app chat on a Supabase backend for a complete property search-to-booking experience.",
    tags: ["Flutter", "Supabase", "Property Discovery", "Search & Filtering", "Booking", "In-App Chat"],
    image: "/images/project-productivity.png",
    links: { github: "https://github.com/DanielAdel-2107/dwellio" },
  },
];

const fallbackColors = [
  "0A1628/00D2D3", "0F1A2E/00D2D3", "0D1E35/00D2D3",
  "091422/00D2D3", "0C1930/00D2D3", "0E1C32/00D2D3",
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,210,211,0.06),transparent_55%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">What I've Built</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground font-mono text-sm max-w-sm">
            Six featured Flutter projects across car care, dream interpretation, services, travel, commerce, and accommodation.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[560px] w-full max-w-xs mx-auto shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  {project.badge && (
                    <div className="absolute top-4 left-4 z-20 font-mono text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full">
                      {project.badge}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://placehold.co/600x900/${fallbackColors[index] ?? "111827/00D2D3"}?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/15 blur-[80px] -z-10 opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="font-mono text-primary text-sm tracking-wider">
                  {String(index + 1).padStart(2, "0")}.
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                  <p className="text-primary font-mono text-sm mt-1">{project.subtitle}</p>
                </div>

                <div className="bg-card p-6 md:p-7 rounded-2xl border border-white/5 shadow-xl relative z-20">
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 font-mono text-xs text-foreground/80">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary border border-white/5 hover:border-primary/30 hover:text-primary transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 flex-wrap">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      className="rounded-full border-white/20 hover:bg-white/5 text-sm"
                      asChild
                      data-testid={`button-github-${index}`}
                    >
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
