/**
 * Locale model.
 *
 * English is the default and is served from the site root (`/`, `/about`, …);
 * Arabic lives under `/ar`. Internally every page renders from the same
 * `app/[locale]` route tree — `src/proxy.ts` rewrites the un-prefixed English
 * URLs onto `/en/*`, so a new page added under `app/[locale]` is bilingual
 * without any further routing work.
 */
export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

/** Label used in the language switcher, written in the language itself. */
export const localeNames: Record<Locale, string> = {
  en: "EN",
  ar: "العربية",
};

/** BCP 47 / OpenGraph locale identifiers. */
export const localeTags: Record<Locale, string> = {
  en: "en",
  ar: "ar",
};

export const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  ar: "ar_JO",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function direction(locale: Locale): "ltr" | "rtl" {
  return localeDirection[locale];
}

/**
 * Public URL for a path in a given locale.
 * `localePath("en", "/about")` → `/about`; `localePath("ar", "/about")` → `/ar/about`.
 */
export function localePath(locale: Locale, path = "/"): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

  if (locale === defaultLocale) {
    return normalized || "/";
  }

  return `/${locale}${normalized}`;
}

/** Inverse of `localePath`: the locale-independent path for a URL pathname. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }

  return pathname || "/";
}

/** Locale a pathname belongs to, defaulting to English. */
export function localeFromPathname(pathname: string): Locale {
  for (const locale of locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }

  return defaultLocale;
}

/**
 * hreflang map for a path, identical in shape on every page.
 * `x-default` points at English, the default locale served from the root.
 */
export function languageAlternates(path = "/"): Record<string, string> {
  return {
    en: localePath("en", path),
    ar: localePath("ar", path),
    "x-default": localePath(defaultLocale, path),
  };
}
