import type { Manufacturer } from "./types";

/**
 * Manufacturer records — language-independent facts only.
 *
 * Names are trademarks and are kept in their official form in every locale.
 * Technology category and description are translated per locale in the
 * dictionaries, keyed by `slug`, and are written from each manufacturer's own
 * current official website. Nothing states or implies a distribution, agency,
 * exclusivity or authorization relationship.
 *
 * Logos are the manufacturers' own assets taken from their official websites and
 * are shown unmodified, at their original aspect ratio, for identification only.
 */
export const manufacturers: Manufacturer[] = [
  {
    name: "Henriques & Henriques",
    slug: "henriques-henriques",
    officialWebsite: "https://www.heh.pt",
    logo: "/partners/henriques-henriques.png",
    logoWidth: 670,
    logoHeight: 218,
    country: "portugal",
  },
  {
    name: "KWO",
    slug: "kwo",
    officialWebsite: "https://www.kwo-ptfe.de",
    logo: "/partners/kwo.png",
    logoWidth: 270,
    logoHeight: 71,
    country: "germany",
  },
  {
    name: "TEADIT",
    slug: "teadit",
    officialWebsite: "https://teadit.com",
    logo: "/partners/teadit.png",
    logoWidth: 3405,
    logoHeight: 1475,
    country: "international",
  },
  {
    name: "GEMÜ",
    slug: "gemu",
    officialWebsite: "https://www.gemu-group.com",
    logo: "/partners/gemu.svg",
    logoWidth: 145,
    logoHeight: 20,
    country: "germany",
  },
  {
    name: "THALETEC",
    slug: "thaletec",
    officialWebsite: "https://thaletec.com",
    logo: "/partners/thaletec.png",
    logoWidth: 326,
    logoHeight: 43,
    country: "germany",
  },
  {
    name: "SIMONA",
    slug: "simona",
    officialWebsite: "https://www.simona.de",
    logo: "/partners/simona.svg",
    logoWidth: 1928,
    logoHeight: 376,
    country: "germany",
  },
  {
    name: "SGL Carbon",
    slug: "sgl-carbon",
    officialWebsite: "https://www.sglcarbon.com",
    logo: "/partners/sgl-carbon.svg",
    logoWidth: 198,
    logoHeight: 41,
    country: "germany",
  },
];

const manufacturerBySlug = new Map(
  manufacturers.map((manufacturer) => [manufacturer.slug, manufacturer]),
);

export function getManufacturer(slug: string | undefined) {
  return slug ? manufacturerBySlug.get(slug) : undefined;
}
