import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Zap,
} from "lucide-react";
import ClientOnly from "./ClientOnly";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative">
      <ClientOnly
        fallback={
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-accent to-purple-500" />
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent tracking-wide">
                    Full Stack Developer
                  </span>
                  <Zap className="w-4 h-4 text-purple-500" />
                </div>
                <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-accent" />
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="bg-gradient-to-r from-foreground via-accent to-purple-500 bg-clip-text text-transparent">
                  Karan
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-accent to-foreground bg-clip-text text-transparent">
                  Mourya
                </span>
              </h1>
              <div className="mt-6 flex items-start gap-3 max-w-lg">
                <Code2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I build scalable web applications and secure systems with the
                  MERN stack, Next.js, and AWS.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#projects"
                  className="group relative text-sm font-medium bg-gradient-to-r from-foreground to-accent text-background px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10">View Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-background">View Work</span>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group relative text-sm font-medium border-2 border-gradient-to-r from-border to-accent/50 text-foreground px-8 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple-500/10 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact
                  </span>
                </a>
              </div>
              <div className="mt-12 flex items-center gap-3">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Karan-developer774",
                    label: "GitHub",
                    color: "hover:text-gray-600 hover:border-gray-300",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/karan-mourya-81b11b233",
                    label: "LinkedIn",
                    color: "hover:text-blue-600 hover:border-blue-300",
                  },
                  {
                    icon: Mail,
                    href: "mailto:karanmouryakaran774@gmail.com",
                    label: "Email",
                    color: "hover:text-red-600 hover:border-red-300",
                  },
                ].map(({ icon: Icon, href, label, color }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm text-muted-foreground ${color} transition-all duration-300 hover:shadow-lg hover:shadow-accent/10`}>
                    <Icon size={20} />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        }>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-accent to-purple-500" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent tracking-wide">
                  Full Stack Developer
                </span>
                <Zap className="w-4 h-4 text-purple-500" />
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-accent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-foreground via-accent to-purple-500 bg-clip-text text-transparent">
                Karan
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-accent to-foreground bg-clip-text text-transparent">
                Mourya
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 flex items-start gap-3 max-w-lg">
              <Code2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build scalable web applications and secure systems with the
                MERN stack, Next.js, and AWS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 flex items-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative text-sm font-medium bg-gradient-to-r from-foreground to-accent text-background px-8 py-3.5 rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-background">View Work</span>
                </span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative text-sm font-medium border-2 border-gradient-to-r from-border to-accent/50 text-foreground px-8 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-accent/10 hover:to-purple-500/10 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-12 flex items-center gap-3">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Karan-developer774",
                  label: "GitHub",
                  color: "hover:text-gray-600 hover:border-gray-300",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/karan-mourya-81b11b233",
                  label: "LinkedIn",
                  color: "hover:text-blue-600 hover:border-blue-300",
                },
                {
                  icon: Mail,
                  href: "mailto:karanmouryakaran774@gmail.com",
                  label: "Email",
                  color: "hover:text-red-600 hover:border-red-300",
                },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative p-3 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm text-muted-foreground ${color} transition-all duration-300 hover:shadow-lg hover:shadow-accent/10`}>
                  <Icon size={20} />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </ClientOnly>

      {/* Scroll indicator */}
      <ClientOnly
        fallback={
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 group">
            <div className="p-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-muted-foreground group-hover:text-accent group-hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <ArrowDown size={20} />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        }>
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 group">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="p-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-muted-foreground group-hover:text-accent group-hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <ArrowDown size={20} />
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      </ClientOnly>
    </section>
  );
};

export default HeroSection;
