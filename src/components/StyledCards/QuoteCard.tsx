/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Components--------------- */
import { ActionGroup } from "../ActionGroup";
import { Content } from "../Content";
import { CardFooter, CardHeader } from "../ui/card";
import { Separator } from "../ui/separator";
import BaseCard from "./BaseCard";

/* -----------------Types--------------- */
import type { ActionButtonProps } from "../ActionButton";
import type { QuoteCardProps } from "./types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

const QuoteCard = ({
	quote,
	logo,
	action,
	className,
	...rest
}: QuoteCardProps) => {
	const actions: ActionButtonProps[] = [];

	if (action) {
		const { href, ...actionWithoutHref }: ActionButtonProps = action;
		actions.push(actionWithoutHref);
	}

	return (
		<BaseCard
			className={cn("flex w-full flex-col items-center", className)}
			action={action}
			{...rest}
		>
			<CardHeader className="my-8 flex h-24 items-center justify-center">
				<Image
					src={logo.src}
					alt={logo.alt}
					width={logo?.width || 256}
					height={logo?.height || 256}
					className="h-full object-contain"
				/>
			</CardHeader>

			<Separator className="mx-auto w-5/6" />

			<Content justifyContent="center" className="relative mt-16">
				<Content.AdaptiveText
					textContent={quote}
					textAlign="left"
					className="m-0 px-12 font-bold text-foreground/70 text-xl leading-7"
				/>
			</Content>

			<CardFooter className="mt-16 flex w-full">
				<ActionGroup actions={actions} justify="end" className="w-full" />
			</CardFooter>
		</BaseCard>
	);
};

export default QuoteCard;
