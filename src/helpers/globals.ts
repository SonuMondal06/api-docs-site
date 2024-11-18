import type { AdaptiveTextContent } from "@/components/Content";
import { env } from "@/env";
import type { Post } from "@/features/organization";
import type { DefaultOGTemplate, FeaturedOGTemplate } from "@/types";
import type { TypedObject } from "sanity";

export const getPascalCase = (text: string, splitBy = "-", joinBy = " ") => {
	return text
		.toLowerCase()
		.split(splitBy)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(joinBy);
};

export const getPostUrl = (post: Post) => {
	if (post.type === "Customer Story") {
		return `/customer/${post.slug}`;
	}

	return `/blog/${post.slug}`;
};

export const getOGImageUrl = (
	params?: DefaultOGTemplate | FeaturedOGTemplate,
) => {
	if (!params) {
		return "";
	}

	const isLocalDevelopment = env.NODE_ENV === "development";

	const baseUrl = env.IS_PROD
		? "https://memorang.com"
		: isLocalDevelopment
			? "http://localhost:3000"
			: "https://preview.memorang.com";

	const { pageName, templateType, ...rest } = params;

	const ogEndpoint = new URL(`/api/og/${templateType}`, baseUrl);

	for (const [key, value] of Object.entries(rest)) {
		if (value == null) {
			continue;
		}
		ogEndpoint.searchParams.append(key, value.toString());
	}

	return ogEndpoint;
};

export const getPlainTextFromTitle = (
	title?: string | null,
	highlightText?: string | null,
	titleSuffix?: string | null,
) => {
	let text = "";
	if (title) {
		text = title;
	}

	if (highlightText) {
		if (text) {
			text = `${text} `;
		}
		text = `${text} ${highlightText}`;
	}

	if (text && titleSuffix) {
		if (text) {
			text = `${text} `;
		}
		text = `${text} ${titleSuffix}`;
	}

	return text;
};

const defaultBehaviors = { nonTextBehavior: "remove" };

export const getPlainTextFromAdaptiveText = (
	blocks: AdaptiveTextContent,
	opts = {},
) => {
	if (typeof blocks === "string") {
		return blocks;
	}

	const options = Object.assign({}, defaultBehaviors, opts);
	return (blocks as TypedObject[])
		.map((block) => {
			if (block._type !== "block" || !block.children) {
				return options.nonTextBehavior === "remove"
					? ""
					: `[${block._type} block]`;
			}

			if (Array.isArray(block.children)) {
				return block.children.map((child) => child.text).join("");
			}
		})
		.join("\n\n");
};
