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
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.intro,
    alternates: {
      canonical: localePath(locale, "/privacy"),
      languages: languageAlternates("/privacy"),
    },
    robots: { index: false, follow: true },
  };
}

export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      title={dict.legal.privacy.title}
      intro={dict.legal.privacy.intro}
      note={dict.legal.privacy.note}
      dict={dict}
    />
  );
}
