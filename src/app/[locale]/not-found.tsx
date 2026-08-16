import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { company } from "@/data/company";
import { getDictionary } from "@/data/dictionaries";
import { defaultLocale, localePath } from "@/lib/i18n";

/**
 * Rendered for unknown paths. It sits inside the locale segment, which also
 * catches an unknown first segment (e.g. /fr) — the layout calls `notFound()`
 * for anything that is not a locale, so this renders in the default locale.
 */
export default function NotFound() {
  const dict = getDictionary(defaultLocale);

  return (
    <main id="main" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 pt-40 pb-24 sm:px-8 lg:pt-48">
        <p className="eyebrow text-accent-600">{dict.notFound.eyebrow}</p>
        <h1 className="mt-5 text-3xl font-semibold text-ink-900 sm:text-4xl">
          {dict.notFound.heading}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-steel-600">{dict.notFound.body}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={localePath(defaultLocale, "/")}
            className="inline-flex items-center justify-center gap-2 bg-accent-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-700"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            {dict.common.backToHome}
          </Link>
          <a
            href={`mailto:${company.salesEmail}`}
            dir="ltr"
            className="text-sm text-steel-600 transition-colors hover:text-accent-700"
          >
            {company.salesEmail}
          </a>
        </div>
      </div>
    </main>
  );
}
