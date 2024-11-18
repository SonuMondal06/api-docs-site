import { sanityFetch, writeClient } from "@/sanity/lib/client";
import {
	ALL_CHANGELOG_ITEMS_QUERY,
	ALL_TAGS_QUERY,
	CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_COUNT_QUERY,
	CHANGELOG_ITEMS_BY_SERVICE_COUNT_QUERY,
	CHANGELOG_ITEMS_BY_TAGS_COUNT_QUERY,
	CHANGELOG_ITEMS_COUNT_QUERY,
	CHANGELOG_ITEMS_PAGE_VIEW_QUERY,
	CHANGELOG_PAGE_QUERY,
	GET_CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_QUERY,
	GET_CHANGELOG_ITEMS_BY_SERVICE_QUERY,
	GET_CHANGELOG_ITEMS_BY_TAGS_QUERY,
	GET_CHANGELOG_ITEM_BY_SLUG_AND_DATE_QUERY,
} from "@/sanity/lib/queries";
import { sanityTags } from "@/sanity/schema";
import type { SanityDocument } from "next-sanity";
import type {
	ALL_CHANGELOG_ITEMS_QUERYResult,
	ALL_TAGS_QUERYResult,
	CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_COUNT_QUERYResult,
	CHANGELOG_ITEMS_BY_SERVICE_COUNT_QUERYResult,
	CHANGELOG_ITEMS_BY_TAGS_COUNT_QUERYResult,
	CHANGELOG_ITEMS_COUNT_QUERYResult,
	CHANGELOG_ITEMS_PAGE_VIEW_QUERYResult,
	GET_CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_QUERYResult,
	GET_CHANGELOG_ITEMS_BY_SERVICE_QUERYResult,
	GET_CHANGELOG_ITEMS_BY_TAGS_QUERYResult,
	GET_CHANGELOG_ITEM_BY_SLUG_AND_DATE_QUERYResult,
} from "sanity.types";
import {
	changelogItemsFetchLimit,
	defaultChangelogFetchPage,
} from "../constants/pagination";
import type { ReleaseItem } from "../types";
import { getChangelogItemsRange } from "./pagination";

const { header, action, changelogPage, changelogItem } = sanityTags;

export const getChangelogHeaderData = async () => {
	const rawData = await sanityFetch<SanityDocument>({
		query: CHANGELOG_PAGE_QUERY,
		tags: [header, action, changelogPage],
	});

	const data = rawData[0];

	return {
		heading: data.heading,
		title: data.title,
		highlightText: data.highlightText,
		titleSuffix: data.titleSuffix,
		description: data.description,
		actions: data.actions,
		isWorkInProgress: data?.isWorkInProgress,
	};
};

export const getChangelogItemBySlugAndDate = async (
	slug: string,
	date: string,
) => {
	const rawData = await sanityFetch<
		SanityDocument<GET_CHANGELOG_ITEM_BY_SLUG_AND_DATE_QUERYResult>
	>({
		query: GET_CHANGELOG_ITEM_BY_SLUG_AND_DATE_QUERY,
		params: {
			slug,
			date,
		},
		tags: [changelogItem],
	});

	const data = rawData[0];

	return data as ReleaseItem;
};

export const getChangelogItemsByService = async (
	service: string,
	page = defaultChangelogFetchPage,
	limit = changelogItemsFetchLimit,
) => {
	const data = await sanityFetch<
		SanityDocument<GET_CHANGELOG_ITEMS_BY_SERVICE_QUERYResult>
	>({
		query: GET_CHANGELOG_ITEMS_BY_SERVICE_QUERY,
		params: {
			service,
			...getChangelogItemsRange(page, limit),
		},
		tags: [changelogItem],
	});

	return data as ReleaseItem[];
};

export const getChangelogItemsByTags = async (
	tags: string[],
	page = defaultChangelogFetchPage,
	limit = changelogItemsFetchLimit,
) => {
	const data = await sanityFetch<
		SanityDocument<GET_CHANGELOG_ITEMS_BY_TAGS_QUERYResult>
	>({
		query: GET_CHANGELOG_ITEMS_BY_TAGS_QUERY,
		params: {
			tags,
			...getChangelogItemsRange(page, limit),
		},
		tags: [changelogItem],
	});

	return data as ReleaseItem[];
};

export const getChangelogItemsByServiceAndTags = async (
	service: string,
	tags: string[],
	page = defaultChangelogFetchPage,
	limit = changelogItemsFetchLimit,
) => {
	const data = await sanityFetch<
		SanityDocument<GET_CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_QUERYResult>
	>({
		query: GET_CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_QUERY,
		params: {
			service,
			tags,
			...getChangelogItemsRange(page, limit),
		},
		tags: [changelogItem],
	});

	return data as ReleaseItem[];
};

export const getChangelogItemsPageViewData = async (
	page = defaultChangelogFetchPage,
	limit = changelogItemsFetchLimit,
) => {
	const data = await sanityFetch<
		SanityDocument<CHANGELOG_ITEMS_PAGE_VIEW_QUERYResult>
	>({
		query: CHANGELOG_ITEMS_PAGE_VIEW_QUERY,
		params: {
			...getChangelogItemsRange(page, limit),
		},
	});

	return data as ReleaseItem[];
};

export const getAllChangelogItemsData = async (
	isGeneratingStaticParams?: boolean,
) => {
	const data = await sanityFetch<
		SanityDocument<ALL_CHANGELOG_ITEMS_QUERYResult>
	>({
		query: ALL_CHANGELOG_ITEMS_QUERY,
		isDraftMode: !isGeneratingStaticParams,
	});

	return data as ReleaseItem[];
};

export const getChangelogItemsCount = async (
	isGeneratingStaticParams?: boolean,
) => {
	const data = await sanityFetch<CHANGELOG_ITEMS_COUNT_QUERYResult>({
		query: CHANGELOG_ITEMS_COUNT_QUERY,
		isDraftMode: !isGeneratingStaticParams,
	});

	return data;
};

export const getChangelogItemsByServiceCount = async (service: string) => {
	const data = await sanityFetch<CHANGELOG_ITEMS_BY_SERVICE_COUNT_QUERYResult>({
		query: CHANGELOG_ITEMS_BY_SERVICE_COUNT_QUERY,
		params: {
			service,
		},
	});

	return data;
};

export const getChangelogItemsByTagsCount = async (tags: string[]) => {
	const data = await sanityFetch<CHANGELOG_ITEMS_BY_TAGS_COUNT_QUERYResult>({
		query: CHANGELOG_ITEMS_BY_TAGS_COUNT_QUERY,
		params: {
			tags,
		},
	});

	return data;
};

export const getChangelogItemsByServiceAndTagsCount = async (
	service: string,
	tags: string[],
) => {
	const data =
		await sanityFetch<CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_COUNT_QUERYResult>({
			query: CHANGELOG_ITEMS_BY_SERVICE_AND_TAGS_COUNT_QUERY,
			params: {
				service,
				tags,
			},
		});

	return data;
};

export const getAllTags = async () => {
	const data = await sanityFetch<ALL_TAGS_QUERYResult>({
		query: ALL_TAGS_QUERY,
	});

	return data;
};

export const patchReleaseNotesToChangelogItem = async (
	item: ReleaseItem,
	releaseNotes: ReleaseItem["releaseNotesMDX"],
) => {
	writeClient
		.patch(item.id)
		.set({
			releaseNotesMDX: releaseNotes.map((note, index) => ({
				_key: note.name + index,
				...note,
			})),
		})
		.commit();
};
