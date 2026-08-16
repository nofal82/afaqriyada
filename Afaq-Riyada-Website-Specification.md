# PROJECT

Build a complete, production-quality corporate website for:

**Company:** Afaq Riyada
**Domain:** `afaqriyada.com`
**Location:** Amman, Jordan

Official public email addresses:

* `sales@afaqriyada.com`
* `info@afaqriyada.com`

Afaq Riyada is a mechanical and industrial engineering company providing engineered products, industrial equipment, specialized technologies, technical solutions, and engineering support for industrial, infrastructure, water, wastewater, chemical, manufacturing, and process applications.

The initial objective is to build a **high-end corporate landing website**, but the architecture MUST be designed from day one so the company can easily expand into a larger multi-page website.

---

# 1. PRIMARY OBJECTIVE

The website must position Afaq Riyada as:

**An engineering-driven industrial solutions company connecting international manufacturing technologies with local industrial requirements.**

The website should communicate:

* engineering competence
* technical credibility
* industrial reliability
* high-quality equipment
* international manufacturing technologies
* application-oriented product selection
* responsive local engineering support
* professional project coordination
* long-term customer relationships

The website must NOT look like:

* a generic trading-company website
* a product catalogue
* a cheap WordPress template
* a startup/SaaS website
* an AI-generated template
* an overly animated marketing page
* a generic construction-company website

The visitor should immediately understand that the company works with serious industrial equipment and engineering applications.

---

# 2. TARGET AUDIENCE

Design and write the website primarily for B2B decision-makers such as:

* engineering managers
* mechanical engineers
* plant managers
* project managers
* procurement managers
* consultants
* EPC contractors
* utilities
* water authorities
* industrial facilities
* chemical/process plants
* manufacturing companies
* infrastructure organizations

The site must therefore prioritize **technical credibility and clarity over marketing hype**.

---

# 3. TECHNICAL STACK

Use a modern production architecture.

Preferred stack:

* Next.js — latest stable production version
* React
* TypeScript
* Tailwind CSS
* Next.js Image
* modern responsive CSS
* clean component-based architecture

Use Server Components where appropriate.

Avoid unnecessary JavaScript.

Avoid unnecessary heavy UI/component libraries.

Use lightweight icons such as Lucide where appropriate.

---

# 4. WEBSITE ARCHITECTURE

The initial website should work beautifully as a landing/corporate site.

However, structure the project so it can later expand into:

* `/`
* `/about`
* `/products`
* `/products/water-wastewater`
* `/products/industrial-process`
* `/partners`
* `/industries`
* `/services`
* `/projects`
* `/contact`

Do NOT put the entire website into one large component.

Build reusable components such as:

* Header
* Navigation
* MobileNavigation
* HeroSection
* SectionHeading
* CompanyOverview
* IndustryCard
* SolutionCategory
* ProductCard
* PartnerCard
* PartnerLogoGrid
* EngineeringProcess
* WhyChooseUs
* CTASection
* ContactSection
* ContactForm
* Footer

---

# 5. CENTRALIZED CONTENT

Do not hard-code product and manufacturer data throughout different components.

Create structured data/configuration files.

Example:

```ts
interface Manufacturer {
  name: string;
  slug: string;
  officialWebsite: string;
  logo: string;
  category: string;
  shortDescription: string;
}

interface ProductSolution {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  manufacturer?: string;
  applications?: string[];
  image?: string;
}

interface CompanyInfo {
  name: string;
  domain: string;
  location: string;
  salesEmail: string;
  infoEmail: string;
}
```

Company information:

```ts
export const company = {
  name: "Afaq Riyada",
  domain: "afaqriyada.com",
  website: "https://afaqriyada.com",
  location: "Amman, Jordan",
  salesEmail: "sales@afaqriyada.com",
  infoEmail: "info@afaqriyada.com",
  phone: ""
};
```

Do NOT invent a phone number.

---

# 6. DESIGN DIRECTION

Create a premium industrial engineering visual identity.

The design should feel:

