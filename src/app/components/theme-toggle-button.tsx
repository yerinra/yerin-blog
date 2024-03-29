"use client";

import useThemeMode from "@/lib/hooks/useTheme";
import React from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeToggleButton() {
  const [theme, toggleTheme] = useThemeMode();
  return (
    <button onClick={toggleTheme} className="ml-auto pr-4 mb-4">
      {theme === "dark" && <SunIcon />}
      {theme === "light" && <MoonIcon />}
    </button>
  );
}
