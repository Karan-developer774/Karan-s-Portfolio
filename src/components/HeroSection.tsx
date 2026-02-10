import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-medium text-accent tracking-wide">Full Stack Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1]"
          >
            Karan
            <br />
            Mourya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            I build scalable web applications and secure systems with the MERN stack, Next.js, and AWS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="#projects"
              className="text-sm font-medium bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-sm font-medium border border-border text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/karanmourya", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/karanmourya", label: "LinkedIn" },
              { icon: Mail, href: "mailto:karanmouryakaran774@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
