"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimationOptimizedProps {
  children: React.ReactNode;
  variants?: any;
  initial?: string | any;
  animate?: string | any;
  transition?: any;
  className?: string;
  delay?: number;
}

const AnimationOptimized: React.FC<AnimationOptimizedProps> = ({
  children,
  variants,
  initial = "hidden",
  animate = "visible",
  transition = { duration: 0.6, ease: "easeOut" },
  className = "",
  delay = 0
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isInView, setIsInView] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Si l'utilisateur préfère les animations réduites, on les désactive
  if (shouldReduceMotion || !isClient) {
    return <div className={className}>{children}</div>;
  }

  // Variants par défaut optimisés pour les performances
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ...transition,
        delay
      }
    }
  };

  const finalVariants = variants || defaultVariants;

  return (
    <motion.div
      className={className}
      variants={finalVariants}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={transition}
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-100px" }}
      // Optimisations de performance
      style={{
        willChange: isInView ? "transform, opacity" : "auto"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationOptimized;
