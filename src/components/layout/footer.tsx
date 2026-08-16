import Link from "next/link";
import { company } from "@/data/company";
import type { Dictionary } from "@/data/dictionaries";
import { footerNavigation } from "@/data/navigation";
import { localePath, type Locale } from "@/lib/i18n";
import { Wordmark } from "@/components/ui/wordmark";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { footer, nav, brand, common } = dict;

  return (
    <footer className="border-t border-line-dark bg-ink-950 text-steel-400">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Wordmark
              name={brand.name}
              tagline={brand.tagline}
              tone="dark"
              uppercase={locale === "en"}
            />
            <p className="mt-6 text-sm leading-relaxed">{footer.description}</p>
          </div>

          <nav aria-label={footer.companyHeading}>
            <h2 className="eyebrow text-white">{footer.companyHeading}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="transition-colors hover:text-accent-300">
                    {nav.labels[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.solutionsHeading}>
            <h2 className="eyebrow text-white">{footer.solutionsHeading}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerNavigation.solutions.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="transition-colors hover:text-accent-300">
                    {nav.labels[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-white">{footer.contactHeading}</h2>
            <address className="mt-5 space-y-4 text-sm not-italic">
              <p>{common.location}</p>
              <p>
                <span className="block text-xs tracking-wide text-steel-500 uppercase rtl:tracking-normal rtl:normal-case">
                  {footer.salesLabel}
                </span>
                <a
                  href={`mailto:${company.salesEmail}`}
                  dir="ltr"
                  className="inline-block transition-colors hover:text-accent-300"
                >
                  {company.salesEmail}
                </a>
              </p>
              <p>
                <span className="block text-xs tracking-wide text-steel-500 uppercase rtl:tracking-normal rtl:normal-case">
                  {footer.generalLabel}
                </span>
                <a
                  href={`mailto:${company.infoEmail}`}
                  dir="ltr"
                  className="inline-block transition-colors hover:text-accent-300"
                >
                  {company.infoEmail}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line-dark pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {brand.name}. {footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavigation.legal.map((item) => (
              <li key={item.key}>
                <Link
                  href={localePath(locale, item.href)}
                  /*
                    Prefetch is off for locale-routed pages: the English URLs are
                    rewritten onto /en/*, and the router's segment prefetch does
                    not resolve through that rewrite (it requests the public URL
                    and gets a 404 in the background). Navigation itself is
                    unaffected, so the prefetch is simply not worth a failing
                    request. Drop this once the router handles rewritten
                    segment prefetches.
                  */
                  prefetch={false}
                  className="transition-colors hover:text-accent-300"
                >
                  {nav.labels[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-steel-600">
          {footer.trademarkNote}
        </p>
      </div>
    </footer>
  );
}
