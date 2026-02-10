import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12"
        >
          <span className="font-mono text-primary text-lg md:text-xl">04.</span>
          Experience
          <span className="h-px flex-1 bg-border ml-4" />
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-lg p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Briefcase size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">
                  Full Stack Developer
                </h3>
                <p className="text-primary font-mono text-sm mt-0.5">
                  Worldsoft IT Solution Pvt. Ltd.
                </p>
                <p className="text-muted-foreground text-sm font-mono mt-1">
                  02/2024 – Present · Bhopal
                </p>

                <ul className="mt-4 space-y-2">
                  {[
                    "Built CRM & admin panels with role-based access.",
                    "Implemented secure JWT auth (Access & Refresh Token flow).",
                    "Deployed apps to Vercel, Netlify, and AWS.",
                    "Improved performance through optimized queries and security practices like CORS, Helmet, and API Rate Limiting.",
                    "Developed and integrated RESTful APIs.",
                    "Collaborated with cross-functional teams to deliver scalable solutions.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 text-xs">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-lg p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  B.Tech – Electronics and Communication
                </h3>
                <p className="text-primary font-mono text-sm mt-0.5">
                  IES College of Technology, Bhopal
                </p>
                <p className="text-muted-foreground text-sm font-mono mt-1">
                  07/2019 – 06/2023
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
