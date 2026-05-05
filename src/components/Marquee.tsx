import { marqueeItems } from "../content";

export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-marquee py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-marquee to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-marquee to-transparent" />
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap px-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/95"
          >
            {item}
            <span className="mx-2 text-white/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
