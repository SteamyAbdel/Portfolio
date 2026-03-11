"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";
import ClientOnly from "./ClientOnly";

const ThemeToggleWrapper: React.FC = () => {
  return (
    <ClientOnly fallback={<div style={{ width: 170, height: 90 }} />}>
      <ThemeToggle />
    </ClientOnly>
  );
};

export default ThemeToggleWrapper;
