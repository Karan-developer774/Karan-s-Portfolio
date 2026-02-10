import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading number="04" title="Experience" />

        <div className="max-w-3xl space-y-6">
          {/* Work */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border rounded-xl p-6 md:p-8 bg-card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="font-bold text-foreground">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-accent font-medium mt-0.5">
                  Worldsoft IT Solution Pvt. Ltd.
                </p>
              </div>
              <span className="text-xs font-mono text-muted-foreground shrink-0">
                Feb 2024 – Present
              </span>
            </div>

            <ul className="mt-5 space-y-2.5">
              {[
                "Built CRM & admin panels with role-based access control",
                "Implemented secure JWT auth with Access & Refresh Token flow",
                "Deployed applications to Vercel, Netlify, and AWS",
                "Optimized queries and applied security practices (CORS, Helmet, Rate Limiting)",
                "Developed and integrated RESTful APIs",
                "Collaborated with cross-functional teams to deliver scalable solutions",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border rounded-xl p-6 md:p-8 bg-card">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <h3 className="font-bold text-foreground">
                  B.Tech – Electronics & Communication Engineering
                </h3>
                <p className="text-sm text-accent font-medium mt-0.5">
                  IES College of Technology, Bhopal
                </p>
              </div>
              <span className="text-xs font-mono text-muted-foreground shrink-0">
                2019 – 2023
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
