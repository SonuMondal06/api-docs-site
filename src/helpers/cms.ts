import type { AvailablePages } from "@/analytics";
import type { RoadmapProps } from "@/features/organization";
import type { NavbarProps } from "@/layouts";
import { sanityFetch } from "@/sanity/lib/client";
import {
	ABOUT_DATA_QUERY,
	CTA_QUERY,
	NAVBAR_QUERY,
	PAGE_OG_IMAGE_QUERY,
	SUBNAV_CATALOGITEMS_QUERY,
	SUBNAV_SOLUTIONS_QUERY,
} from "@/sanity/lib/queries";
import { sanityTags } from "@/sanity/schema";
import type {
	DefaultOGTemplate,
	FeaturedOGTemplate,
	SectionHeader,
	SectionWithImage,
} from "@/types";
import type { SanityDocument } from "next-sanity";
import type {
	ABOUT_DATA_QUERYResult,
	CTA_QUERYResult,
	NAVBAR_QUERYResult,
	PAGE_OG_IMAGE_QUERYResult,
	SUBNAV_CATALOGITEMS_QUERYResult,
	SUBNAV_SOLUTIONS_QUERYResult,
} from "sanity.types";

const { header, action, timeline, about, solution, catalogItem, navbar } =
	sanityTags;

export const getOGImageData = async (pageName: AvailablePages) => {
	const rawData = await sanityFetch<SanityDocument<PAGE_OG_IMAGE_QUERYResult>>({
		query: PAGE_OG_IMAGE_QUERY,
		params: { pageName },
	});

	const data = rawData[0];

	if (data?.templateType === "default") {
		return data as DefaultOGTemplate;
	}
	return data as FeaturedOGTemplate;
};

export const getCTAData = async () => {
	const rawData = await sanityFetch<SanityDocument<CTA_QUERYResult>>({
		query: CTA_QUERY,
		tags: [header, action],
	});

	const data = rawData[0];

	return {
		title: data?.title ?? "",
		highlightText: data?.highlightText ?? "",
		titleSuffix: data?.titleSuffix ?? "",
		description: data?.description ?? "",
		actions: data?.actions ?? [],
	} as SectionHeader;
};

export const getNavbarData = async () => {
	const rawData = await sanityFetch<SanityDocument<NAVBAR_QUERYResult>>({
		query: NAVBAR_QUERY,
		tags: [navbar, header, action, solution, catalogItem],
	});

	const data = rawData[0];

	return {
		navItems: data?.navItems,
		navActions: data?.navActions,
		mobileNavActions: data?.mobileNavActions,
	} as NavbarProps;
};

export const getSubnavSolutionsData = async () => {
	const rawData = await sanityFetch<
		SanityDocument<SUBNAV_SOLUTIONS_QUERYResult>
	>({
		query: SUBNAV_SOLUTIONS_QUERY,
		tags: [solution, navbar, header, action],
	});

	const data = rawData[0];

	return {
		solutions: data?.solutions,
	};
};

export const getSubnavCatalogItemsData = async () => {
	const rawData = await sanityFetch<
		SanityDocument<SUBNAV_CATALOGITEMS_QUERYResult>
	>({
		query: SUBNAV_CATALOGITEMS_QUERY,
		tags: [catalogItem, navbar, header, action],
	});

	const data = rawData[0];

	return {
		catalogItems: data?.catalogItems,
	};
};

export const getAboutData = async () => {
	const rawData = await sanityFetch<SanityDocument<ABOUT_DATA_QUERYResult>>({
		query: ABOUT_DATA_QUERY,
		tags: [about, header, action, timeline],
	});

	const data = rawData[0];

	return {
		aboutHeroData: data?.aboutHeroData as SectionWithImage,
		roadmapData: data?.roadmapData as RoadmapProps,
	};
};
