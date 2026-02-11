"use client";

import { Button } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "@/lib/hooks/useTheme";
import { Theme } from "@/lib/types";
import { useEffect } from "react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Initialize theme on mount
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      document.documentElement.className = savedTheme;
    }
  }, []);

  const getIconClassName = () =>
    "h-5 w-5 md:h-6 md:w-6 cursor-pointer fill-gray-950 dark:fill-gray-50";

  return (
    <Button
      onClick={toggleTheme}
      className="h-8 w-8 flex items-center justify-center rounded-lg">
      {theme === "dark" ? (
        <SunIcon className={getIconClassName()} />
      ) : (
        <MoonIcon className={getIconClassName()} />
      )}
    </Button>
  );
};

export default ThemeToggle;
