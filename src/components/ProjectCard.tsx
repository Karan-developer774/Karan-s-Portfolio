import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  problem: string;
  tech: string[];
  highlights: string[];
  features: string[];
  index: number;
}

const ProjectCard = ({
  title,
  subtitle,
  problem,
  tech,
  highlights,
  features,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass rounded-lg p-6 md:p-8 hover-lift group"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-mono text-primary text-sm mb-1">Featured Project</p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>
        <div className="flex gap-3 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-colors" aria-label="Live">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="bg-secondary/50 rounded-md p-4 mb-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="text-primary font-medium">Problem: </span>
          {problem}
        </p>
      </div>

      <div className="space-y-2 mb-5">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-0.5 text-xs">▹</span>
            <span>{f}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-5">
        {highlights.map((h, i) => (
          <p key={i} className="text-sm text-foreground/80 font-medium">
            👉 {h}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
