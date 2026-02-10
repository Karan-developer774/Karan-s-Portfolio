import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-lg font-semibold text-primary">
          KM<span className="text-foreground">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary mr-1">0{i + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Karan-Mourya-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-primary mr-1">0{i + 1}.</span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Karan-Mourya-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
