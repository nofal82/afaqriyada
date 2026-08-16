import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Temporary typographic wordmark.
 *
 * No official Afaq Riyada logo has been supplied. Rather than inventing one and
 * presenting it as official, this renders the company name in the locale's
 * typeface with a restrained geometric mark. When a real asset arrives, drop it
 * in at /public/brand/logo.svg and set `BRAND_LOGO` — nothing else changes.
 */
const BRAND_LOGO: { src: string; width: number; height: number } | null = null;

interface WordmarkProps {
  /** Localized brand name and tagline. */
  name: string;
  tagline: string;
  tone?: "light" | "dark";
  /** Arabic is not an uppercase script, so its wordmark keeps natural casing. */
  uppercase?: boolean;
  className?: string;
}

export function Wordmark({
  name,
  tagline,
  tone = "light",
  uppercase = true,
  className,
}: WordmarkProps) {
  const dark = tone === "dark";

  if (BRAND_LOGO) {
    return (
      <Image
        src={BRAND_LOGO.src}
        alt={name}
        width={BRAND_LOGO.width}
        height={BRAND_LOGO.height}
        priority
        className={cn("h-9 w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={cn("size-8 shrink-0", dark ? "text-accent-300" : "text-accent-600")}
        fill="none"
      >
        <rect x="1.5" y="1.5" width="29" height="29" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 23L16 9l7 14" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M12 18h8" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[0.95rem] font-semibold sm:text-base",
            uppercase ? "tracking-[0.16em] uppercase" : "text-lg tracking-normal sm:text-xl",
            dark ? "text-white" : "text-ink-900",
          )}
        >
          {name}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.5625rem]",
            uppercase
              ? "font-mono tracking-[0.22em] uppercase"
              : "text-[0.6875rem] tracking-normal",
            dark ? "text-steel-400" : "text-steel-500",
          )}
        >
          {tagline}
        </span>
      </span>
    </span>
  );
}
