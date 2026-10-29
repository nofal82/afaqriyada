import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { company } from "@/data/company";
import { brandLogos } from "@/data/brand";
import { getDictionary } from "@/data/dictionaries";
import { defaultLocale, direction, isLocale, locales } from "@/lib/i18n";

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

/**
 * The image renderer shapes glyphs correctly but does not apply the bidi
 * algorithm: an Arabic sentence comes out with its words in Latin order. Each
 * line is therefore laid out as an explicit row-reverse flex row of words, so
 * the visual order is right-to-left while each word keeps its own shaping.
 *
 * Combining marks (shadda, fatha, …) are also not composed by the renderer, so
 * they are stripped for this image only — the site itself keeps full
 * orthography, where the browser shapes them properly.
 */
function ArabicText({
  children,
  style,
}: {
  children: string;
  style?: React.CSSProperties;
}) {
  const words = children.replace(/[ً-ْٰ]/g, "").split(/\s+/);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        alignItems: "baseline",
        // Pixel gaps: the renderer does not resolve em units for gap.
        columnGap: 0,
        rowGap: 4,
        ...style,
      }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>{word}</span>
      ))}
    </div>
  );
}

/** Renders a line correctly in either script. */
function Line({
  text,
  rtl,
  style,
}: {
  text: string;
  rtl: boolean;
  style?: React.CSSProperties;
}) {
  if (rtl) return <ArabicText style={style}>{text}</ArabicText>;
  return <div style={{ display: "flex", ...style }}>{text}</div>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Social preview image, generated per locale from site content — no external
 * assets and no network access at build or request time.
 *
 * This is a plain route rather than the `opengraph-image` file convention so
 * that the public URL is exactly `/og` (English) and `/ar/og`, which is what
 * the metadata in the layout advertises. The Arabic image is laid out
 * right-to-left and drawn with the Arabic face, so a shared Arabic link
 * previews correctly instead of rendering tofu boxes.
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const rtl = direction(locale) === "rtl";
  const fontData = await loadFont(locale);
  const logo = brandLogos[locale];
  const wordmark = await readFile(join(process.cwd(), "public", logo.src.slice(1)));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a141c",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "Brand",
          direction: rtl ? "rtl" : "ltr",
        }}
      >
        {/* The renderer does not reorder flex children for RTL, so the row
            direction is set explicitly. */}
        <div
          style={{
            display: "flex",
            flexDirection: rtl ? "row-reverse" : "row",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires native image elements. */}
          <img
            src={`data:image/svg+xml;base64,${wordmark.toString("base64")}`}
            alt={dict.brand.name}
            width={420}
            height={Math.round(420 * logo.height / logo.width)}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <Line
            text={rtl ? dict.hero.eyebrow : dict.hero.eyebrow.toUpperCase()}
            rtl={rtl}
            style={{
              fontSize: 22,
              letterSpacing: rtl ? 0 : "0.2em",
              color: "#6cc7d4",
              columnGap: 8,
            }}
          />
          <Line
            text={dict.hero.headline}
            rtl={rtl}
            style={{
              marginTop: 24,
              fontSize: 58,
              lineHeight: 1.25,
              maxWidth: 940,
              columnGap: 0,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: rtl ? "row-reverse" : "row",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#90a0aa",
            borderTop: "1px solid #1e3242",
            paddingTop: 28,
          }}
        >
          <Line text={rtl ? "عمّان، الأردن" : "Amman, Jordan"} rtl={rtl} style={{ columnGap: 8 }} />
          <span style={{ direction: "ltr" }}>{company.domain}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Brand", data: fontData, style: "normal", weight: 600 }],
    },
  );
}

/**
 * The image renderer needs real font bytes, so the two faces used here are
 * vendored under src/assets/fonts (IBM Plex, SIL Open Font License).
 */
async function loadFont(locale: string): Promise<ArrayBuffer> {
  const file = locale === "ar" ? "ibm-plex-sans-arabic-600.ttf" : "ibm-plex-sans-600.ttf";
  const buffer = await readFile(join(process.cwd(), "src/assets/fonts", file));
  return Uint8Array.from(buffer).buffer;
}