* sophisticated
* engineering-focused
* precise
* modern
* technical
* mature
* credible
* international
* premium
* clean

Take inspiration from established European industrial engineering and manufacturing companies rather than software startups.

Suggested color direction:

### Primary

Deep navy / dark graphite / charcoal.

### Background

Off-white / industrial light gray.

### Accent

Controlled engineering blue, cyan, teal, or similar technical accent.

Use the accent selectively.

Avoid excessive gradients.

Avoid excessive rounded cards everywhere.

Avoid glowing effects.

Avoid glassmorphism unless extremely subtle.

Avoid large amounts of decorative UI that have no purpose.

---

# 7. TYPOGRAPHY

Typography should feel professional and engineered.

Use:

* strong large headings
* excellent spacing
* clear hierarchy
* highly readable body text
* controlled font weights

Choose a professional modern typeface that works well for engineering/corporate applications.

Avoid playful or futuristic fonts.

---

# 8. ANIMATION

Use motion sparingly.

Appropriate examples:

* subtle entrance animation
* gentle fade/translate
* restrained hover animation
* elegant logo/card interactions
* navigation transitions

Respect:

`prefers-reduced-motion`

Do NOT use:

* bouncing elements
* spinning industrial components
* excessive parallax
* glowing animations
* animated backgrounds that distract from content
* unnecessary scroll effects

---

# 9. INDUSTRIAL IMAGERY

Use relevant, high-quality industrial imagery.

Appropriate subjects:

* industrial process plants
* water infrastructure
* pumping stations
* mechanical systems
* industrial piping
* valves
* pressure/surge vessels
* process equipment
* industrial tanks
* chemical-process installations
* thermoplastic piping
* graphite process equipment
* engineering inspection/details

Avoid:

* fake business meetings
* people shaking hands
* generic workers pointing at laptops
* irrelevant construction photos
* fake AI-generated machinery with impossible geometry

Industrial imagery must support the actual services.

---

# 10. HEADER

Build a premium sticky header.

Logo/company name:

**Afaq Riyada**

Initial navigation:

* Home
* About Us
* Products & Solutions
* Technology Partners
* Contact Us

Primary CTA:

**Discuss Your Requirement**

Alternative acceptable CTA:

**Request a Consultation**

Use smooth anchor navigation on the initial landing page.

Ensure the architecture allows these anchors to become proper routes later without redesign.

---

# 11. HERO SECTION

The hero must immediately explain what the company does.

Use a strong industrial image or technically sophisticated industrial background treatment.

Suggested eyebrow:

**INDUSTRIAL ENGINEERING SOLUTIONS**

Suggested main headline:

# Engineering Reliable Solutions for Industry & Infrastructure

Supporting copy:

Create concise original copy explaining that Afaq Riyada provides engineered industrial products, specialized equipment, and technical solutions for water, wastewater, industrial and process applications.

The wording should emphasize application-driven equipment selection and established manufacturing technologies.

Suggested CTAs:

**Explore Our Solutions**

and

**Discuss Your Requirement**

Add a restrained supporting trust strip such as:

**Engineering Products · Industrial Solutions · International Technologies**

Do NOT display invented statistics such as:

* 20+ years
* 100+ projects
* 50+ customers
* 10 countries

unless the company later provides those facts.

---

# 12. COMPANY OVERVIEW

Create an elegant About / Company Overview section.

Suggested heading:

# Engineering Solutions Built Around Real Industrial Requirements

Use original copy based on this positioning:

Afaq Riyada is an Amman-based mechanical and industrial engineering company supplying specialized equipment, engineered products and technical solutions for infrastructure and industrial applications.

The company works with established international manufacturing technologies to help customers identify suitable equipment and materials based on operating conditions, process requirements, technical specifications, reliability, maintainability and lifecycle considerations.

Highlight capabilities such as:

* engineering-oriented product selection
* technical consultation
* application evaluation
* industrial equipment sourcing
* manufacturer coordination
* technical documentation coordination
* project-specific solutions
* commercial coordination
* after-sales communication

