/* -----------------Types--------------- */
import type { FeaturedTestimonialSectionProps } from "@/components/FeaturedTestimonialSection";
import type { SolutionItem } from "@/features/solutions";
import type { SectionWithImage } from "@/types";
import type { SanityDocument } from "next-sanity";
import type {
	ALL_SOLUTIONS_QUERYResult,
	SOLUTION_WITH_HREF_QUERYResult,
} from "sanity.types";
import type { FeaturesProps_Solutions } from "../components/Features";
import type { StatsProps } from "../components/StatsBg";

/* -----------------Helpers--------------- */
import { sanityFetch } from "@/sanity/lib/client";
import {
	ALL_SOLUTIONS_QUERY,
	SOLUTION_WITH_HREF_QUERY,
} from "@/sanity/lib/queries";
import { sanityTags } from "@/sanity/schema";

const { solution, header, action, testimonial } = sanityTags;

export const getAllSolutionsData = async (
	isGeneratingStaticParams?: boolean,
) => {
	const data = await sanityFetch<SanityDocument<ALL_SOLUTIONS_QUERYResult>>({
		query: ALL_SOLUTIONS_QUERY,
		isDraftMode: !isGeneratingStaticParams,
		tags: [solution, header, action, testimonial],
	});

	return data as SolutionItem[];
};

type TestimonialData = FeaturedTestimonialSectionProps &
	SOLUTION_WITH_HREF_QUERYResult[number]["testimonialData"];

export const getSolutionWithHref = async (href: string) => {
	const rawData = await sanityFetch<
		SanityDocument<SOLUTION_WITH_HREF_QUERYResult>
	>({
		query: SOLUTION_WITH_HREF_QUERY,
		params: {
			href,
		},
		tags: [solution, header, action, testimonial],
	});

	const data = rawData[0];

	return {
		heroData: data?.heroData as SectionWithImage,
		featuresData: data?.featuresData as FeaturesProps_Solutions,
		statsData: data?.statsData as StatsProps,
		testimonialData: data?.testimonialData as TestimonialData,
		comingSoon: data?.comingSoon,
	};
};
