import { type AvailablePages, allPages } from "@/analytics";
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
import type { Metadata } from "next";
import {
	fallbackChangelogDescription,
	fallbackChangelogTitle,
} from "../constants/metadata";
import { getChangelogHeaderData } from "./cms";

export const generateChangelogMetadata = async (): Promise<Metadata> => {
	const [heroData, ogData] = await Promise.all([
		getChangelogHeaderData(),
		getOGImageData(allPages.changelog as AvailablePages),
	]);

	const title = heroData.heading ?? fallbackChangelogTitle;

	const description = getPlainTextFromAdaptiveText(
		heroData.description ?? fallbackChangelogDescription,
	);

	const image = {
		url: getOGImageUrl(ogData),
		alt: fallbackChangelogTitle,
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
			url: `${websiteUrl}/${allPages.changelog}`,
		},
		twitter: {
			title,
			description,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateChangelogJsonLd = (): string => {
	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		title: fallbackChangelogTitle,
		description: fallbackChangelogDescription,
	});
};