Do NOT state that Afaq Riyada manufactures the equipment itself.

---

# 13. INDUSTRIES WE SUPPORT

Create a visually appealing section titled:

# Industries We Support

Potential industries:

### Water & Wastewater

Water transmission, pumping, treatment and infrastructure applications.

### Chemical & Process Industries

Equipment and materials designed for demanding process environments.

### Manufacturing

Industrial components and engineered solutions supporting production facilities.

### Utilities & Infrastructure

Mechanical technologies for essential infrastructure applications.

### Energy & Industrial Facilities

Specialized equipment for industrial plants and utility applications.

Do not claim sector experience that has not been confirmed.

Frame these as **markets/applications the offered technologies can support**.

---

# 14. PRODUCTS & SOLUTIONS SECTION

This should be one of the most visually important sections of the website.

Use two primary categories.

---

# CATEGORY 1 — WATER & WASTEWATER SOLUTIONS

## 1. Surge Vessels

Manufacturer technology:

**Henriques & Henriques**

Official source:

`https://www.heh.pt`

Research the official manufacturer website before writing final content.

Henriques & Henriques provides surge vessel technology including:

* surge vessels with bladder
* surge vessels without bladder

Explain at a professional high level that surge vessels can form part of hydraulic transient / surge-management strategies within water pumping and transmission systems.

Do not make engineering design guarantees.

Do not invent:

* vessel dimensions
* operating pressures
* materials
* capacities
* standards

unless verified from manufacturer documentation.

Suggested card title:

**Surge Protection & Pressure Management**

Manufacturer:

**Henriques & Henriques**

---

## 2. Pumps

Manufacturer:

**To be confirmed**

Create professional general content around engineered pumping solutions for applications such as:

* water transfer
* pumping stations
* distribution
* wastewater
* industrial utilities
* process applications

Do NOT assign a manufacturer.

Use neutral wording such as:

**Pump selection according to project and application requirements.**

Do not display an invented logo.

---

## 3. Water & Industrial Valves

Manufacturer:

**To be confirmed**

Describe this offering generally.

Explain that correct valve selection may depend on factors such as:

* fluid/process medium
* pressure
* temperature
* materials
* flow characteristics
* actuation
* control requirements
* installation environment

Do NOT assign GEMÜ to this category automatically.

GEMÜ should remain under the dedicated industrial/process valve section below.

---

# CATEGORY 2 — INDUSTRIAL & PROCESS SOLUTIONS

## 4. Industrial Gaskets & Sealing Solutions

Manufacturers:

**KWO**
**TEADIT**

### KWO

Official source:

`https://www.kwo-ptfe.de`

KWO specializes in expanded PTFE gasket technology.

Relevant solution families can include, where confirmed from official information:

* expanded PTFE sealing materials
* PTFE tapes
* PTFE sheets
* PTFE rings
* gasket solutions

Do NOT copy manufacturer wording.

Create original application-oriented copy.

### TEADIT

Official source:

`https://teadit.com`

TEADIT provides industrial sealing technologies for demanding industrial applications.

Present TEADIT at a high level around engineered sealing products and gasket technologies.

Do not create unsupported technical specifications.

Suggested section title:

**Industrial Sealing Technology**

---

## 5. Process Valves & Control Technology

Manufacturer:

**GEMÜ**

Official source:

`https://www.gemu-group.com`

Present GEMÜ accurately as a manufacturer specializing in:

* valve technology
* measurement technology
* control technology

Relevant valve families may include where appropriate:

* diaphragm valves
* globe/seat valves
* butterfly valves
* ball valves
* control valves

Mention measurement/control systems only at overview level.

Do not attempt to reproduce GEMÜ's complete catalogue.

Suggested heading:

**Valve, Measurement & Control Technology**

Manufacturer:

**GEMÜ**

---

## 6. Glass-Lined Process Equipment

Manufacturer:

**THALETEC**

Official source:

`https://thaletec.com`

IMPORTANT:

