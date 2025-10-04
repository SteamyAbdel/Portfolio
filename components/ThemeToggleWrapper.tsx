"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";
import NoSSR from "./NoSSR";

const ThemeToggleWrapper: React.FC = () => {
  return (
    <NoSSR fallback={
      <button
        onClick={() => {
          const isDark = document.documentElement.classList.contains('dark');
          document.documentElement.classList.remove('dark', 'light');
          document.documentElement.classList.add(isDark ? 'light' : 'dark');
        }}
        className="relative w-16 h-8 bg-gray-600 rounded-full p-1 transition-colors duration-300"
      >
        <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
          <span className="text-xs">🌙</span>
        </div>
      </button>
    }>
      <ThemeToggle />
    </NoSSR>
  );
};

export default ThemeToggleWrapper;
