/* -----------------Globals--------------- */
import { sanityFetch } from "@/sanity/lib/client";

/* -----------------Queries--------------- */
import {
	ALL_CUSTOMER_STORIES_QUERY,
	CUSTOMERS_PAGE_QUERY,
	CUSTOMER_STORY_BY_SLUG_QUERY,
	GET_CAREER_DATA,
	GET_FOOTER_DATA,
	GET_FOOTER_LINKS,
	GET_ORG_DATA,
} from "@/sanity/lib/queries";

import { sanityTags } from "@/sanity/schema";
/* -----------------Types--------------- */
import type { SectionWithImage } from "@/types";
import type { SanityDocument } from "next-sanity";
import type {
	ALL_CUSTOMER_STORIES_QUERYResult,
	CUSTOMERS_PAGE_QUERYResult,
	CUSTOMER_STORY_BY_SLUG_QUERYResult,
	GET_CAREER_DATAResult,
	GET_FOOTER_LINKSResult,
	GET_ORG_DATAResult,
} from "sanity.types";
import type { OpeningsProps } from "../components/Openings";
import type { Customer, Post } from "../types";

const {
	organization,
	career,
	header,
	action,
	customerPage,
	customer,
	post,
	values,
	benefits,
	footerData,
	footerLink,
} = sanityTags;

export const getCustomersPageData = async () => {
	const rawData = await sanityFetch<SanityDocument<CUSTOMERS_PAGE_QUERYResult>>(
		{
			query: CUSTOMERS_PAGE_QUERY,
			tags: [customerPage, customer, post, header, action],
		},
	);

	const data = rawData[0];

	if (!data) {
		throw new Error("Customers page not found");
	}

	return {
		heroData: data.heroData as SectionWithImage,
		customers: data.customers as Customer[],
	};
};

export const getCustomerStoryBySlug = async (slug: string) => {
	const rawData = await sanityFetch<
		SanityDocument<CUSTOMER_STORY_BY_SLUG_QUERYResult>
	>({
		query: CUSTOMER_STORY_BY_SLUG_QUERY,
		params: { slug },
		tags: [customer, post],
	});

	const data = rawData[0];

	return data as Post;
};

export const getAllCustomerStories = async (
	isGeneratingStaticParams?: boolean,
) => {
	const data = await sanityFetch<
		SanityDocument<ALL_CUSTOMER_STORIES_QUERYResult>
	>({
		query: ALL_CUSTOMER_STORIES_QUERY,
		isDraftMode: !isGeneratingStaticParams,
		tags: [customer, post],
	});
	return data;
};

export const getOrgData = async () => {
	const rawData = await sanityFetch<SanityDocument<GET_ORG_DATAResult>>({
		query: GET_ORG_DATA,
		tags: [organization, values, benefits, header, action],
	});

	const data = rawData[0];

	return {
		info: data?.info,
		team: data?.team,
		name: data?.name,
	};
};

export const getFooterData = async (isGeneratingStaticParams?: boolean) => {
	const rawData = await sanityFetch<SanityDocument[]>({
		query: GET_FOOTER_DATA,
		isDraftMode: !isGeneratingStaticParams,
		tags: [footerData, footerLink],
	});

	const data = rawData[0];
	return { ...data };
};

export const getFooterLinks = async () => {
	const rawData = await sanityFetch<GET_FOOTER_LINKSResult>({
		query: GET_FOOTER_LINKS,
		tags: [footerLink],
	});

	const data = rawData;
	return data?.columns ? data.columns : [];
};

export const getCareerData = async () => {
	const rawData = await sanityFetch<SanityDocument<GET_CAREER_DATAResult>>({
		query: GET_CAREER_DATA,
		tags: [career, header, action],
	});

	const data = rawData[0];

	return {
		careersHeroData: data?.careersHeroData as unknown as SectionWithImage,
		jobOpenings: data?.jobOpenings as unknown as OpeningsProps,
	};
};
