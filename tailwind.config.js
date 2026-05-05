/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        hand: ["Caveat", "cursive"],
      },
      colors: {
        void: "#0a0a0a",
        void2: "#0f0f0f",
        surface: "#141414",
        line: "rgba(255,255,255,0.06)",
        chatQ: "#262626",
        chatA: "#2563eb",
        marquee: "#1d4ed8",
        bridge: {
          DEFAULT: "#C73E1D",
          dim: "#9E3015",
          glow: "#FF6B4A",
        },
      },
      backgroundImage: {
        "grid-dark":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "28px 28px",
      },
      boxShadow: {
        phone: "0 24px 80px -20px rgba(0,0,0,0.65)",
        card: "0 32px 100px -32px rgba(0,0,0,0.55)",
        glow: "0 0 60px -12px rgba(199, 62, 29, 0.35)",
      },
    },
  },
  plugins: [],
};
