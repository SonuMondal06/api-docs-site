/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Components--------------- */
import { ActionGroup } from "../ActionGroup";
import { Content } from "../Content";
import { CardFooter, CardHeader, CardTitle } from "../ui/card";
import BaseCard from "./BaseCard";

/* -----------------Types--------------- */
import type { ActionButtonProps } from "../ActionButton";
import type { ContentCardProps } from "./types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

const ContentCard = ({
	image,
	title,
	description,
	action,
	className,
	...rest
}: ContentCardProps) => {
	const actions: ActionButtonProps[] = [];

	if (action) {
		const { href, ...actionWithoutHref }: ActionButtonProps = action;
		actions.push(actionWithoutHref);
	}

	return (
		<BaseCard
			className={cn(
				"flex h-full flex-col justify-between overflow-hidden",
				className,
			)}
			action={action}
			{...rest}
		>
			<CardHeader className="relative flex h-64 flex-col gap-y-6 p-0">
				<Image
					src={image.src}
					alt={image.alt}
					width={image.width || 400}
					height={image.height || 300}
					className={"h-64 w-full object-cover"}
				/>
				<CardTitle className="px-6">{title}</CardTitle>
			</CardHeader>

			<Content className="mt-6 p-6">
				<Content.AdaptiveText
					textContent={description}
					className="text-base text-foreground leading-6"
				/>
			</Content>

			<CardFooter className="flex justify-start">
				<ActionGroup actions={actions} justify="start" className="w-full" />
			</CardFooter>
		</BaseCard>
	);
};

export default ContentCard;
