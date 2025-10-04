"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "100px",
  fallback = (
    <div className="min-h-[400px] bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Chargement...</span>
    </div>
  )
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsInView(true);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, isLoaded]);

  return (
    <div ref={sectionRef} className={className}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
