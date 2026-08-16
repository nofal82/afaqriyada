import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { industries } from "@/data/industries";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { IndustryCard } from "@/components/ui/industry-card";
import { Reveal } from "@/components/ui/reveal";

export function Industries({ dict }: { dict: Dictionary["industries"] }) {
  return (
    <Section id="industries" tone="muted" labelledBy="industries-heading">
      <Reveal>
        <SectionHeading
          id="industries-heading"
          eyebrow={dict.eyebrow}
          heading={dict.heading}
          intro={dict.intro}
        />
      </Reveal>

      <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <li key={industry.slug} className="bg-white">
            <Reveal delay={index * 60} className="h-full">
              <IndustryCard
                icon={industry.icon}
                title={dict.items[industry.slug as keyof typeof dict.items].title}
                description={
                  dict.items[industry.slug as keyof typeof dict.items].description
                }
                index={index}
              />
            </Reveal>
          </li>
        ))}

        {/* Keeps the grid complete and points unlisted applications at contact. */}
        <li className="bg-white">
          <Reveal delay={industries.length * 60} className="h-full">
            <div className="flex h-full flex-col justify-center bg-mist-50 p-7 sm:p-8">
              <p className="text-[0.9375rem] leading-relaxed text-steel-600">
                {dict.prompt}
              </p>
              <Link
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink-900 transition-colors hover:text-accent-700"
              >
                {dict.promptCta}
                <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </li>
      </ul>
    </Section>
  );
}
