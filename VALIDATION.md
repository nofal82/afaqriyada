# Local validation: company profile update

Validated on 27 October 2026 against a local production server, built from the
updated source. No production server or Nginx changes were performed.

## Results

- `npm run build`: passed, including TypeScript and static generation of both locales.
- `npm run lint`: passed.
- `git diff --check`: passed.
- Browser checks: **113/113 passed** in headless Chrome against the production build.
- English and Arabic tested at 320, 375, 768, 1024, 1280 and 1440 CSS pixels.
- Each locale renders 16 product groups and 16 manufacturer cards.
- No horizontal page overflow, overlapping header controls or broken page images.
- Official header wordmark loads and document direction is correct in both locales.
- Mobile menu opens/closes in both languages; desktop language switching preserves
  the current section anchor.
- Legal/privacy routes, both social images, browser/Apple icons, wordmark,
  profile HTML and PDF respond successfully.
- Downloaded A4 PDF SHA-256 matches the supplied source exactly.
- Phone and desktop flipbook controls reach the final page and return to the cover;
  embedded images load and the Sales Department contact is present.
- No browser JavaScript errors during the checks.
- Screenshots reviewed for English/Arabic home pages, mobile navigation,
  profile links, Arabic contact/product presentation, social previews and flipbook.

The existing contact API, mailer and rate-limit implementation are unchanged.
No real enquiry was submitted and no email was sent. Production mail delivery,
process-manager setup, Linux build, HTTPS cutover and rollback still need the
server-side checks in `DEPLOYMENT.md`. The English PDF and flipbook have not been
translated into Arabic; their links identify their language on the Arabic site.

The source bundle excludes environment files, Git metadata, installed dependencies,
build output, original update inputs and unrelated local notes. Before building on
Linux, copy the existing server's environment file and modified package lock into
the separate candidate release as described in the deployment notes.
