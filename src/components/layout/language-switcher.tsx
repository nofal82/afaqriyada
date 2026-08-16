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
  label: string;
  tone?: "dark" | "light";
  className?: string;
}

/**
 * EN | العربية.
 *
 * Switches to the same page in the other locale rather than dropping the
 * visitor on the home page: the current pathname is stripped of its locale
 * prefix and re-prefixed for the target. Any hash (the landing page's section
 * anchors) is preserved on the client so the visitor stays where they were.
 */
export function LanguageSwitcher({
  current,
  label,
  tone = "dark",
  className,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const basePath = stripLocale(pathname);
  const dark = tone === "dark";

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
                onClick={(event) => {
                  // Carry the current section anchor across the language change,
                  // so switching language keeps the visitor where they were.
                  const { hash } = window.location;
                  if (hash) {
                    event.preventDefault();
                    router.push(`${localePath(locale, basePath)}${hash}`);
                  }
                }}
                className={cn(
                  "text-sm transition-colors",
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
