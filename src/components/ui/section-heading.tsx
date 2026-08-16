import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: ReactNode;
  intro?: ReactNode;
  /** Heading level — sections use h2; keep the document outline correct. */
  as?: "h2" | "h3";
  tone?: "light" | "dark";
  align?: "start" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  as: Tag = "h2",
  tone = "light",
  align = "start",
  className,
  id,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
            dark ? "text-accent-300" : "text-accent-600",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("h-px w-8", dark ? "bg-accent-300/60" : "bg-accent-600/50")}
          />
          {eyebrow}
        </p>
      ) : null}

      <Tag
        id={id}
        className={cn(
          "text-balance text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-ink-900",
        )}
      >
        {heading}
      </Tag>

      {intro ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            dark ? "text-steel-300" : "text-steel-600",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
