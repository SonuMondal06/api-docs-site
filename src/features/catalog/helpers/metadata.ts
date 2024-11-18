/* -----------------Globals--------------- */
import type { Metadata } from "next";

/* -----------------Constants--------------- */
import {
	context,
	ogSiteName,
	ogType,
	twitterCard,
	websiteUrl,
} from "@/constants";

import { allPages } from "@/analytics";
import {
	getPascalCase,
	getPlainTextFromAdaptiveText,
	getPlainTextFromTitle,
} from "@/helpers";
import type {
	FeaturedOGTemplate,
	ImageDetails,
	SectionWithImage,
} from "@/types";

import type { AvailablePages } from "@/analytics";
import { getOGImageData } from "@/helpers/cms";
import { getOGImageUrl } from "@/helpers/globals";
/* -----------------Types--------------- */
import { getCatalogItemWithHref, getServicesPage } from "./cms";

type CatalogItemMetadata = {
	name: string;
	description: string;
	logo: ImageDetails;
	heroImage: ImageDetails;
	comingSoon: boolean;
};

export const generateAllServicesMetadata = async (): Promise<Metadata> => {
	const [{ heroData }, ogData] = await Promise.all([
		getServicesPage(),
		getOGImageData(allPages.services as AvailablePages),
	]);

	const title = heroData.title ?? "Services";
	const description = getPlainTextFromAdaptiveText(heroData.description ?? "");

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
			type: ogType,
			siteName: ogSiteName,
			images: [image],
			url: `${websiteUrl}/${allPages.services}`,
		},
		twitter: {
			title,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateAllServicesJsonLd = async (
	heroData: SectionWithImage,
	services: CatalogItemMetadata[],
): Promise<string> => {
	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		title: heroData.title,
		image: heroData.heroImage,
		services: services.map((service) => ({
			"@type": "Service",
			name: service.name,
			description: service.description,
			logo: service.logo,
			image: service.heroImage,
			comingSoon: service.comingSoon,
		})),
	});
};

export const generateServiceMetadata = async ({
	params,
}: {
	params: {
		name: string;
	};
}): Promise<Metadata> => {
	const href = `/${allPages.services}/${params.name}`;
	const service = await getCatalogItemWithHref(href);

	const { heroData, featuresData, comingSoon } = service;

	if (!service?.heroData) {
		return {};
	}

	const name =
		getPlainTextFromTitle(
			heroData.title,
			heroData.highlightText,
			heroData.titleSuffix,
		) ?? getPascalCase(params.name);

	const title = `${name} | Services`;
	const description = getPlainTextFromAdaptiveText(heroData.description ?? "");

	const tagline = getPlainTextFromTitle(
		featuresData.title,
		featuresData.highlightText,
		featuresData.titleSuffix,
	);

	const frame = comingSoon
		? "default"
		: heroData.mobileHeroView
			? "mobile"
			: "cover";

	const src = getOGImageUrl({
		title: heroData.title,
		tagline,
		image: comingSoon
			? `${websiteUrl}/assets/coming-soon.svg`
			: heroData.heroImage.src,
		templateType: "featured",
		icon: heroData.logo.src,
		size: comingSoon ? "480" : "520",
		frame,
	} as FeaturedOGTemplate);

	const image = {
		url: src,
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

export const generateServiceJsonLd = ({
	service,
}: {
	service: CatalogItemMetadata;
}) => {
	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		service: {
			"@type": "Service",
			name: service.name,
			description: service.description,
			logo: service.logo,
			image: service.heroImage,
			comingSoon: service.comingSoon,
		},
	});
};

export const generateProductMetadata = async ({
	params,
}: {
	params: {
		name: string;
	};
}): Promise<Metadata> => {
	const href = `/${allPages.products}/${params.name}`;

	const product = await getCatalogItemWithHref(href);
	const { heroData, featuresData, comingSoon } = product;

	if (!product?.heroData) {
		return {};
	}

	const name =
		getPlainTextFromTitle(
			heroData.title,
			heroData.highlightText,
			heroData.titleSuffix,
		) ?? getPascalCase(params.name);

	const title = `${name} | Products`;
	const description = getPlainTextFromAdaptiveText(heroData.description ?? "");

	const frame = comingSoon
		? "default"
		: heroData.mobileHeroView
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

	const src = getOGImageUrl({
		title: ogTitle,
		tagline: ogTagline,
		image: comingSoon
			? `${websiteUrl}/assets/coming-soon.svg`
			: heroData.heroImage.src,
		templateType: "featured",
		icon: heroData.logo.src,
		size: comingSoon ? "480" : "520",
		frame,
	} as FeaturedOGTemplate);

	const image = {
		url: src,
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

export const generateProductJsonLd = ({
	product,
}: {
	product: CatalogItemMetadata;
}): string => {
	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		product: {
			"@type": "Product",
			name: product.name,
			description: product.description,
			logo: product.logo,
			image: product.heroImage,
			comingSoon: product.comingSoon,
		},
	});
};
