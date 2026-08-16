import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { languageAlternates, localePath, locales } from "@/lib/i18n";

/**
 * Only routes that actually exist are listed, once per locale, each carrying
 * the full hreflang set. As pages are added under `app/[locale]`, add their
 * paths to `PATHS` and both locales are covered.
 *
 * /privacy and /legal are intentionally excluded: they are placeholders and are
 * marked noindex until the real documents are issued.
 */
const PATHS = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${company.website}${localePath(locale, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? 1 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(path)).map(([key, value]) => [
            key,
            `${company.website}${value}`,
          ]),
        ),
      },
    })),
  );
}
