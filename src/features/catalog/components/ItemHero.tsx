/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
import { AppScreenshot } from "@/components/AppScreenshot";
import BackgroundSvg from "@/components/BackgroundSvg";
import { ComingSoon } from "@/components/ComingSoon";
import CompanyLogo from "@/components/CompanyLogo";
import { Content } from "@/components/Content";
import { Label } from "@/components/ui/label";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Types--------------- */
import type { ImageDetails, SectionWithImage } from "@/types";

export type ItemHeroProps = {
	logo: ImageDetails;
	otherItemsTitle?: string;
	otherItemsLogos?: ImageDetails[];
	mobileHeroView?: boolean;
	comingSoon?: boolean;
} & SectionWithImage;

const CatalogItemHero = ({
	heading,
	title,
	highlightText,
	titleSuffix,
	description,
	logo,
	heroImage,
	actions,
	otherItemsTitle = "Replaces",
	otherItemsLogos,
	mobileHeroView = false,
	comingSoon = false,
	className,
}: ItemHeroProps) => {
	let heroContent = (
		<ComingSoon className="mx-auto w-[300px] sm:w-[480px] md:w-[600px]" />
	);

	if (!comingSoon) {
		heroContent = mobileHeroView ? (
			<div className="mt-10 flex flex-1 sm:mt-16 xl:mt-0">
				<AppScreenshot
					src={heroImage.src}
					alt={heroImage.alt}
					className="h-[480px] w-[18rem] sm:h-[560px] sm:w-[24rem] xl:h-[600px]"
					fade
				/>
			</div>
		) : (
			<div className="relative isolate mt-10 max-h-[600px] overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:mt-16 sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 xl:mt-0">
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
		);
	}

	return (
		<div className={cn("relative isolate overflow-hidden bg-white", className)}>
			<BackgroundSvg />

			<div className="mx-auto flex max-w-7xl flex-col pt-10 pb-24 sm:pt-32 sm:pb-32 xl:flex-row xl:py-24">
				<div className="mx-auto max-w-2xl px-6 xl:mx-0 xl:max-w-xl xl:px-8">
					{logo.src && (
						<Image
							src={logo.src}
							alt={logo.alt}
							width={512}
							height={512}
							className="w-16 object-cover"
						/>
					)}
					<Content>
						<Content.Label>{heading}</Content.Label>
						<Content.Title
							title={title}
							highlightText={highlightText}
							titleSuffix={titleSuffix}
							className="mt-10 text-4xl xl:text-6xl"
						/>
						<Content.AdaptiveText textContent={description} />
					</Content>

					{otherItemsLogos && (
						<div className="mt-10">
							{otherItemsTitle && (
								<Label className="font-semibold">{otherItemsTitle}</Label>
							)}
							<div className="mt-2 flex items-center justify-start gap-x-4">
								{otherItemsLogos.map((logo) => (
									<CompanyLogo
										key={logo.alt}
										logo={logo}
										size={32}
										className="w-8"
									/>
								))}
							</div>
						</div>
					)}

					<ActionGroup actions={actions} justify="start" className="mt-10" />
				</div>

				{heroContent}
			</div>
		</div>
	);
};

export default CatalogItemHero;
