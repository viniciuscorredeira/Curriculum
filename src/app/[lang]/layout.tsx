import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { InlineScript } from "@/components/inline-script";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/ui";
import { defaultLocale, hasLocale, htmlLang, locales, t } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { themeScript } from "@/lib/theme";
import "../globals.css";

// Texto corrido: Inter (feita para leitura em tela).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Títulos: Plus Jakarta Sans.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang: raw } = await params;
  const lang = hasLocale(raw) ? raw : defaultLocale;
  const title = `${profile.name} · ${t(profile.role, lang)}`;
  const description = getDictionary(lang).meta.description;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: `/${lang}`,
      languages: { "pt-BR": "/pt", en: "/en", "x-default": "/" },
    },
    openGraph: {
      type: "profile",
      title,
      description,
      url: `/${lang}`,
      siteName: profile.name,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang: raw } = await params;
  const lang = hasLocale(raw) ? raw : defaultLocale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: t(profile.role, lang),
    email: `mailto:${profile.email}`,
    url: `${siteUrl}/${lang}`,
    sameAs: [profile.links.linkedin, profile.links.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Catanduva",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  };

  return (
    <html
      lang={htmlLang[lang]}
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="min-h-dvh font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
