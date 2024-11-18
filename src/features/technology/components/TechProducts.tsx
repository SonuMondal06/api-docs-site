import { ActionGroup } from "@/components/ActionGroup";
import { Content } from "@/components/Content";
/* -----------------Components--------------- */
import Icon, { type IconName } from "@/components/Icon";
import type { SectionHeader } from "@/types";

export type TechProductsProps = {
	features: {
		name: string;
		description: string;
		icon: IconName;
	}[];
} & SectionHeader;

const TechProducts = ({
	heading,
	title,
	highlightText,
	titleSuffix,
	description,
	features,
	actions,
}: TechProductsProps) => {
	return (
		<div className="bg-gradient-to-b from-gray-100 to-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
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
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="inline font-semibold text-foreground">
									<div className="absolute top-1 left-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm ring-1 ring-primary/30">
										<Icon name={feature.icon} aria-hidden="true" />
									</div>
									{feature.name}
								</dt>
								<Content.AdaptiveText
									textContent={feature.description}
									className="mt-0 text-base text-foreground leading-7"
								/>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default TechProducts;
