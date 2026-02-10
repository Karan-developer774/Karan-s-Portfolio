import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading number="05" title="Contact" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-lg"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm currently looking for new opportunities. Whether you have a question,
            a project idea, or just want to connect — feel free to reach out.
          </p>

          <a
            href="mailto:karanmouryakaran774@gmail.com"
            className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Get in Touch
          </a>

          <div className="mt-10 space-y-3">
            {[
              { icon: Mail, label: "karanmouryakaran774@gmail.com", href: "mailto:karanmouryakaran774@gmail.com" },
              { icon: Phone, label: "6260245948", href: "tel:6260245948" },
              { icon: MapPin, label: "Bhopal, M.P.", href: undefined },
            ].map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon size={16} className="shrink-0" />
                {href ? (
                  <a href={href} className="hover:text-foreground transition-colors">{label}</a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/karanmourya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/karanmourya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
