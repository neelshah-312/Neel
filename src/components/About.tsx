import { motion, useReducedMotion, type Variants } from "framer-motion";
import { aboutChat } from "../content";

const easeOut = [0.22, 1, 0.36, 1] as const;

const bubbleMax = "max-w-[min(92%,26rem)]";

function BubbleIn({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative w-fit ${bubbleMax} self-start`}>
      <div className="relative z-10 w-fit max-w-full break-words rounded-[1.25rem] bg-[#3a3a3c] px-[0.9rem] py-2.5 text-left text-[15px] leading-[1.45] text-white shadow-sm sm:px-4 sm:py-3">
        {children}
      </div>
      <div className="absolute bottom-1.5 left-[-5px] z-0 h-[18px] w-[18px] rotate-45 rounded-[2px] bg-[#3a3a3c]" aria-hidden />
    </div>
  );
}

function BubbleOut({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative w-fit ${bubbleMax} self-end`}>
      <div className="relative z-10 w-fit max-w-full break-words rounded-[1.25rem] bg-[#007AFF] px-[0.9rem] py-2.5 text-left text-[15px] leading-[1.45] text-white shadow-sm sm:px-4 sm:py-3">
        {children}
      </div>
      <div className="absolute bottom-1.5 right-[-5px] z-0 h-[18px] w-[18px] rotate-45 rounded-[2px] bg-[#007AFF]" aria-hidden />
    </div>
  );
}

export function About() {
  const reduceMotion = useReducedMotion();

  const rowVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.22,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  const bubbleVariants: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.15 : 0.72,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="about" className="scroll-mt-20 bg-black">
      <div className="flex flex-col items-center justify-center px-5 pb-10 pt-20 text-center sm:px-8 sm:pb-14 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-white">
            Who&apos;s{" "}
            <span className="font-serif font-medium italic text-white">this guy?</span>
          </h2>
          <p className="mt-5 text-[15px] font-normal text-[#8e8e93] sm:text-base">Let&apos;s figure it out real quick.</p>
        </motion.div>
      </div>

      <div className="mx-auto max-w-xl px-4 pb-24 pt-2 sm:px-6">
        <div className="flex flex-col gap-6 sm:gap-7">
          {aboutChat.map((row) => (
            <motion.div
              key={row.q}
              className="flex w-full flex-col gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
                amount: 0.28,
                margin: "0px 0px -12% 0px",
              }}
              variants={rowVariants}
            >
              <motion.div
                variants={bubbleVariants}
                className="w-fit max-w-[min(92%,26rem)] self-start will-change-transform"
              >
                <BubbleIn>{row.q}</BubbleIn>
              </motion.div>
              <motion.div
                variants={bubbleVariants}
                className="w-fit max-w-[min(92%,26rem)] self-end will-change-transform"
              >
                <BubbleOut>{row.a}</BubbleOut>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
