import type { Dictionary } from "@/data/dictionaries";
import { productsByCategory, solutionCategories } from "@/data/products";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/ui/product-card";
import { Reveal } from "@/components/ui/reveal";

export function Products({ dict }: { dict: Dictionary["solutions"] }) {
  return (
    <Section id="solutions" tone="light" labelledBy="solutions-heading">
      <Reveal>
        <SectionHeading
          id="solutions-heading"
          eyebrow={dict.eyebrow}
          heading={dict.heading}
          intro={dict.intro}
        />
      </Reveal>

      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-24">
        {solutionCategories.map((category, categoryIndex) => {
          const categoryProducts = productsByCategory(category.slug);
          const headingId = `solutions-${category.slug}`;

          return (
            <div key={category.slug}>
              <Reveal>
                <div className="flex flex-col gap-4 border-t border-ink-900/15 pt-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                  <div className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="font-mono text-sm text-accent-600"
                    >
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                    <h3
                      id={headingId}
                      className="text-2xl font-semibold text-ink-900 sm:text-[1.75rem]"
                    >
                      {dict.categories[category.slug].title}
                    </h3>
                  </div>
                  <p className="max-w-xl text-[0.9375rem] leading-relaxed text-steel-600">
                    {dict.categories[category.slug].description}
                  </p>
                </div>
              </Reveal>

              <ul
                aria-labelledby={headingId}
                className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
              >
                {categoryProducts.map((product, index) => (
                  <li key={product.slug} className="h-full">
                    <Reveal delay={index * 70} className="h-full">
                      <ProductCard product={product} dict={dict} />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
