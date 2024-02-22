import { create } from "zustand";

import type { Theme, ThemeStore } from "../types";
import { useEffect } from "react";

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

const useThemeMode = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      useThemeStore.setState({ theme: localTheme });
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      useThemeStore.setState({ theme: "dark" });
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return [theme, toggleTheme] as const;
};

export default useThemeMode;
