/* -----------------Features--------------- */
import { organization } from "@/features/organization";

/* -----------------Helpers--------------- */
import { getSubnavSolutionsData } from "@/helpers";

/* -----------------Components--------------- */
import { type NavMenuItemProps, Navbar } from "@/layouts";

export default async function SolutionLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { solutions } = await getSubnavSolutionsData();

	return (
		<main>
			<Navbar
				organization={organization}
				navItems={solutions as NavMenuItemProps[]}
				asSubNav
			/>
			{children}
		</main>
	);
}
