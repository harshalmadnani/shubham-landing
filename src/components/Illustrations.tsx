/**
 * Flat vector scenes, one per process page.
 *
 * Drawn rather than generated. Every one is inline SVG in the site's own
 * tokens, which buys three things a stock or generated image cannot: it is
 * sharp at any size on any screen, it costs no network request, and it can
 * never ship the garbled lettering that gives an AI illustration away.
 *
 * They are decorative — the page says everything they show — so each is
 * `aria-hidden` and adds nothing to the accessibility tree.
 */

const INK = "#12141a";
const INK_SOFT = "#333844";
const CODE_GREY = "#4b5563";
const PRIMARY = "#0b5ed7";
const PRIMARY_SOFT = "#e7f0fd";
const TEAL = "#0d9488";
const LINE = "#dfe3ea";
const LINE_SOFT = "#eef1f6";
const PANEL = "#f5f7fa";
const WHITE = "#ffffff";

type Props = { className?: string };

function Frame({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="24" y="28" width="432" height="304" rx="28" fill={PRIMARY_SOFT} />
      {children}
    </svg>
  );
}

/** A live session: the schedule beside the work, and the badge it ends with. */
export function TrainingIllustration({ className }: Props) {
  return (
    <Frame className={className}>
      <circle cx="404" cy="70" r="34" fill={PRIMARY} opacity=".12" />

      <rect x="60" y="66" width="300" height="212" rx="16" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <path d="M60 96h300" stroke={LINE} strokeWidth="2" />
      <circle cx="80" cy="81" r="4" fill="#c9d2e0" />
      <circle cx="94" cy="81" r="4" fill="#c9d2e0" />
      <circle cx="108" cy="81" r="4" fill="#c9d2e0" />
      <rect x="278" y="73" width="64" height="17" rx="8.5" fill={PRIMARY} />
      <circle cx="290" cy="81.5" r="3.5" fill={WHITE} />
      <rect x="298" y="78" width="34" height="7" rx="3.5" fill={WHITE} opacity=".85" />

      <rect x="76" y="112" width="80" height="150" rx="10" fill={PANEL} />
      <rect x="86" y="124" width="46" height="7" rx="3.5" fill="#c9d2e0" />
      <rect x="86" y="144" width="60" height="20" rx="6" fill={PRIMARY} />
      <rect x="86" y="174" width="52" height="10" rx="5" fill={LINE} />
      <rect x="86" y="196" width="58" height="10" rx="5" fill={LINE} />
      <rect x="86" y="218" width="44" height="10" rx="5" fill={LINE} />
      <rect x="86" y="240" width="54" height="10" rx="5" fill={LINE} />

      <rect x="172" y="112" width="172" height="150" rx="10" fill={INK} />
      <g fill={CODE_GREY}>
        <rect x="186" y="128" width="60" height="8" rx="4" />
        <rect x="186" y="146" width="112" height="8" rx="4" />
        <rect x="198" y="164" width="88" height="8" rx="4" />
        <rect x="198" y="182" width="120" height="8" rx="4" />
        <rect x="186" y="200" width="72" height="8" rx="4" />
      </g>
      <rect x="186" y="146" width="40" height="8" rx="4" fill={PRIMARY} />
      <rect x="198" y="182" width="34" height="8" rx="4" fill={TEAL} />
      <rect x="186" y="228" width="96" height="20" rx="10" fill={PRIMARY} opacity=".2" />

      {/* The certification the stage closes with. */}
      <circle cx="388" cy="232" r="40" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <circle cx="388" cy="232" r="28" fill={PRIMARY} opacity=".1" />
      <path d="m376 232 8 9 17-19" stroke={PRIMARY} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Practice between sessions. */}
      <rect x="330" y="106" width="112" height="44" rx="12" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <circle cx="352" cy="128" r="11" fill={PRIMARY_SOFT} />
      <path d="M352 122v6l4 3" stroke={PRIMARY} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="370" y="120" width="54" height="7" rx="3.5" fill={LINE} />
      <rect x="370" y="132" width="34" height="7" rx="3.5" fill={LINE_SOFT} />
    </Frame>
  );
}

