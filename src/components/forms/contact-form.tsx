"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { AlertTriangle, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { company } from "@/data/company";
import type { Dictionary } from "@/data/dictionaries";
import {
  FIELD_LIMITS,
  validateContactPayload,
  type ContactFieldErrors,
  type ContactPayload,
  type ContactResponse,
  type ValidationKey,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const EMPTY_FORM: ContactPayload = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  areaOfInterest: "",
  message: "",
  website: "",
};

type Status = "idle" | "submitting" | ContactResponse["status"];

type FormCopy = Dictionary["contact"]["form"];

interface ContactFormProps {
  dict: FormCopy;
  /**
   * Whether an email provider is configured on the server. When it is not, the
   * form says so up front instead of letting a visitor submit into nothing.
   */
  deliveryConfigured: boolean;
}

export function ContactForm({ dict, deliveryConfigured }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState<ContactPayload>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const message = (key: ValidationKey | undefined) => (key ? dict.validation[key] : undefined);

  function update<K extends keyof ContactPayload>(field: K, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { errors: clientErrors, data } = validateContactPayload(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("invalid");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as ContactResponse;

      if (result.status === "invalid") {
        setErrors(result.errors);
      }

      setStatus(result.status);

      if (result.status === "sent") {
        setValues(EMPTY_FORM);
      }
    } catch {
      setStatus("error");
    }
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {!deliveryConfigured ? (
        <StatusMessage tone="warning" icon={AlertTriangle}>
          {dict.status.notConnectedLead} <SalesEmailLink /> {dict.status.notConnectedTail}
        </StatusMessage>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label={dict.fields.fullName}
          optionalLabel={dict.optional}
          required
          error={message(errors.fullName)}
          value={values.fullName}
          maxLength={FIELD_LIMITS.fullName}
          autoComplete="name"
          onChange={(value) => update("fullName", value)}
        />
        <Field
          id={`${formId}-company`}
          label={dict.fields.company}
          optionalLabel={dict.optional}
          error={message(errors.companyName)}
          value={values.companyName}
          maxLength={FIELD_LIMITS.companyName}
          autoComplete="organization"
          onChange={(value) => update("companyName", value)}
        />
        <Field
          id={`${formId}-email`}
          label={dict.fields.email}
          optionalLabel={dict.optional}
          type="email"
          required
          dir="ltr"
          error={message(errors.email)}
          value={values.email}
          maxLength={FIELD_LIMITS.email}
          autoComplete="email"
          onChange={(value) => update("email", value)}
        />
        <Field
          id={`${formId}-phone`}
          label={dict.fields.phone}
          optionalLabel={dict.optional}
          type="tel"
          dir="ltr"
          error={message(errors.phone)}
          value={values.phone}
          maxLength={FIELD_LIMITS.phone}
          autoComplete="tel"
          onChange={(value) => update("phone", value)}
        />
      </div>

      <div>
        <Label htmlFor={`${formId}-area`} required optionalLabel={dict.optional}>
          {dict.fields.areaOfInterest}
        </Label>
        <div className="relative mt-2">
          <select
            id={`${formId}-area`}
            name="areaOfInterest"
            required
            value={values.areaOfInterest}
            onChange={(event) => update("areaOfInterest", event.target.value)}
            aria-invalid={errors.areaOfInterest ? true : undefined}
            aria-describedby={errors.areaOfInterest ? `${formId}-area-error` : undefined}
            className={cn(
              "w-full appearance-none border bg-white py-3 ps-3.5 pe-11 text-[0.9375rem] transition-colors",
              values.areaOfInterest ? "text-ink-900" : "text-steel-500",
              errors.areaOfInterest ? "border-red-600" : "border-line hover:border-steel-400",
            )}
          >
            <option value="">{dict.selectPlaceholder}</option>
            {Object.entries(dict.areas).map(([key, label]) => (
              <option key={key} value={key} className="text-ink-900">
                {label}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-steel-500"
            aria-hidden="true"
          />
        </div>
        <FieldError id={`${formId}-area-error`} message={message(errors.areaOfInterest)} />
      </div>

      <div>
        <Label htmlFor={`${formId}-message`} required optionalLabel={dict.optional}>
          {dict.fields.message}
        </Label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={6}
          maxLength={FIELD_LIMITS.message}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          placeholder={dict.messagePlaceholder}
          className={cn(
            "mt-2 w-full resize-y border bg-white px-3.5 py-3 text-[0.9375rem] text-ink-900 transition-colors placeholder:text-steel-400",
            errors.message ? "border-red-600" : "border-line hover:border-steel-400",
          )}
        />
        <FieldError id={`${formId}-message-error`} message={message(errors.message)} />
      </div>

      {/* Honeypot — hidden from users and assistive technology. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website ?? ""}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 bg-accent-600 px-7 py-3.5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              {dict.submitting}
            </>
          ) : (
            dict.submit
          )}
        </button>
        <p className="text-xs leading-relaxed text-steel-500">
          {dict.routedTo} <SalesEmailLink />
        </p>
      </div>

      <FormStatus status={status} dict={dict} />
    </form>
  );
}

function SalesEmailLink({ className }: { className?: string }) {
  return (
    <a
      href={`mailto:${company.salesEmail}`}
      dir="ltr"
      className={cn("inline-block text-accent-700 underline", className)}
    >
      {company.salesEmail}
    </a>
  );
}

function FormStatus({ status, dict }: { status: Status; dict: FormCopy }) {
  if (status === "idle" || status === "submitting") return null;

  if (status === "sent") {
    return (
      <StatusMessage tone="success" icon={CheckCircle2}>
        {dict.status.sent}
      </StatusMessage>
    );
  }

  if (status === "invalid") {
    return (
      <StatusMessage tone="warning" icon={AlertTriangle}>
        {dict.status.invalid}
      </StatusMessage>
    );
  }

  if (status === "rate_limited") {
    return (
      <StatusMessage tone="warning" icon={AlertTriangle}>
        {dict.status.rateLimitedLead} <SalesEmailLink /> {dict.status.rateLimitedTail}
      </StatusMessage>
    );
  }

  // `not_configured` and `error` both mean: nothing was delivered. Say so.
  const lead =
    status === "not_configured" ? dict.status.notConfiguredLead : dict.status.errorLead;
  const tail =
    status === "not_configured" ? dict.status.notConfiguredTail : dict.status.errorTail;

  return (
    <StatusMessage tone="warning" icon={AlertTriangle}>
      {lead} <SalesEmailLink /> {tail}
    </StatusMessage>
  );
}

function StatusMessage({
  tone,
  icon: Icon,
  children,
}: {
  tone: "success" | "warning";
  icon: typeof CheckCircle2;
  children: ReactNode;
}) {
  return (
    <p
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-start gap-3 border p-4 text-sm leading-relaxed",
        tone === "success"
          ? "border-accent-600/30 bg-accent-600/5 text-ink-800"
          : "border-amber-600/30 bg-amber-50 text-ink-800",
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 size-4 shrink-0",
          tone === "success" ? "text-accent-600" : "text-amber-600",
        )}
        aria-hidden="true"
      />
      <span>{children}</span>
    </p>
  );
}

function Label({
  htmlFor,
  required,
  optionalLabel,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  optionalLabel: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-ink-800">
      {children}
      {required ? (
        <span className="ms-1 text-accent-700" aria-hidden="true">
          *
        </span>
      ) : (
        <span className="ms-2 text-xs font-normal text-steel-500">{optionalLabel}</span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-red-700">
      {message}
    </p>
  );
}

interface FieldProps {
  id: string;
  label: string;
  optionalLabel: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "tel";
  required?: boolean;
  error?: string;
  maxLength?: number;
  autoComplete?: string;
  /** Email and phone stay LTR even in an RTL layout. */
  dir?: "ltr";
}

function Field({
  id,
  label,
  optionalLabel,
  value,
  onChange,
  type = "text",
  required,
  error,
  maxLength,
  autoComplete,
  dir,
}: FieldProps) {
  return (
    <div>
      <Label htmlFor={id} required={required} optionalLabel={optionalLabel}>
        {label}
      </Label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        dir={dir}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "mt-2 w-full border bg-white px-3.5 py-3 text-[0.9375rem] text-ink-900 transition-colors",
          dir === "ltr" && "text-start",
          error ? "border-red-600" : "border-line hover:border-steel-400",
        )}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
