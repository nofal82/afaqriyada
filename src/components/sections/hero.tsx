import Image from "next/image";
import { heroPhoto } from "@/data/product-photos";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { Reveal } from "@/components/ui/reveal";

/** Manufacturer equipment photograph used as a decorative background, not a project claim. */
export function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-texture absolute inset-0 text-steel-300 opacity-[0.18]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_10%,rgba(18,136,156,0.22),transparent_60%)]" />
        <div className="absolute inset-y-0 end-0 w-full [mask-image:linear-gradient(to_right,transparent,black_25%)] lg:w-[65%] rtl:[mask-image:linear-gradient(to_left,transparent,black_25%)]">
          <Image
            src={heroPhoto.src}
            alt=""
            fill
            priority
            unoptimized
            className="object-cover opacity-20 lg:opacity-55"
          />
        </div>
        {/* Keeps the photograph behind the text sufficiently dark for readability. */}
        <div className="absolute inset-0 bg-linear-to-r from-ink-950 via-ink-950/85 to-transparent rtl:bg-linear-to-l" />
      </div>

      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-accent-300">
              <span aria-hidden="true" className="h-px w-10 bg-accent-300/60" />
              {dict.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl leading-[1.08] font-semibold text-white sm:text-5xl lg:text-6xl">
              {dict.headline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-steel-300 sm:text-lg">
              {dict.body}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 bg-accent-600 px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-accent-700"
              >
                {dict.primaryCta}
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-ink-900"
              >
                {dict.secondaryCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[88rem] px-5 sm:mt-20 sm:px-8 lg:mt-24 lg:px-12">
        <Reveal delay={320}>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
            {dict.trustStrip.map((item) => (
              <li
                key={item}
                className="eyebrow flex items-center gap-3 text-steel-400"
              >
                <span aria-hidden="true" className="size-1 bg-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
