import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";

/**
 * Typography.
 *
 * IBM Plex Sans and IBM Plex Sans Arabic are companion designs from the same
 * family, so the English and Arabic sites share one voice instead of looking
 * like two different companies. Both are self-hosted by next/font — no external
 * request at runtime, and no render-blocking stylesheet.
 *
 * `preload` is off deliberately. Both locales render from one shared layout, so
 * a preload link would be emitted on every page for every face, making English
 * visitors fetch the Arabic face and Arabic visitors fetch the full Latin set —
 * roughly 40 KB of waste per visit. Without it, the inlined @font-face rules
 * still start the fetch as soon as the head is parsed, and only the faces the
 * page actually uses are downloaded. `display: swap` plus next/font's adjusted
 * fallback metrics keep text visible throughout and avoid layout shift.
 */
export const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

export const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});
