import type { ComponentType } from "react";

type PlateProps = { className?: string };

/*
 * Diagrams.
 *
 * Each process page carries one drawing of the thing it sits beside — the
 * shape of a training week, five projects growing into a portfolio, a mentor
 * thread with its check-ins, one profile fanning out to many employers.
 *
 * Rounded shapes, one accent, no frame and no caption: the heading beside the
 * drawing already says what it is.
 */
function Plate({
  className,
  children,
}: PlateProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/** A training week: five columns of days, one hour filled in each. */
function TrainingPlate({ className }: PlateProps) {
  const columns = [0, 1, 2, 3, 4];
  const rows = [0, 1, 2, 3, 4];

  return (
    <Plate className={className}>
      {columns.map((column) =>
        rows.map((row) => {
          const isSession = row === 2;
          return (
            <rect
              key={`${column}-${row}`}
              x={16 + column * 60}
              y={24 + row * 32}
              rx={6}
              width={48}
              height={22}
              className={isSession ? "fill-accent stroke-accent" : ""}
              opacity={isSession ? 1 : 0.28}
            />
          );
        }),
      )}
    </Plate>
  );
}

/** Five projects, each larger than the last, closing into one portfolio. */
function BootcampPlate({ className }: PlateProps) {
  const bars = [70, 116, 162, 208, 260];

  return (
    <Plate className={className}>
      {bars.map((width, index) => (
        <rect
          key={width}
          x={16}
          y={22 + index * 34}
          rx={9}
          width={width}
          height={20}
          className={index === bars.length - 1 ? "fill-accent stroke-accent" : ""}
          opacity={index === bars.length - 1 ? 1 : 0.28}
        />
      ))}
    </Plate>
  );
}

/** One thread, running the length of the programme, with check-ins on it. */
function MentoringPlate({ className }: PlateProps) {
  const checkpoints = [70, 118, 166, 214, 262];

  return (
    <Plate className={className}>
      <line x1={22} y1={100} x2={298} y2={100} opacity={0.28} />
      {checkpoints.map((x, index) => (
        <g key={x}>
          <line
            x1={x}
            y1={100}
            x2={x}
            y2={index % 2 === 0 ? 62 : 138}
            opacity={0.28}
          />
          <circle cx={x} cy={index % 2 === 0 ? 56 : 144} r={7} opacity={0.28} />
        </g>
      ))}
      <circle cx={22} cy={100} r={9} className="fill-accent stroke-accent" />
      <circle cx={298} cy={100} r={9} className="fill-accent stroke-accent" />
    </Plate>
  );
}

/** One profile, sent out to many desks. */
function MarketingPlate({ className }: PlateProps) {
  const targets = [34, 66, 98, 130, 162, 194];

  return (
    <Plate className={className}>
      <circle cx={30} cy={100} r={12} className="fill-accent stroke-accent" />
      {targets.map((y) => (
        <g key={y}>
          <path
            d={`M44 100 C 140 100, 180 ${y + 8}, 262 ${y + 8}`}
            opacity={0.28}
          />
          <rect x={262} y={y} rx={5} width={16} height={16} opacity={0.28} />
        </g>
      ))}
    </Plate>
  );
}

/**
 * The About diagram: the whole programme as one line — teach, build, market,
 * hired — with only the last mark filled, which is the claim the page makes.
 */
export function AboutIllustration({ className }: PlateProps) {
  const stops = [40, 120, 200, 280];

  return (
    <Plate className={className}>
      <line x1={40} y1={100} x2={280} y2={100} opacity={0.28} />
      {stops.map((x, index) => {
        const isLast = index === stops.length - 1;
        return (
          <circle
            key={x}
            cx={x}
            cy={100}
            r={isLast ? 16 : 12}
            className={isLast ? "fill-accent stroke-accent" : ""}
            opacity={isLast ? 1 : 0.28}
          />
        );
      })}
    </Plate>
  );
}

export const processIllustrations: Record<
  string,
  ComponentType<PlateProps> | undefined
> = {
  training: TrainingPlate,
  bootcamp: BootcampPlate,
  mentoring: MentoringPlate,
  marketing: MarketingPlate,
};
