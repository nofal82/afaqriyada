"use client";

import { Mail } from "lucide-react";
import { company } from "@/data/company";
import type { Dictionary } from "@/data/dictionaries";
import { selectSolution, useSelectedSolution } from "@/lib/solution-enquiry";

type Solutions = Dictionary["solutions"]["items"];
type ContextCopy = Dictionary["contact"]["selection"];

export function EnquiryContext({ solutions, dict }: { solutions: Solutions; dict: ContextCopy }) {
  const slug = useSelectedSolution();
  const selected = solutions[slug as keyof Solutions];
  if (!selected) return null;
  return (
    <div className="mb-7 border-s-4 border-accent-600 bg-mist-100 p-4" role="status">
      <p className="text-xs font-medium text-steel-600">{dict.label}</p>
      <p className="mt-1 font-semibold text-ink-900">{selected.title}</p>
      <button type="button" onClick={() => selectSolution("")} className="mt-1 inline-flex min-h-11 items-center text-sm text-accent-700 underline underline-offset-4">{dict.clear}</button>
    </div>
  );
}

export function EmailEnquiryLink({ solutions, dict }: { solutions: Solutions; dict: ContextCopy }) {
  const slug = useSelectedSolution();
  const selected = solutions[slug as keyof Solutions];
  const params = selected ? new URLSearchParams({
    subject: `${dict.subject}: ${selected.title}`,
    body: `${dict.label}: ${selected.title}\n\n${dict.emailPrompt}\n`,
  }).toString().replace(/\+/g, "%20") : "";
  return (
    <a href={`mailto:${company.salesEmail}${params ? `?${params}` : ""}`} className="mt-8 inline-flex min-h-11 items-center gap-2.5 bg-accent-600 px-6 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-accent-700">
      <Mail className="size-4 shrink-0" aria-hidden="true" />
      <span dir="ltr">{company.salesEmail}</span>
    </a>
  );
}
