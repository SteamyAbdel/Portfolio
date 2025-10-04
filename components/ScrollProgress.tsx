"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-white to-gray-300 dark:from-gray-300 dark:to-white shadow-lg"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
      
      {/* Indicateur de pourcentage */}
      <motion.div
        className="absolute top-2 right-4 text-xs font-medium text-white dark:text-black bg-black/20 dark:bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 5 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {Math.round(scrollProgress)}%
      </motion.div>
    </div>
  );
};

export default ScrollProgress;
