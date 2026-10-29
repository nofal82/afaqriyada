import type { ProductImage } from "./types";

/** Authentic manufacturer imagery; provenance is recorded in PRODUCT-IMAGE-SOURCES.md. */
export const productPhotos = {
  "surge-vessels": {
    "src": "/products/surge-vessels.webp",
    "width": 1176,
    "height": 1000
  },
  "instrumentation": {
    "src": "/products/instrumentation.webp",
    "width": 600,
    "height": 476
  },
  "process-valves": {
    "src": "/products/process-valves.webp",
    "width": 480,
    "height": 270
  },
  "pumps": {
    "src": "/products/pumps.webp",
    "width": 800,
    "height": 800
  },
  "gaskets-sealing": {
    "src": "/products/gaskets-sealing.webp",
    "width": 850,
    "height": 589
  },
  "mechanical-seals": {
    "src": "/products/mechanical-seals.webp",
    "width": 329,
    "height": 255
  },
  "special-gaskets": {
    "src": "/products/special-gaskets.webp",
    "width": 712,
    "height": 508
  },
  "hose-assemblies": {
    "src": "/products/hose-assemblies.webp",
    "width": 585,
    "height": 351
  },
  "steam-systems": {
    "src": "/products/steam-systems.webp",
    "width": 357,
    "height": 270
  },
  "corrosion-resistant-handling": {
    "src": "/products/corrosion-resistant-handling.webp",
    "width": 283,
    "height": 240
  },
  "sensors-measurement": {
    "src": "/products/sensors-measurement.webp",
    "width": 500,
    "height": 500
  },
  "industrial-filtration": {
    "src": "/products/industrial-filtration.webp",
    "width": 400,
    "height": 400
  },
  "drives-automation": {
    "src": "/products/drives-automation.webp",
    "width": 243,
    "height": 129
  },
  "gears-engineering": {
    "src": "/products/gears-engineering.webp",
    "width": 984,
    "height": 460
  },
  "conveyor-belts": {
    "src": "/products/conveyor-belts.webp",
    "width": 930,
    "height": 350
  },
  "industrial-chains": {
    "src": "/products/industrial-chains.webp",
    "width": 700,
    "height": 400
  }
} satisfies Record<string, ProductImage>;

export const heroPhoto: ProductImage = {
  "src": "/products/industrial-surge-vessels.webp",
  "width": 1600,
  "height": 1200
};
