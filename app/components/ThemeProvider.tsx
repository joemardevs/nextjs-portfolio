"use client";
import React from "react";
import { Inter } from "next/font/google";
import useThemeStore from "../store/theme.store";

const inter = Inter({ subsets: ["latin"] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeStore(state => state.theme);

  return (
    <html lang="en" className={theme}>
      <body className={(inter.className, "bg-gray-50 dark:bg-gray-950")}>
        {children}
      </body>
    </html>
  );
};

export default ThemeProvider;
