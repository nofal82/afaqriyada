# Afaq Riyada — corporate website

Production website for Afaq Riyada (Amman, Jordan) — a mechanical and industrial
engineering company supplying engineered products, industrial equipment and
technical solutions for water, wastewater, industrial and process applications.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS.
Bilingual: English at `/` and Arabic at `/ar`, with a true RTL layout.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm run start
```

## Project structure

```text
src/
  app/
    [locale]/               # every page, rendered once per locale
      layout.tsx            # <html lang/dir>, metadata, header, footer
      page.tsx              # landing page
      legal/, privacy/      # placeholder legal pages linked from the footer
      og/route.tsx          # per-locale social preview image
      not-found.tsx
    api/contact/route.ts    # server-side contact submission
    sitemap.ts, robots.ts, icon.svg, favicon.ico, apple-icon.png
  components/
    layout/                 # header, mobile nav, language switcher, footer
    sections/               # one component per landing-page section
    ui/                     # section shell, headings, cards, illustrations
    forms/                  # contact form (client)
    seo/                    # structured data
  data/
    dictionaries/           # en.ts, ar.ts — all translatable copy
    company.ts, partners.ts, products.ts, industries.ts, navigation.ts
  lib/                      # i18n, fonts, validation, mailer, rate limiting
  assets/fonts/             # IBM Plex faces used to draw the OG image
public/
  partners/                 # manufacturer logos (official sources)
  brand/                    # Afaq Riyada brand assets (see below)
  images/                   # project photography, when available
