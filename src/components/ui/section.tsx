import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "light" | "muted" | "dark" | "deep";

const tones: Record<Tone, string> = {
  light: "bg-white text-ink-900",
  muted: "bg-mist-100 text-ink-900",
  dark: "bg-ink-900 text-white",
  deep: "bg-ink-950 text-white",
};

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  /** Rendered edge-to-edge behind the container (background treatments). */
  backdrop?: ReactNode;
  labelledBy?: string;
}

/** Shared section shell: consistent rhythm, container width and tone. */
export function Section({
  id,
  tone = "light",
  className,
  containerClassName,
  children,
  backdrop,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative scroll-mt-24 py-20 sm:py-24 lg:py-28", tones[tone], className)}
    >
      {backdrop}
      <div
        className={cn(
          "relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
