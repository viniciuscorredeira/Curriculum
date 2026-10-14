import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, type Locale } from "@/lib/i18n";

/** Escolhe o idioma pelo Accept-Language do navegador (pt-* → pt, en-* → en). */
function preferredLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  return ranked.find((entry) => hasLocale(entry.lang))?.lang as Locale ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}`;
  return NextResponse.redirect(url);
}

// Só a raiz precisa de redirecionamento; /pt e /en são páginas estáticas.
export const config = {
  matcher: "/",
};
