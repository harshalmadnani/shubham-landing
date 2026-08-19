/**
 * Route schematics.
 *
 * Each one is a diagram of how a stage actually works, drawn in the same
 * grammar as the rest of the site: pine lines, vermilion nodes, plates for
 * things you receive. Not illustrations of an interface — the previous set
 * drew little fake apps, which told the reader nothing they could not see by
 * looking at the page.
 *
 * All inline SVG in the palette's own values: sharp at any size, no network
 * request, and nothing that can ship the garbled lettering that gives a
 * generated image away. Decorative, so every one is `aria-hidden`.
 */

const PINE = "#173d31";
const PINE_LINE = "#2e5c4d";
const SIGNAL = "#ff4e1b";
const BONE = "#edede7";
const PAPER_SUNK = "#e3e3da";
const WHITE = "#ffffff";
const RULE = "#d2d2c7";

type Props = { className?: string };

function Frame({
  className,
  viewBox = "0 0 480 320",
  children,
}: {
  className?: string;
  /** Cropped to each drawing's real bounds so no frame carries dead ground. */
  viewBox?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/** A vermilion interchange marker. */
function Node({ x, y, filled = false }: { x: number; y: number; filled?: boolean }) {
  return (
    <circle
      cx={x}
      cy={y}
      r="7"
      fill={filled ? SIGNAL : BONE}
      stroke={SIGNAL}
      strokeWidth="3"
    />
  );
}

/** A labelled plate — the things a stage hands you. */
function Plate({
  x,
  y,
  w = 96,
  h = 30,
  fill = WHITE,
  bars = 2,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  fill?: string;
  bars?: number;
}) {
  return (
    <>
      <rect x={x} y={y} width={w} height={h} fill={fill} stroke={RULE} strokeWidth="1.5" />
      <rect x={x + 10} y={y + 9} width={w * 0.5} height="4" fill={PINE_LINE} opacity=".45" />
      {bars > 1 && (
        <rect x={x + 10} y={y + 18} width={w * 0.32} height="4" fill={PINE_LINE} opacity=".22" />
      )}
    </>
  );
}

/** Five phases on one line, ending in the certificate. */
export function TrainingIllustration({ className }: Props) {
  const xs = [58, 141, 224, 307, 390];
  return (
    <Frame className={className} viewBox="0 38 480 246">
      <rect x="0" y="0" width="480" height="320" fill={BONE} />

      {/* the line */}
      <line x1="58" y1="160" x2="390" y2="160" stroke={PINE} strokeWidth="3" />

      {/* daily practice running under the line, in short ticks */}
      {Array.from({ length: 21 }, (_, i) => 62 + i * 16.4).map((x) => (
        <line key={x} x1={x} y1="188" x2={x} y2="200" stroke={PINE_LINE} strokeWidth="2" opacity=".5" />
      ))}
      <text x="58" y="222" fill={PINE} opacity=".6" fontFamily="monospace" fontSize="11" letterSpacing="1.6">
        DAILY PRACTICE
      </text>

      {/* plates above the first three stops — the sessions and recordings */}
      <Plate x={20} y={86} w={76} h={44} bars={2} />
      <Plate x={103} y={86} w={76} h={44} bars={2} fill={PAPER_SUNK} />
      <Plate x={186} y={86} w={76} h={44} bars={2} fill={PAPER_SUNK} />

      {/* the certificate terminus */}
      <rect x="352" y="82" width="108" height="52" fill={PINE} />
      <path d="m378 108 8 8 16-18" stroke={SIGNAL} strokeWidth="4" strokeLinecap="square" />
      <rect x="368" y="52" width="76" height="4" fill={SIGNAL} />

      {xs.map((x, i) => (
        <Node key={x} x={x} y={160} filled={i === xs.length - 1} />
      ))}

      {xs.map((x, i) => (
        <text
          key={`n-${x}`}
          x={x}
          y={266}
          fill={PINE}
          fontFamily="monospace"
          fontSize="13"
          fontWeight="600"
          textAnchor="middle"
        >
          {String(i + 1).padStart(2, "0")}
        </text>
      ))}
    </Frame>
  );
}

/** Four phases as a closed cycle, run five times. */
export function BootcampIllustration({ className }: Props) {
  const pts = [
    { x: 240, y: 74 },
    { x: 344, y: 160 },
    { x: 240, y: 246 },
    { x: 136, y: 160 },
  ];
  return (
    <Frame className={className} viewBox="0 40 480 254">
      <rect x="0" y="0" width="480" height="320" fill={BONE} />

      {/* the five briefs, stacked behind */}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={26 + i * 7}
          y={104 + i * 7}
          width="82"
          height="106"
          fill={i === 3 ? WHITE : PAPER_SUNK}
          stroke={RULE}
          strokeWidth="1.5"
        />
      ))}
      <text x="47" y="240" fill={PINE} fontFamily="monospace" fontSize="26" fontWeight="700">
        ×5
      </text>

      {/* the cycle */}
      <path
        d={`M ${pts[0].x} ${pts[0].y} L ${pts[1].x} ${pts[1].y} L ${pts[2].x} ${pts[2].y} L ${pts[3].x} ${pts[3].y} Z`}
        stroke={PINE}
        strokeWidth="3"
        fill="none"
      />
      {pts.map((p, i) => (
        <Node key={i} x={p.x} y={p.y} filled={i === 3} />
      ))}

      {/* phase labels at the corners */}
      {[
        { x: 240, y: 56, t: "PLAN" },
        { x: 384, y: 164, t: "BUILD" },
        { x: 240, y: 276, t: "REVIEW" },
        { x: 96, y: 164, t: "DESIGN" },
      ].map((l) => (
        <text
          key={l.t}
          x={l.x}
          y={l.y}
          fill={PINE}
          fontFamily="monospace"
          fontSize="11"
          fontWeight="600"
          letterSpacing="1.4"
          textAnchor="middle"
        >
          {l.t}
        </text>
      ))}

      {/* the portfolio it produces */}
      <rect x="396" y="228" width="64" height="52" fill={PINE} />
      <rect x="408" y="244" width="40" height="4" fill={SIGNAL} />
      <rect x="408" y="256" width="26" height="4" fill={BONE} opacity=".5" />
    </Frame>
  );
}

