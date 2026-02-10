import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading number="01" title="About" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl"
        >
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Full Stack Developer with <span className="text-foreground font-medium">2+ years</span> of experience
              building production-ready web applications. I work across the entire stack — from crafting
              pixel-perfect interfaces to designing secure, performant APIs.
            </p>
            <p>
              My work includes e-commerce platforms, CRM systems, and admin panels with role-based
              access control. Currently at{" "}
              <span className="text-foreground font-medium">Worldsoft IT Solution Pvt. Ltd.</span>,
              building scalable solutions with modern web technologies.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
            {["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "AWS"].map((tech) => (
              <span key={tech} className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-accent" />
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
