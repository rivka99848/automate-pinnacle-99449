import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brand: {
          dark: "hsl(var(--brand-dark))",
          darker: "hsl(var(--brand-darker))",
          blue: "hsl(var(--brand-blue))",
          green: "hsl(var(--brand-green))",
          "green-light": "hsl(var(--brand-green-light))",
          cyan: "hsl(var(--brand-cyan))",
          coral: "hsl(var(--brand-coral))",
          orange: "hsl(var(--brand-orange))",
          purple: "hsl(var(--brand-purple))",
        },
      },
      fontFamily: {
        reisinger: ['Reisinger', 'Rubik', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        fredoka: ['Fredoka', 'Rubik', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-20px) rotate(3deg)" },
          "50%": { transform: "translateY(-35px) rotate(0deg)" },
          "75%": { transform: "translateY(-20px) rotate(-3deg)" },
        },
        "float-drift": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-8px, -12px) rotate(5deg)" },
          "50%": { transform: "translate(5px, -15px) rotate(0deg)" },
          "75%": { transform: "translate(-5px, -12px) rotate(-5deg)" },
        },
        "float-sway": {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(-10px) rotate(-3deg)" },
        },
        "float-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-15px) scale(1.05)" },
        },
        "float-orbital": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(10px, -8px) rotate(90deg)" },
          "50%": { transform: "translate(0, -15px) rotate(180deg)" },
          "75%": { transform: "translate(-10px, -8px) rotate(270deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "starburst-spin": {
          "0%": { transform: "rotate(0deg) scale(1)", opacity: "0.7" },
          "50%": { transform: "rotate(180deg) scale(1.1)", opacity: "1" },
          "100%": { transform: "rotate(360deg) scale(1)", opacity: "0.7" },
        },
        "marquee-rtl": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-drift": "float-drift 6s ease-in-out infinite",
        "float-sway": "float-sway 4s ease-in-out infinite",
        "float-bounce": "float-bounce 3s ease-in-out infinite",
        "float-orbital": "float-orbital 8s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.6s ease-out forwards",
        "starburst-spin": "starburst-spin 20s linear infinite",
        "marquee-rtl": "marquee-rtl 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
