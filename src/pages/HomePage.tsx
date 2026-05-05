import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { PhoneStrip } from "../components/PhoneStrip";
import { WorkGrid } from "../components/WorkGrid";
import { Marquee } from "../components/Marquee";
import { Labs } from "../components/Labs";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { NamePlate } from "../components/NamePlate";
import { SiteFooter } from "../components/SiteFooter";

export function HomePage() {
  const location = useLocation();

  useLayoutEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const idFrame = requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => cancelAnimationFrame(idFrame);
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <PhoneStrip />
      <WorkGrid />
      <Marquee />
      <Labs />
      <About />
      <Skills />
      <NamePlate />
      <SiteFooter />
    </main>
  );
}
