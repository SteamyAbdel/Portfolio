"use client";

import React from "react";

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
  const getHoverClasses = () => {
    switch (type) {
      case "card":
        return "hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-out";
      case "button":
        return "hover:scale-105 hover:shadow-lg transition-all duration-200 ease-out active:scale-95";
      case "image":
        return "hover:scale-110 hover:brightness-110 transition-all duration-400 ease-out active:scale-95";
      case "text":
        return "hover:scale-105 hover:text-white transition-all duration-200 ease-out active:scale-95";
      default:
        return "hover:scale-105 transition-all duration-200 ease-out active:scale-95";
    }
  };

  return (
    <div
      className={`${className} ${getHoverClasses()}`}
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'fadeInUp 0.5s ease-out forwards'
      }}
    >
      {children}
    </div>
  );
};

export default MicroInteraction;
