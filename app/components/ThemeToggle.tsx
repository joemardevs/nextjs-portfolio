"use client";
import { Button } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string>();
  const toggleTheme = () => {
    const currentTheme = window.localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);

    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme") || "light");
  }, []);

  return (
    <Button
      onClick={toggleTheme}
      className="h-8 w-8 flex items-center justify-center rounded-lg">
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 md:h-6 md:w-6 cursor-pointer fill-gray-950 dark:fill-gray-50" />
      ) : (
        <MoonIcon className="h-5 w-5 md:h-6 md:w-6 cursor-pointer fill-gray-950 dark:fill-gray-50" />
      )}
    </Button>
  );
};

export default ThemeToggle;
