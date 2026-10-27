"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone } from "lucide-react";
import { company } from "@/data/company";
import { primaryCtaHref, primaryNavigation } from "@/data/navigation";
import type { Locale } from "@/lib/i18n";
import { Wordmark } from "@/components/ui/wordmark";
import { HomeLink } from "@/components/ui/home-link";
import { LanguageSwitcher } from "./language-switcher";
import type { HeaderCopy } from "./header";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  id: string;
  locale: Locale;
  copy: HeaderCopy;
}

export function MobileNavigation({
  open,
  onClose,
  id,
  locale,
  copy,
}: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, lock background scroll and keep focus inside the panel.
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default bg-ink-950/60"
        aria-label={copy.nav.closeMenu}
        tabIndex={-1}
        onClick={onClose}
      />

      <div
        ref={panelRef}
        id={id}
        role="dialog"
        aria-modal="true"
        aria-label={copy.nav.menuLabel}
        className="absolute inset-x-0 top-0 flex max-h-full flex-col overflow-y-auto bg-ink-900 pb-10"
      >
        <div className="flex items-center justify-between border-b border-line-dark px-5 py-4">
          <HomeLink locale={locale} label={copy.brand.homeAriaLabel} onNavigate={onClose}>
          <Wordmark
            name={copy.brand.name}
            tagline={copy.brand.tagline}
            tone="dark"
            uppercase={locale === "en"}
          />
          </HomeLink>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center text-steel-300 transition-colors hover:text-white"
            aria-label={copy.nav.closeMenu}
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="px-5 py-2" aria-label={copy.nav.primaryNavLabel}>
          <ul className="divide-y divide-line-dark">
            {primaryNavigation.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 text-lg text-white transition-colors hover:text-accent-300"
                >
                  {copy.nav.labels[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 space-y-5 px-5">
          <Link
            href={primaryCtaHref}
            onClick={onClose}
            className="block bg-accent-600 px-5 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-700"
          >
            {copy.nav.cta}
          </Link>

          <a href={`tel:${company.phone}`} onClick={onClose} className="flex min-h-11 items-center justify-center gap-2 border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
            <Phone className="size-4" aria-hidden="true" />{copy.nav.callSales}
          </a>

          <div className="flex items-center justify-between border-t border-line-dark pt-5">
            <LanguageSwitcher current={locale} label={copy.nav.languageLabel} />
            <a
              href={`mailto:${copy.salesEmail}`}
              dir="ltr"
              className="inline-flex min-h-11 items-center font-mono text-xs tracking-wide text-steel-400 transition-colors hover:text-accent-300"
            >
              {copy.salesEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
