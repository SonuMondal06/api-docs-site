import { ActionGroup } from "@/components/ActionGroup";
import BackgroundSvg from "@/components/BackgroundSvg";
import { Content } from "@/components/Content";
import type { SectionWithImage } from "@/types";
import Image from "next/image";

const HeroSection = ({
	heading,
	title,
	highlightText,
	titleSuffix,
	description,
	heroImage,
	actions,
}: SectionWithImage) => {
	return (
		<div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
			<div className="mx-auto max-w-none items-center lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
				<BackgroundSvg />
				<Content>
					<Content.Label>{heading}</Content.Label>
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
					/>
					<Content.AdaptiveText textContent={description} />
					<ActionGroup actions={actions} className="mt-10" justify="start" />
				</Content>
				<Image
					src={heroImage.src}
					alt={heroImage.alt}
					className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none"
					width={2048}
					height={2048}
				/>
			</div>
		</div>
	);
};

export default HeroSection;
