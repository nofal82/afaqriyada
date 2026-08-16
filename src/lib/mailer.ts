import "server-only";

import { company } from "@/data/company";
import { areaOfInterestLabelEn } from "@/data/dictionaries";
import {
  sanitizeForEmail,
  sanitizeHeaderValue,
  sanitizeMultiline,
  type ContactPayload,
} from "./contact";

/**
 * Email delivery abstraction for contact-form inquiries.
 *
 * No email provider is connected yet, and none is signed up for automatically.
 * Until one is configured through environment variables, `sendInquiry` reports
 * `not_configured` and the form tells the visitor to email sales directly —
 * the UI never claims a message was delivered when it was not.
 *
 * To connect a provider:
 *   1. Set CONTACT_EMAIL_PROVIDER to "resend" or "sendgrid".
 *   2. Set the provider API key (RESEND_API_KEY / SENDGRID_API_KEY).
 *   3. Set CONTACT_FROM_EMAIL to a sender on a domain you have verified.
 *   4. Optionally set CONTACT_TO_EMAIL (defaults to the sales address).
 * See .env.example and README.md.
 */

export type SendResult =
  | { status: "sent" }
  | { status: "not_configured" }
  | { status: "error"; reason: string };

type Provider = "resend" | "sendgrid";

interface MailerConfig {
  provider: Provider;
  apiKey: string;
  from: string;
  to: string;
}

function readConfig(): MailerConfig | null {
  const provider = process.env.CONTACT_EMAIL_PROVIDER?.trim().toLowerCase();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim() || company.salesEmail;

  if (!provider || !from) return null;

  if (provider === "resend") {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    return apiKey ? { provider, apiKey, from, to } : null;
  }

  if (provider === "sendgrid") {
    const apiKey = process.env.SENDGRID_API_KEY?.trim();
    return apiKey ? { provider, apiKey, from, to } : null;
  }

  return null;
}

export function isMailerConfigured(): boolean {
  return readConfig() !== null;
}

export async function sendInquiry(payload: ContactPayload): Promise<SendResult> {
  const config = readConfig();
  if (!config) return { status: "not_configured" };

  const subject = sanitizeHeaderValue(
    `Website inquiry — ${areaOfInterestLabelEn(payload.areaOfInterest)} — ${payload.fullName}`,
  );
  const replyTo = sanitizeHeaderValue(payload.email);
  const body = buildPlainTextBody(payload);

  try {
    const response =
      config.provider === "resend"
        ? await sendWithResend(config, { subject, replyTo, body })
        : await sendWithSendgrid(config, { subject, replyTo, body });

    if (!response.ok) {
      return { status: "error", reason: `Provider responded with ${response.status}` };
    }

    return { status: "sent" };
  } catch (error) {
    return {
      status: "error",
      reason: error instanceof Error ? error.message : "Unknown transport error",
    };
  }
}

interface Message {
  subject: string;
  replyTo: string;
  body: string;
}

function sendWithResend(config: MailerConfig, message: Message) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      reply_to: message.replyTo,
      subject: message.subject,
      text: message.body,
    }),
  });
}

function sendWithSendgrid(config: MailerConfig, message: Message) {
  return fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: config.to }] }],
      from: { email: config.from, name: company.name },
      reply_to: { email: message.replyTo },
      subject: message.subject,
      content: [{ type: "text/plain", value: message.body }],
    }),
  });
}

function buildPlainTextBody(payload: ContactPayload): string {
  const lines = [
    `Name:              ${sanitizeForEmail(payload.fullName)}`,
    `Company:           ${sanitizeForEmail(payload.companyName) || "—"}`,
    `Email:             ${sanitizeForEmail(payload.email)}`,
    `Phone:             ${sanitizeForEmail(payload.phone) || "—"}`,
    // Always the English label, whichever locale the visitor submitted from.
    `Area of interest:  ${areaOfInterestLabelEn(payload.areaOfInterest)}`,
    "",
    "Message:",
    sanitizeMultiline(payload.message),
    "",
    `Submitted via ${company.website}`,
  ];

  return lines.join("\n");
}
