/* -----------------Constants--------------- */
import {
	type Organization,
	getFooterData,
	getFooterLinks,
	organization,
} from "@/features/organization";
import { getNavbarData, isDevEnvironment } from "@/helpers";

/* -----------------Layouts--------------- */
import { Footer, type FooterNavigationItem, Header, Navbar } from "@/layouts";

/* -----------------Globals--------------- */
import { VercelToolbar } from "@vercel/toolbar/next";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Link from "next/link";

const shouldInjectToolbar = isDevEnvironment();

export default async function BusinessLayerLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [
		{ navItems, navActions, mobileNavActions },
		footerData,
		footerNavigationItemsData,
	] = await Promise.all([getNavbarData(), getFooterData(), getFooterLinks()]);
	const organizationFooter: Organization =
		footerData as unknown as Organization;
	const footerNavigationItems: FooterNavigationItem[] =
		footerNavigationItemsData as FooterNavigationItem[];

	return (
		<>
			{draftMode().isEnabled && (
				<div>
					<Link href="/api/disable-draft" className="block bg-blue-300 p-4">
						Disable preview mode
					</Link>
				</div>
			)}
			<Header>
				<Navbar
					organization={organization}
					navItems={navItems}
					navActions={navActions}
					mobileNavActions={mobileNavActions}
					showOrganizationName
				/>
			</Header>

			<div className="pt-16">{children}</div>
			<Footer
				organization={organizationFooter}
				navItems={footerNavigationItems}
			/>
			{shouldInjectToolbar && <VercelToolbar />}
			{draftMode().isEnabled && <VisualEditing />}
		</>
	);
}
