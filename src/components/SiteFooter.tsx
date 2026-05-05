import { profile } from "../content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-black py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500 sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
