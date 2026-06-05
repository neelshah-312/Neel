import { motion } from "framer-motion";
import { projects } from "../content";

function PhoneInterior({ id, previewSrc }: { id: string; previewSrc?: string }) {
  if (previewSrc) {
    return (
      <div className="relative h-full w-full bg-black">
        <img
          src={previewSrc}
          alt=""
          className="h-full w-full object-cover object-[50%_2%] sm:object-[50%_0%]"
          loading="lazy"
          decoding="async"
        />
      </div>
    );
  }
  if (id === "jobTracker") {
    return (
      <div className="flex h-full flex-col bg-zinc-900 p-3 text-zinc-100">
        <p className="text-[9px] font-semibold uppercase tracking-wide text-emerald-400">Automation</p>
        <div className="mt-2 space-y-1.5 font-mono text-[8px] leading-relaxed text-emerald-200/90">
          <p>
            <span className="text-zinc-500">$</span> python ingest.py
          </p>
          <p className="text-zinc-400">… 142 findings → SIEM</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {["Regex", "Splunk", "ELK"].map((t) => (
            <span key={t} className="rounded border border-white/10 px-1.5 py-0.5 text-[7px] text-zinc-300">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto rounded-lg bg-bridge py-2 text-center text-[10px] font-semibold text-white">
          Run report
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-violet-950 to-zinc-950 p-3 text-white">
      <p className="text-[9px] font-semibold uppercase tracking-wide text-violet-300">Auth monitor</p>
      <div className="mt-3 space-y-1.5">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5">
            <div className="h-6 w-6 rounded-full bg-violet-500/40" />
            <div className="flex-1 space-y-1">
              <div className="h-1 w-3/4 rounded bg-white/20" />
              <div className="h-1 w-1/2 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-auto text-center text-[8px] text-violet-200/80">MITRE T1078 · coverage</p>
    </div>
  );
}

/** Below-the-fold strip — keeps the hero fold typography-only (reference landing). */
export function PhoneStrip() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/[0.05] bg-black pb-12 pt-10 sm:pb-16 sm:pt-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-600">
          Selected previews
        </p>
        <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-none sm:justify-center sm:gap-6 md:pb-4">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 24 } }}
              className="relative w-[210px] shrink-0 sm:w-[236px]"
            >
              <div className="rounded-[2.25rem] border border-zinc-700/70 bg-zinc-900/80 p-[9px] shadow-phone">
                <div className="overflow-hidden rounded-[1.85rem] bg-black ring-1 ring-black/60">
                  <div className="h-[min(380px,48vh)] w-full sm:h-[392px]">
                    <PhoneInterior
                      id={p.id}
                      previewSrc={"phonePreview" in p ? (p.phonePreview as string) : undefined}
                    />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-medium text-zinc-500">{p.shortTitle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
