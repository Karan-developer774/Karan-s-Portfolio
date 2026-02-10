import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Lekhajokha",
    subtitle: "Digital Ledger & Credit Tracking System",
    description:
      "A digital ledger system for retailers to track credits, transactions, and balances efficiently — replacing manual bookkeeping with real-time dashboards.",
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    highlights: [
      "Flexible MongoDB document model with aggregation pipelines for running balances",
      "JWT authentication with role-based access control and transaction history",
      "Optimized queries with MongoDB indexes — 40% faster load times",
      "SMS/email reminders and notification logging",
    ],
  },
  {
    title: "E-Shop",
    subtitle: "E-Commerce Platform with RazorPay Integration",
    description:
      "A full-featured online shopping platform with product management, secure checkout, and payment processing via Razorpay.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "RazorPay", "Tailwind CSS"],
    highlights: [
      "Product catalog, cart, checkout, and order history with responsive UI",
      "Razorpay API integration for real-time payment processing",
      "Admin dashboard for products, orders, inventory, and user management",
      "JWT auth with form validation and role-based access control",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading number="02" title="Projects" />
        <div className="grid gap-6 max-w-3xl">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
