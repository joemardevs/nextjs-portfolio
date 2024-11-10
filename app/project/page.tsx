import {
  ArrowLeftIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Project - Joemar Palting",
  description: "Projects that I have worked on.",
  keywords: "Joemar Palting, projects, web applications, mobile applications",
  authors: [
    {
      name: "Joemar Palting",
    },
  ],
  publisher: "Vercel",
};

const ProjectPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
          Project
        </h1>

        <Link href="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="h-4 w-4 text-gray-700 dark:text-gray-500" />
          <p className="text-gray-700 dark:text-gray-500 text-sm">
            Back to Home
          </p>
        </Link>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 my-4 md:my-8" />

      {/* Coming Soon */}
      <div className="flex flex-col justify-center items-center h-[70vh]">
        <CursorArrowRaysIcon className="h-12 w-12 text-gray-700 dark:text-gray-500" />
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
