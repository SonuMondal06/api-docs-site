/* -----------------Globals--------------- */
import type { Metadata } from "next";

/* -----------------Constants--------------- */
import {
	context,
	ogSiteName,
	ogType,
	twitterCard,
	websiteFallbackDescription,
	websiteImage,
	websiteUrl,
} from "@/constants";

/* -----------------Module Constants--------------- */

import { fallbackCustomersDescription } from "../constants/metadata";

import { allPages } from "@/analytics";
import type { AvailablePages } from "@/analytics";
import { getAboutData, getPlainTextFromAdaptiveText } from "@/helpers";
import { getOGImageData } from "@/helpers/cms";
import { getOGImageUrl } from "@/helpers/globals";
import type { ImageDetails } from "@/types";
/* -----------------Types--------------- */
import type { Customer, JobOpening, Person, Post } from "../types";
import {
	getCareerData,
	getCustomerStoryBySlug,
	getCustomersPageData,
} from "./cms";

export const generateAboutMetadata = async (): Promise<Metadata> => {
	const [{ aboutHeroData }, ogData] = await Promise.all([
		getAboutData(),
		getOGImageData(allPages.about as AvailablePages),
	]);

	const title = "About";
	const description = getPlainTextFromAdaptiveText(
		aboutHeroData?.description ?? websiteFallbackDescription,
	);

	const image = {
		url: getOGImageUrl(ogData),
		alt: websiteImage.alt,
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
			url: `${websiteUrl}/${allPages.about}`,
		},
		twitter: {
			title,
			description,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateAboutJsonLd = (): string => {
	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		title: "About",
		description: websiteFallbackDescription,
		images: [websiteImage],
		url: `${websiteUrl}/${allPages.about}`,
	});
};

export const generateCareersMetadata = async (): Promise<Metadata> => {
	const [{ careersHeroData }, ogData] = await Promise.all([
		getCareerData(),
		getOGImageData(allPages.careers as AvailablePages),
	]);

	const title = "Team and Careers";
	const description = getPlainTextFromAdaptiveText(
		careersHeroData?.description ?? websiteFallbackDescription,
	);

	const image = {
		url: getOGImageUrl(ogData),
		alt: careersHeroData?.heroImage.alt,
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
			url: `${websiteUrl}/${allPages.careers}`,
		},
		twitter: {
			title,
			description,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateCareersJsonLd = ({
	title,
	description,
	image,
	team,
	openings,
}: {
	title: string;
	description: string;
	image: ImageDetails;
	team: Person[];
	openings: JobOpening[];
}): string => {
	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		title: title,
		description: description ?? websiteFallbackDescription,
		image,
		team: team.map((person) => ({
			"@type": "Person",
			name: person.name,
			role: person.role,
			funFact: getPlainTextFromAdaptiveText(person.funFact ?? ""),
		})),
		openings: openings.map((opening) => ({
			"@type": "Job Posting",
			name: opening.name,
			url: opening.url,
			department: opening.department.label,
			workLocation: opening.workLocation.label,
		})),
	});
};

export const generateStoryJsonLd = (story: Post): string => {
	return JSON.stringify({
		"@context": context,
		"@type": "Customer Post",
		...story,
		author: {
			"@type": "Customer",
			...story.author,
		},
	});
};

export const generateStoryMetadata = async ({
	params,
}: {
	params: {
		slug: string;
	};
}): Promise<Metadata> => {
	const story = await getCustomerStoryBySlug(params.slug);

	return {
		title: story?.title,
		openGraph: {
			title: story?.title ?? "",
			type: "article",
			siteName: ogSiteName,
			images: [
				{
					url: story?.imageUrl ?? "",
					width: 1200,
					height: 630,
					alt: story?.title ?? "",
				},
			],
		},
		twitter: {
			title: story?.title ?? "",
			card: twitterCard,
			images: [
				{
					url: story?.imageUrl ?? "",
					alt: story?.title ?? "",
					width: 1200,
					height: 630,
				},
			],
		},
	};
};

export const generateAllCustomersMetadata = async (): Promise<Metadata> => {
	const [{ heroData }, ogData] = await Promise.all([
		getCustomersPageData(),
		getOGImageData(allPages.customers as AvailablePages),
	]);

	const title = "Customers";

	const description = getPlainTextFromAdaptiveText(
		heroData.description ?? fallbackCustomersDescription,
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
			url: `${websiteUrl}/${allPages.customers}`,
		},
		twitter: {
			title,
			description,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateAllCustomersJsonLd = (customers: Customer[]): string => {
	return JSON.stringify({
		"@context": context,
		customers: customers?.map((customer) => ({
			"@type": "Customer",
			name: customer.name,
			logo: customer.logo,
			website: customer.website,
			quote: customer.quote,
		})),
	});
};
