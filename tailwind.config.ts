import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0A1628",
          soft: "#0E1E36",
          card: "#16294A",
        },
        cloud: {
          DEFAULT: "#E8EEFA",
          dim: "#9DB0CE",
        },
        sun: {
          DEFAULT: "#FF7A18",
          deep: "#FF5A00",
        },
        coral: "#FF4D6D",
        gold: "#FFC531",
        water: {
          DEFAULT: "#06B6D4",
          sky: "#0EA5E9",
          deep: "#0369A1",
        },
        sand: {
          DEFAULT: "#FFF5E6",
          warm: "#FDE9C8",
          dark: "#F3D9A8",
        },
        ink: "#0B2545",
      },
      fontFamily: {
        display: ["var(--font-unbounded)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "sunset": "linear-gradient(135deg, #FFC531 0%, #FF7A18 45%, #FF4D6D 100%)",
        "water": "linear-gradient(180deg, #0EA5E9 0%, #06B6D4 60%, #0369A1 100%)",
        "sand-fade": "linear-gradient(180deg, #FFF5E6 0%, #FDE9C8 100%)",
      },
      boxShadow: {
        glow: "0 20px 60px -15px rgba(255,122,24,0.55)",
        "glow-coral": "0 24px 70px -12px rgba(255,77,109,0.6)",
        "glow-water": "0 24px 70px -12px rgba(6,182,212,0.55)",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
        "heat-haze": {
          "0%, 100%": { transform: "translateY(0) skewX(0deg)" },
          "50%": { transform: "translateY(-2px) skewX(0.4deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { transform: "scale(1.25)", opacity: "0" },
        },
        jerk: {
          "0%": { transform: "translateX(0) rotate(0deg)" },
          "15%": { transform: "translateX(-4px) rotate(-3.5deg) scale(1.04)" },
          "35%": { transform: "translateX(3px) rotate(2.5deg) scale(1.02)" },
          "55%": { transform: "translateX(-2px) rotate(-1.5deg)" },
          "75%": { transform: "translateX(1px) rotate(0.8deg)" },
          "100%": { transform: "translateX(0) rotate(0deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        "heat-haze": "heat-haze 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        jerk: "jerk 0.55s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
