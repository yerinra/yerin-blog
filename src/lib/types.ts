import { links } from "./data";

export type PostInfo = {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "life" | "dev";
  tags: string[];
};

export type Theme = "light" | "dark";

export type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
};

export type LinkName = (typeof links)[number]["name"];

export type ActiveLinkStore = {
  activeSection: LinkName;
  setActiveLink: (section: LinkName) => void;
};
