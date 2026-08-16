import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Manufacturer } from "@/data/types";
import type { Dictionary } from "@/data/dictionaries";
import { format } from "@/data/dictionaries";

interface PartnerCardProps {
  manufacturer: Manufacturer;
  dict: Dictionary["partners"];
  opensInNewTab: string;
}

export function PartnerCard({ manufacturer, dict, opensInNewTab }: PartnerCardProps) {
  const { name, logo, logoWidth, logoHeight, officialWebsite, slug, country } = manufacturer;
  const copy = dict.items[slug as keyof typeof dict.items];

  return (
    <article className="group flex h-full flex-col border border-line-dark/60 bg-ink-850/60 transition-colors duration-300 hover:border-accent-400/40">
      <div className="flex h-28 items-center justify-center border-b border-line-dark/60 bg-white px-8">
        {logo && logoWidth && logoHeight ? (
          <Image
            src={logo}
            alt={format(dict.logoAlt, { name })}
            width={logoWidth}
            height={logoHeight}
            sizes="200px"
            className="max-h-11 w-auto max-w-[11rem] object-contain"
          />
        ) : (
          // Graceful fallback: the manufacturer name set in the site typeface,
          // never a redrawn or imitated logo mark.
          <span className="text-center text-lg font-semibold tracking-tight text-ink-900" dir="ltr">
            {name}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/*
          Trademark: the name itself is Latin and LTR, but it still sits at the
          start of the card, so only the text run is marked — not the heading.
        */}
        <h3 className="text-lg font-semibold text-white">
          <span dir="ltr" lang="en">
            {name}
          </span>
        </h3>
        <p className="eyebrow mt-2 text-accent-300">{copy.category}</p>
        <p className="mt-4 text-sm leading-relaxed text-steel-400">{copy.description}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="font-mono text-[0.6875rem] tracking-wide text-steel-500 uppercase rtl:font-sans rtl:text-xs rtl:tracking-normal rtl:normal-case">
            {dict.countries[country]}
          </span>
          <a
            href={officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-steel-300 transition-colors hover:text-accent-300"
          >
            {dict.linkLabel}
            <span className="sr-only">
              {" "}
              — {name} ({opensInNewTab})
            </span>
            <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
