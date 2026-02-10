import { MotionConfig } from "framer-motion";

interface MotionConfigProps {
  children: React.ReactNode;
}

const MotionConfigProvider = ({ children }: MotionConfigProps) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </MotionConfig>
  );
};

export default MotionConfigProvider;
