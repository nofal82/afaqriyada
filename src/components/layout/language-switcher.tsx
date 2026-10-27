"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import {
  locales,
  localeNames,
  localePath,
  stripLocale,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  current: Locale;
  /** Accessible name for the control, e.g. "Language". */
  label: string;
  /** Accessible name for the compact variant, e.g. "Switch to Arabic". */
  switchLabel?: string;
  /**
   * `pair` lists every locale (EN | العربية) — used where there is room.
   * `toggle` is a single tap target showing the language you would switch to,
   * for the mobile header bar where the pair does not fit beside the wordmark.
   */
  variant?: "pair" | "toggle";
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Language switcher.
 *
 * Switches to the same page in the other locale rather than dropping the
 * visitor on the home page: the current pathname is stripped of its locale
 * prefix and re-prefixed for the target. Any hash (the landing page's section
 * anchors) is preserved on the client so the visitor stays where they were.
 */
export function LanguageSwitcher({
  current,
  label,
  switchLabel,
  variant = "pair",
  tone = "dark",
  className,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const basePath = stripLocale(pathname);
  const dark = tone === "dark";

  /** Carry the current section anchor across the language change. */
  const handleClick = (locale: Locale) => (event: React.MouseEvent) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const { hash, search } = window.location;
    if (hash || search) {
      event.preventDefault();
      router.push(`${localePath(locale, basePath)}${search}${hash}`);
    }
  };

  const others = locales.filter((locale) => locale !== current);

  // The compact form only makes sense with a single alternative; with more
  // locales it falls back to listing them.
  if (variant === "toggle" && others.length === 1) {
    const target = others[0];

    return (
      <Link
        href={localePath(target, basePath)}
        hrefLang={target}
        lang={target}
        aria-label={switchLabel ?? label}
        onClick={handleClick(target)}
        className={cn(
          "inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 border px-2.5 py-2 text-xs font-medium transition-colors",
          dark
            ? "border-white/25 text-white hover:border-white hover:bg-white/10"
            : "border-ink-900/20 text-ink-900 hover:border-ink-900",
          className,
        )}
      >
        <Languages className="size-3.5 shrink-0" aria-hidden="true" />
        {localeNames[target]}
      </Link>
    );
  }

  return (
    <nav aria-label={label} className={cn("flex items-center", className)}>
      <Languages
        className={cn("me-2 size-4", dark ? "text-steel-500" : "text-steel-400")}
        aria-hidden="true"
      />
      <ul className="flex items-center">
        {locales.map((locale, index) => {
          const isCurrent = locale === current;

          return (
            <li key={locale} className="flex items-center">
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className={cn("mx-2 h-3 w-px", dark ? "bg-white/20" : "bg-ink-900/20")}
                />
              ) : null}
              <Link
                href={localePath(locale, basePath)}
                hrefLang={locale}
                lang={locale}
                aria-current={isCurrent ? "true" : undefined}
                onClick={handleClick(locale)}
                className={cn(
                  "inline-flex min-h-11 min-w-11 items-center justify-center text-sm transition-colors",
                  isCurrent
                    ? dark
                      ? "font-medium text-white"
                      : "font-medium text-ink-900"
                    : dark
                      ? "text-steel-400 hover:text-white"
                      : "text-steel-500 hover:text-ink-900",
                )}
              >
                {localeNames[locale]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
