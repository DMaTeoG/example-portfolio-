"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Leer tema guardado o preferencia del sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const initialTheme = systemPrefersDark ? "dark" : "light";
      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
    setMounted(true);
  }, []);

  // Cambiar tema manualmente
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Evitar hidratación no coincidente
  if (!mounted) {
    return (
      <button
        aria-label="Cambiar tema"
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-foreground dark:bg-dark-foreground transition-colors"
      >
        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-grey dark:bg-dark-grey rounded-full" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-foreground dark:bg-dark-foreground hover:bg-accent dark:hover:bg-dark-accent transition-colors"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-grey dark:text-dark-grey" />
      ) : (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-grey dark:text-dark-grey" />
      )}
    </button>
  );
}