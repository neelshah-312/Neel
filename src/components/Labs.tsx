import { motion } from "framer-motion";
import { labLinks } from "../content";

export function Labs() {
  return (
    <section id="play" className="scroll-mt-24 bg-void py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">Visual playground</p>
          <h2 className="mt-2 font-serif text-3xl font-medium italic text-white sm:text-4xl">
            Extra builds, repos, and experiments
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {labLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 p-6 shadow-card ${
                i === 0
                  ? "bg-gradient-to-br from-amber-500/25 via-orange-600/20 to-zinc-950 md:min-h-[220px]"
                  : i === 1
                    ? "bg-gradient-to-br from-sky-600/25 via-blue-900/30 to-zinc-950 md:min-h-[220px]"
                    : "bg-gradient-to-br from-zinc-700/40 to-zinc-950 md:min-h-[220px]"
              }`}
            >
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="font-sans text-lg font-semibold text-white group-hover:text-amber-100">{link.label}</h3>
                <p className="mt-2 text-sm text-zinc-300">{link.hint}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-white/90">
                  Open <span aria-hidden>↗</span>
                </span>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
