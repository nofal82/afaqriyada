import { notFound } from "next/navigation";
import { getDictionary } from "@/data/dictionaries";
import { isLocale } from "@/lib/i18n";
import { Hero } from "@/components/sections/hero";
import { CapabilityStrip } from "@/components/sections/capability-strip";
import { CompanyOverview } from "@/components/sections/company-overview";
import { Industries } from "@/components/sections/industries";
import { Products } from "@/components/sections/products";
import { Partners } from "@/components/sections/partners";
import { WhyAfaqRiyada } from "@/components/sections/why-afaq-riyada";
import { EngineeringProcess } from "@/components/sections/engineering-process";
import { CallToAction } from "@/components/sections/call-to-action";
import { Contact } from "@/components/sections/contact";
import { CompanyProfile } from "@/components/sections/company-profile";

/**
 * Landing page, rendered once per locale.
 *
 * Section order tells the story: who we are → where the technologies apply →
 * what we provide → the manufacturers behind it → how we work → contact.
 * Each section takes its copy as a prop, so moving one to its own route
 * (/about, /products, /partners, /contact) changes nothing inside it.
 */
export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <main id="main">
      <Hero dict={dict.hero} />
      <CapabilityStrip dict={dict.capabilityStrip} />
      <CompanyOverview dict={dict.about} />
      <CompanyProfile dict={dict.profile} opensInNewTab={dict.common.opensInNewTab} />
      <Industries dict={dict.industries} />
      <Products dict={dict.solutions} />
      <Partners dict={dict.partners} opensInNewTab={dict.common.opensInNewTab} />
      <WhyAfaqRiyada dict={dict.whyUs} />
      <EngineeringProcess dict={dict.process} />
      <CallToAction dict={dict.cta} />
      <Contact dict={dict.contact} location={dict.common.location} />
    </main>
  );
}
