"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { localePath, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** A normal home link on other pages, and an explicit return to top on home. */
export function HomeLink({ locale, label, children, onNavigate, className }: {
  locale: Locale;
  label: string;
  children: ReactNode;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    onNavigate?.();
    if (stripLocale(pathname ?? "/") !== "/") return;
    event.preventDefault();
    // Preserve enquiry context and typed form data while returning to the top.
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#top`);
    requestAnimationFrame(() => window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    }));
  }

  return <Link href={`${localePath(locale, "/")}#top`} prefetch={false} aria-label={label}
    onClick={onClick} className={cn("inline-flex min-h-11 shrink-0 items-center", className)}>{children}</Link>;
}