```

### Content lives in `src/data`

Nothing user-facing is hard-coded inside components. `src/data/dictionaries`
holds **all** translatable text — navigation, every section, the contact form,
its validation messages and the SEO metadata. The other files in `src/data` hold
only language-independent facts: slugs, asset paths, official manufacturer names
and websites, and layout hints.

`en.ts` is the source dictionary and its shape defines the `Dictionary` type, so
a key missing from `ar.ts` is a TypeScript error rather than a blank space on the
page. Translations are written and reviewed in these files — no runtime or
browser machine translation is used anywhere.

## Bilingual architecture

| | English | Arabic |
| --- | --- | --- |
| URLs | `/`, `/privacy`, … | `/ar`, `/ar/privacy`, … |
| `<html>` | `lang="en" dir="ltr"` | `lang="ar" dir="rtl"` |
| Typeface | IBM Plex Sans | IBM Plex Sans Arabic |

Both locales render from one route tree, `src/app/[locale]`. Arabic matches that
segment directly; English is served without a prefix, so `next.config.ts`
rewrites un-prefixed URLs onto `/en/*` and redirects `/en/*` back to the public
form so each page has exactly one URL. Adding a page means creating it once
under `app/[locale]` — both locales get it automatically. Add its path to
`src/app/sitemap.ts` and its labels to both dictionaries.

Routing helpers live in `src/lib/i18n.ts`: `localePath()` builds a URL for a
locale, `stripLocale()` reverses it, and `languageAlternates()` produces the
hreflang set. Use `localePath(locale, path)` for any link to a real route;
in-page anchors (`#contact`) need no prefix.

### RTL

RTL is a real mirror, not a right-aligned LTR layout: logical CSS properties
(`ps-*`, `pe-*`, `ms-*`, `me-*`, `text-start`, `border-s`, `end-*`) throughout,
directional icons flipped with `rtl:rotate-180` / `rtl:-scale-x-100`, and the
hero's background gradient mirrored with `rtl:bg-linear-to-l`.

Arabic typography is treated as its own script rather than the Latin styles
re-used: `globals.css` switches the body face, relaxes line height, removes the
negative heading tracking, and rewrites the mono/uppercase/wide-tracked
"eyebrow" label into a medium-weight Arabic label. Uppercase and letter-spacing
are dropped anywhere they would otherwise apply.

Content that must stay Latin inside Arabic — manufacturer trademarks, email
addresses, material codes — is wrapped in `dir="ltr"` runs so the bidi algorithm
orders it correctly without pulling the surrounding block out of alignment.

### Language switcher

`components/layout/language-switcher.tsx` renders `EN | العربية` in the desktop
header and in the mobile menu. It strips the locale from the current pathname and
re-prefixes it for the target, so it moves between *equivalent* pages
(`/ar/privacy` → `/privacy`), and it carries the current section anchor across
the switch so the visitor stays where they were.

### Adding a locale

Add it to `locales` in `src/lib/i18n.ts` (plus its direction, display name and
OpenGraph tag), copy `en.ts` to a new dictionary and translate it, and register
the dictionary in `src/data/dictionaries/index.ts`. If the new locale is not
Latin-script, add its face in `src/lib/fonts.ts` and a typography block in
`globals.css`.

## SEO

Each locale has its own title, description, keywords, canonical URL, OpenGraph
metadata and generated preview image (`/og` and `/ar/og`). Every page emits the
full hreflang set — `en`, `ar` and `x-default` pointing at English — and the
sitemap lists both locales with the same alternates. Organization and WebSite
structured data are emitted per locale, with the other locale's company name as
`alternateName` so both forms resolve to one organization.

## Contact form

The form validates on the client and again on the server (`src/lib/contact.ts`
is shared by both). The API route rate limits per IP, enforces a body size cap,
sanitizes input before it reaches an email body, and includes a honeypot field.

**Email delivery is not connected.** No third-party service has been signed up
for or configured. Until one is, `POST /api/contact` returns `not_configured`
and the form states plainly that the message was not sent, pointing the visitor
at `sales@afaqriyada.com`. It never fakes a successful submission.

To connect delivery, copy `.env.example` to `.env.local` and set:

| Variable                 | Purpose                                             |
| ------------------------ | --------------------------------------------------- |
| `CONTACT_EMAIL_PROVIDER` | `resend` or `sendgrid`                              |
| `CONTACT_FROM_EMAIL`     | Verified sender on a domain you control             |
| `CONTACT_TO_EMAIL`       | Recipient (defaults to `sales@afaqriyada.com`)      |
| `RESEND_API_KEY`         | API key when the provider is Resend                 |
| `SENDGRID_API_KEY`       | API key when the provider is SendGrid               |

`src/lib/mailer.ts` is the single integration point — an SMTP or in-house API
transport can be added there without touching the route or the form.

The in-memory rate limiter in `src/lib/rate-limit.ts` is per-instance. If the
site is deployed across multiple instances, back it with a shared store.

## Assets

### Manufacturer logos — `public/partners/`

Each logo was taken from the manufacturer's own current official website and is
displayed unmodified at its original aspect ratio, for identification only.
`PartnerCard` falls back to the manufacturer name set in the site typeface if a
logo is ever removed — it never redraws or imitates a logo.

### Afaq Riyada branding — `public/brand/`

No official logo has been supplied, so the header uses a temporary typographic
wordmark (`src/components/ui/wordmark.tsx`) rather than an invented logo. When
a real asset is available, add it to `public/brand/` and set `BRAND_LOGO` in
that component — the header, footer and mobile navigation pick it up
automatically.

### Fonts

Both faces are self-hosted by `next/font` (no runtime request to Google). They
are deliberately not preloaded: the two locales share one layout, so a preload
link would be emitted on every page for every face and English visitors would
download the Arabic face. See the comment in `src/lib/fonts.ts`.

`src/assets/fonts` holds two IBM Plex TTFs used only to draw the OpenGraph
images, which need real font bytes at render time.

### Imagery — `public/images/`

Product cards and the hero use original engineering line schematics rather than
stock photography: they describe the equipment type honestly, imply no specific
manufacturer's product, and carry no licensing ambiguity. When licensed project
or equipment photography is available, drop the files into `public/images/` and
render them through `next/image` in `ProductCard` in place of
`TechnicalIllustration`.

## Content accuracy

Manufacturer descriptions were written from each manufacturer's current official
website (`officialWebsite` in `src/data/partners.ts`). The site deliberately does
**not** state distributor, agency, authorization or exclusivity status, and does
not publish specifications, capacities, ratings, certifications, project
references, founding dates, staff numbers, phone numbers or street addresses,
because none of those have been confirmed. Where a manufacturer is not yet
assigned to a product group (pumps, water/industrial valves, mechanical seals),
the card says so instead of naming one.

### Known behaviour

Links to English *routes* (not anchors) set `prefetch={false}`. The router's
segment prefetch requests the public URL and does not resolve it through the
`/en/*` rewrite, which produces a background 404; navigation itself is
unaffected. The footer's legal links carry the flag with a comment — drop it once
the router handles rewritten segment prefetches.

The Arabic company name (آفاق ريادة) and the Arabic copy throughout are a written
translation and should be reviewed by the company before launch, in particular
the rendering of the company name itself.