/** One line, with a second running alongside it the whole way. */
export function MentoringIllustration({ className }: Props) {
  const xs = [70, 172, 274, 376];
  return (
    <Frame className={className} viewBox="0 74 480 196">
      <rect x="0" y="0" width="480" height="320" fill={BONE} />

      {/* the programme */}
      <line x1="70" y1="128" x2="376" y2="128" stroke={PINE} strokeWidth="3" />
      {xs.map((x) => (
        <Node key={x} x={x} y={128} />
      ))}
      <text x="70" y="94" fill={PINE} fontFamily="monospace" fontSize="11" fontWeight="600" letterSpacing="1.6">
        THE PROGRAMME
      </text>

      {/* the mentor, running the entire length rather than stopping */}
      <line
        x1="70"
        y1="196"
        x2="410"
        y2="196"
        stroke={SIGNAL}
        strokeWidth="3"
        strokeDasharray="9 7"
      />
      <circle cx="70" cy="196" r="7" fill={SIGNAL} />
      <path d="M404 188l12 8-12 8z" fill={SIGNAL} />
      <text x="70" y="228" fill={SIGNAL} fontFamily="monospace" fontSize="11" fontWeight="600" letterSpacing="1.6">
        YOUR MENTOR
      </text>

      {/* the ties between the two */}
      {xs.map((x) => (
        <line key={`t-${x}`} x1={x} y1="135" x2={x} y2="189" stroke={PINE_LINE} strokeWidth="1.5" opacity=".4" />
      ))}

      {/* it continues past the last stop */}
      <text x="410" y="252" fill={PINE} opacity=".55" fontFamily="monospace" fontSize="11" textAnchor="end">
        past the last stop
      </text>
    </Frame>
  );
}

