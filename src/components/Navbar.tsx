import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { profile } from "../content";

const ease = [0.22, 1, 0.36, 1] as const;
const SCROLL_UP_THRESH = 6;
const SCROLL_DOWN_THRESH = 8;
const TOP_REVEAL = 40;

const linkClass =
  "block whitespace-nowrap rounded-full px-2.5 py-2 text-[12px] font-medium tracking-wide text-zinc-400 transition hover:bg-white/[0.07] hover:text-white sm:px-3.5 sm:text-[13px]";

export function Navbar() {
  const reduceMotion = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const frame = useRef<number>(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        const y = window.scrollY;
        const delta = y - lastY.current;
        lastY.current = y;

        if (y < TOP_REVEAL) {
          setHidden(false);
          return;
        }
        if (delta > SCROLL_DOWN_THRESH) setHidden(true);
        else if (delta < -SCROLL_UP_THRESH) setHidden(false);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? { y: 0, opacity: 1 } : { y: -14, opacity: 0 }}
      animate={
        reduceMotion
          ? { y: 0, opacity: 1 }
          : { y: hidden ? "-130%" : 0, opacity: 1 }
      }
      transition={{
        duration: reduceMotion ? 0 : hidden ? 0.38 : 0.48,
        ease,
      }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 will-change-transform sm:pt-7"
    >
      <nav
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/[0.12] bg-[#1c1c1e]/85 px-2 py-1.5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:gap-2 sm:px-2.5 sm:py-2"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="relative shrink-0 overflow-hidden rounded-full ring-[1.5px] ring-white/95 ring-offset-2 ring-offset-black transition hover:opacity-95"
          aria-label={`${profile.name} — home`}
        >
          <img
            src={profile.avatarImage}
            alt=""
            className="h-8 w-8 object-cover sm:h-9 sm:w-9"
          />
        </Link>

        <span className="hidden h-6 w-px shrink-0 bg-white/15 sm:block" aria-hidden />

        <ul className="flex flex-nowrap items-center">
          <li>
            <Link to={{ pathname: "/", hash: "#projects" }} className={linkClass}>
              Projects
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#work" }} className={linkClass}>
              Work
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#about" }} className={linkClass}>
              About
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/", hash: "#skills" }} className={linkClass}>
              Skills
            </Link>
          </li>
          <li>
            <a
              href={profile.resumeUrl}
              className={linkClass}
              target="_blank"
              rel="noreferrer noopener"
            >
              Resume
            </a>
          </li>
          <li>
            <Link to="/contact" className={linkClass}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
