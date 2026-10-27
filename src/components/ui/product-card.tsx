import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getManufacturer } from "@/data/partners";
import type { ProductSolution } from "@/data/types";
import type { Dictionary } from "@/data/dictionaries";
import { format } from "@/data/dictionaries";
import { primaryCtaHref } from "@/data/navigation";
import { TechnicalIllustration } from "./technical-illustration";

interface ProductCardProps {
  product: ProductSolution;
  dict: Dictionary["solutions"];
}

export function ProductCard({ product, dict }: ProductCardProps) {
  const copy = dict.items[product.slug as keyof typeof dict.items];
  const note = "note" in copy ? copy.note : undefined;

  const makers = (product.manufacturers ?? [])
    .map((slug) => getManufacturer(slug))
    .filter((maker) => maker !== undefined);

  return (
    <article className="group flex h-full flex-col border border-line bg-white transition-colors duration-300 hover:border-ink-900/25">
      <div className="relative overflow-hidden border-b border-line bg-mist-100">
        <div className="grid-texture absolute inset-0 text-ink-900" aria-hidden="true" />
        <div className="relative px-6 py-7">
          <TechnicalIllustration
            variant={product.illustration}
            label={format(dict.illustrationLabel, { title: copy.title })}
            className="mx-auto h-40 w-full max-w-[22rem] text-ink-700/80 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {makers.length > 0 ? (
            // Manufacturer names are trademarks: the run stays Latin and LTR,
            // while the label itself follows the page direction.
            <span className="eyebrow text-accent-600">
              <span dir="ltr" lang="en">
                {makers.map((maker) => maker.name).join(" · ")}
              </span>
            </span>
          ) : (
            <span className="eyebrow text-steel-500">{dict.manufacturerToBeConfirmed}</span>
          )}
        </div>

        <h3 className="mt-3 text-xl leading-snug font-semibold text-ink-900">{copy.title}</h3>

        <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-600">
          {copy.description}
        </p>

        {typeof note === "string" ? (
          <p className="mt-3 text-sm leading-relaxed text-steel-500 italic">{note}</p>
        ) : null}

        <ul className="mt-6 flex flex-wrap gap-2">
          {copy.applications.map((application) => (
            <li
              key={application}
              // Uppercase + mono is a Latin treatment; Arabic keeps its own.
              className="border border-line bg-mist-100 px-2.5 py-1 font-mono text-[0.6875rem] tracking-wide text-steel-600 uppercase rtl:font-sans rtl:text-xs rtl:tracking-normal rtl:normal-case"
            >
              {application}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <Link
            href={primaryCtaHref}
            className="inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm font-medium text-ink-900 transition-colors hover:border-accent-600 hover:text-accent-700"
          >
            {dict.cardCta}
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180"
              aria-hidden="true"
            />
            <span className="sr-only">— {copy.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
