/* -----------------Globals--------------- */
import Image from "next/image";

import CompanyLogo from "@/components/CompanyLogo";
/* -----------------Components--------------- */
import { Content } from "@/components/Content";
import { Badge } from "@/components/ui/badge";
import {
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ActionGroup } from "../ActionGroup";
import BaseCard from "./BaseCard";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Types--------------- */
import type { ActionButtonProps } from "../ActionButton";
import type { ItemCardProps } from "./types";

const ItemCard = ({
	title,
	description,
	logo,
	longDescription,
	otherItemsTitle,
	otherItemsLogos,
	tag,
	action,
	className,
	...rest
}: ItemCardProps) => {
	const actions: ActionButtonProps[] = [];

	if (action) {
		const { href, ...actionWithoutHref }: ActionButtonProps = action;
		actions.push(actionWithoutHref);
	}

	return (
		<BaseCard
			className={cn("flex flex-col justify-between", className)}
			action={action}
			{...rest}
		>
			<CardHeader>
				<CardTitle className="relative min-h-24">
					{title}
					{!!tag && (
						<Badge className="absolute top-0 right-0 flex gap-x-2">{tag}</Badge>
					)}
					<Content.AdaptiveText
						textContent={description}
						className="mt-2 line-clamp-2 font-light text-base leading-6"
					/>
				</CardTitle>

				<Image
					src={logo.src}
					alt={logo.alt}
					width={logo.width || 256}
					height={logo.height || 256}
					className="size-16 self-center"
				/>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col justify-between gap-y-8">
				<Content.AdaptiveText
					textContent={longDescription}
					className="line-clamp-4 text-base leading-6"
				/>

				{otherItemsLogos && (
					<div className="flex flex-col gap-y-4">
						{otherItemsTitle && (
							<Label className="font-semibold">{otherItemsTitle}</Label>
						)}
						<div className="flex gap-x-2">
							{otherItemsLogos.map((logo) => (
								<CompanyLogo
									key={logo.alt}
									logo={logo}
									variant="avatar"
									size={32}
								/>
							))}
						</div>
					</div>
				)}
			</CardContent>

			<CardFooter>
				<ActionGroup actions={actions} justify="start" className="w-full" />
			</CardFooter>
		</BaseCard>
	);
};

export default ItemCard;
