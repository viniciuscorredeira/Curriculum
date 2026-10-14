"use client";

/**
 * Script inline que roda durante o parse do HTML (antes da pintura).
 * No servidor sai como text/javascript; no cliente como text/plain, para o
 * React não avisar sobre <script> renderizado. suppressHydrationWarning
 * cobre a diferença de type entre os dois.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
