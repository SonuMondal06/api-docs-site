"use  client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { customTriggerStyle, getIconItem } from "./helpers";
import type { NavLinkProps } from "./types";

const NavLink = ({ item }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname.includes(item.href);

	const itemIcon = getIconItem(item);

	return (
		<NavigationMenuLink asChild>
			<Link
				className={cn(customTriggerStyle(), "group flex items-center gap-x-2", {
					"text-primary": isActive,
				})}
				href={item.href}
			>
				{itemIcon && <span className="hidden xl:inline">{itemIcon}</span>}
				<span>{item.name}</span>
			</Link>
		</NavigationMenuLink>
	);
};

export default NavLink;
