import { productPhotos } from "./product-photos";
import type { ProductSolution, SolutionCategory, SolutionCategorySlug } from "./types";

export const solutionCategories: SolutionCategory[] = [{ slug: "water-wastewater" }, { slug: "industrial-process" }];

export const products: ProductSolution[] = [
  {
    "slug": "surge-vessels",
    "category": "water-wastewater",
    "manufacturers": [
      "henriques-henriques"
    ],
    "image": productPhotos["surge-vessels"]
  },
  {
    "slug": "instrumentation",
    "category": "water-wastewater",
    "manufacturers": [
      "kobold"
    ],
    "image": productPhotos["instrumentation"]
  },
  {
    "slug": "process-valves",
    "category": "water-wastewater",
    "manufacturers": [
      "gemu"
    ],
    "image": productPhotos["process-valves"]
  },
  {
    "slug": "pumps",
    "category": "water-wastewater",
    "manufacturers": [
      "lutz"
    ],
    "image": productPhotos["pumps"]
  },
  {
    "slug": "gaskets-sealing",
    "category": "industrial-process",
    "manufacturers": [
      "kwo"
    ],
    "image": productPhotos["gaskets-sealing"]
  },
  {
    "slug": "mechanical-seals",
    "category": "industrial-process",
    "manufacturers": [
      "depac"
    ],
    "image": productPhotos["mechanical-seals"]
  },
  {
    "slug": "special-gaskets",
    "category": "industrial-process",
    "manufacturers": [
      "spetech"
    ],
    "image": productPhotos["special-gaskets"]
  },
  {
    "slug": "hose-assemblies",
    "category": "industrial-process",
    "manufacturers": [
      "flextech"
    ],
    "image": productPhotos["hose-assemblies"]
  },
  {
    "slug": "steam-systems",
    "category": "industrial-process",
    "manufacturers": [
      "valsteam-adca"
    ],
    "image": productPhotos["steam-systems"]
  },
  {
    "slug": "corrosion-resistant-handling",
    "category": "industrial-process",
    "manufacturers": [
      "andronaco"
    ],
    "image": productPhotos["corrosion-resistant-handling"]
  },
  {
    "slug": "sensors-measurement",
    "category": "industrial-process",
    "manufacturers": [
      "baumer"
    ],
    "image": productPhotos["sensors-measurement"]
  },
  {
    "slug": "industrial-filtration",
    "category": "industrial-process",
    "manufacturers": [
      "junker-filter"
    ],
    "image": productPhotos["industrial-filtration"]
  },
  {
    "slug": "drives-automation",
    "category": "industrial-process",
    "manufacturers": [
      "sew-eurodrive"
    ],
    "image": productPhotos["drives-automation"]
  },
  {
    "slug": "gears-engineering",
    "category": "industrial-process",
    "manufacturers": [
      "hofmann-engineering"
    ],
    "image": productPhotos["gears-engineering"]
  },
  {
    "slug": "conveyor-belts",
    "category": "industrial-process",
    "manufacturers": [
      "sig"
    ],
    "image": productPhotos["conveyor-belts"]
  },
  {
    "slug": "industrial-chains",
    "category": "industrial-process",
    "manufacturers": [
      "zmc"
    ],
    "image": productPhotos["industrial-chains"]
  }
];

export function productsByCategory(category: SolutionCategorySlug) {
  return products.filter((product) => product.category === category);
}
