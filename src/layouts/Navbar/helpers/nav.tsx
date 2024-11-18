import Image from "next/image";
import type { NavItem } from "../types";

export const customTriggerStyle = () =>
	"group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary data-[state=open]:bg-accent data-[state=open]:text-foreground";

export const getIconItem = (item: NavItem) => {
	let itemIcon: React.ReactElement | null = null;

	if (item.image) {
		itemIcon = item.imageAsIconButton ? (
			<Image
				src={item.image}
				alt={item.name}
				width={128}
				height={128}
				className="w-3"
			/>
		) : (
			<Image
				src={item.image}
				alt={item.name}
				width={128}
				height={128}
				className="w-6"
			/>
		);
	}

	return itemIcon;
};
