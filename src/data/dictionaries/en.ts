/**
 * English content — the source dictionary.
 *
 * Its shape defines the `Dictionary` type every other locale must satisfy, so a
 * missing or renamed key in a translation is a TypeScript error rather than a
 * blank space on the page. Manufacturer names and trademarks never appear here:
 * they live in `src/data/partners.ts` and are identical in every locale.
 */
export const en = {
  meta: {
    title: "Afaq Riyada Solutions | Industrial Equipment in Jordan",
    description:
      "Afaq Riyada Solutions supplies specialized equipment for water, wastewater and industry in Jordan: pumps, valves, instrumentation, sealing, filtration, steam systems, drives and material handling.",
    keywords: [
      "industrial equipment Jordan",
      "surge vessels",
      "water and wastewater equipment",
      "drum and container pumps",
      "valves and instrumentation",
      "industrial gaskets",
      "mechanical seals",
      "industrial filtration",
      "steam systems",
      "conveyor belts and chains",
      "Amman"
    ],
    ogImageAlt: "Afaq Riyada Solutions — Industrial Equipment & Solutions",
    privacyTitle: "Privacy Policy",
    legalTitle: "Legal Notice",
  },

  brand: {
    name: "Afaq Riyada Solutions",
    tagline: "Engineering solutions. Focused on your application.",
    homeAriaLabel: "Afaq Riyada Solutions — home",
  },

  common: {
    location: "Khalda, Amer Bin Malek St., Amman, Jordan",
    skipToContent: "Skip to main content",
    opensInNewTab: "opens in a new tab",
    backToHome: "Back to home",
  },

  nav: {
    labels: {
      home: "Home",
      about: "About Us",
      solutions: "Products & Solutions",
      partners: "Technology Partners",
      contact: "Contact Us",
      waterWastewater: "Water & Wastewater",
      industrialProcess: "Industrial & Process Solutions",
      privacy: "Privacy Policy",
      legal: "Legal Notice",
    },
    callSales: "Call Sales",
    cta: "Discuss Your Requirement",
    primaryNavLabel: "Primary",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    menuLabel: "Site navigation",
    languageLabel: "Language",
    switchLanguage: "Switch to Arabic",
  },

  hero: {
    eyebrow: "Specialized Equipment & Technical Support",
    headline: "Engineering Solutions. Focused on Your Application.",
    body: "Afaq Riyada Solutions is an Amman-based supplier of specialized mechanical equipment and industrial products. We help translate application requirements into suitable equipment selections, supported by manufacturer coordination and clear technical and commercial follow-up.",
    primaryCta: "Explore Our Solutions",
    secondaryCta: "Discuss Your Requirement",
    trustStrip: [
      "Engineering Products",
      "Industrial Solutions",
      "International Technologies",
    ],
  },

  capabilityStrip: {
    label: "Capabilities at a glance",
    items: [
      {
        "title": "Application-Driven Selection",
        "description": "Equipment matched to process conditions, not to a catalogue page."
      },
      {
        "title": "Established Technologies",
        "description": "International technologies for water, industry, plant utilities and material handling."
      },
      {
        "title": "Engineering Support in Amman",
        "description": "Technical and commercial coordination from Amman, Jordan."
      }
    ],
  },

  about: {
    eyebrow: "Company Overview",
    heading: "Technical Understanding. International Technologies. Local Coordination.",
    paragraphs: [
      "Afaq Riyada Solutions is an Amman-based supplier of specialized mechanical equipment and industrial products. We help clients translate application requirements into suitable equipment selections, supported by manufacturer coordination and clear technical and commercial follow-up.",
      "Our Water & Wastewater portfolio covers surge protection, fluid transfer, valves and instrumentation for pumping, treatment and networks. Our Industrial & Process portfolio covers sealing, fluid handling, steam systems, drives, conveying and filtration for production and plant utilities.",
      "Support runs from reviewing the application and operating conditions to coordinating selection, offers, documentation and delivery requirements, followed by client and manufacturer follow-up. Equipment selection considers process media, pressure, temperature, materials, maintainability and project specifications."
    ],
    capabilitiesHeading: "Capabilities",
    capabilities: [
      "Engineering-oriented product selection",
      "Technical consultation",
      "Application evaluation",
      "Industrial equipment sourcing",
      "Manufacturer coordination",
      "Technical documentation coordination",
      "Project-specific solutions",
      "Commercial coordination",
      "After-sales communication",
    ],
  },

  industries: {
    eyebrow: "Applications",
    heading: "Industries We Support",
    intro:
      "The technologies below are applied across the following markets and applications, according to the requirements of each project.",
    items: {
      "water-wastewater": {
        title: "Water & Wastewater",
        description:
          "Water transmission, pumping, treatment and network infrastructure, including surge and pressure management for pumping systems.",
      },
      "chemical-process": {
        title: "Chemical & Process Industries",
        description:
          "Equipment and materials intended for demanding process environments where corrosion resistance and media compatibility govern selection.",
      },
      manufacturing: {
        title: "Manufacturing",
        description:
          "Industrial components, sealing technology and engineered products supporting production facilities and their utility systems.",
      },
      "utilities-infrastructure": {
        title: "Utilities & Infrastructure",
        description:
          "Mechanical technologies for essential infrastructure — supply networks, pumping installations and treatment facilities.",
      },
      "energy-industrial": {
        title: "Energy & Industrial Facilities",
        description:
          "Specialized equipment for industrial plants and utility installations, from process valves to heat transfer and sealing technology.",
      },
    },
    prompt: "Working on an application outside these areas?",
    promptCta: "Describe your requirement",
  },

  solutions: {
    eyebrow: "Products & Solutions",
    heading: "Engineered Products for Water, Industry & Process",
    intro:
      "Two solution fields, each built around specific manufacturing technologies. Detailed specifications, drawings and documentation are provided per enquiry from manufacturer sources.",
    // Points at the contact section today; becomes a product route once
    // /products/[slug] pages exist. The label stays truthful about where it goes.
    cardCta: "Discuss This Solution",
    manufacturerToBeConfirmed: "Manufacturer to be confirmed",
    illustrationLabel: "Schematic drawing: {title}",
    categories: {
      "water-wastewater": {
        title: "Water & Wastewater Solutions",
        description:
          "Surge protection, fluid transfer, valves and instrumentation for pumping, treatment and water and wastewater networks.",
      },
      "industrial-process": {
        title: "Industrial & Process Solutions",
        description:
          "Sealing, fluid handling, steam systems, sensing, filtration, drives and conveying for production and plant utilities.",
      },
    },
    items: {
      "surge-vessels": {
        "title": "Surge vessels & pressure equipment",
        "description": "Surge vessels with and without bladders, water storage tanks, and filters for water and gas treatment. Vessel selection considers the system operating conditions and surge protection requirements.",
        "applications": [
          "Surge vessels with bladder",
          "Surge vessels without bladder",
          "Water storage tanks",
          "Filters for water and gas treatment"
        ]
      },
      "instrumentation": {
        "title": "Measurement & control",
        "description": "Instruments for monitoring, measuring and regulating flow, pressure, level and temperature, including flow meters, indicators, sensors, level switches, pressure gauges and transmitters.",
        "applications": [
          "Flow meters, indicators and sensors",
          "Level switches and indicators",
          "Pressure gauges and transmitters",
          "Temperature sensors and switches"
        ]
      },
      "process-valves": {
        "title": "Valves & control systems",
        "description": "Valve, measurement and control technologies for liquids, vapours and gases. The range includes diaphragm, ball, butterfly and globe valves, control valves, positioners, and flow and pressure measurement.",
        "applications": [
          "Diaphragm valves",
          "Ball, butterfly and globe valves",
          "Control valves and positioners",
          "Flow and pressure measurement"
        ]
      },
      "pumps": {
        "title": "Drum & container pumps",
        "description": "Pump systems for transferring and filling liquids from drums, IBC containers and process installations, including eccentric screw, diaphragm and centrifugal pumps, together with flow meters.",
        "applications": [
          "Drum and container pumps",
          "IBC container pumps",
          "Eccentric screw and diaphragm pumps",
          "Flow meters and centrifugal pumps"
        ]
      },
      "gaskets-sealing": {
        "title": "Expanded PTFE sealing",
        "description": "Expanded PTFE gasket tapes, rings and sheets for industrial sealing, including flanged connections and glass-lined or lined equipment. Materials are selected against the application requirements.",
        "applications": [
          "ePTFE gasket tapes",
          "ePTFE rings and sheets",
          "Sealing for flanged connections",
          "Sealing for glass-lined and lined equipment"
        ]
      },
      "mechanical-seals": {
        "title": "Mechanical seals & packings",
        "description": "Mechanical sealing technologies for pumps, compressors, agitators and reactors, including stationary mechanical seals, seal supply systems, packings and hydraulic seals.",
        "applications": [
          "Stationary mechanical seals",
          "Seal supply systems",
          "Packings",
          "Hydraulic seals"
        ]
      },
      "special-gaskets": {
        "title": "Special gaskets & packings",
        "description": "Special gaskets and packings for pressure vessels, heat exchangers, reactors and valves, including weld ring gaskets, lip seals, metal diaphragms, lens gaskets, double cones and gland packings.",
        "applications": [
          "Weld ring gaskets",
          "Lip seals and metal diaphragms",
          "Lens gaskets and double cones",
          "Gland packings"
        ]
      },
      "hose-assemblies": {
        "title": "Flexible hose assemblies",
        "description": "Engineered hose assemblies for food, beverages, pharmaceuticals, water, fuels and chemicals. Materials include PTFE, silicone, rubber, PVC and 316 stainless steel, with hose design and asset management support.",
        "applications": [
          "PTFE and silicone hose assemblies",
          "Rubber and PVC hose assemblies",
          "Metallic (316 stainless steel) hoses",
          "Hose design and asset management"
        ]
      },
      "steam-systems": {
        "title": "Steam & fluid systems",
        "description": "Steam and fluid system products for industrial applications, including steam traps, pressure reducing and control valves, pipeline ancillaries and heat exchangers, plus the ADCAPure hygienic range.",
        "applications": [
          "Steam traps",
          "Pressure reducing and control valves",
          "Pipeline ancillaries and heat exchangers",
          "ADCAPure hygienic products"
        ]
      },
      "corrosion-resistant-handling": {
        "title": "Corrosion-resistant handling",
        "description": "Polymer and composite fluid-handling products for corrosive and ultra-pure applications: fluoropolymer-lined pipes and fittings, valves, hoses, expansion joints, fiberglass vessels and tanks, and air-driven diaphragm pumps.",
        "applications": [
          "Fluoropolymer-lined pipes and fittings",
          "Valves, hoses and expansion joints",
          "Fiberglass vessels and tanks",
          "Air-driven diaphragm pumps"
        ]
      },
      "sensors-measurement": {
        "title": "Sensors & measuring instruments",
        "description": "Sensors, encoders and measuring instruments for factory and process automation, including pressure and temperature instruments, ultrasonic and optical sensors, motion-control encoders and image-processing components.",
        "applications": [
          "Pressure and temperature instruments",
          "Ultrasonic and optical sensors",
          "Encoders for motion control",
          "Image processing components"
        ]
      },
      "industrial-filtration": {
        "title": "Industrial filtration",
        "description": "Tailor-made technologies for industrial solid/liquid separation and dust separation, including filter bags and cloths, cartridges, candle filters, belt filter fabrics and dust separation elements.",
        "applications": [
          "Filter bags and filter cloths",
          "Filter cartridges and candle filters",
          "Belt filter fabrics",
          "Dust separation filter elements"
        ]
      },
      "drives-automation": {
        "title": "Drives & automation",
        "description": "Drive and automation technologies including gearmotors, gear units, industrial gear units, frequency inverters, servo drives and the MOVI-C modular automation system.",
        "applications": [
          "Gearmotors and gear units",
          "Industrial gear units",
          "Frequency inverters and servo drives",
          "MOVI-C modular automation"
        ]
      },
      "gears-engineering": {
        "title": "Gears & precision engineering",
        "description": "Gear manufacture and refurbishment supported by precision engineering and heavy machining: gears, pinions, girth gears, gearboxes, and mill and kiln drive components.",
        "applications": [
          "Gears, pinions and girth gears",
          "Gearbox manufacture and refurbishment",
          "Precision and heavy machining",
          "Mill and kiln drive components"
        ]
      },
      "conveyor-belts": {
        "title": "Conveyor & elevator belts",
        "description": "Rubber conveyor and elevator belts with textile or steel carcasses for bulk material handling, including EP belts, steel carcass belts, pipe conveyor belts and sidewall belts.",
        "applications": [
          "EP and steel carcass belts",
          "Elevator belts",
          "Pipe (tubular) conveyor belts",
          "Sidewall belts"
        ]
      },
      "industrial-chains": {
        "title": "Industrial chains",
        "description": "Standard and special industrial chains and conveyor systems for industrial handling applications, selected according to the equipment and operating requirements.",
        "applications": [
          "Standard industrial chains",
          "Special industrial chains",
          "Conveyor systems"
        ]
      }
    },
  },

  partners: {
    eyebrow: "Manufacturing Technologies",
    heading: "International Technology Partners",
    intro:
      "Connecting specialized international manufacturing technologies with industrial requirements in Jordan and the region.",
    note: "Manufacturer names and logos are shown for identification of the technologies Afaq Riyada works with. They are the property of their respective owners.",
    noteSecondary:
      "Technology selection for a given project follows the application requirements, not a fixed catalogue.",
    linkLabel: "Official website",
    logoAlt: "{name} logo",
    countries: {
      "portugal": "Portugal",
      "germany": "Germany",
      "liechtenstein": "Liechtenstein",
      "poland": "Poland",
      "uk": "United Kingdom",
      "usa": "United States",
      "switzerland": "Switzerland",
      "australia": "Australia",
      "italy": "Italy"
    },
    items: {
      "henriques-henriques": {
        "category": "Surge vessels & pressure equipment",
        "description": "Metal tanks, surge vessels and pressure equipment for water applications."
      },
      "kobold": {
        "category": "Measurement & control",
        "description": "Instruments for flow, pressure, level and temperature measurement."
      },
      "gemu": {
        "category": "Valves & control systems",
        "description": "Valve, measurement and control systems for liquids, vapours and gases."
      },
      "lutz": {
        "category": "Drum & container pumps",
        "description": "Pumps for liquid transfer from drums, containers and process installations."
      },
      "kwo": {
        "category": "Expanded PTFE sealing",
        "description": "Expanded PTFE gasket tapes, rings and sheets for industrial sealing."
      },
      "depac": {
        "category": "Mechanical seals & packings",
        "description": "Mechanical seals, seal supply systems and packings for process equipment."
      },
      "spetech": {
        "category": "Special gaskets & packings",
        "description": "Special gaskets and packings for pressure equipment and valves."
      },
      "flextech": {
        "category": "Flexible hose assemblies",
        "description": "Engineered flexible hose assemblies for industrial fluid transfer."
      },
      "valsteam-adca": {
        "category": "Steam & fluid systems",
        "description": "Steam and fluid systems, including ADCAPure hygienic products."
      },
      "andronaco": {
        "category": "Corrosion-resistant handling",
        "description": "Corrosion-resistant polymer and composite fluid-handling equipment."
      },
      "baumer": {
        "category": "Sensors & measuring instruments",
        "description": "Sensors, encoders and measuring instruments for industrial automation."
      },
      "junker-filter": {
        "category": "Industrial filtration",
        "description": "Industrial filtration for solid/liquid separation and dust collection."
      },
      "sew-eurodrive": {
        "category": "Drives & automation",
        "description": "Gearmotors, industrial gear units and drive automation technologies."
      },
      "hofmann-engineering": {
        "category": "Gears & precision engineering",
        "description": "Gear manufacture, refurbishment and precision engineering."
      },
      "sig": {
        "category": "Conveyor & elevator belts",
        "description": "Conveyor and elevator belts for bulk material handling."
      },
      "zmc": {
        "category": "Industrial chains",
        "description": "Standard and special industrial chains and conveyor systems."
      }
    },
  },

  whyUs: {
    eyebrow: "Why Afaq Riyada",
    heading: "More Than Equipment Supply",
    intro:
      "The value is in the engineering work around the equipment — understanding the duty, narrowing the options and staying involved through supply.",
    pillars: [
      {
        title: "Engineering-Led Selection",
        description:
          "Solutions evaluated according to actual process, operating and project requirements.",
      },
      {
        title: "Specialized Technologies",
        description:
          "Access to specialized industrial technologies from established international manufacturers.",
      },
      {
        title: "Application Support",
        description: "Technical coordination during product and technology selection.",
      },
      {
        title: "Project Coordination",
        description:
          "Support across technical clarification, documentation and supply coordination.",
      },
      {
        title: "Local Communication",
        description:
          "Responsive technical and commercial coordination from Amman, Jordan.",
      },
    ],
  },

  process: {
    eyebrow: "Engineering Approach",
    heading: "From Requirement to Engineered Solution",
    steps: [
      {
        "number": "01",
        "title": "Define",
        "description": "Review the application, operating conditions and scope."
      },
      {
        "number": "02",
        "title": "Select",
        "description": "Coordinate equipment selection and technical clarification."
      },
      {
        "number": "03",
        "title": "Supply",
        "description": "Align the offer, documentation and delivery requirements."
      },
      {
        "number": "04",
        "title": "Support",
        "description": "Maintain follow-up with the client and manufacturer."
      }
    ],
  },

  cta: {
    heading: "Have an Industrial Requirement?",
    subheading: "Let's identify the right technology for your application.",
    body: "For a project package, replacement component or operating challenge, share your specification or application data. For spare parts, include the nameplate, part number, dimensions or clear equipment photos, together with quantity, delivery location and target delivery date.",
    primary: "Discuss Your Requirement",
  },

  contact: {
    "eyebrow": "Contact",
    "heading": "Discuss Your Requirement",
    "intro": "Share the application, operating conditions and project context. Technical and commercial enquiries are handled from Amman.",
    "locationLabel": "Location",
    "salesLabel": "Sales & Technical Inquiries",
    "salesHint": "Quotations, products, projects and technical requirements.",
    "generalLabel": "General Inquiries",
    "generalHint": "Company information and general communication.",
    selection: {
      "label": "Solution of interest",
      "clear": "Clear selection",
      "subject": "Product enquiry",
      "emailPrompt": "Please add your requirements, quantities and operating conditions."
    },
    "emailPanel": {
      "heading": "Send Your Requirement by Email",
      "body": "Technical and commercial enquiries are handled directly by email. Write to the sales address with the details of the application and we will respond with the relevant technical clarification.",
      "includeHeading": "Helpful to include",
      "include": [
        "Application, process medium, pressure and temperature",
        "Quantity, specification or part number and equipment photos",
        "Delivery location and scope of supply",
        "Project stage and target delivery date"
      ]
    },
    "form": {
      "heading": "Send an Inquiry",
      "requiredHint": "Fields marked with an asterisk are required.",
      "optional": "(optional)",
      "submit": "Send Inquiry",
      "submitting": "Sending…",
      "routedTo": "Inquiries are routed to",
      "fields": {
        "fullName": "Full Name",
        "company": "Company",
        "email": "Business Email",
        "phone": "Phone",
        "areaOfInterest": "Area of Interest",
        "message": "Message"
      },
      "selectPlaceholder": "Select an area…",
      "messagePlaceholder": "Application, operating conditions, medium, quantities, project stage…",
      "areas": {
        "water-wastewater": "Water & Wastewater",
        "surge-vessels": "Surge Protection",
        "pumps": "Pumps",
        "valves": "Valves",
        "gaskets-sealing": "Gaskets & Sealing",
        "mechanical-seals": "Mechanical Seals",
        "instrumentation": "Instrumentation & Sensors",
        "hoses": "Hose Assemblies",
        "steam": "Steam Systems",
        "filtration": "Industrial Filtration",
        "drives": "Drives & Gears",
        "conveying": "Conveyor Belts & Chains",
        "other": "Other Industrial Requirement"
      },
      "validation": {
        "nameRequired": "Please enter your full name.",
        "nameTooLong": "Name is too long.",
        "companyTooLong": "Company name is too long.",
        "emailInvalid": "Please enter a valid business email address.",
        "emailTooLong": "Email address is too long.",
        "phoneTooLong": "Phone number is too long.",
        "areaRequired": "Please select an area of interest.",
        "messageTooShort": "Please describe the requirement in at least 20 characters.",
        "messageTooLong": "Message is too long."
      },
      "status": {
        "sent": "Your inquiry has been sent. We will respond to the address you provided.",
        "invalid": "Please correct the highlighted fields and submit again.",
        "notConfiguredLead": "Email delivery for this form is not connected yet, so this message was not sent. Please email",
        "notConfiguredTail": "directly and we will respond.",
        "errorLead": "The message could not be sent. Please email",
        "errorTail": "directly and we will respond.",
        "rateLimitedLead": "Several inquiries have been submitted from this connection. Please wait a few minutes, or email",
        "rateLimitedTail": "instead."
      }
    },
    "managerLabel": "Abdullah Nofal — General Manager",
    "phoneLabel": "Sales Department Phone"
  },

  footer: {
    description:
      "Specialized mechanical equipment, industrial products and technical support for water, wastewater, process projects and plant operations.",
    companyHeading: "Company",
    solutionsHeading: "Solutions",
    contactHeading: "Contact",
    salesLabel: "Sales",
    generalLabel: "General",
    rights: "All rights reserved.",
    trademarkNote:
      "Manufacturer names and logos are shown for identification of the technologies Afaq Riyada works with. All manufacturer names and logos are the property of their respective owners.",
  },

  legal: {
    contactHeading: "Contact",
    privacy: {
      title: "Privacy Policy",
      intro:
        "This page is reserved for Afaq Riyada's privacy policy. The document has not been issued yet and no policy text is published here in the meantime.",
      note: "Until it is published, questions about how enquiry data is handled can be sent to the general email address below. Data submitted through the website contact form is used only to respond to the enquiry.",
    },
    legalNotice: {
      title: "Legal Notice",
      intro:
        "This page is reserved for Afaq Riyada's legal notice, including company registration details. Those details have not been supplied yet, so nothing is stated here in their place.",
      note: "Manufacturer names, brand names and logos shown on this website are the property of their respective owners and are used to identify the technologies Afaq Riyada works with.",
    },
  },

  notFound: {
    eyebrow: "Error 404",
    heading: "This page could not be found",
    body: "The address may have changed or the page may not exist yet. Everything currently published is reachable from the home page.",
  },
  profile: {
    "heading": "Explore Afaq Riyada Solutions",
    "body": "Browse our company profile for the product portfolio, technologies and support available.",
    "download": "Download Company Profile",
    "online": "Read Online",
    "language": "English · A4 PDF",
    "onlineLanguage": "English flipbook"
  },
};

/**
 * Every locale must provide exactly these keys — a missing or misspelled one is
 * a build error, not a blank space on the page.
 */
export type Dictionary = typeof en;

/** Canonical, locale-independent keys for the contact form's interest list. */
export type AreaOfInterestKey = keyof typeof en.contact.form.areas;

export const areaOfInterestKeys = Object.keys(
  en.contact.form.areas,
) as AreaOfInterestKey[];

/** English label for an interest key — used in the notification email body. */
export function areaOfInterestLabelEn(key: string): string {
  return en.contact.form.areas[key as AreaOfInterestKey] ?? key;
}
