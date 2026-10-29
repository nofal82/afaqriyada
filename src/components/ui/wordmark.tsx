import Image from "next/image";
import { cn } from "@/lib/utils";
import { brandLogos } from "@/data/brand";
import type { Locale } from "@/lib/i18n";

interface WordmarkProps {
  name: string;
  locale: Locale;
  tone?: "light" | "dark";
  className?: string;
}

/** Language-specific complete logo, including the original diagonal line symbol. */
export function Wordmark({ name, locale, tone = "light", className }: WordmarkProps) {
  const logo = brandLogos[locale];
  return (
    <span className={cn("inline-flex items-center", tone === "light" && "bg-[#0a5684] px-3 py-2", className)}>
      <Image
        src={logo.src}
        alt={name}
        width={logo.width}
        height={logo.height}
        priority
        className="h-auto w-36 min-[360px]:w-44 sm:w-52"
      />
    </span>
  );
}
