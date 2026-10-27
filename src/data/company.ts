import type { CompanyInfo } from "./types";

/**
 * Company facts from the latest A4 profile. Localized text lives in dictionaries.
 */
export const company: CompanyInfo = {
  name: "Afaq Riyada Solutions",
  domain: "afaqriyada.com",
  website: "https://afaqriyada.com",
  salesEmail: "sales@afaqriyada.com",
  infoEmail: "info@afaqriyada.com",
  phone: "+962790440487",
};

export const generalManager = {
  phone: "+962779505703",
  email: "abdullah.nofal@afaqriyada.com",
};

export const mailto = {
  sales: `mailto:${company.salesEmail}`,
  info: `mailto:${company.infoEmail}`,
} as const;
