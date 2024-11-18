import { cn } from "@/lib/utils";
import Image from "next/image";

export const ComingSoon = ({
	width,
	height,
	className,
}: {
	width?: number;
	height?: number;
	className?: string;
}) => {
	return (
		<Image
			src="/assets/coming-soon.svg"
			alt="Coming Soon"
			width={width || 400}
			height={height || 400}
			loading="eager"
			className={cn("max-h-[600px] max-w-2xl", className)}
		/>
	);
};