Do NOT describe THALETEC merely as a generic pressure-vessel supplier.

Use the more accurate category:

# Glass-Lined Process Equipment

Based on current official manufacturer information, relevant equipment categories can include:

* glass-lined reactors
* tanks
* receivers
* columns
* heat exchangers
* dryers
* filters
* process systems
* special equipment
* spare parts
* maintenance/support

Keep landing-page content concise.

Explain that glass-lined process equipment is particularly relevant in demanding chemical/process environments where corrosion resistance, containment and material compatibility are important.

Do not make performance guarantees.

Do not invent:

* pressure ratings
* temperatures
* materials
* vessel capacities

unless directly verified.

---

## 7. Mechanical Seals

Manufacturer:

**To be confirmed**

Create general professional content around mechanical sealing solutions for rotating industrial equipment.

Potential applications:

* pumps
* rotating machinery
* process equipment

Explain that seal selection depends on operating conditions including:

* medium
* pressure
* temperature
* shaft conditions
* operating speed
* material compatibility

Do NOT assign a manufacturer.

---

## 8. Thermoplastic Solutions

Manufacturer:

**SIMONA**

Official source:

`https://www.simona.de`

Present SIMONA as a manufacturer/development partner for thermoplastic products and systems.

Potential relevant offerings confirmed from the manufacturer's portfolio include:

* sheets
* pipes
* fittings
* flanges
* rods
* valves
* thermoplastic systems
* customized solutions

Use application-oriented content around:

* chemical processing
* water infrastructure
* corrosion-resistant systems
* tank/apparatus construction
* industrial piping

Do not list every polymer/material unless needed and verified.

Suggested heading:

**Engineered Thermoplastic Systems**

Manufacturer:

**SIMONA**

---

## 9. Process Technology & Graphite Solutions

Manufacturer:

**SGL Carbon**

Official source:

`https://www.sglcarbon.com`

Use accurate current terminology.

SGL Carbon's Process Technology activities include graphite-based industrial process equipment, components, systems and associated engineering/services.

Potential relevant areas include:

* graphite process equipment
* heat exchangers
* corrosion-resistant process technology
* graphite components
* graphite sealing technology
* engineered systems

Do NOT fabricate a product portfolio.

Research the official site before finalizing copy.

Suggested heading:

**Graphite Process Technology**

Manufacturer:

**SGL Carbon**

---

# 15. PRODUCT CARD DESIGN

Product cards should look sophisticated and technical.

Each card can include:

* product/application image
* category
* product title
* manufacturer name where applicable
* concise technical description
* applications/tags
* CTA

Suggested CTA:

**Explore Solution**

Do NOT create fake product-model numbers.

Do NOT create fake technical specifications.

---

# 16. TECHNOLOGY PARTNERS / MANUFACTURERS

This is a strategically important section.

Preferred heading:

# International Technology Partners

Suggested supporting line:

**Connecting specialized international manufacturing technologies with industrial requirements in Jordan and the region.**

Alternative:

# Global Manufacturing Technologies

Supporting line:

**International manufacturing expertise. Local engineering support.**

Show the following manufacturers:

* Henriques & Henriques
* KWO
* TEADIT
* GEMÜ
* THALETEC
* SIMONA
* SGL Carbon

---

# 17. CRITICAL PARTNER-RELATIONSHIP RULE

Do NOT describe Afaq Riyada as any of the following unless explicit written confirmation is later provided:

* exclusive agent
* exclusive distributor
* authorized distributor
* official distributor
* sole representative
* official representative

Even if a manufacturer relationship exists, do not infer its legal/commercial classification.

Prefer neutral wording such as:

* Technology Partners
* Manufacturing Technologies
* Partner Technologies
* Manufacturers We Work With
* International Manufacturing Partners

Use the most professional wording that does not imply an unsupported legal relationship.

---

# 18. MANUFACTURER LOGOS

The manufacturer logo section must be premium.

Do NOT create a cheap random logo wall.

For each manufacturer:

