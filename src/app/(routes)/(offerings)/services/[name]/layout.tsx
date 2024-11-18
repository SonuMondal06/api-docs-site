/* -----------------Features--------------- */
import { organization } from "@/features/organization";
import { getSubnavCatalogItemsData } from "@/helpers";

/* -----------------Components--------------- */
import { type NavMenuItemProps, Navbar } from "@/layouts";

export default async function ServiceLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { catalogItems } = await getSubnavCatalogItemsData();

	return (
		<>
			<Navbar
				organization={organization}
				navItems={catalogItems as NavMenuItemProps[]}
				asSubNav
			/>
			{children}
		</>
	);
}
