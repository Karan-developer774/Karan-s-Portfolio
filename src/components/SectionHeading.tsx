import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionHeading = ({ number, title }: { number: string; title: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-12"
    >
      <span className="text-sm font-mono text-accent">{number}</span>
      <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </motion.div>
  );
};

export default SectionHeading;
