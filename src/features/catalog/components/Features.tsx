/* -----------------Components--------------- */
import Icon, { type IconName } from "@/components/Icon";

import type { SectionHeader } from "@/types";
/* -----------------Types--------------- */

import { type AdaptiveTextContent, Content } from "@/components/Content";
/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

type ItemFeature = {
	name: string;
	description: AdaptiveTextContent;
	icon: IconName;
};

export type FeaturesProps_Catalog = {
	features: ItemFeature[];
	className?: string;
} & SectionHeader;

const Features = ({
	title,
	titleSuffix,
	highlightText,
	heading,
	description,
	features,
	className,
}: FeaturesProps_Catalog) => {
	return (
		<div className={cn("bg-gray-900 py-24 sm:py-32", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Content justifyContent="center" containerClassName="lg:max-w-4xl">
					<Content.Label textAlign="center">{heading}</Content.Label>
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
						textAlign="center"
						className="text-white"
					/>
					<Content.AdaptiveText
						textContent={description}
						textAlign="center"
						className="text-white"
					/>
				</Content>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="font-semibold text-base text-primary leading-7">
									<div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/30">
										<Icon name={feature.icon} aria-hidden="true" />
									</div>
									{feature.name}
								</dt>
								<Content.AdaptiveText
									textContent={feature.description}
									className="mt-0 font-light text-base text-white leading-7"
								/>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};
export default Features;
