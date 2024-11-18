/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
// import Icon, { IconName } from "@/components/Icon"; // TODO: Add icon

/* -----------------Layouts--------------- */
import {
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";
import { customTriggerStyle } from "./helpers";

/* -----------------Globals--------------- */
import Image from "next/image";
import Link from "next/link";

/* -----------------Hooks--------------- */
import { usePathname } from "next/navigation";

import { Content } from "@/components/Content";
/* -----------------Types--------------- */
import type { NavFlyoutProps } from "./types";

export const NavFlyout = ({ item, onOpenChange }: NavFlyoutProps) => {
	const pathname = usePathname();

	return (
		<>
			<NavigationMenuTrigger className={customTriggerStyle()}>
				{item.name}
			</NavigationMenuTrigger>
			<NavigationMenuContent className="flex flex-col p-4 md:w-[400px] lg:w-[500px]">
				{item?.flyoutData?.slice(0, 6).map((listItem, index) => {
					const isActiveListItem = pathname.includes(listItem.href);

					let itemIcon: React.ReactElement | null = null;

					if (listItem.image) {
						itemIcon = listItem.imageAsIconButton ? (
							<div
								className={cn(
									"flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-primary/30",
								)}
							>
								<Image
									src={listItem.image}
									alt={listItem.name}
									width={128}
									height={128}
									className="w-5"
								/>
							</div>
						) : (
							<Image
								src={listItem.image}
								alt={listItem.name}
								width={128}
								height={128}
								className="w-10"
							/>
						);
					}

					return (
						<NavigationMenuItem
							key={listItem.id ?? index}
							asChild
							onClick={() => onOpenChange?.(false)}
						>
							<Link
								className={cn(
									customTriggerStyle(),
									"group flex h-auto w-full items-center justify-start gap-x-4 p-4 hover:bg-accent",
									{
										"bg-accent text-primary": isActiveListItem,
									},
								)}
								href={listItem.href}
							>
								{itemIcon}
								<div className="flex flex-1 flex-col gap-y-1">
									<span>{listItem.name}</span>
									<Content.AdaptiveText
										textContent={listItem.description}
										className="mt-0 text-accent-foreground text-sm hover:text-accent-foreground"
									/>
								</div>
							</Link>
						</NavigationMenuItem>
					);
				})}
				{!!item.flyoutActions && item.flyoutActions.length > 0 && (
					<>
						<Separator />
						<ActionGroup
							actions={item.flyoutActions}
							justify="end"
							className="mt-3"
						/>
					</>
				)}
			</NavigationMenuContent>
		</>
	);
};
