import type { Dictionary } from "@/data/dictionaries";
import { manufacturers } from "@/data/partners";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PartnerCard } from "@/components/ui/partner-card";
import { Reveal } from "@/components/ui/reveal";

export function Partners({
  dict,
  opensInNewTab,
}: {
  dict: Dictionary["partners"];
  opensInNewTab: string;
}) {
  return (
    <Section
      id="partners"
      tone="dark"
      labelledBy="partners-heading"
      backdrop={
        <div
          aria-hidden="true"
          className="grid-texture absolute inset-0 text-steel-300 opacity-[0.12]"
        />
      }
    >
      <Reveal>
        <SectionHeading
          id="partners-heading"
          eyebrow={dict.eyebrow}
          heading={dict.heading}
          intro={dict.intro}
          tone="dark"
        />
      </Reveal>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {manufacturers.map((manufacturer, index) => (
          <li key={manufacturer.slug} className="h-full">
            <Reveal delay={(index % 3) * 60} className="h-full">
              <PartnerCard
              manufacturer={manufacturer}
              dict={dict}
              opensInNewTab={opensInNewTab}
            />
            </Reveal>
          </li>
        ))}

        {/* Closes the grid rather than leaving a hole, and puts the trademark
            note where it is actually read. */}
        <li className="sm:col-span-1 xl:col-span-2">
          <div className="flex h-full flex-col justify-center border border-line-dark/40 p-8">
            <p className="text-sm leading-relaxed text-steel-400">
              {dict.note}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel-500">
{dict.noteSecondary}
            </p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
