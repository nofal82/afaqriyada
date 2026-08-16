import type { IllustrationVariant } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * Schematic equipment drawings used on product cards.
 *
 * These are deliberately drawn as engineering line schematics rather than
 * photography: they describe the equipment type honestly without implying a
 * particular manufacturer's product, and they carry no licensing ambiguity.
 * Real project photography can replace them per product via `ProductSolution`.
 */

const ACCENT = "text-accent-600";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
      {children}
    </g>
  );
}

function SurgeVessel() {
  return (
    <Frame>
      {/* Vertical vessel with dished heads */}
      <path
        d="M150 78c0-16 14-26 50-26s50 10 50 26v104c0 16-14 26-50 26s-50-10-50-26z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* Bladder, shown dashed as an internal component */}
      <path
        d="M170 86c0-10 12-16 30-16s30 6 30 16v76c0 12-12 20-30 20s-30-8-30-20z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeDasharray="4 4"
        opacity="0.55"
      />
      {/* Top connection and air valve */}
      <path d="M200 52V34m-12 0h24" stroke="currentColor" strokeWidth="1.4" />
      <rect x="192" y="20" width="16" height="14" stroke="currentColor" strokeWidth="1.4" />
      {/* Bottom nozzle into the main line */}
      <path d="M200 208v22" stroke="currentColor" strokeWidth="1.4" />
      <path d="M60 230h280" className={ACCENT} stroke="currentColor" strokeWidth="1.8" />
      <path d="M186 226h28" stroke="currentColor" strokeWidth="1.4" />
      {/* Supports */}
      <path d="M164 200v30M236 200v30" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      {/* Centreline */}
      <path
        d="M200 14v226"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="10 4 2 4"
        opacity="0.35"
      />
      {/* Dimension marker */}
      <path d="M120 52v156M114 52h12M114 208h12" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
    </Frame>
  );
}

function Pump() {
  return (
    <Frame>
      {/* Volute casing */}
      <circle cx="150" cy="132" r="52" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="150" cy="132" r="30" stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
      <circle cx="150" cy="132" r="6" stroke="currentColor" strokeWidth="1.2" />
      {/* Impeller vanes */}
      <path
        d="M150 126c10-6 20-2 24 8M150 138c-10 6-20 2-24-8M156 132c0 10-8 18-18 18M144 132c0-10 8-18 18-18"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      {/* Discharge nozzle */}
      <path d="M150 80V44m-16 0h32" className={ACCENT} stroke="currentColor" strokeWidth="1.6" />
      {/* Suction */}
      <path d="M98 132H52m0-16v32" stroke="currentColor" strokeWidth="1.6" />
      {/* Shaft, coupling and motor */}
      <path d="M202 132h22" stroke="currentColor" strokeWidth="1.4" />
      <path d="M212 120v24" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <rect x="224" y="98" width="96" height="68" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M240 98v68M264 98v68M288 98v68" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
      {/* Baseplate */}
      <path d="M96 208h240" stroke="currentColor" strokeWidth="1.6" />
      <path d="M150 184v24M224 166v42M320 166v42" stroke="currentColor" strokeWidth="1.1" opacity="0.6" />
      <path d="M96 214h240" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
    </Frame>
  );
}

function ValveSchematic() {
  return (
    <Frame>
      {/* Pipe run */}
      <path d="M30 150h100M270 150h100" stroke="currentColor" strokeWidth="1.6" />
      <path d="M30 132v36M370 132v36" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Flanges */}
      <path d="M130 118v64M144 118v64M256 118v64M270 118v64" stroke="currentColor" strokeWidth="1.4" />
      {/* Body */}
      <path d="M144 122h112v56H144z" stroke="currentColor" strokeWidth="1.6" />
      {/* Disc / closure member */}
      <path d="M200 122v56" className={ACCENT} stroke="currentColor" strokeWidth="2" />
      <path d="M186 136l28 28M214 136l-28 28" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
      {/* Bonnet, stem and handwheel */}
      <path d="M182 122V96h36v26" stroke="currentColor" strokeWidth="1.4" />
      <path d="M200 96V62" stroke="currentColor" strokeWidth="1.4" />
      <path d="M168 62h64" stroke="currentColor" strokeWidth="1.8" />
      <path d="M176 62c0-10 10-16 24-16s24 6 24 16" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      {/* Flow direction */}
      <path d="M56 198h60m0 0l-10-6m10 6l-10 6" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
    </Frame>
  );
}

