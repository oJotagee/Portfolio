"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-orange-500 hover:text-orange-400"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
