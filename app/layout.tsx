import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Joemar Palting - Software Engineer",
  description: "A software engineer who builds web and mobile applications.",
  keywords:
    "Joemar Palting, software engineer, web developer, mobile developer, fullstack developer, software developer,developer, web applications, mobile applications",
  authors: [
    {
      name: "Joemar Palting",
    },
  ],
  publisher: "Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <div className="p-6 md:py-10 md:px-40 w-screen md:mx-auto md:max-w-[1200px]">
        {children}
        <div className="border-t border-gray-200 dark:border-gray-800 my-4 md:my-8" />
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
            ©{" "}
            {new Date().getFullYear() === 2024
              ? new Date().getFullYear()
              : `2024 - ${new Date().getFullYear()}`}{" "}
            <a
              href="https://www.linkedin.com/in/joemarpalting/"
              target="_blank">
              Joemar Palting
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
