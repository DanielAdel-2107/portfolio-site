import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactLinks = [
  {
    icon: Mail,
    label: "danieladel217@gmail.com",
    href: "mailto:danieladel217@gmail.com",
  },
  {
    icon: Phone,
    label: "+20 122 508 4331",
    href: "tel:+201225084331",
  },
  {
    icon: Github,
    label: "github.com/DanielAdel-2107",
    href: "https://github.com/DanielAdel-2107",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/daniel-adel-b6946b2a4",
    href: "https://www.linkedin.com/in/daniel-adel-b6946b2a4/",
  },
  {
    icon: MapPin,
    label: "Cairo, Egypt",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,210,211,0.08),transparent_55%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Let's Talk Code</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Currently open for new opportunities. Whether you have a project, a role, or just want
            to talk Flutter — my inbox is open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">Contact Info</h3>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  data-testid={`link-contact-${link.label.split("@")[0].replace(/\s/g, "-").toLowerCase()}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <link.icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-sm break-all">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 mt-8 bg-primary/10 border border-primary/20 rounded-xl px-5 py-4">
              <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse flex-shrink-0" />
              <p className="text-sm text-foreground/80">
                <span className="text-primary font-semibold">Available for work</span> — open to full-time
                and freelance roles.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:danieladel217@gmail.com";
              }}
            >
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-secondary/50 border-white/5 focus-visible:ring-primary h-12 rounded-xl"
                  data-testid="input-name"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-secondary/50 border-white/5 focus-visible:ring-primary h-12 rounded-xl"
                  data-testid="input-email"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  className="bg-secondary/50 border-white/5 focus-visible:ring-primary h-12 rounded-xl"
                  data-testid="input-subject"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message..."
                  className="bg-secondary/50 border-white/5 focus-visible:ring-primary min-h-[140px] rounded-xl resize-none"
                  data-testid="textarea-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(0,210,211,0.25)] hover:shadow-[0_0_30px_rgba(0,210,211,0.45)] transition-all"
                data-testid="button-send"
              >
                Send Message <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground font-mono text-xs"
      >
        <span>Daniel Adel Helmy — Flutter Developer</span>
        <span>Cairo, Egypt · {new Date().getFullYear()}</span>
      </motion.div>
    </section>
  );
}
