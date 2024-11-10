"use client";
import { Button } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import React from "react";
import useThemeStore from "../store/theme.store";

const ThemeToggle = () => {
  const theme = useThemeStore(state => state.theme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  const handleToggleTheme = () => {
    toggleTheme();

    //get the html element
    const html = document.querySelector("html");
    //add the theme class to the html
    html?.classList.add(theme);
  };
  return (
    <Button
      onClick={handleToggleTheme}
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
