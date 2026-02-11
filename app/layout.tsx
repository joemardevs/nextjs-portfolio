import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  FOOTER_YEAR_TEXT,
  LINKEDIN_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - Software Engineer`,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
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
            © {FOOTER_YEAR_TEXT}{" "}
            <a href={LINKEDIN_URL} target="_blank">
              {SITE_NAME}
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
