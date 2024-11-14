import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		".src/components/**/*.{ts,tsx}",
		".src/app/**/*.{ts,tsx}",
		".src/content/**/*.{md,mdx}",
		".src/mdx-components.{ts,tsx}",
		"./node_modules/fumadocs-ui/dist/**/*.js",
		"./node_modules/fumadocs-openapi/dist/**/*.js",
	],
	presets: [createPreset()],
};
