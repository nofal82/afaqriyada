import Image from "next/image";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  name: string;
  tagline: string;
  tone?: "light" | "dark";
  uppercase?: boolean;
  className?: string;
}

/** Official vector paths exported from the supplied Illustrator wordmark. */
export function Wordmark({ name, tone = "light", className }: WordmarkProps) {
  return (
    <span className={cn("inline-flex items-center", tone === "light" && "bg-[#0a5684] px-3 py-2", className)}>
      <Image
        src="/brand/wordmark.svg"
        alt={name}
        width={734}
        height={75}
        priority
        className="h-auto w-32 min-[380px]:w-40 sm:w-52"
      />
    </span>
  );
}
