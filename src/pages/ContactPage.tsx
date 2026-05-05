import { type FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../content";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-white/[0.1] bg-zinc-950/80 px-4 py-3 text-[15px] text-white placeholder:text-zinc-600 outline-none ring-0 transition focus:border-white/25 focus:bg-zinc-950";

function Starfield() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-[length:120px_120px] opacity-90"
        style={{
          backgroundImage: [
            "radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.45), transparent)",
            "radial-gradient(1px 1px at 55% 35%, rgba(255,255,255,0.35), transparent)",
            "radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.4), transparent)",
            "radial-gradient(1px 1px at 30% 75%, rgba(255,255,255,0.3), transparent)",
            "radial-gradient(1px 1px at 65% 88%, rgba(255,255,255,0.38), transparent)",
          ].join(","),
        }}
      />
    </div>
  );
}

function IconEnvelope({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="ml-1 inline h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const subject = encodeURIComponent(`Portfolio note from ${name || "visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Starfield />

      <main className="relative z-10 px-4 pb-20 pt-24 sm:px-6 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl"
        >
          <h1 className="text-center font-serif text-4xl font-medium italic text-white sm:text-5xl">Let&apos;s talk</h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-zinc-400 sm:text-base">
            SOC leads, detection ideas, collabs, or small talk about logs—I&apos;m in.
          </p>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Form */}
            <div className="rounded-[1.25rem] border border-white/[0.08] bg-zinc-900/50 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium text-zinc-300">
                    Full name<span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={profile.name}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium text-zinc-300">
                    Email<span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={profile.email}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium text-zinc-300">
                    Message<span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="What should we dig into first?"
                    className={`${inputClass} min-h-[140px] resize-y`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-zinc-200 py-3.5 text-sm font-semibold text-zinc-900 transition hover:bg-white"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Side cards */}
            <div className="flex flex-col gap-6">
              <div className="rounded-[1.25rem] border border-white/[0.08] bg-zinc-900/50 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                    <IconEnvelope className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] leading-relaxed text-zinc-300">
                      Not a form person? No worries—just drop me an email.
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                    >
                      {profile.email}
                      <IconArrow />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-white/[0.08] bg-zinc-900/50 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg">
                    <IconPhone className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] leading-relaxed text-zinc-300">
                      Want to talk it out? Call is usually faster than endless email threads.
                    </p>
                    <a
                      href="tel:+16692612450"
                      className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
                    >
                      Book a call
                      <IconArrow />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  GitHub
                </a>
                <Link
                  to="/"
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  ← Back to site
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="mx-auto mt-20 max-w-6xl border-t border-white/[0.06] pt-10 text-center text-sm text-zinc-600">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </footer>
      </main>
    </div>
  );
}
