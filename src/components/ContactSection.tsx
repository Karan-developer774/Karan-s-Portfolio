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
          className="max-w-lg">
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm currently looking for new opportunities. Whether you have a
            question, a project idea, or just want to connect — feel free to
            reach out.
          </p>

          <motion.a
            href="mailto:karanmouryakaran774@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-foreground to-accent text-background px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 overflow-hidden">
            <Mail size={16} />
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Mail size={16} />
              <span className="text-background ml-2">Get in Touch</span>
            </span>
          </motion.a>

          <div className="mt-10 space-y-3">
            {[
              {
                icon: Mail,
                label: "karanmouryakaran774@gmail.com",
                href: "mailto:karanmouryakaran774@gmail.com",
              },
              { icon: Phone, label: "6260245948", href: "tel:6260245948" },
              { icon: MapPin, label: "Bhopal, M.P.", href: undefined },
            ].map(({ icon: Icon, label, href }) => (
              <div
                key={label}
                className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon size={16} className="shrink-0" />
                {href ? (
                  <a
                    href={href}
                    className="hover:text-foreground transition-colors">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com/Karan-developer774"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="GitHub">
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/karan-mourya-81b11b233"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
