import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Actions sets VITE_BASE from configure-pages (e.g. /repo-name/ or '' for user site). */
function pagesBase(raw: string | undefined): string {
  const v = raw?.trim();
  if (!v || v === "/") return "/";
  const inner = v.replace(/^\/+|\/+$/g, "");
  return inner ? `/${inner}/` : "/";
}

export default defineConfig({
  plugins: [react()],
  base: pagesBase(process.env.VITE_BASE),
});
