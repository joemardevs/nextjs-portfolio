"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const themeToApply = savedTheme || "light";
    setTheme(themeToApply);
    document.documentElement.className = themeToApply;
  }, []);

  if (theme === null) {
    return null;
  }

  return (
    <html lang="en" className={theme || "light"}>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950`}>
        {children}
      </body>
    </html>
  );
};

export default ThemeProvider;
