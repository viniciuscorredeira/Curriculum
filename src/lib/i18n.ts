export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Valor traduzido: um por idioma. */
export type Localized<T = string> = Record<Locale, T>;

/** Resolve um valor que pode ser fixo (igual nos dois idiomas) ou traduzido. */
export function t<T>(value: T | Localized<T>, lang: Locale): T {
  if (value !== null && typeof value === "object" && "pt" in value && "en" in value) {
    return (value as Localized<T>)[lang];
  }
  return value as T;
}

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
