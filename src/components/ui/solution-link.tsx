"use client";

import type { MouseEvent, ReactNode } from "react";
import { selectSolution } from "@/lib/solution-enquiry";

export function SolutionLink({ slug, children, className }: {
  slug: string;
  children: ReactNode;
  className?: string;
}) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    selectSolution(slug);
    // Allow the selection summary to render before calculating the scroll target.
    requestAnimationFrame(() => document.getElementById("enquiry")?.scrollIntoView({ block: "start" }));
  }
  return <a href={`?solution=${encodeURIComponent(slug)}#enquiry`} onClick={onClick} className={className}>{children}</a>;
}
