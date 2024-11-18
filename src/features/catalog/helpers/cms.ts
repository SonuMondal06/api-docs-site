import { sanityFetch } from "@/sanity/lib/client";
import {
	ALL_CATALOG_ITEMS_QUERY,
	CATALOG_ITEMS_WITHOUT_HREF_QUERY,
	CATALOG_ITEM_WITH_HREF_QUERY,
	EXPLORE_CATALOG_HEADER_QUERY,
	SERVICES_PAGE_QUERY,
} from "@/sanity/lib/queries";
import { sanityTags } from "@/sanity/schema";
import type { SectionWithImage } from "@/types";
import type { SanityDocument } from "next-sanity";
import type {
	ALL_CATALOG_ITEMS_QUERYResult,
	CATALOG_ITEMS_WITHOUT_HREF_QUERYResult,
	CATALOG_ITEM_WITH_HREF_QUERYResult,
	EXPLORE_CATALOG_HEADER_QUERYResult,
	SERVICES_PAGE_QUERYResult,
} from "sanity.types";
import type { ExploreCatalogProps } from "../components/ExploreCatalog";
import type { FeaturesProps_Catalog } from "../components/Features";
import type { ItemHeroProps } from "../components/ItemHero";
import type { CatalogItem } from "../types";

const { servicesPage, header, action, catalogItem } = sanityTags;

export const getServicesPage = async () => {
	const rawData = await sanityFetch<SanityDocument<SERVICES_PAGE_QUERYResult>>({
		query: SERVICES_PAGE_QUERY,
		tags: [servicesPage, header, action],
	});

	const data = rawData[0];

	if (!data) {
		throw new Error("No Services Page data found!");
	}

	return {
		heroData: data.heroData as SectionWithImage,
	};
};

export const getCatalogItemWithHref = async (href: string) => {
	const rawData = await sanityFetch<
		SanityDocument<CATALOG_ITEM_WITH_HREF_QUERYResult>
	>({
		query: CATALOG_ITEM_WITH_HREF_QUERY,
		params: {
			href,
		},
		tags: [catalogItem, action],
	});

	const data = rawData[0];

	return {
		heroData: data?.heroData as ItemHeroProps,
		featuresData: data?.featuresData as FeaturesProps_Catalog,
		comingSoon: data?.comingSoon,
	};
};

export const getCatalogItemsWithoutHref = async (href: string) => {
	const data = await sanityFetch<
		SanityDocument<CATALOG_ITEMS_WITHOUT_HREF_QUERYResult>
	>({
		query: CATALOG_ITEMS_WITHOUT_HREF_QUERY,
		params: {
			href,
		},
		tags: [catalogItem],
	});

	return data as ExploreCatalogProps["items"];
};

export const getExploreCatalogHeader = async () => {
	const rawData = await sanityFetch<
		SanityDocument<EXPLORE_CATALOG_HEADER_QUERYResult>
	>({
		query: EXPLORE_CATALOG_HEADER_QUERY,
		tags: [header, action],
	});

	const data = rawData[0];

	if (!data) {
		throw new Error("No Explore Catalog Header data found!");
	}

	return data as Omit<ExploreCatalogProps, "items">;
};

export const getAllCatalogItemsData = async (
	isGeneratingStaticParams?: boolean,
) => {
	const data = await sanityFetch<SanityDocument<ALL_CATALOG_ITEMS_QUERYResult>>(
		{
			query: ALL_CATALOG_ITEMS_QUERY,
			isDraftMode: !isGeneratingStaticParams,
			tags: [catalogItem],
		},
	);

	return data as CatalogItem[];
};
