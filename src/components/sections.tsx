import type { ReactNode } from "react";
import { profile } from "@/content/profile";
import type { Dictionary } from "@/content/ui";
import { cvHref } from "@/lib/cv";
import { t, type Locale } from "@/lib/i18n";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./icons";

type SectionProps = { lang: Locale; dict: Dictionary };

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border py-20 sm:py-28">
      <span className="mb-5 block h-1 w-10 rounded-full bg-accent" aria-hidden="true" />
      <h2
        id={`${id}-title`}
        className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full bg-chip px-3.5 py-1 text-sm font-medium text-muted">{children}</li>
  );
}

const buttonBase =
  "inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const buttonPrimary = `${buttonBase} bg-accent text-accent-contrast hover:bg-accent-hover`;
const buttonGhost = `${buttonBase} border border-border bg-surface text-foreground hover:border-accent hover:text-accent`;

function SocialLinks() {
  return (
    <>
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={buttonGhost}>
        <LinkedInIcon className="size-[1.1em]" />
        LinkedIn
      </a>
      <a href={profile.links.github} target="_blank" rel="noreferrer" className={buttonGhost}>
        <GitHubIcon className="size-[1.1em]" />
        GitHub
      </a>
    </>
  );
}

function CvButton({ lang, dict }: SectionProps) {
  const href = cvHref(lang);
  if (!href) return null;

  return (
    <a href={href} download className={buttonGhost}>
      <DownloadIcon className="size-[1.1em]" />
      {dict.cv.download}
    </a>
  );
}

export function Hero({ lang, dict }: SectionProps) {
  return (
    <section id="top" className="pb-20 pt-36 sm:pb-28 sm:pt-44">
      <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted">
        <span className="size-2 rounded-full bg-sage" aria-hidden="true" />
        {dict.hero.available}
      </p>
      <h1 className="font-heading text-5xl font-extrabold tracking-tight text-balance sm:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-4 font-heading text-2xl font-semibold text-accent sm:text-3xl">
        {t(profile.role, lang)}
      </p>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted text-pretty sm:text-xl sm:leading-relaxed">
        {t(profile.headline, lang)}
      </p>
      <p className="mt-6 inline-flex items-center gap-2 text-base text-subtle">
        <MapPinIcon className="size-[1.1em]" />
        {t(profile.location, lang)}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={buttonPrimary}>
          <MailIcon className="size-[1.1em]" />
          {dict.hero.contact}
        </a>
        <CvButton lang={lang} dict={dict} />
        <SocialLinks />
      </div>
    </section>
  );
}

export function About({ lang, dict }: SectionProps) {
  return (
    <Section id="about" title={dict.sections.about}>
      <div className="max-w-3xl space-y-5 text-lg leading-[1.75] text-muted">
        {t(profile.summary, lang).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {profile.highlights.map((item) => (
          <div key={t(item.label, "en")} className="rounded-3xl border border-border bg-surface p-6">
            <dt className="text-sm font-medium text-subtle">{t(item.label, lang)}</dt>
            <dd className="mt-2 font-heading text-2xl font-bold">{t(item.value, lang)}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function ExperienceSection({ lang, dict }: SectionProps) {
  return (
    <Section id="experience" title={dict.sections.experience}>
      <ol className="space-y-16">
        {profile.experience.map((job) => (
          <li key={job.company} className="grid gap-4 md:grid-cols-[13rem_1fr] md:gap-12">
            <div className="md:pt-1.5">
              <p className="text-base font-semibold tabular-nums text-foreground">{t(job.period, lang)}</p>
              <p className="mt-1 text-sm leading-relaxed text-subtle">{t(job.location, lang)}</p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold sm:text-2xl">{t(job.role, lang)}</h3>
              <p className="mt-1 text-lg font-semibold text-accent">{job.company}</p>
              <ul className="mt-5 max-w-3xl space-y-3 text-base leading-relaxed text-muted">
                {t(job.bullets, lang).map((bullet) => (
                  <li key={bullet} className="flex gap-3.5">
                    <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {job.tags && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Tag key={t(tag, "en")}>{t(tag, lang)}</Tag>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Projects({ lang, dict }: SectionProps) {
  return (
    <Section id="projects" title={dict.sections.projects}>
      <ul className="grid gap-5 md:grid-cols-2 md:gap-6">
        {profile.projects.map((project) => (
          <li
            key={t(project.name, "en")}
            className="flex flex-col rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-accent sm:p-8"
          >
            <h3 className="font-heading text-xl font-bold sm:text-2xl">{t(project.name, lang)}</h3>
            <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{t(project.description, lang)}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={t(tag, "en")}>{t(tag, lang)}</Tag>
              ))}
            </ul>
            <div className="mt-7 flex gap-5 text-base font-semibold">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
                >
                  <GitHubIcon className="size-[1.1em]" />
                  {dict.projects.repo}
                </a>
              )}
              {"demo" in project && typeof project.demo === "string" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover"
                >
                  {dict.projects.demo}
                  <ArrowUpRightIcon className="size-[1.1em]" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Skills({ lang, dict }: SectionProps) {
  return (
    <Section id="skills" title={dict.sections.skills}>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {profile.skills.map((group) => (
          <div key={t(group.title, "en")}>
            <h3 className="font-heading text-lg font-bold sm:text-xl">{t(group.title, lang)}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={t(item, "en")}>{t(item, lang)}</Tag>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection({ lang, dict }: SectionProps) {
  return (
    <Section id="education" title={dict.sections.education}>
      <ul className="space-y-8">
        {profile.education.map((item) => (
          <li key={item.institution}>
            <h3 className="font-heading text-xl font-bold sm:text-2xl">{t(item.course, lang)}</h3>
            <p className="mt-1.5 text-base text-muted">
              <span className="font-semibold text-accent">{item.institution}</span>
              <span className="text-subtle"> · {t(item.period, lang)}</span>
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-16 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
        {dict.sections.studying}
      </h3>
      <ul className="mt-6 flex flex-wrap gap-2">
        {profile.studying.map((item) => (
          <Tag key={t(item, "en")}>{t(item, lang)}</Tag>
        ))}
      </ul>

      <h3 className="mt-16 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
        {dict.sections.languages}
      </h3>
      <ul className="mt-8 space-y-6">
        {profile.languages.map((language) => (
          <li key={t(language.name, "en")}>
            <p className="text-lg">
              <span className="font-semibold">{t(language.name, lang)}</span>
              <span className="text-subtle"> · </span>
              <span className="text-muted">{t(language.level, lang)}</span>
            </p>
            {"detail" in language && language.detail && (
              <p className="mt-1.5 max-w-3xl text-base leading-relaxed text-subtle">
                {t(language.detail, lang)}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Contact({ lang, dict }: SectionProps) {
  return (
    <Section id="contact" title={dict.sections.contact}>
      <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
        {dict.contact.text}
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block font-heading text-lg font-bold tracking-tight wrap-anywhere underline decoration-accent/40 decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent sm:text-xl"
      >
        {profile.email}
      </a>
      <div className="mt-10 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={buttonPrimary}>
          <MailIcon className="size-[1.1em]" />
          {dict.contact.email}
        </a>
        <CvButton lang={lang} dict={dict} />
        <SocialLinks />
      </div>
    </Section>
  );
}
