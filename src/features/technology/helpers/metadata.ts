import { allPages } from "@/analytics";
import type { AvailablePages } from "@/analytics";
import {
	context,
	ogSiteName,
	ogType,
	twitterCard,
	websiteUrl,
} from "@/constants";
import { getPlainTextFromAdaptiveText } from "@/helpers";
import { getOGImageData } from "@/helpers/cms";
import { getOGImageUrl } from "@/helpers/globals";
import type { SectionWithImage } from "@/types";
import type { Metadata } from "next";
import type { TechFeatureShowcaseProps } from "../components/TechFeatureShowcase";
import type { TechProductsProps } from "../components/TechProducts";
import { fallbackTechnologyDescription } from "../constants/metadata";
import { getTechnologyPageData } from "./cms";

export const generateTechnologyMetadata = async (): Promise<Metadata> => {
	const [{ heroData }, ogData] = await Promise.all([
		getTechnologyPageData(),
		getOGImageData(allPages.technology as AvailablePages),
	]);

	const title = "Technology";

	const description = getPlainTextFromAdaptiveText(
		heroData.description ?? fallbackTechnologyDescription,
	);

	const image = {
		url: getOGImageUrl(ogData),
		alt: heroData.heroImage.alt,
		width: 1200,
		height: 630,
	};

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: ogType,
			siteName: ogSiteName,
			images: [image],
			url: `${websiteUrl}/${allPages.technology}`,
		},
		twitter: {
			title,
			description,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateTechnologyJsonLd = ({
	heroData,
	featuresData,
	technologyData,
}: {
	heroData: SectionWithImage;
	featuresData: TechFeatureShowcaseProps;
	technologyData: TechProductsProps;
}): string => {
	const title = "Technology";

	const description = getPlainTextFromAdaptiveText(
		heroData.description ?? fallbackTechnologyDescription,
	);

	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		title,
		description,
		image: heroData.heroImage,
		platform: featuresData.features.map((feature) => ({
			"@type": "Technology",
			name: feature.name,
			description: getPlainTextFromAdaptiveText(feature.description),
		})),
		principles: technologyData.features.map((feature) => ({
			"@type": "Principle",
			name: feature.name,
			description: getPlainTextFromAdaptiveText(feature.description),
		})),
	});
};
