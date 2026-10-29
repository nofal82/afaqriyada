/**
 * Shared content types.
 *
 * The files in `src/data` hold only language-independent facts: slugs, asset
 * paths, official manufacturer names, official websites and layout hints. Every
 * translatable string lives in `src/data/dictionaries/<locale>.ts` and is keyed
 * by the slugs below, so a new locale is a new dictionary and nothing else.
 */

export interface CompanyInfo {
  /** Official Latin brand name, used in both locales for the domain and email. */
  name: string;
  domain: string;
  website: string;
  salesEmail: string;
  infoEmail: string;
  /** Sales department number from the company profile. */
  phone: string;
}

export type CountryKey = "portugal" | "germany" | "liechtenstein" | "poland" | "uk" | "usa" | "switzerland" | "australia" | "italy";

export interface Manufacturer {
  /** Trademark, kept in its official form in every locale. */
  name: string;
  slug: string;
  officialWebsite: string;
  /** Path under /public/partners. Omitted when no official asset is available. */
  logo?: string;
  /** Intrinsic logo dimensions, kept so aspect ratio is never distorted. */
  logoWidth?: number;
  logoHeight?: number;
  country: CountryKey;
}

export type SolutionCategorySlug = "water-wastewater" | "industrial-process";

export interface SolutionCategory {
  slug: SolutionCategorySlug;
}

export interface ProductSolution {
  slug: string;
  category: SolutionCategorySlug;
  /** Manufacturer slugs; empty where the manufacturer is not yet confirmed. */
  manufacturers?: string[];
  /** Locally hosted manufacturer product image. */
  image: ProductImage;
}

export interface ProductImage {
  src: string;
  width: number;
  height: number;
}

export interface Industry {
  slug: string;
  icon: IndustryIcon;
}

export type IndustryIcon =
  | "water"
  | "chemical"
  | "manufacturing"
  | "infrastructure"
  | "energy";

export interface NavItem {
  /** Key into the dictionary's `nav` section. */
  key: NavKey;
  /** Anchor on the landing page today; a route once sub-pages are added. */
  href: string;
  /** Route this anchor is expected to become. */
  futureRoute?: string;
}

export type NavKey =
  | "home"
  | "about"
  | "solutions"
  | "partners"
  | "contact"
  | "waterWastewater"
  | "industrialProcess"
  | "privacy"
  | "legal";
