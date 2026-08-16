import type { NavItem } from "./types";

/**
 * Navigation structure — labels come from the dictionary via `key`.
 *
 * Each entry carries the route it is expected to become (`futureRoute`), so
 * promoting a section to a standalone page means creating it under
 * `app/[locale]` and switching `href` for `futureRoute`. Hrefs are written
 * without a locale prefix; components resolve them through `localePath`.
 */
export const primaryNavigation: NavItem[] = [
  { key: "home", href: "#top", futureRoute: "/" },
  { key: "about", href: "#about", futureRoute: "/about" },
  { key: "solutions", href: "#solutions", futureRoute: "/products" },
  { key: "partners", href: "#partners", futureRoute: "/partners" },
  { key: "contact", href: "#contact", futureRoute: "/contact" },
];

export const footerNavigation = {
  company: [
    { key: "about", href: "#about", futureRoute: "/about" },
    { key: "contact", href: "#contact", futureRoute: "/contact" },
  ] satisfies NavItem[],
  solutions: [
    {
      key: "waterWastewater",
      href: "#solutions",
      futureRoute: "/products/water-wastewater",
    },
    {
      key: "industrialProcess",
      href: "#solutions",
      futureRoute: "/products/industrial-process",
    },
    { key: "partners", href: "#partners", futureRoute: "/partners" },
  ] satisfies NavItem[],
  legal: [
    { key: "privacy", href: "/privacy", futureRoute: "/privacy" },
    { key: "legal", href: "/legal", futureRoute: "/legal" },
  ] satisfies NavItem[],
};

export const primaryCtaHref = "#contact";
