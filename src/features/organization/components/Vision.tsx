import { Content } from "@/components/Content";
import { cn } from "@/lib/utils";
import type { VisionProps } from "../types";

const Vision = ({
	title,
	highlightText,
	titleSuffix,
	quote,
	quoteHighlightText,
	quoteSuffix,
	heading,
	description,
	className,
}: VisionProps) => {
	return (
		<div className={cn("bg-gray-900 py-24 sm:py-32", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Content justifyContent="center" className="py-4">
					<Content.Label textAlign="center">{heading}</Content.Label>
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
						textAlign="center"
						className="text-white"
					/>
					<Content.Title
						title={quote}
						highlightText={quoteHighlightText}
						titleSuffix={quoteSuffix}
						textAlign="center"
						className="text-white"
					/>
					<Content.AdaptiveText
						textContent={description}
						textAlign="center"
						className="text-white"
					/>
				</Content>
			</div>
		</div>
	);
};

export default Vision;
