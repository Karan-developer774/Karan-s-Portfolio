import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary text-sm mb-3">05. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm currently looking for new opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open!
          </p>

          <a
            href="mailto:karanmouryakaran774@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors"
          >
            <Mail size={18} />
            Say Hello
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:karanmouryakaran774@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              karanmouryakaran774@gmail.com
            </a>
            <a href="tel:6260245948" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              6260245948
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              Bhopal, M.P.
            </span>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <a
              href="https://github.com/karanmourya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/karanmourya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
