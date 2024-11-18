import { ActionGroup } from "@/components/ActionGroup";
/* -----------------Components--------------- */
import { type AdaptiveTextContent, Content } from "@/components/Content";
import { ContentCard } from "@/components/StyledCards";

/* -----------------Types--------------- */
import type { ImageDetails, SectionHeader } from "@/types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

type Solution = {
	name: string;
	description: AdaptiveTextContent;
	href?: string;
	image: ImageDetails;
	className?: string;
};

export type SolutionsProps = {
	solutions: Solution[];
	className?: string;
} & SectionHeader;

const Solutions = ({
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	solutions,
	actions,
	className,
}: SolutionsProps) => {
	return (
		<div className={cn("flex flex-col py-16 sm:py-20", className)}>
			<Content justifyContent="center" containerClassName="lg:max-w-4xl">
				<Content.Label textAlign="center">{heading}</Content.Label>
				<Content.Title
					title={title}
					highlightText={highlightText}
					titleSuffix={titleSuffix}
					textAlign="center"
				/>
				<Content.AdaptiveText textAlign="center" textContent={description} />
				<ActionGroup actions={actions} className="mt-10" />
			</Content>

			<div className="mt-16 flex flex-col items-center justify-center">
				<div className="grid grid-cols-1 gap-x-4 gap-y-16 sm:grid-cols-2 xl:grid-cols-3">
					{solutions.map((solution) => (
						<ContentCard
							id={solution.name}
							key={solution.name}
							title={solution.name}
							action={{
								name: "Learn More",
								buttonVariant: "link",
								href: solution.href,
								icon: "ArrowRight",
							}}
							{...solution}
							className="max-w-sm"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Solutions;
