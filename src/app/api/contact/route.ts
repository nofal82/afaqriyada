import { NextResponse } from "next/server";
import { validateContactPayload, type ContactResponse } from "@/lib/contact";
import { sendInquiry } from "@/lib/mailer";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;

export async function POST(request: Request): Promise<NextResponse<ContactResponse>> {
  const limit = rateLimit(`contact:${clientKey(request.headers)}`);
  if (!limit.allowed) {
    return NextResponse.json(
      { status: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ status: "error" }, { status: 413 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }

  if (typeof raw !== "object" || raw === null) {
    return NextResponse.json({ status: "error" }, { status: 400 });
  }

  const { errors, data } = validateContactPayload(raw as Record<string, unknown>);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ status: "invalid", errors }, { status: 400 });
  }

  // Honeypot: real visitors never see this field, bots fill it in. Respond as
  // though accepted without sending anything.
  if (data.website) {
    return NextResponse.json({ status: "sent" });
  }

  const result = await sendInquiry(data);

  if (result.status === "not_configured") {
    // Answered 200: "no provider configured" is an expected deployment state
    // that the client renders as its own message, not a server failure. The
    // body still says plainly that nothing was sent.
    return NextResponse.json({ status: "not_configured" });
  }

  if (result.status === "error") {
    // Log server-side only; never leak provider detail to the client.
    console.error("[contact] delivery failed:", result.reason);
    return NextResponse.json({ status: "error" }, { status: 502 });
  }

  return NextResponse.json({ status: "sent" });
}
