import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  index: number;
}

const ProjectCard = ({ title, subtitle, description, tech, highlights, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border border-border rounded-xl p-6 md:p-8 hover:border-accent/30 transition-all duration-300 bg-card"
    >
      <div className="flex items-start justify-between mb-1">
        <div>
          <span className="text-xs font-mono text-accent uppercase tracking-wider">Featured</span>
          <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-accent transition-colors flex items-center gap-2">
            {title}
            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
        </div>
        <div className="flex gap-2">
          <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all" aria-label="Live">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{description}</p>

      <ul className="mt-5 space-y-2">
        {highlights.map((h, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
