import { RootProvider } from "fumadocs-ui/provider";
import { Footer, type FooterNavigationItem } from "@/layouts";
import {
	getFooterData,
	getFooterLinks,
	type Organization,
} from "@/features/organization";
import { Separator } from "@/components/ui/separator";

export default async function DocsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [footerData, footerNavigationItemsData] = await Promise.all([
		getFooterData(),
		getFooterLinks(),
	]);
	const organizationFooter: Organization =
		footerData as unknown as Organization;
	const footerNavigationItems: FooterNavigationItem[] =
		footerNavigationItemsData as FooterNavigationItem[];

	return (
		<main className="flex min-h-screen flex-col">
			<RootProvider theme={{ enabled: false }}>{children}</RootProvider>
			<Separator />
			<Footer
				organization={organizationFooter}
				navItems={footerNavigationItems}
			/>
		</main>
	);
}
