/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
import { type AdaptiveTextContent, Content } from "@/components/Content";
import Icon, { type IconName } from "@/components/Icon";

/* -----------------Types--------------- */
import type { SectionWithImage } from "@/types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

type ItemFeature = {
	name: string;
	description: AdaptiveTextContent;
	icon: IconName;
};

export type FeaturesProps_Splash = {
	features: ItemFeature[];
} & SectionWithImage;

const Features = ({
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	heroImage,
	features,
	actions,
	className,
}: FeaturesProps_Splash) => {
	return (
		<div className={cn("relative px-6 lg:px-8", className)}>
			{/* Content */}

			<Content
				justifyContent="center"
				className="py-4"
				containerClassName="lg:max-w-4xl"
			>
				<Content.Label textAlign="center">{heading}</Content.Label>
				<Content.Title
					title={title}
					highlightText={highlightText}
					titleSuffix={titleSuffix}
					textAlign="center"
					className="text-white"
				/>
				<Content.AdaptiveText
					textAlign="center"
					className="text-white"
					textContent={description}
				/>
				<ActionGroup actions={actions} className="mt-10" />
			</Content>

			<div className="relative overflow-hidden pt-16">
				<Image
					src={heroImage.src}
					alt={heroImage.alt}
					className="mx-auto max-h-[500px] rounded-xl object-contain lg:rounded-3xl"
					width={2048}
					height={1600}
					loading="eager"
				/>
			</div>

			<div className="mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-24">
				<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base text-foreground leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
					{features.map((feature) => (
						<div key={feature.name} className="relative pl-16">
							<dt className="inline font-semibold text-primary">
								<div className="absolute top-1 left-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm ring-1 ring-primary/30">
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
	);
};

export default Features;
