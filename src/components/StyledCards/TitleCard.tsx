import { cn } from "@/lib/utils";
import Image from "next/image";
import { Content } from "../Content";
import { CardHeader, CardTitle } from "../ui/card";
import BaseCard from "./BaseCard";
import type { TitleCardProps } from "./types";

const TitleCard = ({
	title,
	description,
	logo,
	className,
	...rest
}: TitleCardProps) => {
	return (
		<BaseCard className={cn("w-full", className)} {...rest}>
			<CardHeader>
				<div className="flex flex-row items-center gap-x-6">
					<Image
						src={logo.src}
						alt={logo.alt}
						width={logo.width || 256}
						height={logo.height || 256}
						className="h-8 w-8"
					/>
					<CardTitle className="text-lg">{title}</CardTitle>
				</div>
			</CardHeader>

			<Content className="px-6 pb-6" justifyContent="left">
				<Content.AdaptiveText
					textContent={description}
					textAlign="left"
					className="mt-0 line-clamp-2 text-base text-foreground leading-6"
				/>
			</Content>
		</BaseCard>
	);
};

export default TitleCard;
