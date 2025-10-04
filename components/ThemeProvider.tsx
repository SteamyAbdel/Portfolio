"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Fonction pour initialiser le thème
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem("theme") as Theme;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;
        
        setTheme(initialTheme);
        
        // Appliquer le thème au document
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(initialTheme);
      } catch (error) {
        console.warn("Erreur lors de l'initialisation du thème:", error);
        // Fallback vers le thème sombre
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      }
    };

    initializeTheme();
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        // Appliquer le thème au document
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
      } catch (error) {
        console.warn("Erreur lors de l'application du thème:", error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  // Toujours rendre le provider avec le thème par défaut pour éviter l'hydratation mismatch
  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
