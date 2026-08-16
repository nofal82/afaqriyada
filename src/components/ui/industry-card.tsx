import { Building2, Droplets, Factory, FlaskConical, Zap } from "lucide-react";
import type { IndustryIcon } from "@/data/types";

const icons: Record<IndustryIcon, typeof Droplets> = {
  water: Droplets,
  chemical: FlaskConical,
  manufacturing: Factory,
  infrastructure: Building2,
  energy: Zap,
};

interface IndustryCardProps {
  icon: IndustryIcon;
  title: string;
  description: string;
  index: number;
}

export function IndustryCard({ icon, title, description, index }: IndustryCardProps) {
  const Icon = icons[icon];

  return (
    <article className="group relative flex h-full flex-col bg-white p-7 transition-colors duration-300 hover:bg-mist-50 sm:p-8">
      <span
        aria-hidden="true"
        className="absolute end-6 top-6 font-mono text-xs text-steel-300"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <Icon
        className="size-7 text-accent-600 transition-transform duration-300 group-hover:-translate-y-0.5"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <h3 className="mt-6 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-steel-600">{description}</p>

      <span
        aria-hidden="true"
        className="mt-6 block h-px w-10 bg-accent-600/40 transition-all duration-300 group-hover:w-16"
      />
    </article>
  );
}
