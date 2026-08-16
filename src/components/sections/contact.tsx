import { Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import type { Dictionary } from "@/data/dictionaries";
import { isMailerConfigured } from "@/lib/mailer";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";

interface ContactProps {
  dict: Dictionary["contact"];
  /** Localized city/country line from the shared dictionary. */
  location: string;
}

export function Contact({ dict, location }: ContactProps) {
  const deliveryConfigured = isMailerConfigured();

  return (
    <Section id="contact" tone="muted" labelledBy="contact-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              id="contact-heading"
              eyebrow={dict.eyebrow}
              heading={dict.heading}
              intro={dict.intro}
            />
          </Reveal>

          <Reveal delay={80}>
            <dl className="mt-10 space-y-8 border-t border-line pt-10">
              <div className="flex gap-4">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-accent-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <dt className="eyebrow text-steel-500">{dict.locationLabel}</dt>
                  <dd className="mt-2 text-base text-ink-900">{location}</dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  className="mt-0.5 size-5 shrink-0 text-accent-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <dt className="eyebrow text-steel-500">{dict.salesLabel}</dt>
                  <dd className="mt-2 text-base">
                    <a
                      href={`mailto:${company.salesEmail}`}
                      dir="ltr"
                      className="inline-block text-ink-900 underline decoration-accent-600/40 underline-offset-4 transition-colors hover:text-accent-700"
                    >
                      {company.salesEmail}
                    </a>
                  </dd>
                  <dd className="mt-1 text-sm text-steel-600">{dict.salesHint}</dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  className="mt-0.5 size-5 shrink-0 text-accent-600"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <div>
                  <dt className="eyebrow text-steel-500">{dict.generalLabel}</dt>
                  <dd className="mt-2 text-base">
                    <a
                      href={`mailto:${company.infoEmail}`}
                      dir="ltr"
                      className="inline-block text-ink-900 underline decoration-accent-600/40 underline-offset-4 transition-colors hover:text-accent-700"
                    >
                      {company.infoEmail}
                    </a>
                  </dd>
                  <dd className="mt-1 text-sm text-steel-600">{dict.generalHint}</dd>
                </div>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="border border-line bg-white p-6 sm:p-9">
              <h3 className="text-xl font-semibold text-ink-900">{dict.form.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">
                {dict.form.requiredHint}
              </p>
              <div className="mt-8">
                <ContactForm dict={dict.form} deliveryConfigured={deliveryConfigured} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
