import { motion } from "framer-motion";
import { profile } from "../content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] min-h-[100svh] flex-col justify-center overflow-hidden bg-[#0a0a0a] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,255,255,0.04),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[length:28px_28px] opacity-50 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease }}
        className="absolute left-4 top-[18%] z-10 max-w-[9rem] sm:left-8 md:left-12"
      >
        <p className="font-hand text-lg leading-tight text-white/90 sm:text-xl md:text-2xl">I wouldn&apos;t hover!</p>
        <svg viewBox="0 0 100 70" className="mt-1 w-20 text-amber-300/90 sm:w-24" fill="none" aria-hidden>
          <path
            d="M10 12 C 35 4, 50 8, 58 32 S 75 58, 88 48"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M84 44 L90 50 L80 50" fill="currentColor" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease }}
        className="absolute bottom-[16%] right-4 z-10 max-w-[15rem] text-right sm:right-8 md:bottom-[18%] md:right-12"
      >
        <svg
          viewBox="0 0 120 55"
          className="ml-auto mb-1.5 w-24 text-amber-300/80 sm:w-28"
          fill="none"
          aria-hidden
        >
          <path d="M108 10 C 70 6, 40 20, 18 40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <p className="font-hand text-base leading-snug text-[#e8e8e8] sm:text-lg">
          <span className="mr-1 inline-block text-amber-400" aria-hidden>
            ⚡
          </span>
          Splunk & ELK roots — detections built with engineers in mind.
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[min(92vw,52rem)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="group cursor-default"
        >
          <p className="mb-3 font-hand text-[clamp(1.35rem,3.6vw,2.75rem)] font-medium leading-snug tracking-wide text-[#e8e8e8] sm:mb-4">
            I&apos;m {profile.name}
          </p>
          <div
            className="mx-auto mb-4 h-px max-w-[min(14rem,55vw)] bg-gradient-to-r from-transparent via-white/[0.22] to-transparent sm:mb-5"
            aria-hidden
          />
          <h1 className="text-[clamp(1.375rem,4.2vw,3.25rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-white transition duration-500 ease-out group-hover:tracking-[-0.03em]">
            Give me a suspicious log
          </h1>
          <p className="mt-4 font-serif text-[clamp(1.625rem,5.5vw,4.25rem)] font-medium italic leading-[1.06] tracking-[-0.02em] text-white md:mt-5">
            and I&apos;ll tell you a story.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
