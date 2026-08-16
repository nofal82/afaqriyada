import type { Industry } from "./types";

/**
 * Markets and applications the offered technologies can support — structure
 * only; titles and descriptions are translated in the dictionaries. These are
 * framed as application areas, not as claimed sector track record.
 */
export const industries: Industry[] = [
  { slug: "water-wastewater", icon: "water" },
  { slug: "chemical-process", icon: "chemical" },
  { slug: "manufacturing", icon: "manufacturing" },
  { slug: "utilities-infrastructure", icon: "infrastructure" },
  { slug: "energy-industrial", icon: "energy" },
];
