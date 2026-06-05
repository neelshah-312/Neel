import { motion } from "framer-motion";
import { projects } from "../content";

type Project = (typeof projects)[number];

const toneStyles = {
  teal: {
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(20,184,166,0.35)]",
    accent: "text-teal-400",
    chip: "border-teal-500/20 bg-teal-500/10 text-teal-300/90",
    bar: "from-teal-500/80 via-teal-500/30 to-transparent",
  },
  rose: {
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(244,63,94,0.3)]",
    accent: "text-rose-400",
    chip: "border-rose-500/20 bg-rose-500/10 text-rose-300/90",
    bar: "from-rose-500/80 via-rose-500/30 to-transparent",
  },
  violet: {
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]",
    accent: "text-violet-400",
    chip: "border-violet-500/20 bg-violet-500/10 text-violet-300/90",
    bar: "from-violet-500/80 via-violet-500/30 to-transparent",
  },
} as const;

function previewImageClass(id: string): string {
  if (id === "threatPulse") {
    return "h-full w-full object-cover object-[50%_18%]";
  }
  if (id === "jobTracker") {
    return "h-full w-full object-cover object-[50%_0%]";
  }
  return "h-full w-full object-cover object-[50%_4%]";
}

function BrowserFrame({ project }: { project: Project }) {
  const src = "phonePreview" in project ? (project.phonePreview as string) : undefined;
  if (!src) return null;

  const host = (() => {
    try {
      return new URL(project.href).hostname.replace("www.", "");
    } catch {
      return "github.com";
    }
  })();

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900/90 shadow-[0_20px_60px_-32px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-zinc-950/80 px-3 py-2.5">
        <div className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/75" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-black/50 px-2.5 py-1 text-center text-[10px] text-zinc-500">
          {host}
        </div>
      </div>
      <div className="aspect-[16/10] overflow-hidden bg-zinc-950">
        <img
          src={src}
          alt=""
          className={previewImageClass(project.id)}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

/** Project showcase — uniform browser frames for all previews. */
export function PhoneStrip() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/[0.05] bg-black py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="font-serif text-4xl font-medium italic text-white sm:text-5xl">Selected work</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            Agentic SOC triage, job-search automation, and graduate capstone travel — three builds I ship and talk about.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-6">
          {projects.map((p, i) => {
            const tone = toneStyles[p.cardTone];

            return (
              <motion.a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 28 } }}
                className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-zinc-950/50 transition-shadow duration-300 ${tone.glow}`}
              >
                <div
                  className={`absolute left-0 top-0 h-px w-full bg-gradient-to-r ${tone.bar}`}
                  aria-hidden
                />

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-5 flex min-h-[220px] items-center justify-center sm:min-h-[240px]">
                    <div className="w-full transition-transform duration-500 group-hover:scale-[1.02]">
                      <BrowserFrame project={p} />
                    </div>
                  </div>

                  <div className="mt-auto border-t border-white/[0.06] pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold tracking-tight text-white">{p.shortTitle}</h3>
                        <p className={`mt-1 text-xs font-medium uppercase tracking-[0.18em] ${tone.accent}`}>
                          {p.subtitle}
                        </p>
                      </div>
                      <span
                        className="mt-0.5 shrink-0 text-zinc-600 transition-colors group-hover:text-zinc-300"
                        aria-hidden
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-zinc-500">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${tone.chip}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
