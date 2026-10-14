import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { defaultLocale, hasLocale, t } from "@/lib/i18n";

export const alt = `${profile.name} · ${profile.role.pt} / ${profile.role.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = hasLocale(raw) ? raw : defaultLocale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1c1814",
          color: "#efe6da",
        }}
      >
        <div style={{ fontSize: 28, color: "#e3a37f", letterSpacing: 4, textTransform: "uppercase" }}>
          {t(profile.role, lang)}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>{profile.name}</div>
        <div style={{ fontSize: 32, color: "#c6baab", marginTop: 28, maxWidth: 960, lineHeight: 1.4 }}>
          {t(profile.headline, lang)}
        </div>
      </div>
    ),
    size,
  );
}
