import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML/CSS", "Tailwind CSS", "Bootstrap", "MUI"],
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
    skills: ["AWS (EC2, S3, Amplify)", "Vercel", "Netlify", "Railway", "Git/GitHub", "CI/CD", "Docker"],
  },
  {
    category: "Tools",
    skills: ["Cursor AI", "GitHub Copilot", "Figma", "Postman", "Nodemailer", "ESLint"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/40">
      <div className="container mx-auto px-6">
        <SectionHeading number="03" title="Skills" />

        <div className="max-w-3xl space-y-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-foreground/80 bg-card border border-border px-3 py-1.5 rounded-lg hover:border-accent/30 transition-colors"
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
