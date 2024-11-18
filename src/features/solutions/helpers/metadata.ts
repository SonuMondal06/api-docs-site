import { allPages } from "@/analytics";
import {
	context,
	ogSiteName,
	ogType,
	twitterCard,
	websiteUrl,
} from "@/constants";
import {
	getPascalCase,
	getPlainTextFromAdaptiveText,
	getPlainTextFromTitle,
} from "@/helpers";
import { getOGImageUrl } from "@/helpers/globals";
import type { FeaturedOGTemplate } from "@/types";
import type { Metadata } from "next";
import { getSolutionWithHref } from "./cms";

type SolutionItemMetadata = {
	name: string;
	description: string;
	heroImage: {
		src: string;
		alt: string;
	};
	comingSoon: boolean;
};

export const generateSolutionMetadata = async ({
	params,
}: {
	params: {
		name: string;
	};
}): Promise<Metadata> => {
	const href = `/${allPages.solutions}/${params.name}`;

	const solution = await getSolutionWithHref(href);
	const { heroData, featuresData, comingSoon } = solution;

	if (!solution?.heroData) {
		return {};
	}

	const name =
		getPlainTextFromTitle(
			heroData.title,
			heroData.highlightText,
			heroData.titleSuffix,
		) ?? getPascalCase(params.name);

	const title = `${name} | Solutions`;
	const description = getPlainTextFromAdaptiveText(heroData.description ?? "");

	const frame = comingSoon
		? "default"
		: featuresData.mobileHeroView
			? "mobile"
			: "cover";

	const ogTitle = getPlainTextFromTitle(
		heroData.title,
		heroData.highlightText,
		heroData.titleSuffix,
	);
	const ogTagline = getPlainTextFromTitle(
		featuresData.title,
		featuresData.highlightText,
		featuresData.titleSuffix,
	);

	const alt = heroData.heroImage.alt;
	const width = 1200;
	const height = 630;
	const src = getOGImageUrl({
		title: ogTitle,
		tagline: ogTagline,
		image: comingSoon
			? `${websiteUrl}/assets/coming-soon.svg`
			: featuresData.heroImage.src,
		templateType: "featured",
		size: comingSoon ? "480" : "520",
		frame,
	} as FeaturedOGTemplate);

	const image = { url: src, alt, width, height };

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: ogType,
			siteName: ogSiteName,
			images: [image],
			url: `${websiteUrl}${href}`,
		},
		twitter: {
			title,
			description,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateSolutionJsonLd = ({
	solution,
}: {
	solution: SolutionItemMetadata;
}): string => {
	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		solution: {
			"@type": "Service",
			...solution,
			image: solution.heroImage,
		},
	});
};
