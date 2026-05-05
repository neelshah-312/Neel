import type { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FloatingPlay } from "./components/FloatingPlay";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="grain min-h-screen bg-black">
      <Navbar />
      {children}
      <FloatingPlay />
    </div>
  );
}

/** Match Vite base (subpath GitHub Pages) — strip trailing slash for React Router */
const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, "") ||
  undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route
          path="/"
          element={
            <Shell>
              <HomePage />
            </Shell>
          }
        />
        <Route
          path="/contact"
          element={
            <Shell>
              <ContactPage />
            </Shell>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