/** One profile out to many employers, and what comes back. */
export function MarketingIllustration({ className }: Props) {
  const targets = [76, 124, 172, 220];
  return (
    <Frame className={className} viewBox="0 48 480 232">
      <rect x="0" y="0" width="480" height="320" fill={BONE} />

      {/* the profile */}
      <rect x="26" y="112" width="92" height="96" fill={WHITE} stroke={PINE} strokeWidth="2" />
      <rect x="40" y="130" width="46" height="6" fill={SIGNAL} />
      <rect x="40" y="148" width="64" height="4" fill={PINE_LINE} opacity=".4" />
      <rect x="40" y="160" width="52" height="4" fill={PINE_LINE} opacity=".25" />
      <rect x="40" y="176" width="64" height="4" fill={PINE_LINE} opacity=".4" />
      <rect x="40" y="188" width="38" height="4" fill={PINE_LINE} opacity=".25" />
      <Node x={118} y={160} filled />

      {/* out to employers */}
      {targets.map((y, i) => (
        <g key={y}>
          <path
            d={`M126 160 C 200 160, 214 ${y}, 300 ${y}`}
            stroke={PINE}
            strokeWidth="2"
            fill="none"
            opacity={0.75 - i * 0.1}
          />
          <rect
            x="306"
            y={y - 15}
            width="112"
            height="30"
            fill={i === 1 ? PINE : WHITE}
            stroke={i === 1 ? PINE : RULE}
            strokeWidth="1.5"
          />
          <rect x="318" y={y - 3} width="8" height="8" fill={i === 1 ? SIGNAL : PINE} />
          <rect
            x="334"
            y={y - 2}
            width="60"
            height="4"
            fill={i === 1 ? BONE : PINE_LINE}
            opacity={i === 1 ? 0.6 : 0.35}
          />
        </g>
      ))}

      {/* and the reply that matters */}
      <path d="M300 262 L 418 262" stroke={SIGNAL} strokeWidth="3" strokeDasharray="9 7" />
      <path d="M306 254l-12 8 12 8z" fill={SIGNAL} />
      <text x="418" y="252" fill={SIGNAL} fontFamily="monospace" fontSize="11" fontWeight="600" textAnchor="end" letterSpacing="1.4">
        INTERVIEW
      </text>
    </Frame>
  );
}

/** Four routes converging on one terminus. */
export function AboutIllustration({ className }: Props) {
  const starts = [72, 128, 184, 240];
  return (
    <Frame className={className} viewBox="0 44 480 234">
      <rect x="0" y="0" width="480" height="320" fill={BONE} />

      {starts.map((y, i) => (
        <g key={y}>
          <rect x="24" y={y - 15} width="86" height="30" fill={WHITE} stroke={RULE} strokeWidth="1.5" />
          <text
            x="38"
            y={y + 5}
            fill={PINE}
            fontFamily="monospace"
            fontSize="12"
            fontWeight="600"
          >
            {String(i + 1).padStart(2, "0")}
          </text>
          <rect x="62" y={y - 2} width="34" height="4" fill={PINE_LINE} opacity=".35" />
          <path
            d={`M110 ${y} C 190 ${y}, 210 156, 300 156`}
            stroke={PINE}
            strokeWidth="3"
            fill="none"
          />
          <Node x={110} y={y} />
        </g>
      ))}

      {/* the terminus */}
      <rect x="300" y="104" width="152" height="104" fill={PINE} />
      <rect x="300" y="104" width="6" height="104" fill={SIGNAL} />
      <path d="m332 156 10 10 20-22" stroke={SIGNAL} strokeWidth="4" strokeLinecap="square" />
      <rect x="326" y="184" width="96" height="4" fill={BONE} opacity=".45" />

      {/* the two markets it serves */}
      <rect x="300" y="232" width="72" height="30" fill={WHITE} stroke={RULE} strokeWidth="1.5" />
      <rect x="312" y="244" width="10" height="6" fill={SIGNAL} />
      <rect x="330" y="245" width="28" height="4" fill={PINE_LINE} opacity=".35" />
      <rect x="380" y="232" width="72" height="30" fill={WHITE} stroke={RULE} strokeWidth="1.5" />
      <rect x="392" y="244" width="10" height="6" fill={PINE} />
      <rect x="410" y="245" width="28" height="4" fill={PINE_LINE} opacity=".35" />
    </Frame>
  );
}

/** Looked up by process slug, so a new page without art fails visibly. */
export const processIllustrations: Record<
  string,
  (props: Props) => React.ReactElement
> = {
  training: TrainingIllustration,
  bootcamp: BootcampIllustration,
  mentoring: MentoringIllustration,
  marketing: MarketingIllustration,
};
