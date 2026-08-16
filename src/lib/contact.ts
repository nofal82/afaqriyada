import { areaOfInterestKeys } from "@/data/dictionaries";

/**
 * Contact-form contract shared by the client form and the server route.
 *
 * Validation runs in both places and the server never trusts the client.
 * Results are locale-independent: the validator returns message *keys*, which
 * each locale renders through its own dictionary, so a translation change never
 * touches validation logic. The submitted `areaOfInterest` is likewise a
 * canonical key rather than a translated label, so an Arabic submission and an
 * English one carry the same value on the server.
 */

export interface ContactPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  /** Canonical interest key — see `areaOfInterestKeys`. */
  areaOfInterest: string;
  message: string;
  /** Hidden anti-spam field — must stay empty. */
  website?: string;
}

/** Keys into `dictionary.contact.form.validation`. */
export type ValidationKey =
  | "nameRequired"
  | "nameTooLong"
  | "companyTooLong"
  | "emailInvalid"
  | "emailTooLong"
  | "phoneTooLong"
  | "areaRequired"
  | "messageTooShort"
  | "messageTooLong";

export type ContactFieldErrors = Partial<Record<keyof ContactPayload, ValidationKey>>;

export const FIELD_LIMITS = {
  fullName: 120,
  companyName: 160,
  email: 254,
  phone: 40,
  areaOfInterest: 80,
  message: 4000,
} as const;

export const MIN_MESSAGE_LENGTH = 20;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export function validateContactPayload(input: Partial<ContactPayload>): {
  errors: ContactFieldErrors;
  data: ContactPayload;
} {
  const data: ContactPayload = {
    fullName: str(input.fullName),
    companyName: str(input.companyName),
    email: str(input.email),
    phone: str(input.phone),
    areaOfInterest: str(input.areaOfInterest),
    message: str(input.message),
    website: str(input.website),
  };

  const errors: ContactFieldErrors = {};

  if (data.fullName.length < 2) {
    errors.fullName = "nameRequired";
  } else if (data.fullName.length > FIELD_LIMITS.fullName) {
    errors.fullName = "nameTooLong";
  }

  if (data.companyName.length > FIELD_LIMITS.companyName) {
    errors.companyName = "companyTooLong";
  }

  if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = "emailInvalid";
  } else if (data.email.length > FIELD_LIMITS.email) {
    errors.email = "emailTooLong";
  }

  if (data.phone.length > FIELD_LIMITS.phone) {
    errors.phone = "phoneTooLong";
  }

  if (!(areaOfInterestKeys as string[]).includes(data.areaOfInterest)) {
    errors.areaOfInterest = "areaRequired";
  }

  if (data.message.length < MIN_MESSAGE_LENGTH) {
    errors.message = "messageTooShort";
  } else if (data.message.length > FIELD_LIMITS.message) {
    errors.message = "messageTooLong";
  }

  return { errors, data };
}

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Collapse every run of whitespace - including CR/LF - into a single space, so
 * a submitted value can never be used to inject an email header.
 */
export function sanitizeForEmail(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/** Multi-line safe: keeps paragraph breaks, normalises everything else. */
export function sanitizeMultiline(value: string): string {
  return value
    .split(/\r?\n/)
    .map((line) => line.replace(/[^\S\n]+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Header-safe single-line value (subject line, reply-to display name). */
export function sanitizeHeaderValue(value: string): string {
  return sanitizeForEmail(value).slice(0, 200);
}

export type ContactResponse =
  | { status: "sent" }
  | { status: "invalid"; errors: ContactFieldErrors }
  | { status: "rate_limited" }
  | { status: "not_configured" }
  | { status: "error" };
