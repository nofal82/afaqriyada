import { Download, BookOpen } from "lucide-react";
import type { Dictionary } from "@/data/dictionaries";
import { Section } from "@/components/ui/section";

export function CompanyProfile({ dict, opensInNewTab }: {
  dict: Dictionary["profile"];
  opensInNewTab: string;
}) {
  return (
    <Section id="company-profile" tone="muted" labelledBy="profile-heading">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 id="profile-heading" className="text-2xl font-semibold text-ink-900 sm:text-3xl">{dict.heading}</h2>
          <p className="mt-4 leading-relaxed text-steel-600">{dict.body}</p>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
          <div>
            <a href="/company-profile/afaq-riyada-company-profile-a4.pdf" download className="inline-flex items-center gap-3 bg-accent-600 px-5 py-3 text-sm font-medium text-white hover:bg-accent-700">
              <Download className="size-4" aria-hidden="true" />{dict.download}
            </a>
            <p className="mt-2 text-xs text-steel-600">{dict.language}</p>
          </div>
          <div>
            <a href="/company-profile/index.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-ink-900/20 px-5 py-3 text-sm font-medium text-ink-900 hover:border-accent-600 hover:text-accent-700">
              <BookOpen className="size-4" aria-hidden="true" />{dict.online}
              <span className="sr-only">({opensInNewTab})</span>
            </a>
            <p className="mt-2 text-xs text-steel-600">{dict.onlineLanguage}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
