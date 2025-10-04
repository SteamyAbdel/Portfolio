"use client";

import React from "react";
import { motion } from "framer-motion";

interface MicroInteractionProps {
  children: React.ReactNode;
  type?: "card" | "button" | "image" | "text";
  className?: string;
  delay?: number;
}

const MicroInteraction: React.FC<MicroInteractionProps> = ({
  children,
  type = "card",
  className = "",
  delay = 0
}) => {
  const getVariants = () => {
    switch (type) {
      case "card":
        return {
          hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3, ease: "easeOut" }
          },
          tap: {
            scale: 0.98,
            transition: { duration: 0.1 }
          }
        };
      case "button":
        return {
          hover: {
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.2, ease: "easeOut" }
          },
          tap: {
            scale: 0.95,
            transition: { duration: 0.1 }
          }
        };
      case "image":
        return {
          hover: {
            scale: 1.1,
            filter: "brightness(1.1)",
            transition: { duration: 0.4, ease: "easeOut" }
          },
          tap: {
            scale: 0.95,
            transition: { duration: 0.1 }
          }
        };
      case "text":
        return {
          hover: {
            scale: 1.05,
            color: "#ffffff",
            transition: { duration: 0.2, ease: "easeOut" }
          },
          tap: {
            scale: 0.95,
            transition: { duration: 0.1 }
          }
        };
      default:
        return {
          hover: { scale: 1.05 },
          tap: { scale: 0.95 }
        };
    }
  };

  return (
    <motion.div
      className={className}
      variants={getVariants()}
      whileHover="hover"
      whileTap="tap"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteraction;
