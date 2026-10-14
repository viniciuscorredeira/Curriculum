"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/content/ui";
import type { Locale } from "@/lib/i18n";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const sectionIds = ["about", "projects", "experience", "skills", "education", "contact"] as const;

type HeaderProps = {
  lang: Locale;
  name: string;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
};

export function Header({ lang, name, nav, a11y }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const other: Locale = lang === "pt" ? "en" : "pt";
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="font-heading text-xl font-extrabold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          {initials}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label={a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-medium">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="rounded-full px-3.5 py-2 text-muted transition-colors hover:bg-chip hover:text-foreground"
                >
                  {nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={`/${other}`}
            hrefLang={other}
            aria-label={a11y.language}
            title={a11y.language}
            className="inline-flex h-10 items-center rounded-full px-3.5 text-sm font-semibold uppercase text-muted transition-colors hover:bg-chip hover:text-foreground"
          >
            {other}
          </Link>
          <ThemeToggle label={a11y.theme} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? a11y.closeMenu : a11y.menu}
            className="inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-chip hover:text-foreground md:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={a11y.mainNav} className="border-t border-border/70 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-muted transition-colors hover:text-foreground"
                >
                  {nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
