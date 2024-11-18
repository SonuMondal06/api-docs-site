/* -----------------Types--------------- */
import type { LogoCloudsProps } from "@/components/LogoClouds";
import type { SectionWithImage } from "@/types";
import type { SanityDocument } from "next-sanity";
import type { SPLASH_PAGE_QUERYResult } from "sanity.types";
import type { FeaturesProps_Splash } from "../components/Features";
import type { SolutionsProps } from "../components/Solutions";
import type { TestimonialsProps } from "../components/Testimonials";
import type { TweetCardProps } from "../components/TweetCard";

/* -----------------Helpers--------------- */
import { sanityFetch } from "@/sanity/lib/client";
import { SPLASH_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityTags } from "@/sanity/schema";

const { action, header, splashPage, testimonial, solution } = sanityTags;

export const getSplashPageData = async () => {
	const rawData = await sanityFetch<SanityDocument<SPLASH_PAGE_QUERYResult>>({
		query: SPLASH_PAGE_QUERY,
		tags: [splashPage, header, action, testimonial, solution],
	});

	const data = rawData[0];

	if (!data) {
		throw new Error("No Splash Page data found!");
	}

	return {
		heroData: data.heroData as SectionWithImage,
		partnersLogoCloudsData: data.partnersLogoCloudsData as LogoCloudsProps,
		featuresData: data.featuresData as FeaturesProps_Splash,
		solutionsSection: data.solutionsSection as SolutionsProps,
		tweetCardData: data.tweetCardData as TweetCardProps,
		startupProgramsLogoCloudsData:
			data.startupProgramsLogoCloudsData as LogoCloudsProps,
		testimonialsData: data.testimonialsData as TestimonialsProps,
	};
};
