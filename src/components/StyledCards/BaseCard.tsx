// Base Card Component for consistent card styling and behaviour

/* -----------------Globals--------------- */
import Link from "next/link";

/* -----------------Components--------------- */
import { Card } from "../ui/card";

/* -----------------Types--------------- */
import type { BaseCardProps } from "./types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

const BaseCard = ({
	id,
	action,
	children,
	className,
	containerClassName,
}: BaseCardProps) => {
	return (
		<Link
			passHref
			href={action?.href || `#${id}`}
			target={action?.external ? "_blank" : "_self"}
			rel={action?.external ? "noopener noreferrer" : ""}
			className={containerClassName}
		>
			<Card
				className={cn(
					"group relative",
					{
						"transition-shadow duration-200 ease-in-out hover:shadow-lg":
							!!action?.href,
					},
					className,
				)}
			>
				{children}
			</Card>
		</Link>
	);
};

export default BaseCard;
