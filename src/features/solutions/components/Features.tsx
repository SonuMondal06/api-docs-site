/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
import { AppScreenshot } from "@/components/AppScreenshot";
import { type AdaptiveTextContent, Content } from "@/components/Content";

/* -----------------Types--------------- */
import type { SectionWithImage } from "@/types";

type Feature = {
	name: string;
	description: AdaptiveTextContent;
	iconUrl: string;
};

export type FeaturesProps_Solutions = {
	features: Feature[];
	mobileHeroView?: boolean;
} & SectionWithImage;

const Features = ({
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	features,
	heroImage,
	mobileHeroView,
	actions,
}: FeaturesProps_Solutions) => {
	return (
		<div className="overflow-hidden bg-gradient-to-b from-gray-100 to-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl md:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
							<Content>
								<Content.Label>{heading}</Content.Label>
								<Content.Title
									title={title}
									highlightText={highlightText}
									titleSuffix={titleSuffix}
								/>
								<Content.AdaptiveText textContent={description} />
								<ActionGroup actions={actions} className="mt-10" />
							</Content>
							<dl className="mt-10 max-w-xl space-y-6 text-base text-gray-600 leading-7 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-16">
										<dt className="inline font-semibold text-gray-900">
											<Image
												src={feature.iconUrl}
												alt={feature.name}
												className="absolute top-1 left-1 h-10 w-10 text-secondary"
												aria-hidden="true"
												width={128}
												height={128}
											/>
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
					<div className="sm:px-6 lg:px-0">
						{mobileHeroView ? (
							<AppScreenshot
								src={heroImage.src}
								alt={heroImage.alt}
								className="w-[18rem] sm:w-[24rem]"
							/>
						) : (
							<div className="relative isolate max-h-[600px] overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
								<div
									className="-inset-y-px -left-3 -z-10 absolute w-full origin-bottom-left skew-x-[-30deg] bg-white opacity-20 ring-1 ring-white ring-inset"
									aria-hidden="true"
								/>
								<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
									<Image
										src={heroImage.src}
										alt={heroImage.alt}
										width={1200}
										height={1200}
										className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
										loading="eager"
									/>
								</div>
								<div
									className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
									aria-hidden="true"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
