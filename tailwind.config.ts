
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
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
        // SEO status colors
        'seo-good': '#5D9EF0',     // Blue for passed checks
        'seo-warning': '#f59e0b',  // Amber for warnings
        'seo-bad': '#ef4444',      // Red for failed checks
        'seo-blue': '#3b82f6',     // Blue for info
        // Theme colors
        'navy': '#121a2e',        // Dark navy background
        'navy-light': '#1e2b4a',  // Lighter navy for cards
        'teal': '#5D9EF0',        // Blue accent (renamed from 'teal' but kept the variable name)
        'teal-light': '#7DBEFC',  // Lighter blue for hover states
        'light-bg': '#f8fafc',    // Light background
        'light-card': '#ffffff',  // Light card background
        'light-accent': '#e2e8f0', // Light accent color
        'accent-purple': '#8b5cf6', // Purple accent
        'accent-pink': '#ec4899',   // Pink accent
        'accent-orange': '#f97316', // Orange accent
        'magenta': '#fe00fe',     // Magenta accent (for buttons)
        'text-highlight': '#5D9EF0', // Blue text highlight
        'gradient-text-start': '#ffffff', // Start color for gradient text
        'gradient-text-end': '#5D9EF0',   // End color for gradient text
        // Light theme specific colors
        'light-text': '#121a2e',  // Dark text for light theme
        'light-muted': '#64748b', // Muted text for light theme
        'light-border': '#e2e8f0', // Border color for light theme
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["Poppins", ...fontFamily.sans],
        body: ["Inter", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(93, 158, 240, 0.5)" },
          "50%": { boxShadow: "0 0 25px rgba(93, 158, 240, 0.8)" },
        },
        "fade-in-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blueprint': 'linear-gradient(135deg, #121a2e 0%, #1e2b4a 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(30,43,74,0.7) 0%, rgba(18,26,46,0.8) 100%)',
        'gradient-glass-light': 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config;
