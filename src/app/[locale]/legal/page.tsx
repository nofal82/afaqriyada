import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/layout/legal-page";
import { getDictionary } from "@/data/dictionaries";
import { isLocale, languageAlternates, localePath } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    title: dict.legal.legalNotice.title,
    description: dict.legal.legalNotice.intro,
    alternates: {
      canonical: localePath(locale, "/legal"),
      languages: languageAlternates("/legal"),
    },
    robots: { index: false, follow: true },
  };
}

export default async function LegalNoticePage({ params }: PageProps<"/[locale]/legal">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      title={dict.legal.legalNotice.title}
      intro={dict.legal.legalNotice.intro}
      note={dict.legal.legalNotice.note}
      dict={dict}
    />
  );
}
