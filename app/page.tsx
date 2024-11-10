import {
  AcademicCapIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  ChevronRightIcon,
  DocumentIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  LinkIcon,
  LinkSlashIcon,
  MapPinIcon,
  NewspaperIcon,
  RectangleGroupIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";
import { TECH_STACK } from "./data/tech-stack";
import { EXPERIENCE } from "./data/experience";
import { PROJECTS } from "./data/project";
import { FEEDBACK } from "./data/feedback";
import { SOCIALS } from "./data/socials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row items-center gap-2 md:gap-6 relative">
        <Image
          src="/images/joemar.jpeg"
          alt="Next.js"
          width={1080}
          height={1080}
          className="bg-gray-100 dark:bg-gray-800 rounded-xl h-36 w-36 md:h-40 md:w-40 object-cover"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-950 dark:text-gray-50">
            Joemar Palting
          </h2>
          <div className="flex flex-row gap-1">
            <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-md">
              Isabela, Philippines
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm md:text-md font-medium">
            Software Engineer
          </p>
          <div className="flex flex-row gap-2 md:gap-4 mt-3">
            <a
              href="mailto:joemarpalting19@gmail.com"
              className="bg-gray-900 dark:bg-gray-100 w-fit py-1 px-2 md:px-4 md:py-2 rounded-lg md:rounded-lg cursor-pointer flex gap-1 md:gap-2 items-center transform transition-transform hover:-translate-y-1">
              <EnvelopeIcon className="h-3 md:h-5 w-3 md:w-5 text-gray-200 dark:text-gray-700" />
              <p className="text-xs md:text-md font-normal text-gray-300 dark:text-gray-600">
                Send Email
              </p>
              <ArrowRightIcon className="h-3 md:h-4 w-3 md:w-4 text-gray-200 dark:text-gray-700" />
            </a>
            <a
              href="/PALTING, JOEMAR.pdf"
              target="_blank"
              className="border-gray-500 dark:border-gray-600 border w-fit py-1 px-2 md:px-4 md:py-2 rounded-lg md:rounded-lg cursor-pointer flex gap-1 md:gap-2 items-center transform transition-transform hover:-translate-y-1">
              <DocumentIcon className="h-3 md:h-5 w-3 md:w-5 text-gray-700 dark:text-gray-300" />
              <p className="text-xs md:text-md font-normal text-gray-600 dark:text-gray-300">
                Resume
              </p>
            </a>
          </div>
        </div>

        <div className="absolute right-0 top-0">
          <ThemeToggle />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div className="flex flex-col gap-4 border dark:border-gray-800 rounded-xl p-4 col-span-1 md:col-span-2 bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-row items-center gap-2">
            <InformationCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg md:text-md font-semibold text-gray-950 dark:text-gray-50">
              About Me
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-sm">
            I’m a dedicated software engineer with a strong foundation in both
            web and mobile application development. My work centers on crafting
            responsive, user-centric solutions, integrating an understanding of
            UI/UX to deliver engaging and intuitive experiences.
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-sm">
            Known for my results-driven approach, I excel at designing,
            developing, and deploying scalable digital solutions. My ability to
            adapt quickly to new technologies empowers me to stay ahead in the
            ever-evolving tech landscape, bringing innovative ideas from concept
            to reality.
          </p>
        </div>
        <div className="flex flex-col gap-4 border dark:border-gray-800 rounded-xl p-4 col-span-1 md:col-span-2 bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-row items-center gap-2">
            <BriefcaseIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg md:text-md font-semibold text-gray-950 dark:text-gray-50">
              Experience
            </h2>
          </div>
          <div className="relative border-l border-gray-400 dark:border-gray-700 ml-4">
            {EXPERIENCE.map((item, index) => (
              <div key={index} className="mb-4 ml-6">
                <div className="flex items-center justify-center w-2 h-2 md:w-3 md:h-3 bg-gray-900 dark:bg-gray-100 rounded-full -left-1 md:-left-[6px] absolute" />
                <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
                  <div>
                    <h2 className="text-md md:text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
                      {item.company}
                    </p>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border dark:border-gray-800 rounded-xl p-4 col-span-1 md:col-span-2 bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-row justify-between items-center gap-2 md:gap-4">
            <div className="flex flex-row items-center gap-2">
              <RectangleGroupIcon className="h-4 w-4 md:h-6 md:w-5 text-gray-500 dark:text-gray-400" />
              <h2 className="text-lg md:text-md font-semibold text-gray-950 dark:text-gray-50">
                Recent Projects
              </h2>
            </div>

            <Link
              href="/project"
              className="flex flex-row items-center gap-1 cursor-pointer">
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
                View All {PROJECTS.length}
              </p>
              <ChevronRightIcon className="h-4 md:h-3 w-4 md:w-3 text-gray-500 dark:text-gray-400" />
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {PROJECTS.map((item, index) => (
              <div key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex flex-col gap-1">
                  <div className="flex flex-row justify-between items-center">
                    <p className="font-medium text-sm text-gray-900 dark:text-gray-100">
                      {item.title}
                    </p>
                    <a
                      href={item.link ? item.link : "#"}
                      target={item.link ? "_blank" : "_self"}
                      className="text-sm md:text-xs text-gray-500 dark:text-gray-400 hover:scale-125 transform transition-transform">
                      {item.link ? (
                        <LinkIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <LinkSlashIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      )}
                    </a>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
                    {item.description}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
                    Technologies:{" "}
                    <span className="italic">{item.stack.join(", ")}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border rounded-xl p-4 col-span-1 md:col-span-2 bg-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <div className="flex flex-row items-center gap-2">
            <WrenchScrewdriverIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg md:text-md font-semibold text-gray-950 dark:text-gray-50">
              Tech Stack
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {TECH_STACK.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col gap-2 items-center justify-center bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                <item.icon />
                <p className="text-gray-500 dark:text-gray-300 text-sm md:text-xs text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-xl p-4 col-span-1 bg-gray-100 dark:bg-gray-900 dark:border-gray-800">
          <div className="flex flex-row items-center gap-2">
            <EnvelopeIcon className="h-4 w-4 md:h-4 md:w-4 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg md:text-md font-semibold text-gray-950 dark:text-gray-50">
              Connect with me
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
            {SOCIALS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="transform transition-transform hover:scale-105">
                <div className="bg-gray-50 dark:bg-gray-800 border dark:border-0 py-3 px-6 rounded-md cursor-pointer flex items-center">
                  <p className="text-sm md:text-md text-gray-600 dark:text-gray-300 flex-1">
                    {item.name}
                  </p>
                  <ArrowUpRightIcon className="h-3 w-3 md:h-4 md:w-4 text-gray-600 dark:text-gray-300" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-xl p-4 col-span-1 md:col-span-3 bg-gray-100 dark:bg-gray-900 dark:border-gray-800 relative">
          <div className="flex flex-row justify-between items-center gap-2">
            <div className="flex flex-row items-center gap-2">
              <UsersIcon className="h-4 w-4 md:h-5 md:w-5 text-gray-500 dark:text-gray-400" />
              <h2 className="text-lg md:text-md font-semibold text-gray-950 dark:text-gray-50">
                People I&apos;ve Worked With
              </h2>
            </div>
            <Link
              href="/feedback"
              className="flex flex-row items-center gap-1 cursor-pointer">
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xs">
                View All {FEEDBACK.length ? FEEDBACK.length : null}
              </p>
              <ChevronRightIcon className="h-4 md:h-3 w-4 md:w-3 text-gray-500 dark:text-gray-400" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {FEEDBACK.map(
              (item, index) =>
                item.featured && (
                  <div key={index}>
                    <div className="bg-gray-50 dark:bg-gray-800 py-3 px-6 rounded-md flex flex-col gap-2">
                      <p className="text-gray-800 dark:text-gray-200 text-sm md:text-xs">
                        {item.feedback}
                      </p>
                      <h2 className="text-sm md:text-xs text-gray-500 dark:text-gray-400">
                        {item.name} -{" "}
                        <span className="italic">{item.position}</span>
                      </h2>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
