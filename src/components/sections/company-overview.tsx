import { Check } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function CompanyOverview({ dict }: { dict: Dictionary["about"] }) {
  return (
    <Section id="about" tone="light" labelledBy="about-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow={dict.eyebrow}
              heading={dict.heading}
            />
          </Reveal>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-steel-600 sm:text-[1.0625rem]">
            {dict.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 60} as="p">
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={120}>
            <div className="border border-line bg-mist-100 p-7 sm:p-9">
              <h3 className="eyebrow text-accent-600">{dict.capabilitiesHeading}</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-1">
                {dict.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3 text-[0.9375rem] text-ink-800">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent-600"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
