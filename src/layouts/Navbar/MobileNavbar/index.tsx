"use client";

/* -----------------Globals--------------- */
import { useEffect, useState } from "react";

import Icon from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
/* -----------------Components--------------- */
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

/* -----------------Types--------------- */
import type { MobileNavbarProps } from "../types";

import { ActionGroup } from "@/components/ActionGroup";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { MobileLink } from "./MobileLink";
/* -----------------Hooks--------------- */
import { NavSection } from "./NavSection";

export const MobileNavbar = ({
	navItems,
	organization,
	navActions,
}: MobileNavbarProps) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button
					size="icon"
					className="bg-transparent text-foreground shadow-none outline-none ring-none hover:bg-transparent lg:hidden"
					onClick={() => setOpen(true)}
				>
					<Icon name="Menu" className="size-6" aria-hidden="true" />
				</Button>
			</SheetTrigger>

			<SheetContent
				side="right"
				className="z-[9999] flex flex-col gap-y-4 px-0"
			>
				<div className="px-6">
					<Link
						href="/"
						className="flex items-center gap-x-2"
						onClick={() => setOpen(false)}
					>
						<Logo.Organization
							logo={organization.logo}
							className="h-10 w-fit"
						/>
					</Link>
				</div>

				<ScrollArea className="flex flex-1 flex-col bg-gray-50 p-6">
					{navItems.map((item) => {
						return (
							<div key={item.href} className="w-full py-2">
								{item.flyoutData && item.flyoutData.length > 0 ? (
									<NavSection item={item} onOpenChange={setOpen} />
								) : (
									<>
										<Separator className="mb-2" />
										<MobileLink
											item={item}
											onOpenChange={setOpen}
											className="pl-2"
										/>
									</>
								)}
							</div>
						);
					})}
				</ScrollArea>

				<div className="px-6">
					<ActionGroup
						actions={navActions}
						className="flex-wrap justify-start gap-2"
					/>
				</div>
			</SheetContent>
		</Sheet>
	);
};
