import type { ProductSolution, SolutionCategory, SolutionCategorySlug } from "./types";

export const solutionCategories: SolutionCategory[] = [
  { slug: "water-wastewater" },
  { slug: "industrial-process" },
];

/**
 * Product groups offered by Afaq Riyada — structure only.
 *
 * Titles, descriptions and application tags are translated per locale in the
 * dictionaries, keyed by `slug`. Where a manufacturer is not yet confirmed,
 * `manufacturers` is omitted and the card says so instead of naming one. No
 * model numbers, ratings, materials or capacities appear anywhere; those come
 * from manufacturer documentation per enquiry.
 */
export const products: ProductSolution[] = [
  {
    slug: "surge-vessels",
    category: "water-wastewater",
    manufacturers: ["henriques-henriques"],
    illustration: "surge-vessel",
  },
  {
    slug: "pumps",
    category: "water-wastewater",
    illustration: "pump",
  },
  {
    slug: "water-industrial-valves",
    category: "water-wastewater",
    illustration: "valve",
  },
  {
    slug: "gaskets-sealing",
    category: "industrial-process",
    manufacturers: ["kwo", "teadit"],
    illustration: "gasket",
  },
  {
    slug: "process-valves",
    category: "industrial-process",
    manufacturers: ["gemu"],
    illustration: "diaphragm-valve",
  },
  {
    slug: "glass-lined-equipment",
    category: "industrial-process",
    manufacturers: ["thaletec"],
    illustration: "glass-lined-reactor",
  },
  {
    slug: "mechanical-seals",
    category: "industrial-process",
    illustration: "mechanical-seal",
  },
  {
    slug: "thermoplastic-solutions",
    category: "industrial-process",
    manufacturers: ["simona"],
    illustration: "thermoplastic-piping",
  },
  {
    slug: "graphite-process-technology",
    category: "industrial-process",
    manufacturers: ["sgl-carbon"],
    illustration: "graphite-heat-exchanger",
  },
];

export function productsByCategory(category: SolutionCategorySlug) {
  return products.filter((product) => product.category === category);
}
