"use client";

import { useLayoutEffect } from "react";
import { MoonIcon, SunIcon } from "./icons";

function applyStoredTheme() {
  let theme: string | null = null;
  try {
    theme = localStorage.getItem("theme");
  } catch {}
  if (theme !== "light" && theme !== "dark") {
    theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle({ label }: { label: string }) {
  // Reaplica após o remount do Strict Mode em dev (no-op em produção).
  useLayoutEffect(applyStoredTheme, []);

  function toggle() {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-chip hover:text-foreground"
    >
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}
