import { allPages } from "@/analytics";
import type { AvailablePages } from "@/analytics";
import type { LogoCloudsProps } from "@/components/LogoClouds";
import {
	context,
	earlyAccessUrl,
	ogSiteName,
	ogType,
	twitterCard,
	websiteFallbackDescription,
	websiteFallbackTitle,
	websiteImage,
	websiteUrl,
} from "@/constants";
import { getSplashPageData } from "@/features/splash";
import type { FeaturesProps_Splash } from "@/features/splash/components/Features";
import type { TestimonialsProps } from "@/features/splash/components/Testimonials";
import type { SectionWithImage } from "@/types";
import { getOGImageData } from "./cms";
import {
	getOGImageUrl,
	getPlainTextFromAdaptiveText,
	getPlainTextFromTitle,
} from "./globals";

import { getDocs } from "@/lib/source";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateDocsMetadata(
	params: { slug?: string[] },
	section: "docs" | "apis",
): Promise<Metadata> {
	const page = (await getDocs(section)).getPage(params.slug);

	if (!page) {
		notFound();
	}

	return {
		title: page.data.title,
	};
}

export async function generateDocsStaticParams(section: "docs" | "apis") {
	return (await getDocs(section)).getPages().map((page) => ({
		slug: page.slugs,
	}));
}

export const generateSplashMetadata = async (): Promise<Metadata> => {
	const [{ heroData }, ogData] = await Promise.all([
		getSplashPageData(),
		getOGImageData(allPages.splash as AvailablePages),
	]);

	const splashTitle = getPlainTextFromTitle(
		heroData.title,
		heroData.highlightText,
		heroData.titleSuffix,
	);

	const title = splashTitle
		? `Memorang | ${splashTitle}`
		: websiteFallbackTitle;

	const description = getPlainTextFromAdaptiveText(
		heroData.description ?? websiteFallbackDescription,
	);

	const image = {
		url: getOGImageUrl(ogData),
		alt: websiteImage.alt,
		width: websiteImage.width,
		height: websiteImage.height,
	};

	return {
		title: {
			template: "%s | Memorang",
			default: title,
		},
		description,
		icons: [{ rel: "icon", url: "/favicon.ico" }],
		openGraph: {
			title: title,
			description,
			type: ogType,
			siteName: ogSiteName,
			images: [image],
			url: websiteUrl,
		},
		twitter: {
			title: title,
			description,
			card: twitterCard,
			images: [image],
		},
	};
};

export const generateSplashJsonLd = ({
	heroData,
	partnersLogoCloudsData,
	featuresData,
	startupProgramsLogoCloudsData,
	testimonialsData,
}: {
	heroData: SectionWithImage;
	partnersLogoCloudsData: LogoCloudsProps;
	featuresData: FeaturesProps_Splash;
	startupProgramsLogoCloudsData: LogoCloudsProps;
	testimonialsData: TestimonialsProps;
}): string => {
	const title =
		getPlainTextFromTitle(
			heroData.title,
			heroData.highlightText,
			heroData.titleSuffix,
		) ?? websiteFallbackTitle;

	const description = getPlainTextFromAdaptiveText(
		heroData.description ?? websiteFallbackDescription,
	);

	return JSON.stringify({
		"@context": context,
		"@type": ogType,
		title,
		description,
		"Get Early Access": earlyAccessUrl,
		images: [heroData.heroImage, featuresData.heroImage],
		partners: partnersLogoCloudsData.logos.map((logo) => ({
			"@type": "Partner",
			name: logo.alt,
			url: logo.src,
		})),
		backedBy: startupProgramsLogoCloudsData.logos.map((logo) => ({
			"@type": "Startup Program",
			name: logo.alt,
			url: logo.src,
		})),
		testimonials: testimonialsData.testimonials
			.flat()
			.flat()
			.map((testimonial) => ({
				"@type": "Testimonial",
				author: testimonial.author.name,
				organization: testimonial.author.org,
				quote: getPlainTextFromAdaptiveText(testimonial.body),
			})),
	});
};
