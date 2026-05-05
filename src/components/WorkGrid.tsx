import { motion } from "framer-motion";
import { workExperience } from "../content";

export function WorkGrid() {
  return (
    <section id="work" className="scroll-mt-24 bg-[#0a0a0a] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="font-serif text-4xl font-medium italic text-white sm:text-5xl">Work experience</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Security operations and IAM-focused roles—what shipped on my résumé, in plain language.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 sm:gap-12">
          {workExperience.map((job, i) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-zinc-950/60 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.9)]"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-500/90 via-emerald-500/40 to-transparent" aria-hidden />
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{job.company}</h3>
                    <p className="mt-1 text-[15px] leading-snug text-zinc-200 sm:text-base">{job.title}</p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-teal-400/95">{job.focus}</p>
                  </div>
                  <div className="shrink-0 text-left text-sm text-zinc-500 sm:text-right">
                    <p className="font-medium text-zinc-400">{job.range}</p>
                    <p className="mt-0.5">{job.location}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">{job.summary}</p>

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                  {job.highlights.map((line, j) => (
                    <li key={`${job.id}-${j}`} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500/90" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                  {job.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
