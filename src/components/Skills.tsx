import { motion } from "framer-motion";
import { certifications, education, skillGroups } from "../content";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-void py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Skills & creds</p>
          <h2 className="mt-2 font-serif text-3xl font-medium italic text-white sm:text-4xl">
            The toolkit I actually reach for
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {skillGroups.map((g, gi) => (
              <div
                key={g.label}
                className="rounded-3xl border border-white/[0.07] bg-surface/80 p-5 shadow-sm backdrop-blur"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-400">{g.label}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s, si) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.02 + si * 0.015 }}
                    >
                      <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-200">
                        {s}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="space-y-4"
          >
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-blue-950/40 to-surface p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Education</p>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-sans text-lg font-semibold text-white">{education.ms.degree}</p>
                  <p className="text-sm text-zinc-400">
                    {education.ms.school} · {education.ms.location}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                    Graduates {education.ms.end}
                  </p>
                </div>
                <div className="border-t border-white/[0.06] pt-4">
                  <p className="font-sans text-lg font-semibold text-white">{education.bs.degree}</p>
                  <p className="text-sm text-zinc-400">
                    {education.bs.school} · {education.bs.location}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">{education.bs.range}</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/[0.08] bg-surface p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Certifications</p>
              <ul className="mt-3 space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm text-zinc-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-bridge" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
