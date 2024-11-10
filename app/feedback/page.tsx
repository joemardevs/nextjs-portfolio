import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { FEEDBACK } from "../data/feedback";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback - Joemar Palting",
  description: "Feedback from my clients and colleagues.",
  keywords: "Joemar Palting, feedback, testimonial, clients, colleagues",
  authors: [
    {
      name: "Joemar Palting",
    },
  ],
  publisher: "Vercel",
};

const TestimonialPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200">
          Feedback
        </h1>

        <Link href="/" className="flex items-center gap-2">
          <ArrowLeftIcon className="h-4 w-4 text-gray-700 dark:text-gray-500" />
          <p className="text-gray-700 dark:text-gray-500 text-sm">
            Back to Home
          </p>
        </Link>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 my-4 md:my-8" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {FEEDBACK.sort((a, b) =>
          a.feedback.length < b.feedback.length ? 1 : -1
        ).map((item, index) => (
          <div
            key={index}
            className={
              `flex flex-col justify-between gap-2 bg-gray-100 dark:bg-gray-900 p-6 rounded-md border dark:border-gray-800 ` +
              (item.feedback.length > 200 ? "md:col-span-2" : "md:col-span-1")
            }>
            <p className="text-gray-800 dark:text-gray-200 text-md text-sm md:text-xs">
              {item.feedback}
            </p>

            <div>
              <h2 className="text-md text-gray-500 dark:text-gray-400 text-sm md:text-xs">
                {item.name}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
