import { ActionGroup } from "@/components/ActionGroup";
import { Content } from "@/components/Content";
import { cn } from "@/lib/utils";
import type { SectionWithImage } from "@/types";
import Image from "next/image";

interface Feature {
	name: string;
	description: string;
	iconUrl?: string;
}

export type TechFeatureShowcaseProps = {
	features: Feature[];
} & SectionWithImage;

const TechFeatureShowcase = ({
	heading,
	title,
	highlightText,
	titleSuffix,
	description,
	features,
	heroImage,
	actions,
}: TechFeatureShowcaseProps) => {
	return (
		<div className="overflow-hidden bg-gradient-to-b from-gray-100 to-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:ml-auto lg:pt-4 lg:pl-4">
						<div className="lg:max-w-lg">
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
							<dl className="mt-2 max-w-xl space-y-6 text-base text-foreground leading-7 lg:max-w-none">
								{features.map((feature) => (
									<div
										key={feature.name}
										className={cn("relative pl-16", {
											"pl-0": !feature.iconUrl,
										})}
									>
										{feature.iconUrl && (
											<div className="absolute top-1 left-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg text-primary shadow-sm ring-1 ring-gray-900/10">
												<Image
													src={feature.iconUrl}
													alt={feature.name}
													aria-hidden="true"
													width={128}
													height={128}
													className="h-10 w-10"
												/>
											</div>
										)}
										<dt className="inline font-semibold text-gray-900">
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
					<div className="order-first flex items-center justify-center overflow-hidden rounded-2xl">
						<Image
							src={heroImage.src}
							alt={heroImage.alt}
							className="h-full object-contain"
							width={2048}
							height={2048}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TechFeatureShowcase;
