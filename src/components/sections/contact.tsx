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

/**
 * Email is the working channel today, so the contact panel leads with it: a
 * direct link to the sales address plus the details worth including in a first
 * enquiry. The inquiry form takes this slot automatically once an email
 * provider is configured (see `.env.example`), which is why the form component
 * is still wired up rather than removed.
 */
function EmailPanel({ dict }: { dict: Dictionary["contact"]["emailPanel"] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-ink-900">{dict.heading}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-600">{dict.body}</p>

      <a
        href={`mailto:${company.salesEmail}`}
        className="mt-8 inline-flex items-center gap-2.5 bg-accent-600 px-6 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-accent-700"
      >
        <Mail className="size-4 shrink-0" aria-hidden="true" />
        <span dir="ltr">{company.salesEmail}</span>
      </a>

      <div className="mt-9 border-t border-line pt-7">
        <h4 className="eyebrow text-steel-500">{dict.includeHeading}</h4>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {dict.include.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink-800"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 bg-accent-600"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
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
              {deliveryConfigured ? (
                <>
                  <h3 className="text-xl font-semibold text-ink-900">{dict.form.heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {dict.form.requiredHint}
                  </p>
                  <div className="mt-8">
                    <ContactForm dict={dict.form} />
                  </div>
                </>
              ) : (
                <EmailPanel dict={dict.emailPanel} />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
