import { Metadata } from "next";
import { NavLink } from "./types";

export const SITE_NAME = "Joemar Palting";
export const SITE_TITLE = "Software Engineer";
export const SITE_DESCRIPTION =
  "A software engineer who builds web and mobile applications.";
export const SITE_LOCATION = "Isabela, Philippines";
export const SITE_EMAIL = "joemarpalting19@gmail.com";
export const CURRENT_YEAR = new Date().getFullYear();
export const START_YEAR = 2024;

export const SITE_KEYWORDS = [
  "Joemar Palting",
  "software engineer",
  "web developer",
  "mobile developer",
  "fullstack developer",
  "software developer",
  "developer",
  "web applications",
  "mobile applications",
].join(", ");

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Service", href: "/service" },
  { label: "Testimonial", href: "/testimonial" },
];

export const SOCIAL_URLS = {
  github: "https://github.com/joemardevs",
  linkedin: "https://www.linkedin.com/in/joemarpalting/",
  facebook: "https://www.facebook.com/joemardevs",
  instagram: "https://www.instagram.com/joemar.world",
};

export const RESUME_PATH = "/PALTING, JOEMAR.pdf";
export const PROFILE_IMAGE_PATH = "/images/joemar.jpeg";
export const LINKEDIN_URL = "https://www.linkedin.com/in/joemarpalting/";

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: `${SITE_NAME} - ${SITE_TITLE}`,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  publisher: "Vercel",
};

export const FOOTER_YEAR_TEXT =
  CURRENT_YEAR === START_YEAR
    ? `${START_YEAR}`
    : `${START_YEAR} - ${CURRENT_YEAR}`;
