"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Leer tema guardado o preferencia del sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setTheme(systemPrefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }, []);

  // Cambiar tema manualmente
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground hover:bg-accent transition-colors"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-grey" />
      ) : (
        <Sun className="w-5 h-5 text-grey" />
      )}
    </button>
  );
}
