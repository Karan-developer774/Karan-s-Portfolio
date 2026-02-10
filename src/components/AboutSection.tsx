import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-8">
            <span className="font-mono text-primary text-lg md:text-xl">01.</span>
            About Me
            <span className="h-px flex-1 bg-border ml-4" />
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Full Stack Developer with <span className="text-foreground font-medium">2+ years of experience</span> building
              production-ready web applications. I specialize in the{" "}
              <span className="text-primary">MERN stack</span>,{" "}
              <span className="text-primary">Next.js</span>, and cloud deployments on{" "}
              <span className="text-primary">AWS</span>.
            </p>
            <p>
              My journey includes building e-commerce platforms, CRM systems, and admin panels
              with role-based access control. I enjoy designing clean user interfaces, developing
              secure APIs, and solving performance challenges.
            </p>
            <p>
              Currently working at{" "}
              <span className="text-primary">Worldsoft IT Solution Pvt. Ltd.</span> where I build
              scalable web solutions and collaborate with cross-functional teams.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "MongoDB"].map(
              (tech) => (
                <div key={tech} className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                  <span className="text-primary text-xs">▹</span>
                  {tech}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
