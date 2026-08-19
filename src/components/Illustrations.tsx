import type { ComponentType } from "react";

type PlateProps = { className?: string };

/*
 * Plates.
 *
 * Each process page carries one drawing, and each drawing is a diagram of the
 * thing it sits beside rather than a decorative scene: the shape of a training
 * week, five projects growing into a portfolio, a mentor thread with its
 * check-ins, one profile fanning out to many employers.
 *
 * They are built from the page's own parts — hairlines, squares, a single
 * vermilion mark — so the artwork and the layout are visibly the same system.
 * Everything is drawn with `currentColor` and `text-flame`, which means a
 * plate inherits whatever surface it lands on.
 */
function Plate({
  className,
  children,
  caption,
}: PlateProps & { children: React.ReactNode; caption: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 320 200"
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        aria-hidden="true"
        className="w-full"
      >
        {children}
      </svg>
      <figcaption className="mt-3 font-mono text-meta uppercase opacity-60">
        {caption}
      </figcaption>
    </figure>
  );
}

/** A training week: five columns of days, one hour filled in each. */
function TrainingPlate({ className }: PlateProps) {
  const columns = [0, 1, 2, 3, 4];
  const rows = [0, 1, 2, 3, 4, 5];

  return (
    <Plate className={className} caption="One hour a day, five days a week">
      <rect x={0.5} y={0.5} width={319} height={199} opacity={0.35} />
      {columns.map((column) =>
        rows.map((row) => {
          // The filled cell walks down a row per day: the same hour every day
          // is what the timetable actually looks like from the inside.
          const isSession = row === 2;
          return (
            <rect
              key={`${column}-${row}`}
              x={16 + column * 58}
              y={28 + row * 26}
              width={50}
              height={20}
              className={isSession ? "fill-flame stroke-flame" : ""}
              opacity={isSession ? 1 : 0.35}
            />
          );
        }),
      )}
      <line x1={16} y1={18} x2={304} y2={18} opacity={0.6} />
    </Plate>
  );
}

/** Five projects, each larger than the last, closing into one portfolio. */
function BootcampPlate({ className }: PlateProps) {
  const bars = [64, 108, 152, 196, 250];

  return (
    <Plate className={className} caption="Five projects, one portfolio">
      <rect x={0.5} y={0.5} width={319} height={199} opacity={0.35} />
      {bars.map((width, index) => (
        <g key={width}>
          <rect
            x={16}
            y={26 + index * 30}
            width={width}
            height={18}
            opacity={0.45}
          />
          <rect
            x={16}
            y={26 + index * 30}
            width={12}
            height={18}
            className={index === bars.length - 1 ? "fill-flame stroke-flame" : ""}
            opacity={index === bars.length - 1 ? 1 : 0.45}
          />
        </g>
      ))}
      <line x1={16} y1={182} x2={304} y2={182} opacity={0.6} />
    </Plate>
  );
}

/** One thread, running the length of the programme, with check-ins on it. */
function MentoringPlate({ className }: PlateProps) {
  const checkpoints = [56, 104, 152, 200, 248];

  return (
    <Plate className={className} caption="One mentor, the whole way through">
      <rect x={0.5} y={0.5} width={319} height={199} opacity={0.35} />
      <line x1={16} y1={100} x2={304} y2={100} opacity={0.5} />
      {checkpoints.map((x, index) => (
        <g key={x}>
          <line x1={x} y1={100} x2={x} y2={index % 2 === 0 ? 62 : 138} opacity={0.4} />
          <rect
            x={x - 5}
            y={index % 2 === 0 ? 52 : 132}
            width={10}
            height={10}
            opacity={0.45}
          />
        </g>
      ))}
      <rect x={11} y={95} width={10} height={10} className="fill-flame stroke-flame" />
      <rect x={299} y={95} width={10} height={10} className="fill-flame stroke-flame" />
    </Plate>
  );
}

/** One profile, sent out to many desks. */
function MarketingPlate({ className }: PlateProps) {
  const targets = [30, 62, 94, 126, 158, 190];

  return (
    <Plate className={className} caption="One profile, many employers">
      <rect x={0.5} y={0.5} width={319} height={199} opacity={0.35} />
      <rect
        x={20}
        y={92}
        width={16}
        height={16}
        className="fill-flame stroke-flame"
      />
      {targets.map((y) => (
        <g key={y}>
          <path d={`M36 100 C 140 100, 180 ${y + 6}, 268 ${y + 6}`} opacity={0.4} />
          <rect x={268} y={y} width={12} height={12} opacity={0.5} />
        </g>
      ))}
    </Plate>
  );
}

/**
 * The About plate: the whole programme as one line — teach, build, market,
 * hired — with only the last mark filled, which is the claim the page makes.
 */
export function AboutIllustration({ className }: PlateProps) {
  const stops = [24, 104, 184, 264];

  return (
    <Plate className={className} caption="Teach · build · market · hired">
      <rect x={0.5} y={0.5} width={319} height={199} opacity={0.35} />
      <line x1={24} y1={100} x2={264} y2={100} opacity={0.5} />
      {stops.map((x, index) => {
        const isLast = index === stops.length - 1;
        return (
          <g key={x}>
            <rect
              x={x - 14}
              y={86}
              width={28}
              height={28}
              className={isLast ? "fill-flame stroke-flame" : ""}
              opacity={isLast ? 1 : 0.5}
            />
            <line
              x1={x}
              y1={index % 2 === 0 ? 60 : 140}
              x2={x}
              y2={index % 2 === 0 ? 86 : 114}
              opacity={0.3}
            />
          </g>
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
