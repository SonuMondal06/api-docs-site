/* -----------------Globals--------------- */
import Image from "next/image";

import Icon from "@/components/Icon";
import { ToolTipWrapper } from "@/components/ToolTipWrapper";
/* -----------------Components--------------- */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Types--------------- */
import type { ImageDetails } from "@/types";

type CompanyLogoProps = {
	logo: ImageDetails;
	variant?: "default" | "avatar";
	className?: string;
	size?: number;
};

const CompanyLogo = ({
	logo,
	variant = "default",
	className,
	size = 32,
}: CompanyLogoProps) => {
	if (!logo) {
		return null;
	}

	const imageElement =
		variant === "avatar" ? (
			<Avatar className={cn("size-8", className)}>
				<AvatarImage src={logo.src} alt={logo.alt} />
				<AvatarFallback>
					<Icon name="Link" size={16} />
				</AvatarFallback>
			</Avatar>
		) : (
			<Image
				src={logo.src}
				alt={logo.alt}
				width={size}
				height={size}
				className={cn("w-8", className)}
			/>
		);

	return <ToolTipWrapper trigger={imageElement}>{logo.alt}</ToolTipWrapper>;
};

export default CompanyLogo;
