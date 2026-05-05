import { profile } from "../content";

/** 2×3 Memoji sticker sheet — cells left-to-right, top then bottom (matches iOS sticker export grid). */
const CELL_POS = [
  "0% 0%",
  "50% 0%",
  "100% 0%",
  "0% 100%",
  "50% 100%",
  "100% 100%",
] as const;

type Props = {
  /** 0 = top-left (thumbs up), … 5 = bottom-right */
  cell?: number;
  className?: string;
};

export function MemojiSheetCell({ cell = 0, className = "" }: Props) {
  const pos = CELL_POS[Math.min(Math.max(cell, 0), 5)];

  return (
    <div
      role="img"
      aria-hidden
      className={`bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${profile.memojiSheet})`,
        backgroundSize: "300% 200%",
        backgroundPosition: pos,
      }}
    />
  );
}
