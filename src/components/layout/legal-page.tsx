import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { company } from "@/data/company";
import type { Dictionary } from "@/data/dictionaries";
import { localePath, type Locale } from "@/lib/i18n";

interface LegalPageProps {
  locale: Locale;
  title: string;
  intro: string;
  note: string;
  dict: Dictionary;
}

/** Shared shell for the placeholder legal pages linked from the footer. */
export function LegalPage({ locale, title, intro, note, dict }: LegalPageProps) {
  return (
    <main id="main" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 pt-40 pb-24 sm:px-8 lg:pt-48">
        <h1 className="text-3xl font-semibold text-ink-900 sm:text-4xl">{title}</h1>

        <p className="mt-6 text-base leading-relaxed text-steel-600">{intro}</p>
        <p className="mt-4 text-base leading-relaxed text-steel-600">{note}</p>

        <dl className="mt-10 border-t border-line pt-8 text-sm">
          <dt className="eyebrow text-steel-500">{dict.legal.contactHeading}</dt>
          <dd className="mt-3 text-ink-900">{dict.brand.name}</dd>
          <dd className="mt-1 text-steel-600">{dict.common.location}</dd>
          <dd className="mt-3">
            <a
              href={`mailto:${company.infoEmail}`}
              dir="ltr"
              className="inline-block text-accent-700 underline underline-offset-4"
            >
              {company.infoEmail}
            </a>
          </dd>
        </dl>

        <Link
          href={localePath(locale, "/")}
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-ink-900 transition-colors hover:text-accent-700"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
          {dict.common.backToHome}
        </Link>
      </div>
    </main>
  );
}
