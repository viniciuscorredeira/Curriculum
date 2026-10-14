import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import {
  About,
  Contact,
  EducationSection,
  ExperienceSection,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/ui";
import { hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const props = { lang, dict };

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        {dict.a11y.skip}
      </a>
      {/* Brilho quente e suave atrás do topo da página. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-168 bg-[radial-gradient(55%_60%_at_15%_0%,var(--accent-soft),transparent)] opacity-70"
      />
      <Header lang={lang} name={profile.name} nav={dict.nav} a11y={dict.a11y} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero {...props} />
        <About {...props} />
        <ExperienceSection {...props} />
        <Projects {...props} />
        <Skills {...props} />
        <EducationSection {...props} />
        <Contact {...props} />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-subtle sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>© {profile.name}</p>
          <p>{dict.footer}</p>
        </div>
      </footer>
    </>
  );
}
