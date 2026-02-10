import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}>
      {/* Main logo container */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Background gradient circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 blur-sm" />

        {/* KM letters with modern typography */}
        <div className="relative font-bold text-xl tracking-tight">
          <span className="relative">
            <span className="bg-gradient-to-br from-foreground via-accent to-purple-500 bg-clip-text text-transparent font-extrabold">
              K
            </span>
            {/* Decorative underline for K */}
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-purple-500 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </span>
          <span className="bg-gradient-to-br from-purple-500 via-accent to-foreground bg-clip-text text-transparent font-extrabold ml-0.5">
            M
          </span>
        </div>

        {/* Subtle animated dots */}
        <motion.div
          className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-purple-500"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.div>
  );
};

export default Logo;