1. Identify its current official website.
2. Confirm the exact current brand name.
3. Locate an official logo asset where publicly available.
4. Prefer official SVG.
5. Otherwise use a high-quality transparent PNG/WebP.
6. Preserve the correct aspect ratio.
7. Do not stretch logos.
8. Do not redraw logos.
9. Do not recreate logos using text/fonts.
10. Do not use screenshots.
11. Do not alter trademarks.
12. Do not falsely imply authorization.

Store local assets under:

```text
/public/partners/
```

Suggested filenames:

```text
henriques-henriques.svg
kwo.svg
teadit.svg
gemu.svg
thaletec.svg
simona.svg
sgl-carbon.svg
```

Use graceful fallback behavior if an official high-quality logo cannot be safely obtained.

Do NOT scrape arbitrary Google Images results.

Prefer official manufacturer media/brand resources.

---

# 19. PARTNER LOGO PRESENTATION

Create an elegant logo grid or horizontal showcase.

Each partner can contain:

Logo

Manufacturer name

Technology category

Examples:

**Henriques & Henriques**
Surge Vessel Technology

**KWO**
Expanded PTFE Sealing Technology

**TEADIT**
Industrial Sealing Solutions

**GEMÜ**
Valve, Measurement & Control Technology

**THALETEC**
Glass-Lined Process Equipment

**SIMONA**
Thermoplastic Systems

**SGL Carbon**
Graphite Process Technology

Use:

* generous spacing
* controlled card dimensions
* consistent logo visual size
* subtle borders
* sophisticated hover behavior

Do not overpower the page with logos.

---

# 20. WHY AFAQ RIYADA

Create a differentiator section.

Suggested heading:

# More Than Equipment Supply

The objective is to show that Afaq Riyada does not simply sell catalogue items.

Use approximately four or five pillars.

### Engineering-Led Selection

Solutions evaluated according to actual process, operating and project requirements.

### Specialized Technologies

Access to specialized industrial technologies from established international manufacturers.

### Application Support

Technical coordination during product and technology selection.

### Project Coordination

Support across technical clarification, documentation and supply coordination.

### Local Communication

Responsive technical and commercial coordination from Amman, Jordan.

Do not guarantee outcomes.

Do not state capabilities the company cannot perform.

---

# 21. ENGINEERING APPROACH

Create a visually sophisticated four-step process.

Suggested heading:

# From Requirement to Engineered Solution

### 01 — Understand the Application

Identify operating requirements, application conditions and project objectives.

### 02 — Evaluate Technical Requirements

Review relevant process parameters, materials, specifications and constraints.

### 03 — Select the Appropriate Technology

Identify equipment and technology suitable for the application.

### 04 — Coordinate Supply & Support

Coordinate technical clarification, documentation, supply and communication.

Keep copy concise.

---

# 22. CALL TO ACTION

Before the contact section, create a premium CTA section.

Suggested heading:

# Have an Industrial Requirement?

Suggested subheading:

**Let's identify the right technology for your application.**

Supporting copy can mention:

* water infrastructure
* process equipment
* valves
* sealing technologies
* thermoplastic systems
* specialized industrial components

Primary CTA:

**Discuss Your Requirement**

Link to Contact section.

Secondary contact option:

`sales@afaqriyada.com`

---

# 23. CONTACT SECTION

Create an elegant Contact Us section.

Company:

**Afaq Riyada**

Location:

**Amman, Jordan**

Primary commercial email:

**[sales@afaqriyada.com](mailto:sales@afaqriyada.com)**

General email:

**[info@afaqriyada.com](mailto:info@afaqriyada.com)**

Do NOT invent:

* phone number
* street address
* PO Box
* WhatsApp number

until provided.

---

# 24. CONTACT FORM

Fields:

* Full Name
* Company
* Business Email
* Phone
* Area of Interest
* Message

Suggested Area of Interest values:

* Water & Wastewater
* Surge Vessels
* Pumps
* Valves
* Gaskets & Sealing
* Process Equipment
* Mechanical Seals
* Thermoplastic Solutions
* Graphite Process Technology
* Other Industrial Requirement

