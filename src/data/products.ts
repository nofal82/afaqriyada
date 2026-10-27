import type { ProductSolution, SolutionCategory, SolutionCategorySlug } from "./types";

export const solutionCategories: SolutionCategory[] = [{ slug: "water-wastewater" }, { slug: "industrial-process" }];

export const products: ProductSolution[] = [
  {
    "slug": "surge-vessels",
    "category": "water-wastewater",
    "manufacturers": [
      "henriques-henriques"
    ],
    "illustration": "surge-vessel"
  },
  {
    "slug": "instrumentation",
    "category": "water-wastewater",
    "manufacturers": [
      "kobold"
    ],
    "illustration": "instrument"
  },
  {
    "slug": "process-valves",
    "category": "water-wastewater",
    "manufacturers": [
      "gemu"
    ],
    "illustration": "diaphragm-valve"
  },
  {
    "slug": "pumps",
    "category": "water-wastewater",
    "manufacturers": [
      "lutz"
    ],
    "illustration": "pump"
  },
  {
    "slug": "gaskets-sealing",
    "category": "industrial-process",
    "manufacturers": [
      "kwo"
    ],
    "illustration": "gasket"
  },
  {
    "slug": "mechanical-seals",
    "category": "industrial-process",
    "manufacturers": [
      "depac"
    ],
    "illustration": "mechanical-seal"
  },
  {
    "slug": "special-gaskets",
    "category": "industrial-process",
    "manufacturers": [
      "spetech"
    ],
    "illustration": "gasket"
  },
  {
    "slug": "hose-assemblies",
    "category": "industrial-process",
    "manufacturers": [
      "flextech"
    ],
    "illustration": "hose"
  },
  {
    "slug": "steam-systems",
    "category": "industrial-process",
    "manufacturers": [
      "valsteam-adca"
    ],
    "illustration": "steam"
  },
  {
    "slug": "corrosion-resistant-handling",
    "category": "industrial-process",
    "manufacturers": [
      "andronaco"
    ],
    "illustration": "corrosion"
  },
  {
    "slug": "sensors-measurement",
    "category": "industrial-process",
    "manufacturers": [
      "baumer"
    ],
    "illustration": "instrument"
  },
  {
    "slug": "industrial-filtration",
    "category": "industrial-process",
    "manufacturers": [
      "junker-filter"
    ],
    "illustration": "filter"
  },
  {
    "slug": "drives-automation",
    "category": "industrial-process",
    "manufacturers": [
      "sew-eurodrive"
    ],
    "illustration": "drive"
  },
  {
    "slug": "gears-engineering",
    "category": "industrial-process",
    "manufacturers": [
      "hofmann-engineering"
    ],
    "illustration": "gear"
  },
  {
    "slug": "conveyor-belts",
    "category": "industrial-process",
    "manufacturers": [
      "sig"
    ],
    "illustration": "belt"
  },
  {
    "slug": "industrial-chains",
    "category": "industrial-process",
    "manufacturers": [
      "zmc"
    ],
    "illustration": "chain"
  }
];

export function productsByCategory(category: SolutionCategorySlug) {
  return products.filter((product) => product.category === category);
}
