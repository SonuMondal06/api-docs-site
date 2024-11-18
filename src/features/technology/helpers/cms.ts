import { sanityFetch } from "@/sanity/lib/client";
import { TECHNOLOGY_PAGE_QUERY } from "@/sanity/lib/queries";
import { sanityTags } from "@/sanity/schema";
import type { SectionWithImage } from "@/types";
import type { SanityDocument } from "next-sanity";
import type { TechFeatureShowcaseProps } from "../components/TechFeatureShowcase";
import type { TechProductsProps } from "../components/TechProducts";

const { technologyPage, header, action } = sanityTags;

export const getTechnologyPageData = async () => {
	const rawData = await sanityFetch<SanityDocument>({
		query: TECHNOLOGY_PAGE_QUERY,
		tags: [technologyPage, header, action],
	});

	const data = rawData[0];

	return {
		heroData: data.heroData as SectionWithImage,
		featuresData: data.featuresData as TechFeatureShowcaseProps,
		technologyData: data.technologyData as TechProductsProps,
	};
};
