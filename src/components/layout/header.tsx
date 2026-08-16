"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { primaryCtaHref, primaryNavigation } from "@/data/navigation";
import type { Dictionary } from "@/data/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";
import { Wordmark } from "@/components/ui/wordmark";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNavigation } from "./mobile-navigation";
import { cn } from "@/lib/utils";

const MOBILE_NAV_ID = "mobile-navigation";

export interface HeaderCopy {
  brand: Dictionary["brand"];
  nav: Dictionary["nav"];
  salesEmail: string;
}

interface HeaderProps {
  locale: Locale;
  copy: HeaderCopy;
}

export function Header({ locale, copy }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // The header sits over the dark hero at the top of the page and becomes a
  // solid surface once the page scrolls.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-line-dark bg-ink-900/95 backdrop-blur-sm"
          : "border-b border-white/10 bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href={localePath(locale, "/")}
          aria-label={copy.brand.homeAriaLabel}
          className="shrink-0"
        >
          <Wordmark
            name={copy.brand.name}
            tagline={copy.brand.tagline}
            tone="dark"
            uppercase={locale === "en"}
          />
        </Link>

        <nav aria-label={copy.nav.primaryNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {primaryNavigation.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm text-steel-300 transition-colors duration-200 hover:text-white"
                >
                  {copy.nav.labels[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageSwitcher
            current={locale}
            label={copy.nav.languageLabel}
            className="hidden md:flex"
          />

          {/*
            Below md the pair does not fit beside the wordmark, so the header
            carries a single-tap toggle to the other language. Without it the
            only switcher on a phone sits inside the menu, two taps away.
          */}
          <LanguageSwitcher
            current={locale}
            label={copy.nav.languageLabel}
            switchLabel={copy.nav.switchLanguage}
            variant="toggle"
            className="md:hidden"
          />

          <Link
            href={primaryCtaHref}
            className="hidden bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-700 lg:inline-flex"
          >
            {copy.nav.cta}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="-me-2 p-2 text-white lg:hidden"
            aria-label={copy.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_NAV_ID}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNavigation
        id={MOBILE_NAV_ID}
        open={menuOpen}
        onClose={closeMenu}
        locale={locale}
        copy={copy}
      />
    </header>
  );
}
