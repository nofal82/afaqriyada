import type { Manufacturer } from "./types";

/** Portfolio and supplied logos from the latest company profile. */
export const manufacturers: Manufacturer[] = [
  {
    "name": "HENRIQUES & HENRIQUES",
    "slug": "henriques-henriques",
    "officialWebsite": "https://www.heh.pt",
    "logo": "/partners/henriques-henriques.png",
    "logoWidth": 320,
    "logoHeight": 383,
    "country": "portugal"
  },
  {
    "name": "KOBOLD",
    "slug": "kobold",
    "officialWebsite": "https://www.kobold.com",
    "logo": "/partners/kobold.png",
    "logoWidth": 320,
    "logoHeight": 250,
    "country": "germany"
  },
  {
    "name": "GEMÜ",
    "slug": "gemu",
    "officialWebsite": "https://www.gemu-group.com",
    "logo": "/partners/gemu.png",
    "logoWidth": 320,
    "logoHeight": 44,
    "country": "germany"
  },
  {
    "name": "LUTZ",
    "slug": "lutz",
    "officialWebsite": "https://www.lutz-pumpen.de",
    "logo": "/partners/lutz.png",
    "logoWidth": 320,
    "logoHeight": 320,
    "country": "germany"
  },
  {
    "name": "KWO",
    "slug": "kwo",
    "officialWebsite": "https://www.kwo-ptfe.de",
    "logo": "/partners/kwo.png",
    "logoWidth": 320,
    "logoHeight": 84,
    "country": "germany"
  },
  {
    "name": "DEPAC",
    "slug": "depac",
    "officialWebsite": "https://www.depac.eu",
    "logo": "/partners/depac.png",
    "logoWidth": 320,
    "logoHeight": 87,
    "country": "liechtenstein"
  },
  {
    "name": "SPETECH",
    "slug": "spetech",
    "officialWebsite": "https://www.spetech.com.pl",
    "logo": "/partners/spetech.png",
    "logoWidth": 320,
    "logoHeight": 235,
    "country": "poland"
  },
  {
    "name": "FLEXTECH",
    "slug": "flextech",
    "officialWebsite": "https://www.flextechhose.co.uk",
    "logo": "/partners/flextech.png",
    "logoWidth": 320,
    "logoHeight": 74,
    "country": "uk"
  },
  {
    "name": "VALSTEAM ADCA",
    "slug": "valsteam-adca",
    "officialWebsite": "https://www.valsteam.com",
    "logo": "/partners/valsteam-adca.png",
    "logoWidth": 320,
    "logoHeight": 89,
    "country": "portugal"
  },
  {
    "name": "ANDRONACO INDUSTRIES",
    "slug": "andronaco",
    "officialWebsite": "https://www.andronaco.com",
    "logo": "/partners/andronaco.png",
    "logoWidth": 320,
    "logoHeight": 79,
    "country": "usa"
  },
  {
    "name": "BAUMER",
    "slug": "baumer",
    "officialWebsite": "https://www.baumer.com",
    "logo": "/partners/baumer.png",
    "logoWidth": 320,
    "logoHeight": 80,
    "country": "switzerland"
  },
  {
    "name": "JUNKER FILTER",
    "slug": "junker-filter",
    "officialWebsite": "https://www.junkerfilter.de",
    "logo": "/partners/junker-filter.png",
    "logoWidth": 320,
    "logoHeight": 92,
    "country": "germany"
  },
  {
    "name": "SEW-EURODRIVE",
    "slug": "sew-eurodrive",
    "officialWebsite": "https://www.sew-eurodrive.com",
    "logo": "/partners/sew-eurodrive.png",
    "logoWidth": 320,
    "logoHeight": 148,
    "country": "germany"
  },
  {
    "name": "HOFMANN ENGINEERING",
    "slug": "hofmann-engineering",
    "officialWebsite": "https://www.hofmannengineering.com",
    "logo": "/partners/hofmann-engineering.png",
    "logoWidth": 320,
    "logoHeight": 175,
    "country": "australia"
  },
  {
    "name": "SIG CONVEYOR BELT SOLUTIONS",
    "slug": "sig",
    "officialWebsite": "https://www.sig.it",
    "logo": "/partners/sig.png",
    "logoWidth": 320,
    "logoHeight": 128,
    "country": "italy"
  },
  {
    "name": "ZMC",
    "slug": "zmc",
    "officialWebsite": "https://www.zmc.it",
    "logo": "/partners/zmc.png",
    "logoWidth": 167,
    "logoHeight": 84,
    "country": "italy"
  }
];

const manufacturerBySlug = new Map(manufacturers.map((m) => [m.slug, m]));
export function getManufacturer(slug: string | undefined) {
  return slug ? manufacturerBySlug.get(slug) : undefined;
}
