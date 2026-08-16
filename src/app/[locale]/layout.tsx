import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { company } from "@/data/company";
import { getDictionary } from "@/data/dictionaries";
import {
  direction,
  isLocale,
  languageAlternates,
  localePath,
  locales,
  localeTags,
  openGraphLocales,
  type Locale,
} from "@/lib/i18n";
import { plexArabic, plexMono, plexSans } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationSchema } from "@/components/seo/structured-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const locale: Locale = raw;
  const dict = getDictionary(locale);

  // Point at the locale's own public image URL rather than the internal
  // /en-prefixed route, so scrapers fetch it without following a redirect.
  const ogImage = {
    url: localePath(locale, "/og"),
    width: 1200,
    height: 630,
    alt: dict.meta.ogImageAlt,
  };

  return {
    metadataBase: new URL(company.website),
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.brand.name}`,
    },
    description: dict.meta.description,
    applicationName: dict.brand.name,
    authors: [{ name: dict.brand.name, url: company.website }],
    keywords: dict.meta.keywords,
    alternates: {
      canonical: localePath(locale, "/"),
      languages: languageAlternates("/"),
    },
    openGraph: {
      type: "website",
      siteName: dict.brand.name,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${company.website}${localePath(locale, "/")}`,
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((other) => other !== locale)
        .map((other) => openGraphLocales[other]),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    category: "Industrial Engineering",
  };
}

export const viewport: Viewport = {
  themeColor: "#0a141c",
  colorScheme: "light",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale: Locale = raw;
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeTags[locale]}
      dir={direction(locale)}
      className={`${plexSans.variable} ${plexMono.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-mist-50">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        <OrganizationSchema locale={locale} />
        <Header
          locale={locale}
          copy={{ brand: dict.brand, nav: dict.nav, salesEmail: company.salesEmail }}
        />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
