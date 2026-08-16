import type { Dictionary } from "@/data/dictionaries";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function EngineeringProcess({ dict }: { dict: Dictionary["process"] }) {
  return (
    <Section id="engineering-approach" tone="light" labelledBy="process-heading">
      <Reveal>
        <SectionHeading
          id="process-heading"
          eyebrow={dict.eyebrow}
          heading={dict.heading}
        />
      </Reveal>

      <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {dict.steps.map((step, index) => (
          <li key={step.number}>
            <Reveal delay={index * 80}>
              <div className="relative">
                {/* Progress rule: a measured line rather than decorative arrows. */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm text-accent-600">{step.number}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-line" />
                </div>

                <h3 className="mt-6 text-lg leading-snug font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
