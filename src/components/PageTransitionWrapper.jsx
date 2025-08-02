import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransitionWrapper({ children }) {
  const [animationDone, setAnimationDone] = useState(true);

  return (
    <div className="absolute w-full min-h-screen flex flex-col">
      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: animationDone ? 1 : 0,
          scale: animationDone ? 1 : 0.95,
        }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 p-0"
      >
        {children}
      </motion.div>
    </div>
  );
}
