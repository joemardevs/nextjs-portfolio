import React from "react";
import Link from "next/link";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <ExclamationTriangleIcon className="w-32 h-32 text-black dark:text-gray-200" />
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold text-black dark:text-gray-200">
          Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
          The page you are looking for does not exist.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
          Please check the URL or return home.
        </p>
      </div>
      <Link
        href="/"
        className="text-black dark:text-gray-400 hover:underline cursor-pointer text-lg">
        Return Home
      </Link>
    </div>
  );
}
