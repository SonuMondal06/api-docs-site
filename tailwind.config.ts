import { createPreset } from "fumadocs-ui/tailwind-plugin";
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{ts,tsx,md,mdx}",
		"./node_modules/fumadocs-ui/dist/**/*.js",
		"./node_modules/fumadocs-openapi/dist/**/*.js",
	],
	presets: [createPreset()],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
			},
			colors: {
				fd: {
					background: "hsl(var(--fd-background))",
					foreground: "hsl(var(--fd-foreground))",
					card: "hsl(var(--fd-card))",
					"card-foreground": "hsl(var(--fd-card-foreground))",
					popover: "hsl(var(--fd-popover))",
					"popover-foreground": "hsl(var(--fd-popover-foreground))",
					primary: "hsl(var(--fd-primary))",
					"primary-foreground": "hsl(var(--fd-primary-foreground))",
					secondary: "hsl(var(--fd-secondary))",
					"secondary-foreground": "hsl(var(--fd-secondary-foreground))",
					muted: "hsl(var(--fd-muted))",
					"muted-foreground": "hsl(var(--fd-muted-foreground))",
					accent: "hsl(var(--fd-accent))",
					"accent-foreground": "hsl(var(--fd-accent-foreground))",
					destructive: "hsl(var(--fd-destructive))",
					"destructive-foreground": "hsl(var(--fd-destructive-foreground))",
					border: "hsl(var(--fd-border))",
					input: "hsl(var(--fd-input))",
					ring: "hsl(var(--fd-ring))",
					radius: "hsl(var(--fd-radius))",
				},
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
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
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
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;

export default config;
