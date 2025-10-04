"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gray-600 dark:bg-gray-600 light:bg-gray-300 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-900 light:focus:ring-offset-gray-100"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Basculer vers le mode ${theme === "dark" ? "clair" : "sombre"}`}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-white light:bg-yellow-400 rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.span
          animate={{
            rotate: theme === "dark" ? 0 : 180,
            scale: theme === "dark" ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
          className="text-xs"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
