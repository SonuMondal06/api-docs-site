import { defineField, defineType } from "sanity";

const contentTypeOptions = ["image", "mdx"] as const;

type ContentType = (typeof contentTypeOptions)[number];
type ParentType = { contentType: ContentType };

const changelogContentFieldType = defineField({
	name: "log",
	type: "object",
	fields: [
		defineField({
			name: "contentType",
			type: "string",
			title: "Content Type",
			description: "The type of content - Image or MDX",
			options: {
				list: [...contentTypeOptions],
			},
			initialValue: "image",
		}),
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of the content field",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			type: "image",
			title: "Image",
			description: "The image to display",
			hidden: ({ parent }) => parent?.contentType !== "image",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
			],
			validation: (Rule) =>
				Rule.custom((currentValue, { parent }) =>
					(parent as ParentType)?.contentType === "image" &&
					currentValue === undefined
						? "Image field required for 'Image' Content Type"
						: true,
				),
		}),
		defineField({
			name: "mdx",
			type: "markdown",
			title: "MDX",
			description: "The MDX content to display",
			hidden: ({ parent }) => parent?.contentType !== "mdx",
			validation: (Rule) =>
				Rule.custom((currentValue, { parent }) =>
					(parent as ParentType)?.contentType === "mdx" &&
					currentValue === undefined
						? "MDX field required for 'MDX' Content Type"
						: true,
				),
		}),
	],
	preview: { select: { title: "entryName" } },
});

export const changelogItemType = defineType({
	type: "document",
	name: "changelogItem",
	title: "Changelog Item",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "isWorkInProgress",
			type: "boolean",
			title: "Work In Progress",
			description: "Indicates if the release log is a work in progress",
			initialValue: false,
		}),
		defineField({
			name: "releaseDate",
			type: "date",
			title: "Release Date",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "service",
			type: "reference",
			to: [{ type: "catalogItem" }],
		}),
		defineField({
			name: "tags",
			type: "array",
			title: "Tags",
			of: [{ type: "reference", to: [{ type: "tag" }] }],
			validation: (Rule) => Rule.max(2),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "log",
			title: "Log",
			type: "array",
			of: [changelogContentFieldType],
		}),
		defineField({
			name: "githubUrls",
			type: "array",
			title: "Github Release/PR URLs",
			description:
				"A list of URLs to the Github release or pull request to fetch data from",
			of: [{ type: "string" }],
		}),
		defineField({
			name: "releaseNotesMDX",
			type: "array",
			title: "Release Notes MDX",
			of: [
				{
					type: "object",
					name: "releaseNote",
					fields: [
						{
							name: "name",
							type: "string",
							title: "Name",
						},
						{
							name: "description",
							type: "markdown",
							title: "Description",
						},
					],
				},
			],
		}),
	],
	preview: { select: { title: "entryName" } },
	orderings: [
		{
			title: "Release Date (Newest First)",
			name: "releaseDateDesc",
			by: [{ field: "releaseDate", direction: "desc" }],
		},
	],
});
