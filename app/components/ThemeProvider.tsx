"use client";

import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { Theme } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    document.documentElement.className = initialTheme;
  }, []);

  if (!mounted) {
    return (
      <html lang="en" className="light">
        <body className={`${inter.className} bg-gray-50 dark:bg-gray-950`}>
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className={theme}>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950`}>
        {children}
      </body>
    </html>
  );
};

export default ThemeProvider;
