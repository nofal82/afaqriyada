import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { company } from "@/data/company";
import type { Dictionary } from "@/data/dictionaries";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function CallToAction({ dict }: { dict: Dictionary["cta"] }) {
  return (
    <Section
      tone="deep"
      labelledBy="cta-heading"
      backdrop={
        <div aria-hidden="true" className="absolute inset-0">
          <div className="grid-texture absolute inset-0 text-steel-300 opacity-[0.1]" />
          <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_15%_0%,rgba(18,136,156,0.20),transparent_65%)]" />
        </div>
      }
    >
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              id="cta-heading"
              className="text-3xl leading-[1.12] font-semibold text-white sm:text-4xl lg:text-[2.75rem]"
            >
              {dict.heading}
            </h2>
            <p className="mt-5 text-lg text-accent-300">{dict.subheading}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-300">
              {dict.body}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:col-span-5 lg:justify-end">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent-600 px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-accent-700"
            >
              {dict.primary}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180"
                aria-hidden="true"
              />
            </Link>
            <a
              href={`mailto:${company.salesEmail}`}
              className="inline-flex items-center justify-center gap-2 border border-white/25 px-7 py-3.5 text-[0.9375rem] text-white transition-colors hover:border-white hover:bg-white hover:text-ink-900"
            >
              <Mail className="size-4" aria-hidden="true" />
              {company.salesEmail}
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
