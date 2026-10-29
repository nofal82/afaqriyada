import type { Locale } from "@/lib/i18n";

/** Original lettering and six-line symbol from the supplied A4 profile cover. */
export const brandLogos: Record<Locale, { src: string; width: number; height: number }> = {
  en: { src: "/brand/logo-en.svg", width: 912, height: 168 },
  ar: { src: "/brand/logo-ar.svg", width: 777, height: 169 },
};
