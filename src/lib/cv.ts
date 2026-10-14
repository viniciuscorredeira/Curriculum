import { existsSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/content/profile";
import { locales, type Locale } from "@/lib/i18n";

const inPublic = (href: string) => existsSync(join(process.cwd(), "public", href));

/**
 * Link do PDF do currículo no idioma pedido; se só existir o do outro idioma, usa esse.
 * No site publicado, retorna null enquanto nenhum PDF estiver em public/cv/, e o
 * botão não aparece. Em desenvolvimento sempre retorna o link, para ver o layout.
 */
export function cvHref(lang: Locale): string | null {
  if (process.env.NODE_ENV !== "production") return profile.cv[lang];
  const candidates = [lang, ...locales.filter((other) => other !== lang)].map((l) => profile.cv[l]);
  return candidates.find(inPublic) ?? null;
}
