"use client";

import { useEffect, useState, useCallback } from "react";
import { Theme } from "@/lib/types";

const THEME_KEY = "theme";
const DEFAULT_THEME: Theme = "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);

  const initializeTheme = useCallback(() => {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
      const initialTheme = savedTheme || DEFAULT_THEME;
      setTheme(initialTheme);
      document.documentElement.className = initialTheme;
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const currentTheme = theme || DEFAULT_THEME;
    const newTheme: Theme = currentTheme === "light" ? "dark" : "light";

    window.localStorage.setItem(THEME_KEY, newTheme);
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  }, [theme]);

  useEffect(() => {
    if (theme === null) {
      initializeTheme();
    }
  }, [initializeTheme, theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(
        (window.localStorage.getItem(THEME_KEY) as Theme) || DEFAULT_THEME,
      );
    }
  }, []);

  return { theme, toggleTheme, initializeTheme };
}
