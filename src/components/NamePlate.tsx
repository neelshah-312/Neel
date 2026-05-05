import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../content";

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconResume({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

const iconBtn =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)] focus-visible:outline focus-visible:ring-2 focus-visible:ring-neutral-900/20 sm:h-12 sm:w-12";

const iconSz = "h-[22px] w-[22px] sm:h-6 sm:w-6";

export function NamePlate() {
  const [first, last] = profile.name.split(" ");

  const watermarkClass =
    "select-none whitespace-nowrap text-center font-sans text-[min(14vw,7.25rem)] font-bold leading-[0.92] tracking-[-0.04em] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-500 sm:text-[min(11vw,8rem)]";

  return (
    <section className="relative min-h-[78vh] overflow-x-hidden bg-white py-20 sm:min-h-[85vh] sm:py-28">
      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mt-2 flex min-h-[min(24rem,58vw)] w-full flex-col items-center justify-center sm:min-h-[28rem]"
        >
          <div className="group relative isolate inline-flex shrink-0 items-center justify-center">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[50%] z-0 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center opacity-100"
            >
              <p className={watermarkClass}>{first}</p>
              <p className={watermarkClass}>{last}</p>
            </div>

            <img
              src={profile.heroImage}
              alt={profile.name}
              className="relative z-10 w-[min(17rem,72vw)] rounded-2xl object-cover object-center shadow-[0_24px_80px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.06] transition duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_28px_90px_-18px_rgba(0,0,0,0.4)] sm:w-72"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06, duration: 0.4 }}
          className="relative z-10 mt-6 max-w-xs text-center text-[13px] leading-snug text-neutral-500 sm:mt-7 sm:text-sm"
        >
          {profile.location}
        </motion.p>

        <motion.nav
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.45 }}
          aria-label="Social and contact links"
          className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-5 sm:mt-11 sm:gap-6"
        >
          <a
            href={profile.linkedin}
            className={iconBtn}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
          >
            <IconLinkedIn className={iconSz} />
          </a>
          <a
            href={profile.github}
            className={iconBtn}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
          >
            <IconGitHub className={iconSz} />
          </a>
          <a href={profile.resumeUrl} className={iconBtn} target="_blank" rel="noreferrer noopener" aria-label="Open résumé PDF">
            <IconResume className={iconSz} />
          </a>
          <Link className={iconBtn} to="/contact" aria-label="Contact page">
            <IconMail className={iconSz} />
          </Link>
        </motion.nav>
      </div>
    </section>
  );
}
