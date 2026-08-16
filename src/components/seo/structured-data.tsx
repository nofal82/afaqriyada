import { company } from "@/data/company";
import { getDictionary } from "@/data/dictionaries";
import { manufacturers } from "@/data/partners";
import { localePath, localeTags, type Locale } from "@/lib/i18n";
import { en } from "@/data/dictionaries/en";
import { ar } from "@/data/dictionaries/ar";

/**
 * Organization + WebSite structured data, emitted per locale.
 *
 * Only confirmed facts are published: name, website, city/country, and the two
 * public email addresses. No telephone, street address, coordinates, founding
 * date or legal identifiers are asserted, because none are confirmed. The
 * Arabic company name is published as `alternateName` so both forms resolve to
 * the same organization rather than looking like two companies.
 */
export function OrganizationSchema({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const organizationId = `${company.website}/#organization`;
  const pageUrl = `${company.website}${localePath(locale, "/")}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: company.name,
      alternateName: locale === "ar" ? en.brand.name : ar.brand.name,
      url: company.website,
      description: dict.footer.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amman",
        addressCountry: "JO",
      },
      areaServed: { "@type": "Country", name: "Jordan" },
      email: company.infoEmail,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: company.salesEmail,
          availableLanguage: ["English", "Arabic"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: company.infoEmail,
          availableLanguage: ["English", "Arabic"],
        },
      ],
      knowsAbout: manufacturers.map(
        (manufacturer) =>
          dict.partners.items[manufacturer.slug as keyof typeof dict.partners.items]
            .category,
      ),
    },
    {
      "@type": "WebSite",
      "@id": `${company.website}/#website`,
      url: pageUrl,
      name: dict.brand.name,
      description: dict.meta.description,
      inLanguage: localeTags[locale],
      publisher: { "@id": organizationId },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Content is static and author-controlled; no user input is interpolated.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
