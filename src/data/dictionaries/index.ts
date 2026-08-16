import type { Locale } from "@/lib/i18n";
import { en, type Dictionary } from "./en";
import { ar } from "./ar";

export type { Dictionary } from "./en";
export { areaOfInterestKeys, areaOfInterestLabelEn } from "./en";
export type { AreaOfInterestKey } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

/**
 * Content for a locale. Synchronous by design: the dictionaries are plain
 * modules, so pages stay statically renderable and there is no loading state.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Fill `{placeholder}` slots in a dictionary string. */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
