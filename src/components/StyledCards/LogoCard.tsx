/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Components--------------- */
import { CardHeader } from "../ui/card";
import BaseCard from "./BaseCard";

/* -----------------Types--------------- */
import type { LogoCardProps } from "./types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";
import Icon from "../Icon";

const LogoCard = ({ logo, className, ...rest }: LogoCardProps) => {
	return (
		<BaseCard
			className={cn("flex h-48 w-full items-center justify-center", className)}
			{...rest}
		>
			<CardHeader className="flex h-24 items-center justify-center">
				<Image
					src={logo.src}
					alt={logo.alt}
					width={logo?.width || 256}
					height={logo?.height || 256}
					className="h-full object-contain"
				/>
			</CardHeader>
			<Icon
				name="ExternalLink"
				className="absolute top-2 right-2 hidden text-primary group-hover:flex"
				size={16}
			/>
		</BaseCard>
	);
};

export default LogoCard;
