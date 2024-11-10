"use client";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Service", href: "/service" },
  { label: "Testimonial", href: "/testimonial" },
];

const Navigations = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav className="p-4 md:p-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-black dark:text-white">
          joemardevs
        </Link>

        <ul className="hidden md:flex items-center">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "rounded-md px-4 py-2 text-sm text-gray-900 dark:text-gray-100",
                  pathname === href
                    ? "bg-gray-100 dark:bg-gray-900"
                    : "font-normal"
                )}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex h-8 w-8 items-center justify-center md:ml-0">
          <ThemeToggle />
        </div>

        <Popover className="relative md:hidden">
          {({ close }) => (
            <>
              <PopoverButton className="flex h-8 w-8 items-center justify-center rounded-lg">
                <Bars3Icon className="h-5 w-5 cursor-pointer fill-black dark:fill-white" />
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">
                <PopoverPanel className="absolute right-0 z-10 w-40 origin-top-right overflow-auto rounded-xl bg-white dark:bg-black p-2 text-base shadow-md  focus:outline-none sm:text-sm ">
                  <div className="grid">
                    {links.map(link => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => close()}
                        className={clsx(
                          "rounded-md px-4 py-2 text-sm text-gray-900 dark:text-gray-100",
                          pathname === link.href
                            ? "bg-gray-100 dark:bg-gray-900"
                            : "font-normal"
                        )}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </nav>
    </header>
  );
};

export default Navigations;
