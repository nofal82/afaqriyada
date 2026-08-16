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
    title: "Afaq Riyada | Industrial Engineering Solutions in Jordan",
    description:
      "Afaq Riyada supplies industrial engineering products and technical solutions for water, wastewater and process industries in Jordan — surge vessels, pumps, valves, sealing technology, glass-lined and graphite process equipment and thermoplastic systems.",
    keywords: [
      "industrial engineering Jordan",
      "surge vessels",
      "water and wastewater equipment",
      "process valves",
      "industrial gaskets",
      "glass-lined process equipment",
      "thermoplastic piping systems",
      "graphite process technology",
      "mechanical seals",
      "Amman",
    ],
    ogImageAlt: "Afaq Riyada — Industrial Engineering Solutions",
    privacyTitle: "Privacy Policy",
    legalTitle: "Legal Notice",
  },

  brand: {
    name: "Afaq Riyada",
    tagline: "Industrial Engineering",
    homeAriaLabel: "Afaq Riyada — home",
  },

  common: {
    location: "Amman, Jordan",
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
    cta: "Discuss Your Requirement",
    primaryNavLabel: "Primary",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    menuLabel: "Site navigation",
    languageLabel: "Language",
    switchLanguage: "Switch to Arabic",
  },

  hero: {
    eyebrow: "Industrial Engineering Solutions",
    headline: "Engineering Reliable Solutions for Industry & Infrastructure",
    body: "Afaq Riyada supplies engineered industrial products, specialized equipment and technical solutions for water, wastewater, industrial and process applications. Equipment is selected against the operating conditions of the application, drawing on established international manufacturing technologies.",
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
        title: "Application-Driven Selection",
        description: "Equipment matched to process conditions, not to a catalogue page.",
      },
      {
        title: "Established Technologies",
        description:
          "European and international manufacturing technologies across seven fields.",
      },
      {
        title: "Engineering Support in Amman",
        description: "Technical and commercial coordination from Amman, Jordan.",
      },
    ],
  },

  about: {
    eyebrow: "Company Overview",
    heading: "Engineering Solutions Built Around Real Industrial Requirements",
    paragraphs: [
      "Afaq Riyada is an Amman-based mechanical and industrial engineering company supplying specialized equipment, engineered products and technical solutions for infrastructure and industrial applications.",
      "The company works with established international manufacturing technologies to help customers identify suitable equipment and materials based on operating conditions, process requirements, technical specifications, reliability, maintainability and lifecycle considerations.",
      "Afaq Riyada does not manufacture the equipment it supplies. Its role is engineering interpretation of the requirement, coordination with the manufacturer, and the technical and commercial support around it.",
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
          "Equipment for water transmission, pumping stations, distribution networks and wastewater installations, selected against the hydraulic and operating conditions of the system.",
      },
      "industrial-process": {
        title: "Industrial & Process Solutions",
        description:
          "Sealing, valve, glass-lined, thermoplastic and graphite technologies for process plants where media compatibility, corrosion resistance and containment govern the specification.",
      },
    },
    items: {
      "surge-vessels": {
        title: "Surge Protection & Pressure Management",
        description:
          "Surge vessels — with bladder and without bladder — as part of a hydraulic transient and surge management strategy for pumping and transmission systems. Vessel type and arrangement follow the surge analysis and operating conditions of the specific system.",
        applications: [
          "Pumping stations",
          "Water transmission mains",
          "Booster systems",
          "Wastewater pumping",
        ],
      },
      pumps: {
        title: "Engineered Pumping Solutions",
        description:
          "Pumping equipment for water transfer, distribution, wastewater and industrial utility duties. Selection is driven by duty point, fluid characteristics, system curve, installation arrangement and operating regime.",
        note: "Pump selection according to project and application requirements.",
        applications: [
          "Water transfer",
          "Pumping stations",
          "Distribution networks",
          "Industrial utilities",
          "Process duties",
        ],
      },
      "water-industrial-valves": {
        title: "Water & Industrial Valves",
        description:
          "Isolation, control and protection valves for water networks and industrial services. Selection depends on the process medium, pressure and temperature, materials, flow characteristics, actuation and control requirements and the installation environment.",
        note: "Valve selection according to project and application requirements.",
        applications: [
          "Isolation & control",
          "Network protection",
          "Pump station valving",
          "Industrial services",
        ],
      },
      "gaskets-sealing": {
        title: "Industrial Sealing Technology",
        description:
          "Gasket and sealing solutions for flanged connections and process equipment, including expanded PTFE (ePTFE) sealing materials supplied as gasket tapes, rings and sheets by KWO, alongside gaskets, gland packings and expansion joints from TEADIT.",
        applications: [
          "Flanged connections",
          "Chemical process lines",
          "Glass-lined & lined equipment",
          "Pumps & rotating equipment",
        ],
      },
      "process-valves": {
        title: "Valve, Measurement & Control Technology",
        description:
          "Valve technology for liquids, vapours and gases — diaphragm, globe/seat, butterfly and ball valve designs in metal and high-performance plastics — together with measurement and control technology for monitoring and regulating process conditions.",
        applications: [
          "Chemical & process plants",
          "Water treatment",
          "Hygienic applications",
          "Automated process lines",
        ],
      },
      "glass-lined-equipment": {
        title: "Glass-Lined Process Equipment",
        description:
          "Glass-lined reactors, storage tanks and receivers, columns, heat exchangers, filters and agitator systems, with spare parts, maintenance, repair and reglassing support. Applied where corrosion resistance, containment and material compatibility govern the equipment choice.",
        applications: [
          "Chemical processing",
          "Pharmaceutical production",
          "Corrosive duties",
          "Equipment refurbishment",
        ],
      },
      "mechanical-seals": {
        title: "Mechanical Seals",
        description:
          "Mechanical sealing solutions for pumps, rotating machinery and process equipment. Seal arrangement and material pairing depend on the medium, pressure, temperature, shaft condition, operating speed and material compatibility.",
        note: "Seal selection according to equipment and operating conditions.",
        applications: [
          "Pumps",
          "Agitators & mixers",
          "Rotating machinery",
          "Process equipment",
        ],
      },
      "thermoplastic-solutions": {
        title: "Engineered Thermoplastic Systems",
        description:
          "Thermoplastic sheets, pipes and fittings in materials such as PE, PP, PVC‑U and PVDF, used for corrosion-resistant piping, tank and apparatus construction and water infrastructure where metallic materials are unsuitable.",
        applications: [
          "Chemical processing",
          "Water infrastructure",
          "Tank & apparatus construction",
          "Industrial piping",
        ],
      },
      "graphite-process-technology": {
        title: "Graphite Process Technology",
        description:
          "Graphite-based process technology for corrosive service — systems and equipment such as heat exchangers, columns, quenchers and pumps, together with components, assemblies, sealing materials and associated engineering and service support.",
        applications: [
          "Acid handling & recovery",
          "Corrosive heat transfer",
          "Chemical process systems",
          "Plant upgrades & spares",
        ],
      },
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
      portugal: "Portugal",
      germany: "Germany",
      international: "International",
    },
    items: {
      "henriques-henriques": {
        category: "Surge Vessel Technology",
        description:
          "Manufacturer of metal tanks and pressure equipment whose water and environment range includes surge vessels with bladder and surge vessels without bladder, water storage tanks and filters for water and gas treatment.",
      },
      kwo: {
        category: "Expanded PTFE Sealing Technology",
        description:
          "Engineering company specialised in the design, manufacture and supply of PTFE products, with sealing materials produced from expanded PTFE (ePTFE) as gasket tapes, gasket rings and gasket sheets.",
      },
      teadit: {
        category: "Industrial Sealing Solutions",
        description:
          "Manufacturer of industrial sealing technology, including gaskets, gland packings, expansion joints and flange protection for aggressive chemical media and demanding process duties.",
      },
      gemu: {
        category: "Valve, Measurement & Control Technology",
        description:
          "Manufacturer of valve, measurement and control systems for liquids, vapours and gases, with valve designs including diaphragm, globe/seat, butterfly and ball valves in metal and high-performance plastics.",
      },
      thaletec: {
        category: "Glass-Lined Process Equipment",
        description:
          "Manufacturer of glass-lined process equipment — agitated reactors, storage tanks and receivers, columns, heat exchangers, pressure filters and agitator systems — together with spare parts, maintenance, repair and reglassing services.",
      },
      simona: {
        category: "Thermoplastic Systems",
        description:
          "Manufacturer and development partner for thermoplastics, producing sheets, pipes and fittings in materials such as PE, PP, PVC‑U and PVDF for chemical process piping, tank and apparatus construction and water management.",
      },
      "sgl-carbon": {
        category: "Graphite Process Technology",
        description:
          "Process technology supplier for corrosive environments, with graphite-based systems and equipment such as heat exchangers, columns, quenchers and pumps, plus components, assemblies, sealing materials and associated services.",
      },
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
        number: "01",
        title: "Understand the Application",
        description:
          "Identify operating requirements, application conditions and project objectives.",
      },
      {
        number: "02",
        title: "Evaluate Technical Requirements",
        description:
          "Review relevant process parameters, materials, specifications and constraints.",
      },
      {
        number: "03",
        title: "Select the Appropriate Technology",
        description: "Identify equipment and technology suitable for the application.",
      },
      {
        number: "04",
        title: "Coordinate Supply & Support",
        description:
          "Coordinate technical clarification, documentation, supply and communication.",
      },
    ],
  },

  cta: {
    heading: "Have an Industrial Requirement?",
    subheading: "Let's identify the right technology for your application.",
    body: "Water infrastructure, process equipment, valves, sealing technologies, thermoplastic systems and specialized industrial components — send the operating conditions and we will work through the selection with you.",
    primary: "Discuss Your Requirement",
  },

  contact: {
    eyebrow: "Contact",
    heading: "Discuss Your Requirement",
    intro:
      "Share the application, operating conditions and project context. Technical and commercial enquiries are handled from Amman.",
    locationLabel: "Location",
    salesLabel: "Sales & Technical Inquiries",
    salesHint: "Quotations, products, projects and technical requirements.",
    generalLabel: "General Inquiries",
    generalHint: "Company information and general communication.",
    emailPanel: {
      heading: "Send Your Requirement by Email",
      body: "Technical and commercial enquiries are handled directly by email. Write to the sales address with the details of the application and we will respond with the relevant technical clarification.",
      includeHeading: "Helpful to include",
      include: [
        "Application and operating conditions",
        "Process medium, pressure and temperature",
        "Quantities and scope of supply",
        "Project stage and timeline",
      ],
    },
    form: {
      heading: "Send an Inquiry",
      requiredHint: "Fields marked with an asterisk are required.",
      optional: "(optional)",
      submit: "Send Inquiry",
      submitting: "Sending…",
      routedTo: "Inquiries are routed to",
      fields: {
        fullName: "Full Name",
        company: "Company",
        email: "Business Email",
        phone: "Phone",
        areaOfInterest: "Area of Interest",
        message: "Message",
      },
      selectPlaceholder: "Select an area…",
      messagePlaceholder:
        "Application, operating conditions, medium, quantities, project stage…",
      areas: {
        "water-wastewater": "Water & Wastewater",
        "surge-vessels": "Surge Vessels",
        pumps: "Pumps",
        valves: "Valves",
        "gaskets-sealing": "Gaskets & Sealing",
        "process-equipment": "Process Equipment",
        "mechanical-seals": "Mechanical Seals",
        thermoplastic: "Thermoplastic Solutions",
        graphite: "Graphite Process Technology",
        other: "Other Industrial Requirement",
      },
      validation: {
        nameRequired: "Please enter your full name.",
        nameTooLong: "Name is too long.",
        companyTooLong: "Company name is too long.",
        emailInvalid: "Please enter a valid business email address.",
        emailTooLong: "Email address is too long.",
        phoneTooLong: "Phone number is too long.",
        areaRequired: "Please select an area of interest.",
        messageTooShort: "Please describe the requirement in at least 20 characters.",
        messageTooLong: "Message is too long.",
      },
      status: {
        sent: "Your inquiry has been sent. We will respond to the address you provided.",
        invalid: "Please correct the highlighted fields and submit again.",
        notConfiguredLead:
          "Email delivery for this form is not connected yet, so this message was not sent. Please email",
        notConfiguredTail: "directly and we will respond.",
        errorLead: "The message could not be sent. Please email",
        errorTail: "directly and we will respond.",
        rateLimitedLead:
          "Several inquiries have been submitted from this connection. Please wait a few minutes, or email",
        rateLimitedTail: "instead.",
      },
    },
  },

  footer: {
    description:
      "Industrial engineering products, specialized technologies and technical solutions for infrastructure and process industries.",
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
