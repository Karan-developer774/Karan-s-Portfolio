import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "MUI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "JWT/OAuth", "RESTful APIs", "Third-party APIs"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL", "PL/SQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Amplify)", "Vercel", "Netlify", "Railway", "Git & GitHub", "CI/CD", "Docker"],
  },
  {
    category: "Tools",
    skills: ["Cursor AI", "GitHub Copilot", "Figma", "Microservices", "Nodemailer", "ESLint", "Postman"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12"
        >
          <span className="font-mono text-primary text-lg md:text-xl">03.</span>
          Skills & Technologies
          <span className="h-px flex-1 bg-border ml-4" />
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-lg p-6 hover-lift"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-md border border-border/50 hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
