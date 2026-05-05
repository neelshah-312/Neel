import { motion } from "framer-motion";
import { useId } from "react";
import { Link } from "react-router-dom";

/** Floating shortcut to home #skills — rotating ring + stack icon */
export function FloatingPlay() {
  const tid = useId().replace(/:/g, "");

  return (
    <Link
      to={{ pathname: "/", hash: "#skills" }}
      className="fixed bottom-6 right-5 z-40 flex h-[5.75rem] w-[5.75rem] items-center justify-center sm:bottom-10 sm:right-10 sm:h-[6.25rem] sm:w-[6.25rem]"
      aria-label="View skills"
    >
      <motion.div
        className="relative flex h-full w-full items-center justify-center"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.45 }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-lg" aria-hidden>
            <defs>
              <path id={`fab-ring-${tid}`} d="M50,50 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" fill="none" />
            </defs>
            <text className="fill-black text-[6.5px] font-semibold uppercase tracking-[0.18em]">
              <textPath href={`#fab-ring-${tid}`} startOffset="2%">
                Skills ★ SIEM & Detection ★ Stack ★ Skills ★ SIEM & Detection ★ Stack ★{" "}
              </textPath>
            </text>
          </svg>
        </motion.div>

        <div className="relative flex h-[3.35rem] w-[3.35rem] items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] sm:h-[3.65rem] sm:w-[3.65rem]">
          <svg
            viewBox="0 0 24 24"
            className="h-[42%] w-[42%] text-black"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 16l8-4-8-4-8 4 8 4zm0 2l-8-4v2l8 4 8-4v-2l-8 4z" />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}