/** Five stacked briefs, and the four phases each one runs through. */
export function BootcampIllustration({ className }: Props) {
  return (
    <Frame className={className}>
      <rect x="70" y="86" width="180" height="118" rx="14" fill={WHITE} stroke={LINE} strokeWidth="2" opacity=".55" transform="rotate(-6 160 145)" />
      <rect x="80" y="96" width="180" height="118" rx="14" fill={WHITE} stroke={LINE} strokeWidth="2" opacity=".8" transform="rotate(-3 170 155)" />

      <rect x="90" y="106" width="180" height="122" rx="14" fill={INK} />
      <path d="M90 134h180" stroke={INK_SOFT} strokeWidth="2" />
      <circle cx="108" cy="120" r="4" fill={CODE_GREY} />
      <circle cx="122" cy="120" r="4" fill={CODE_GREY} />
      <circle cx="136" cy="120" r="4" fill={CODE_GREY} />
      <g fill={CODE_GREY}>
        <rect x="106" y="150" width="46" height="7" rx="3.5" />
        <rect x="106" y="168" width="94" height="7" rx="3.5" />
        <rect x="118" y="186" width="70" height="7" rx="3.5" />
        <rect x="106" y="204" width="54" height="7" rx="3.5" />
      </g>
      <rect x="160" y="150" width="30" height="7" rx="3.5" fill={TEAL} />
      <rect x="118" y="186" width="30" height="7" rx="3.5" fill={PRIMARY} />

      {/* Capstone. */}
      <rect x="300" y="86" width="130" height="120" rx="16" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <text x="365" y="146" textAnchor="middle" fontFamily="inherit" fontSize="46" fontWeight="700" fill={PRIMARY}>
        5
      </text>
      <rect x="326" y="160" width="78" height="8" rx="4" fill={LINE} />
      <rect x="340" y="178" width="50" height="8" rx="4" fill={LINE_SOFT} />

      {/* Plan, architect, build, review. */}
      <path d="M114 268h250" stroke={PRIMARY} strokeOpacity=".3" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
      <circle cx="114" cy="268" r="20" fill={PRIMARY} />
      <rect x="106" y="261" width="16" height="3" rx="1.5" fill={WHITE} />
      <rect x="106" y="268" width="16" height="3" rx="1.5" fill={WHITE} />
      <rect x="106" y="275" width="10" height="3" rx="1.5" fill={WHITE} />

      <circle cx="197" cy="268" r="20" fill={WHITE} stroke={PRIMARY} strokeWidth="2.5" />
      <rect x="189" y="260" width="7" height="7" rx="1.5" fill={PRIMARY} />
      <rect x="199" y="260" width="7" height="7" rx="1.5" fill={PRIMARY} />
      <rect x="189" y="270" width="7" height="7" rx="1.5" fill={PRIMARY} />
      <rect x="199" y="270" width="7" height="7" rx="1.5" fill={PRIMARY} opacity=".35" />

      <circle cx="281" cy="268" r="20" fill={WHITE} stroke={PRIMARY} strokeWidth="2.5" />
      <path d="m274 268 5 5 10-11" stroke={PRIMARY} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <circle cx="364" cy="268" r="20" fill={TEAL} />
      <path d="M357 268h14M365 262l6 6-6 6" stroke={WHITE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

/** Compliance watched, and the person watching it. */
export function MentoringIllustration({ className }: Props) {
  return (
    <Frame className={className}>
      <g transform="translate(146 168)">
        <circle r="76" fill={WHITE} />
        <circle r="62" stroke={LINE} strokeWidth="14" fill="none" />
        <circle
          r="62"
          stroke={PRIMARY}
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="292 390"
          transform="rotate(-90)"
        />
        <text y="10" textAnchor="middle" fontFamily="inherit" fontSize="34" fontWeight="700" fill={INK}>
          75%
        </text>
        <text y="32" textAnchor="middle" fontFamily="inherit" fontSize="13" fontWeight="500" fill="#838a97">
          on track
        </text>
      </g>

      <path d="M222 150c34-14 44 6 70 6" stroke={PRIMARY} strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 11" />
      <circle cx="316" cy="156" r="26" fill={PRIMARY} />
      <circle cx="316" cy="149" r="7.5" fill={WHITE} />
      <path d="M303 170c2.5-7.5 7.5-11 13-11s10.5 3.5 13 11z" fill={WHITE} />

      <rect x="262" y="196" width="146" height="52" rx="14" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <path d="M280 248v14l16-14z" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <rect x="280" y="212" width="90" height="8" rx="4" fill={LINE} />
      <rect x="280" y="228" width="58" height="8" rx="4" fill={LINE_SOFT} />

      <rect x="278" y="76" width="130" height="46" rx="14" fill={PRIMARY} />
      <rect x="294" y="90" width="74" height="8" rx="4" fill={WHITE} opacity=".9" />
      <rect x="294" y="104" width="46" height="8" rx="4" fill={WHITE} opacity=".45" />

      <rect x="56" y="266" width="180" height="52" rx="14" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <circle cx="82" cy="292" r="12" fill={TEAL} />
      <path d="m76 292 4 4 8-9" stroke={WHITE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="104" y="282" width="106" height="8" rx="4" fill={LINE} />
      <rect x="104" y="296" width="66" height="8" rx="4" fill={LINE_SOFT} />
    </Frame>
  );
}

/** One profile, taken out to employers, and what comes back. */
export function MarketingIllustration({ className }: Props) {
  return (
    <Frame className={className}>
      <g stroke={PRIMARY} strokeOpacity=".35" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 11">
        <path d="M222 108c46 0 58-24 92-24" />
        <path d="M222 166h92" />
        <path d="M222 224c46 0 58 24 92 24" />
      </g>

      <rect x="58" y="76" width="164" height="176" rx="16" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <rect x="80" y="100" width="48" height="12" rx="6" fill={PRIMARY} />
      <rect x="80" y="122" width="120" height="8" rx="4" fill={LINE} />
      <rect x="80" y="138" width="96" height="8" rx="4" fill={LINE_SOFT} />
      <rect x="80" y="166" width="120" height="8" rx="4" fill={LINE} />
      <rect x="80" y="182" width="108" height="8" rx="4" fill={LINE_SOFT} />
      <rect x="80" y="198" width="76" height="8" rx="4" fill={LINE_SOFT} />
      <rect x="80" y="220" width="60" height="20" rx="10" fill={PRIMARY_SOFT} />
      <rect x="148" y="220" width="44" height="20" rx="10" fill={PRIMARY_SOFT} />

      <rect x="314" y="62" width="104" height="44" rx="12" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <rect x="330" y="76" width="16" height="16" rx="4" fill={PRIMARY} />
      <rect x="354" y="80" width="48" height="8" rx="4" fill={LINE} />

      <rect x="314" y="144" width="104" height="44" rx="12" fill={PRIMARY} />
      <rect x="330" y="158" width="16" height="16" rx="4" fill={WHITE} />
      <rect x="354" y="162" width="48" height="8" rx="4" fill={WHITE} opacity=".55" />

      <rect x="314" y="226" width="104" height="44" rx="12" fill={WHITE} stroke={LINE} strokeWidth="2" />
      <rect x="330" y="240" width="16" height="16" rx="4" fill={TEAL} />
      <rect x="354" y="244" width="48" height="8" rx="4" fill={LINE} />

      {/* What comes back. */}
      <g fill={PRIMARY} opacity=".25">
        <rect x="60" y="292" width="16" height="22" rx="4" />
        <rect x="84" y="284" width="16" height="30" rx="4" />
        <rect x="108" y="276" width="16" height="38" rx="4" />
      </g>
      <rect x="132" y="266" width="16" height="48" rx="4" fill={PRIMARY} />
      <path d="M170 300l14-14 12 8 18-22" stroke={TEAL} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="214" cy="272" r="4.5" fill={TEAL} />
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
