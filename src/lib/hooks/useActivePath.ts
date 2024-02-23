import { create } from "zustand";
import { links } from "../data";

type LinkName = (typeof links)[number]["name"];

type ActiveLinkStore = {
  activeLink: LinkName;
  setActiveLink: (section: LinkName) => void;
};

export const useActiveSectionStore = create<ActiveLinkStore>((set) => ({
  activeLink: "Home",
  setActiveLink: (link) => set({ activeLink: link }),
}));
