/** @type {import('tailwindcss').Config} */
//
// PixelMatch palette — matches the live SaaS landing (pixelmatch.art):
//   • Deep midnight-navy hero
//   • Clean white content surfaces
//   • Violet primary for CTA + accents (the brand purple)
//   • Plenty of whitespace, Inter typeface
//
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Page surfaces — the blog body is light, hero blocks are dark.
        ink: {
          DEFAULT: "#0f1430",   // hero navy (matches SaaS hero left half)
          deep:    "#0a0e22",   // even darker for foots / accents
          soft:    "#1a2148",   // raised on dark
        },
        // Brand violet — same family as the "Get Started" CTA on the SaaS.
        primary: {
          50:  "#f3f1ff",
          100: "#e7e3ff",
          200: "#cec7ff",
          300: "#b2a8ff",
          400: "#9587ff",
          500: "#7c6cf5",       // primary brand
          600: "#6852de",
          700: "#5340b5",
          800: "#3f3187",
          900: "#2c2362",
        },
        // Neutral content text on white. Slightly warm.
        body: {
          DEFAULT: "#1a1f37",
          muted:   "#5b647e",
          faint:   "#8a93ab",
          line:    "#e7e9ef",
        },
        // Platform pills (4 channels)
        platform: {
          amazon:  "#ff9900",
          shopify: "#7ab55c",
          etsy:    "#f56400",
          tiktok:  "#ff0050",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont",
          '"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial", "sans-serif",
        ],
        display: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Hero (dark navy with a soft violet glow up-left — same vibe as SaaS hero).
        "hero-gradient":
          "radial-gradient(ellipse at 20% 0%, rgba(124,108,245,0.30), transparent 55%), linear-gradient(180deg, #0f1430 0%, #0a0e22 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(124,108,245,0.07), rgba(255,255,255,0.6))",
      },
      boxShadow: {
        "glow-primary": "0 0 32px rgba(124,108,245,0.35)",
        "card":         "0 1px 2px rgba(15,20,48,0.06), 0 8px 24px -8px rgba(15,20,48,0.10)",
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};
