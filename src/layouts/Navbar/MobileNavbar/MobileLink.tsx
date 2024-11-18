"use client";

/* -----------------Globals--------------- */
import Link from "next/link";

/* -----------------Types--------------- */
import type { NavLinkProps } from "../types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Hooks--------------- */
import { usePathname } from "next/navigation";
import { getIconItem } from "../helpers";

export const MobileLink = ({ item, onOpenChange, className }: NavLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname.includes(item.href);

	const itemIcon = getIconItem(item);

	return (
		<Link
			href={item.href}
			onClick={() => {
				onOpenChange?.(false);
			}}
			className={cn(
				"group flex items-center justify-start gap-x-4 font-medium text-sm leading-6",
				{
					"text-primary": isActive,
				},
				className,
			)}
		>
			{itemIcon}
			{item.name}
		</Link>
	);
};
