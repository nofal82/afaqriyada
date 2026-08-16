import type { Dictionary } from "@/data/dictionaries";

/** Short credibility strip bridging the dark hero and the light overview. */
export function CapabilityStrip({ dict }: { dict: Dictionary["capabilityStrip"] }) {
  return (
    <section aria-label={dict.label} className="border-b border-line bg-white">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <dl className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {dict.items.map((item) => (
            <div key={item.title} className="py-8 sm:px-8 sm:py-10 sm:first:ps-0 sm:last:pe-0">
              <dt className="text-base font-semibold text-ink-900">{item.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-steel-600">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
