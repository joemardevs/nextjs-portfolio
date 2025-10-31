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
import { cn } from "@/lib/utils";

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
            {EXPERIENCE.map((item, index) => {
              const isPresent = item.date.toLowerCase().includes("present");

              return (
                <div key={index} className="mb-4 ml-6">
                  <div
                    className={cn(
                      "flex items-center justify-center w-2 h-2 md:w-3 md:h-3 rounded-full -left-1 md:-left-[6px] absolute",
                      isPresent
                        ? "bg-gray-900 dark:bg-gray-100"
                        : "border border-gray-900 dark:border-gray-100 bg-gray-100 dark:bg-gray-900"
                    )}
                  />
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
              );
            })}
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
            {PROJECTS.map((item, index) => {
              const iosLink = Boolean(item.appstore);
              const androidLink = Boolean(item.playstore);
              const defaultLink = Boolean(item.link);

              return (
                <div key={index}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex flex-col gap-1">
                    <div className="flex flex-row justify-between items-center">
                      <p className="font-medium text-sm text-gray-900 dark:text-gray-100">
                        {item.title}
                      </p>
                      <div className="flex gap-2">
                        {androidLink && (
                          <a
                            href={item.playstore ? item.playstore : "#"}
                            target={item.playstore ? "_blank" : "_self"}
                            className="text-sm md:text-xs hover:scale-125 transform transition-transform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 fill-gray-500 dark:fill-gray-400"
                              viewBox="0 0 24 24">
                              <path d="m3.637 3.434l8.74 8.571l-8.675 8.65a2.123 2.123 0 0 1-.326-.613a2.45 2.45 0 0 1 0-.755V4.567c-.026-.395.065-.79.26-1.133m12.506 4.833l-2.853 2.826L4.653 2.6c.28-.097.58-.124.873-.078c.46.126.899.32 1.302.573l7.816 4.325c.508.273 1.003.56 1.498.847M13.29 12.93l2.839 2.788l-2.058 1.146l-6.279 3.49c-.52.287-1.042.561-1.55.874a1.798 1.798 0 0 1-1.472.195zm7.36-.925a1.915 1.915 0 0 1-.99 1.72l-2.346 1.302l-3.087-3.022l3.1-3.074c.795.443 1.577.886 2.358 1.303a1.888 1.888 0 0 1 .964 1.771" />
                            </svg>
                          </a>
                        )}
                        {iosLink && (
                          <a
                            href={item.appstore ? item.appstore : "#"}
                            target={item.appstore ? "_blank" : "_self"}
                            className="text-sm md:text-xs hover:scale-125 transform transition-transform">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 fill-gray-500 dark:fill-gray-400"
                              viewBox="0 0 24 24">
                              <path d="m8.809 14.92l6.11-11.037c.084-.152.168-.302.244-.459c.069-.142.127-.285.165-.44c.08-.326.058-.666-.066-.977a1.511 1.511 0 0 0-.62-.735a1.417 1.417 0 0 0-.922-.193c-.32.043-.613.194-.844.43c-.11.11-.2.235-.283.368c-.092.146-.175.298-.259.45l-.386.697l-.387-.698c-.084-.151-.167-.303-.259-.449a2.168 2.168 0 0 0-.283-.369a1.449 1.449 0 0 0-.844-.429a1.418 1.418 0 0 0-.921.193a1.512 1.512 0 0 0-.62.735a1.586 1.586 0 0 0-.066.977c.038.155.096.298.164.44c.076.157.16.307.244.459l1.248 2.254l-4.862 8.782H2.029c-.167 0-.335 0-.502.01c-.152.009-.3.028-.448.071c-.31.09-.582.28-.778.548A1.581 1.581 0 0 0 .3 17.404c.197.268.468.457.779.548c.148.043.296.062.448.071c.167.01.335.01.503.01h13.097a1.93 1.93 0 0 0 .1-.27c.415-1.416-.616-2.844-2.035-2.844zm-5.696 3.622l-.792 1.5c-.082.156-.165.31-.239.471a2.36 2.36 0 0 0-.16.452a1.7 1.7 0 0 0 .064 1.003c.121.318.334.583.607.755c.272.172.589.242.901.197c.314-.044.6-.198.826-.44c.108-.115.196-.242.278-.378c.09-.15.171-.306.253-.462L6 19.464c-.09-.15-.947-1.47-2.887-.922m20.586-3.006a1.47 1.47 0 0 0-.779-.54a2.031 2.031 0 0 0-.448-.071c-.168-.01-.335-.01-.503-.01h-3.321L14.258 7.1a4.064 4.064 0 0 0-1.076 2.198a4.645 4.645 0 0 0 .546 3l5.274 9.393c.084.15.167.3.259.444c.084.13.174.253.283.364c.231.232.524.38.845.423c.32.042.643-.024.922-.19a1.5 1.5 0 0 0 .621-.726c.125-.307.146-.642.066-.964a2.173 2.173 0 0 0-.165-.434c-.075-.155-.16-.303-.244-.453l-1.216-2.166h1.596c.168 0 .335 0 .503-.009c.152-.009.3-.028.448-.07a1.47 1.47 0 0 0 .78-.541a1.539 1.539 0 0 0 .3-.916a1.539 1.539 0 0 0-.3-.916Z" />
                            </svg>
                          </a>
                        )}
                        {defaultLink && (
                          <a
                            href={item.link ? item.link : "#"}
                            target={item.link ? "_blank" : "_self"}
                            className="text-sm md:text-xs text-gray-500 dark:text-gray-400 hover:scale-125 transform transition-transform">
                            {item.link ? (
                              <LinkIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            ) : (
                              <LinkSlashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            )}
                          </a>
                        )}
                      </div>
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
              );
            })}
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