function Gasket() {
  return (
    <Frame>
      {/* Flange faces in section */}
      <path d="M60 60h48v140H60z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M140 60h48v140h-48z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M108 96h32v68h-32z" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      {/* Gasket between faces */}
      <path d="M118 96h12v68h-12z" className={ACCENT} stroke="currentColor" strokeWidth="2" />
      {/* Bolting */}
      <path d="M60 78h128M60 182h128" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <circle cx="124" cy="78" r="5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="124" cy="182" r="5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* Ring gasket in plan */}
      <circle cx="286" cy="130" r="62" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="286" cy="130" r="44" className={ACCENT} stroke="currentColor" strokeWidth="2" />
      <circle cx="286" cy="130" r="32" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const radians = (angle * Math.PI) / 180;
        return (
          <circle
            key={angle}
            cx={286 + 53 * Math.cos(radians)}
            cy={130 + 53 * Math.sin(radians)}
            r="4"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        );
      })}
    </Frame>
  );
}

function DiaphragmValve() {
  return (
    <Frame>
      {/* Actuator */}
      <path d="M164 22h72v46h-72z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M200 68v20" stroke="currentColor" strokeWidth="1.4" />
      <path d="M176 34h48M176 46h48" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
      {/* Bonnet */}
      <path d="M156 88h88v34h-88z" stroke="currentColor" strokeWidth="1.5" />
      {/* Body with weir */}
      <path d="M132 122h136v54H132z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M170 176c8-30 22-42 30-42s22 12 30 42" stroke="currentColor" strokeWidth="1.3" opacity="0.65" />
      {/* Diaphragm */}
      <path d="M150 128c18 22 32 30 50 30s32-8 50-30" className={ACCENT} stroke="currentColor" strokeWidth="2" />
      {/* Pipe connections */}
      <path d="M40 150h92M268 150h92" stroke="currentColor" strokeWidth="1.6" />
      <path d="M40 134v32M360 134v32" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M120 128v44M280 128v44" stroke="currentColor" strokeWidth="1.3" />
      {/* Position indication */}
      <path d="M296 40h40M296 40v-8M336 40v-8" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
    </Frame>
  );
}

function GlassLinedReactor() {
  return (
    <Frame>
      {/* Vessel with jacket */}
      <path
        d="M132 74c0-14 12-22 68-22s68 8 68 22v92c0 30-30 52-68 52s-68-22-68-52z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M146 84v78c0 24 24 42 54 42s54-18 54-42V84"
        className={ACCENT}
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.9"
      />
      {/* Jacket connections */}
      <path d="M132 100H96m36 60H96" stroke="currentColor" strokeWidth="1.4" />
      <path d="M268 100h36m-36 60h36" stroke="currentColor" strokeWidth="1.4" />
      {/* Top head nozzles */}
      <path d="M160 52V34m-10 0h20M240 52V34m-10 0h20" stroke="currentColor" strokeWidth="1.3" />
      {/* Agitator drive and shaft */}
      <rect x="184" y="12" width="32" height="22" stroke="currentColor" strokeWidth="1.5" />
      <path d="M200 34v144" stroke="currentColor" strokeWidth="1.4" />
      <path d="M176 138h48M176 174h48" stroke="currentColor" strokeWidth="1.6" />
      <path d="M176 132v12M224 132v12M176 168v12M224 168v12" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      {/* Bottom outlet */}
      <path d="M200 218v20m-12 0h24" stroke="currentColor" strokeWidth="1.4" />
    </Frame>
  );
}