Button:

**Send Inquiry**

Commercial inquiries should ultimately route to:

`sales@afaqriyada.com`

Do NOT fake successful form submission.

If no email/API backend is configured:

* build the UI and validation
* document the required integration
* provide a clean API abstraction
* clearly mark submission as not yet connected

Prepare implementation for services such as:

* SMTP
* Resend
* SendGrid
* server-side email API

but do NOT automatically sign up for or configure a third-party service.

---

# 25. CONTACT EMAIL USAGE

Use the email addresses consistently:

### Sales / technical-commercial inquiries

`sales@afaqriyada.com`

Use this for:

* quotations
* products
* projects
* technical requirements
* equipment inquiries
* consultation inquiries

### General corporate inquiries

`info@afaqriyada.com`

Use this for:

* general company communication
* information requests

Footer should display both.

Do not publish personal employee email addresses.

---

# 26. ABOUT US CONTENT

The landing page must contain an About section.

Also architect the website so `/about` can be added later.

Suggested positioning:

Afaq Riyada is a mechanical and industrial engineering solutions company based in Amman, Jordan, focused on connecting specialized industrial technologies with the requirements of infrastructure, water, wastewater, manufacturing and process-industry applications.

Build professional original content around:

* mechanical engineering
* equipment and technology selection
* industrial applications
* technical product sourcing
* manufacturer coordination
* project support
* engineering communication
* reliability
* quality
* customer relationships

Do NOT invent:

* founding year
* years of experience
* employee count
* certifications
* offices
* customers
* projects
* revenue
* awards

---

# 27. FOOTER

Build a proper corporate footer.

Include:

## Afaq Riyada

Short description:

**Industrial engineering products, specialized technologies and technical solutions for infrastructure and process industries.**

### Company

* About Us
* Contact Us

### Solutions

* Water & Wastewater
* Industrial & Process Solutions
* Technology Partners

### Contact

**Amman, Jordan**

**Sales:**
`sales@afaqriyada.com`

**General:**
`info@afaqriyada.com`

Bottom section:

`© {currentYear} Afaq Riyada. All rights reserved.`

Also prepare links/placeholders for:

* Privacy Policy
* Terms / Legal Notice

Do not create fabricated legal text unless requested.

---

# 28. SEO

Implement complete technical SEO.

Primary title:

**Afaq Riyada | Industrial Engineering Solutions in Jordan**

Suggested meta-description direction:

Afaq Riyada provides industrial engineering products and technical solutions for water, wastewater, process industries, valves, sealing technology, thermoplastic systems and specialized industrial applications in Jordan.

Improve the wording naturally if necessary.

Implement:

* Next.js metadata
* page title
* description
* canonical URL
* OpenGraph
* Twitter/X metadata if relevant
* sitemap.xml
* robots.txt
* favicon support
* semantic heading hierarchy
* descriptive image alt text

Canonical domain:

`https://afaqriyada.com`

---

# 29. STRUCTURED DATA

Implement appropriate schema.org structured data.

Use:

* Organization
* WebSite
* ContactPoint where appropriate

Use only actual information.

Example:

Company:

**Afaq Riyada**

URL:

`https://afaqriyada.com`

Location:

**Amman, Jordan**

Sales email:

`sales@afaqriyada.com`

General email:

`info@afaqriyada.com`

Do not invent geographic coordinates, telephone numbers or legal company information.

---

# 30. COPYWRITING STANDARD

All copy must feel as though written by an experienced industrial engineering marketing team.

Use:

* concise language
* technically credible terminology
* strong headings
* short paragraphs
* application-oriented explanations
* confident but restrained language

Avoid AI clichés such as:

* "unlock the power"
* "revolutionizing industries"
* "your trusted partner for all your needs"
* "cutting-edge solutions"
* "world-class solutions"
* "unparalleled excellence"
* "transforming tomorrow"
* "innovation meets excellence"

unless genuinely justified.

