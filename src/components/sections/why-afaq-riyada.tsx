import type { Dictionary } from "@/data/dictionaries";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function WhyAfaqRiyada({ dict }: { dict: Dictionary["whyUs"] }) {
  return (
    <Section id="why-afaq-riyada" tone="muted" labelledBy="why-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              id="why-heading"
              eyebrow={dict.eyebrow}
              heading={dict.heading}
              intro={dict.intro}
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid gap-px bg-line sm:grid-cols-2">
            {dict.pillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className={cn(
                  "bg-white",
                  // An odd pillar count would leave a hole in a two-column grid.
                  index === dict.pillars.length - 1 &&
                    dict.pillars.length % 2 === 1 &&
                    "sm:col-span-2",
                )}
              >
                <Reveal delay={index * 60} className="h-full">
                  <div className="flex h-full flex-col p-7 sm:p-8">
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-accent-600"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-ink-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-600">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
