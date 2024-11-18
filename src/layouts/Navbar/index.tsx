"use client";

/* -----------------Globals--------------- */
import Link from "next/link";

import { ActionGroup } from "@/components/ActionGroup";
/* -----------------Components--------------- */
import { Logo } from "@/components/Logo";
import { Separator } from "@/components/ui/separator";

/* -----------------UI--------------- */
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

/* -----------------Layouts--------------- */
import { MobileNavbar } from "./MobileNavbar";
import { NavFlyout } from "./NavFlyout";

/* -----------------Types--------------- */
import type { NavbarProps } from "./types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

import { useCallback, useState } from "react";
/* -----------------Hooks--------------- */
import NavLink from "./NavLink";

const Navbar = ({
	navItems,
	organization,
	showOrganizationName = false,
	navActions,
	mobileNavActions,
	asSubNav = false,
	className,
}: NavbarProps) => {
	const [value, setValue] = useState("");

	const handleFlyoutClose = useCallback(() => {
		setValue("");
	}, []);

	return (
		<>
			{asSubNav && <Separator className="hidden w-full lg:flex" />}
			<nav
				className={cn(
					"relative mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8",
					{
						"p-2": asSubNav,
					},
					className,
				)}
				aria-label="Global"
			>
				{!asSubNav && (
					<Link href={organization.website} className="-m-1.5 p-1.5">
						{showOrganizationName ? (
							<Logo.Organization
								logo={organization.logo}
								className="h-10 w-fit min-w-32 max-w-36"
								width={2048}
								height={2048}
								loading="eager"
							/>
						) : (
							<Logo logo={organization.logo} className="h-10 w-fit" />
						)}
					</Link>
				)}
				{!asSubNav && (
					<MobileNavbar
						navItems={navItems}
						organization={organization}
						navActions={mobileNavActions}
					/>
				)}
				<NavigationMenu
					value={value}
					onValueChange={setValue}
					className="hidden flex-1 lg:flex"
				>
					<NavigationMenuList className="flex items-center">
						{navItems.map((item) => {
							return (
								<NavigationMenuItem key={item.name}>
									{item.flyoutData && item.flyoutData.length > 0 ? (
										<NavFlyout item={item} onOpenChange={handleFlyoutClose} />
									) : (
										<NavLink item={item} />
									)}
								</NavigationMenuItem>
							);
						})}
					</NavigationMenuList>
				</NavigationMenu>
				<ActionGroup actions={navActions} className="hidden lg:flex" />
			</nav>
			{asSubNav && <Separator className="hidden w-full lg:flex" />}
		</>
	);
};

export default Navbar;