function MechanicalSeal() {
  return (
    <Frame>
      {/* Shaft */}
      <path d="M40 122h320M40 158h320" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M40 140h320"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="10 4 2 4"
        opacity="0.35"
      />
      {/* Housing / gland plate */}
      <path d="M120 60h140v52H120zM120 168h140v52H120z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M252 48h20v184h-20z" stroke="currentColor" strokeWidth="1.3" opacity="0.7" />
      {/* Rotating and stationary faces */}
      <path d="M196 112V70M204 112V70M196 210v-42M204 210v-42" className={ACCENT} stroke="currentColor" strokeWidth="2" />
      {/* Springs */}
      <path
        d="M140 84h44M140 92h44M140 100h44M140 180h44M140 188h44M140 196h44"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.45"
      />
      {/* Face-contact callout */}
      <path d="M200 60V36m0 0h56" stroke="currentColor" strokeWidth="0.9" opacity="0.45" />
      {/* Stuffing box wall, hatched as a sectioned component */}
      <path
        d="M272 48h44v184h-44z"
        stroke="currentColor"
        strokeWidth="1.3"
        opacity="0.7"
      />
      <path
        d="M272 64l44-16M272 96l44-16M272 128l44-16M272 160l44-16M272 192l44-16M272 224l44-16"
        stroke="currentColor"
        strokeWidth="0.7"
        opacity="0.35"
      />
      {/* Shaft break */}
      <path d="M64 112l12 16-12 16" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
    </Frame>
  );
}

function ThermoplasticPiping() {
  return (
    <Frame>
      {/* Pipe run drawn as wall lines, with a branch tee */}
      <path d="M32 76h316M32 112h216M280 112h68" stroke="currentColor" strokeWidth="1.8" />
      <path d="M248 112v76M280 112v76" stroke="currentColor" strokeWidth="1.8" />
      <path d="M240 188h48" stroke="currentColor" strokeWidth="1.4" />
      {/* Butt-fusion joint in the main run */}
      <path d="M118 70v48M130 70v48" className={ACCENT} stroke="currentColor" strokeWidth="1.8" />
      {/* Flanged end connection */}
      <path d="M336 58v72M348 58v72" stroke="currentColor" strokeWidth="1.4" />
      {/* Sheet stack */}
      <path d="M44 168h150M44 186h150M44 204h150" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
      <path d="M44 168v36M194 168v36" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M44 222h150M44 216v12M194 216v12" stroke="currentColor" strokeWidth="0.9" opacity="0.4" />
    </Frame>
  );
}

function GraphiteHeatExchanger() {
  return (
    <Frame>
      {/* Shell */}
      <rect x="70" y="88" width="260" height="84" stroke="currentColor" strokeWidth="1.6" />
      {/* Heads */}
      <path d="M52 76h18v108H52zM330 76h18v108h-18z" stroke="currentColor" strokeWidth="1.5" />
      {/* Tube bundle */}
      <path
        d="M70 106h260M70 122h260M70 138h260M70 154h260"
        className={ACCENT}
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.8"
      />
      {/* Baffles */}
      <path d="M130 88v58M200 114v58M270 88v58" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      {/* Nozzles */}
      <path d="M110 88V56m-12 0h24M290 172v32m-12 0h24" stroke="currentColor" strokeWidth="1.4" />
      <path d="M52 116H24m0 0v-12m0 12v12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M348 144h28" stroke="currentColor" strokeWidth="1.4" />
      {/* Saddles */}
      <path d="M110 172v34h56M244 172v34h-56" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <path d="M96 210h180" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
    </Frame>
  );
}

const variants: Record<IllustrationVariant, () => React.JSX.Element> = {
  "surge-vessel": SurgeVessel,
  pump: Pump,
  valve: ValveSchematic,
  gasket: Gasket,
  "diaphragm-valve": DiaphragmValve,
  "glass-lined-reactor": GlassLinedReactor,
  "mechanical-seal": MechanicalSeal,
  "thermoplastic-piping": ThermoplasticPiping,
  "graphite-heat-exchanger": GraphiteHeatExchanger,
};

interface TechnicalIllustrationProps {
  variant: IllustrationVariant;
  className?: string;
  /** Describes the drawing for assistive technology. */
  label: string;
}

export function TechnicalIllustration({
  variant,
  className,
  label,
}: TechnicalIllustrationProps) {
  const Drawing = variants[variant];

  return (
    <svg
      viewBox="0 0 400 260"
      role="img"
      aria-label={label}
      className={cn("h-full w-full text-ink-700", className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <Drawing />
    </svg>
  );
}