Avoid excessive adjectives.

Technical credibility is more important than promotional language.

---

# 31. MANUFACTURER CONTENT RESEARCH

Manufacturer descriptions must be based primarily on current OFFICIAL manufacturer websites.

Official sources:

### Henriques & Henriques

`https://www.heh.pt`

### KWO

`https://www.kwo-ptfe.de`

### TEADIT

`https://teadit.com`

### GEMÜ

`https://www.gemu-group.com`

### THALETEC

`https://thaletec.com`

### SIMONA

`https://www.simona.de`

### SGL Carbon

`https://www.sglcarbon.com`

Research these sources before writing manufacturer-specific content.

Do NOT use random distributor pages as primary sources.

Do NOT blindly copy website content.

Do NOT reproduce long manufacturer descriptions.

Research facts, understand the technology, then write original concise content appropriate for Afaq Riyada.

---

# 32. FACT-CHECKING RULE

Before displaying a technical statement:

1. Verify the information from the official manufacturer.
2. Ensure it relates to the relevant manufacturer/product.
3. Do not infer specifications.
4. Do not infer certification.
5. Do not infer application suitability.
6. Do not infer distribution rights.
7. Do not infer exclusivity.
8. Do not infer warranty.
9. Do not infer local stock availability.

If uncertain:

**Omit the claim rather than guess.**

---

# 33. INTERNATIONALIZATION / ARABIC

English is the initial language.

However, architect the website so Arabic can be added later.

Prepare for:

* `/ar`
* RTL
* translated content
* locale-specific metadata
* mirrored layout where necessary

Do not hard-wire CSS assumptions that break RTL.

Keep textual content centralized where practical.

Do NOT create Arabic translations during this phase unless explicitly requested.

---

# 34. RESPONSIVE DESIGN

The website must be intentionally designed for:

* 1920px desktop
* 1440px desktop
* standard laptop
* tablet
* iPhone
* Android devices

Do not simply shrink desktop elements.

Pay special attention to:

* hero typography
* navigation
* product cards
* manufacturer logos
* contact form
* footer
* CTA buttons

Use appropriate responsive spacing and typography.

---

# 35. ACCESSIBILITY

Implement:

* semantic HTML
* correct heading hierarchy
* keyboard navigation
* visible focus states
* sufficient contrast
* form labels
* appropriate ARIA only where necessary
* descriptive alt text
* reduced-motion support
* accessible mobile menu
* meaningful link text

---

# 36. PERFORMANCE

Optimize aggressively but sensibly.

Prioritize:

* LCP
* CLS
* INP
* minimal JavaScript
* optimized images
* font loading
* lazy loading below fold
* appropriate image dimensions
* responsive images

Avoid installing libraries for trivial functionality.

Target an excellent Lighthouse score.

---

# 37. SECURITY / CONTACT FORM

If implementing server-side contact submission:

* validate all inputs server-side
* sanitize inputs
* rate limit where possible
* protect against spam
* do not expose API credentials
* use environment variables
* never expose SMTP/API secrets client-side

Provide `.env.example` where necessary.

Do not commit secrets.

---

# 38. CODE QUALITY

Requirements:

* strict TypeScript
* no unnecessary `any`
* clean imports
* clear folder structure
* reusable components
* centralized content
* no duplication
* no dead code
* no console errors
* no broken routes
* no broken images
* no hydration errors
* no placeholder lorem ipsum
* no developer/debug text visible to users

Run:

```bash
npm run lint
npm run build
```

Resolve all meaningful errors before completion.

---

# 39. RECOMMENDED PROJECT STRUCTURE

Use an architecture similar to:

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/
  layout/
    header.tsx
    footer.tsx
    mobile-navigation.tsx

  sections/
    hero.tsx
    company-overview.tsx
    industries.tsx
    products.tsx
    partners.tsx
    why-afaq-riyada.tsx
    engineering-process.tsx
    call-to-action.tsx
    contact.tsx

  ui/
    section-heading.tsx
    product-card.tsx
    partner-card.tsx
    industry-card.tsx

