import type { CompanyInfo } from "./types";

/**
 * Confirmed, language-independent company facts only.
 * The localized company name, description and location string live in the
 * dictionaries. No phone number, street address or founding details exist yet —
 * they stay out rather than being filled in with assumptions.
 */
export const company: CompanyInfo = {
  name: "Afaq Riyada",
  domain: "afaqriyada.com",
  website: "https://afaqriyada.com",
  salesEmail: "sales@afaqriyada.com",
  infoEmail: "info@afaqriyada.com",
  phone: "",
};

export const mailto = {
  sales: `mailto:${company.salesEmail}`,
  info: `mailto:${company.infoEmail}`,
} as const;
