import { Logo } from "@/components/Logo";
import { organization } from "@/features/organization";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
	nav: {
		title: (
			<Logo.Organization
				logo={organization.logo}
				className="h-10 w-fit min-w-32 max-w-36"
			/>
		),
		url: "https://memorang.com",
	},
	links: [
		{
			text: "Documentation",
			url: "/docs",
			active: "nested-url",
		},
		{
			text: "API Reference",
			url: "/apis",
			active: "nested-url",
		},
	],
	disableThemeSwitch: true,
};
