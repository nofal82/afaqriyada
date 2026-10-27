"use client";

import { useSyncExternalStore } from "react";
import { products } from "@/data/products";
import type { AreaOfInterestKey } from "@/data/dictionaries";

const changeEvent = "afaq:solution-change";

function readSelection() {
  const slug = new URLSearchParams(window.location.search).get("solution");
  return products.some((product) => product.slug === slug) ? slug! : "";
}

function subscribe(notify: () => void) {
  window.addEventListener(changeEvent, notify);
  window.addEventListener("popstate", notify);
  return () => {
    window.removeEventListener(changeEvent, notify);
    window.removeEventListener("popstate", notify);
  };
}

export function useSelectedSolution() {
  return useSyncExternalStore(subscribe, readSelection, () => "");
}

export function selectSolution(slug: string) {
  const url = new URL(window.location.href);
  if (slug) url.searchParams.set("solution", slug);
  else url.searchParams.delete("solution");
  url.hash = "enquiry";
  window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event(changeEvent));
}

export const solutionAreas: Record<string, AreaOfInterestKey> = {
  "surge-vessels": "surge-vessels",
  instrumentation: "instrumentation",
  "process-valves": "valves",
  pumps: "pumps",
  "gaskets-sealing": "gaskets-sealing",
  "mechanical-seals": "mechanical-seals",
  "special-gaskets": "gaskets-sealing",
  "hose-assemblies": "hoses",
  "steam-systems": "steam",
  "corrosion-resistant-handling": "other",
  "sensors-measurement": "instrumentation",
  "industrial-filtration": "filtration",
  "drives-automation": "drives",
  "gears-engineering": "drives",
  "conveyor-belts": "conveying",
  "industrial-chains": "conveying",
};
