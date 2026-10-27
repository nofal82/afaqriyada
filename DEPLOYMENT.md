# Company profile and branding update

## Reviewed baseline

Production and the local source were both at commit
`69d7d05060cb0c7de1538afa6de2c0bdc58dc5e8` before this update.
Production reports an existing modification to `package-lock.json`.
This update does not change `package.json`, `package-lock.json`, `next.config.ts`,
the contact API, mailer configuration or Nginx configuration.

## Content and assets

- Official wordmark in header, mobile navigation, footer and social previews.
- Official icon for SVG/ICO favicon, Apple icon and organization structured data.
- Sixteen manufacturer/product groups, matching the latest supplied profile.
- English and Arabic company, product, contact, SEO and enquiry-category content.
- Updated contact details and address from the portrait A4 profile.
- English A4 profile download and English online flipbook, linked from both locales.
- The PDF is an unchanged copy of `updates/Afaq_Riyada_Company_Profile_A4.pdf`.
- The published flipbook's second contact is aligned with the A4 PDF: Sales
  Department, sales@afaqriyada.com, +962 7 9044 0487. The original input is unchanged.
- The manufacturer portfolio no longer lists TEADIT, THALETEC, SIMONA or SGL Carbon,
  which do not appear in the latest profile. Their unused old public assets remain
  available so existing direct asset URLs are not unnecessarily broken.

## Prepare a separate release

Do not upload Windows `node_modules` or `.next` to Linux. Do not rebuild inside
the live `/opt/afaqriyada` checkout, overwrite `.env.local`, run `git reset --hard`,
or replace the running release before the new release has passed its checks.

1. Identify the actual production process manager and launch command. They were
   not included with the server listing. Inspect the listener with
   `ss -ltnp 'sport = :3121'`, then inspect that process and its service definition.
   Record its working directory, runtime user, Node version, environment handling,
   restart command and recovery command. Do not assume PM2 or a systemd unit name.
2. Back up the current application source, `.env.local`, modified lockfile and
   process configuration to an access-controlled location outside the web root.
   Keep the currently working `.next` build available for rollback.
3. Extract the new source bundle into a new directory, for example a uniquely
   named release under `/opt/afaqriyada-releases/`. Do not extract over production.
4. Copy the current server's `.env.local` and `package-lock.json` into the new
   release, preserving ownership and restrictive environment-file permissions.
   The server's lockfile modification must be retained and reviewed. If `npm ci`
   reports a manifest mismatch, stop and investigate rather than regenerating it.
5. Use the same supported Node version as production. Install dependencies with
   `npm ci` in the new release, as the application's runtime user. Run
   `npm run lint` and `npm run build`. The existing `next/font/google` setup needs
   access to Google Fonts during compilation. Keep logs and stop on failure.
6. Start the built release on a free loopback port, for example
   `npm run start -- --hostname 127.0.0.1 --port 3122`. Use the established process
   manager or a separate temporary SSH session to keep it running for validation.

## Verify before cutover

Check `/`, `/ar`, `/privacy`, `/ar/privacy`, `/legal`, `/ar/legal`, `/og`, `/ar/og`,
`/icon.svg`, `/favicon.ico`, `/apple-icon.png`, `/brand/wordmark.svg`,
`/company-profile/afaq-riyada-company-profile-a4.pdf` and
`/company-profile/index.html` on the candidate release.

Check both languages at desktop and phone widths: header/menu, language switching,
all 16 products and manufacturers, address, telephone/email links, profile links,
and flipbook navigation. The documents intentionally remain English. Confirm the
PDF download matches the supplied A4 source. Confirm contact form visibility is
consistent with the server's mailer configuration; send a real enquiry only as
an explicitly authorized deployment check.

## Cutover and rollback

Once the candidate release is verified, use the established production process
manager to switch its working directory to the new release and run it on the
existing port **3121**. Plan for a brief restart interruption unless the existing
process manager supports a verified seamless switch. Nginx remains unchanged.
Stop the temporary candidate listener after the production process is healthy.

Check the HTTPS English and Arabic pages, profile files and application/Nginx logs
immediately after the switch. If the process fails or a material regression appears,
restore the previous process configuration and restart the previous release on
3121 using its existing build and environment. Verify HTTPS again. Do not delete
the previous release until production has been reviewed and accepted.

The final restart/cutover command depends on the actual process manager. Confirm
that configuration before making any production change.
