import type { NextConfig } from "next";

/**
 * Locale routing.
 *
 * Every page lives once, under `app/[locale]`. Arabic keeps its `/ar` prefix and
 * matches directly; English is served without a prefix, so anything that did not
 * match a file or a page route is rewritten onto `/en/*`.
 *
 * These are config rewrites rather than proxy/middleware rewrites on purpose:
 * they run inside the router, so client-side prefetches of English routes
 * resolve normally. A middleware rewrite makes the router issue an extra
 * redirect for the router's RSC requests, which breaks prefetching.
 *
 * `/en/*` is redirected to the un-prefixed form so each page has exactly one
 * public URL and no duplicate content is served.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },

  async rewrites() {
    return {
      // `beforeFiles` runs ahead of route matching, so an un-prefixed English
      // URL never collides with the `[locale]` segment. The pattern skips the
      // Arabic prefix, the internal `/en` form, API routes, Next internals and
      // anything that looks like a file (favicon.ico, sitemap.xml, ...).
      beforeFiles: [
        { source: "/", destination: "/en" },
        {
          source: "/:path((?!ar(?:/|$)|en(?:/|$)|api/|_next/|.*\\.).*)",
          destination: "/en/:path",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