data/
  company.ts
  products.ts
  partners.ts
  industries.ts

lib/
  utils.ts

public/
  images/
  partners/
  brand/
```

Adapt if a better clean Next.js architecture is appropriate.

---

# 40. BRANDING

If no final Afaq Riyada logo is currently available:

Do NOT fabricate an elaborate logo and pretend it is official.

Create a tasteful temporary typographic wordmark:

**AFAQ RIYADA**

Optionally include a small restrained geometric industrial/engineering symbol if appropriate, but clearly structure it so a real SVG logo can replace it later.

The header must work with either:

* temporary text branding
* future SVG company logo

Create:

`/public/brand/`

for future branding assets.

---

# 41. UX PRINCIPLE

The visitor should be able to answer these questions within approximately 10 seconds:

**Who is Afaq Riyada?**

An industrial/mechanical engineering solutions company.

**What does it provide?**

Specialized industrial equipment, products and technologies.

**Which sectors does it support?**

Water, wastewater, industrial and process applications.

**Which technologies/manufacturers does it work with?**

Visible manufacturer section.

**How can I contact them?**

Prominent inquiry CTA and contact information.

---

# 42. VISUAL PAGE FLOW

Use approximately this sequence:

1. Header
2. Hero
3. Short credibility / capability strip
4. Company Overview
5. Industries We Support
6. Products & Solutions
7. International Technology Partners
8. Why Afaq Riyada
9. Engineering Approach
10. Strong CTA
11. Contact Us
12. Footer

The flow should tell a story:

**Who we are → where we work → what we provide → technologies behind us → how we work → contact us**

---

# 43. SECTION DIFFERENTIATION

Do not make every section visually identical.

Create subtle visual rhythm.

For example:

* hero = dark
* overview = light
* industries = neutral
* products = light/technical
* technology partners = contrasting refined section
* engineering process = clean
* CTA = dark/high-impact
* contact = light
* footer = dark

Maintain visual consistency while giving each major section its own purpose.

---

# 44. IMPORTANT LEGAL / CREDIBILITY RESTRICTIONS

NEVER invent:

* distributor status
* agency status
* exclusivity
* authorization
* manufacturer endorsement
* certifications
* client names
* case studies
* contracts
* completed projects
* project values
* employee numbers
* founding date
* years in operation
* office addresses
* phone numbers
* technical specifications
* inventory availability
* warranties
* delivery times
* regulatory approvals

If the information is unavailable, do not fill the gap with assumptions.

---

# 45. FINAL QUALITY REVIEW

Before considering the website complete, review it from the perspective of:

### Mechanical Engineer

Does the terminology sound credible?

### Plant Manager

Does the company appear capable of understanding industrial requirements?

### Procurement Manager

Can I easily understand the offered product groups and manufacturers?

### Engineering Consultant

Would I be comfortable including this company in a vendor or technical discussion?

### EPC Contractor

Is it clear how to contact the company about a project?

Then review it as a professional designer.

Check:

* visual hierarchy
* whitespace
* typography
* responsive behavior
* image quality
* alignment
* logo sizing
* card consistency
* CTA placement
* section rhythm

Fix anything that makes the website appear:

* generic
* amateur
* overly promotional
* visually cluttered
* technically weak

---

# 46. FINAL DELIVERABLE

Produce a complete working website, not just a design mockup.

Before finishing:

1. Install dependencies.
2. Run locally.
3. Check desktop.
4. Check mobile.
5. Verify all internal navigation.
6. Verify images.
7. Verify partner logos.
8. Verify email links.
9. Verify responsive layouts.
10. Verify contact form behavior.
11. Run lint.
12. Run production build.
13. Fix errors.
14. Review manufacturer statements against official sources.
15. Remove any unsupported claim.
16. Remove unused code/assets.

The final result should look like a **credible, premium industrial engineering company website capable of representing Afaq Riyada in front of serious industrial clients, engineering consultants, contractors and procurement organizations.**
