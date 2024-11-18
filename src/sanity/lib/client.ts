import "server-only";

import { type QueryOptions, type QueryParams, createClient } from "next-sanity";
import { draftMode } from "next/headers";

import { apiVersion, dataset, projectId, stegaEnabled, useCdn } from "../env";
import { token } from "./token";

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn,
	stega: {
		enabled: stegaEnabled,
		studioUrl: "/studio",
	},
});

export const writeClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn,
	token,
});

export async function sanityFetch<QueryResponse>({
	query,
	params = {},
	revalidate = 60,
	tags = [],
	isDraftMode = draftMode().isEnabled,
}: {
	query: string;
	params?: QueryParams;
	revalidate?: number | false;
	tags?: string[];
	isDraftMode?: boolean;
}) {
	if (isDraftMode && !token) {
		throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
	}

	let dynamicRevalidate = revalidate;
	if (isDraftMode) {
		// Do not cache in Draft Mode
		dynamicRevalidate = 0;
	} else if (tags.length > 0) {
		// Cache indefinitely if tags supplied, purge with revalidateTag()
		dynamicRevalidate = false;
	}

	return client.fetch<QueryResponse>(query, params, {
		...(isDraftMode &&
			({
				token: token,
				perspective: "previewDrafts",
				stega: true,
			} satisfies QueryOptions)),
		next: {
			revalidate: dynamicRevalidate,
			tags,
		},
	});
}
