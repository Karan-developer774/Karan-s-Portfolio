import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Lekhajokha",
    subtitle: "Digital Ledger & Credit Tracking System",
    problem:
      "Retailers needed a digital ledger system to track credits, transactions, and balances efficiently without manual bookkeeping.",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    features: [
      "Built a retailer-focused digital ledger with a flexible MongoDB document model.",
      "Added JWT auth, profiles, and transaction history with role-based access.",
      "Used MongoDB aggregation and indexes for running balances and summaries.",
      "Delivered a responsive, real-time dashboard with fast, paginated queries.",
      "Integrated SMS/email reminders and logged notifications in MongoDB.",
    ],
    highlights: [
      "Optimized queries with MongoDB indexes → 40% faster load times.",
      "Implemented secure authentication ensuring data privacy and role-based controls.",
    ],
  },
  {
    title: "E-Shop",
    subtitle: "E-Commerce Platform with RazorPay Integration",
    problem:
      "Developed a secure online shopping platform to handle product management, user orders, and payments seamlessly.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "RazorPay", "Tailwind CSS"],
    features: [
      "Built a secure e-commerce platform with product catalog, cart, checkout, and order history.",
      "Integrated Razorpay API for real-time payment processing and confirmations.",
      "Developed an admin dashboard for managing products, orders, inventory, and users.",
      "Used Tailwind CSS and efficient state management for responsive and high-performance UI.",
      "Implemented JWT auth, form validations, and role-based access control.",
    ],
    highlights: [
      "Integrated Razorpay payment gateway for seamless transactions.",
      "Secure JWT auth to protect user data.",
      "Admin dashboard for inventory and order management.",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-foreground mb-12"
        >
          <span className="font-mono text-primary text-lg md:text-xl">02.</span>
          Featured Projects
          <span className="h-px flex-1 bg-border ml-4" />
        </motion.h2>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
