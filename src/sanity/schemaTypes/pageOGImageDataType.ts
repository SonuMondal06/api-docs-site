import { allPages } from "@/analytics";
import { defineField, defineType } from "sanity";

export const pageOGImageDataType = defineType({
	type: "document",
	name: "pageOGImageData",
	title: "Page OG Image",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "pageName",
			type: "string",
			title: "Page Name",
			description: "The name of the page this entry is associated with",
			options: {
				list: Object.values(allPages),
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "templateType",
			type: "string",
			title: "Template Type",
			options: {
				list: ["default", "featured"],
			},
			validation: (Rule) => Rule.required(),
			initialValue: "default",
		}),
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "highlightText",
			type: "string",
			title: "Highlight Text",
			hidden: ({ document }) => document?.templateType !== "default",
		}),
		defineField({
			name: "titleSuffix",
			type: "string",
			title: "Title Suffix",
			hidden: ({ document }) => document?.templateType !== "default",
		}),
		defineField({
			name: "tagline",
			type: "string",
			title: "Tagline",
			hidden: ({ document }) => document?.templateType !== "featured",
		}),
		defineField({
			name: "image",
			type: "image",
			title: "Image",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
			],
			hidden: ({ document }) => document?.templateType !== "featured",
			validation: (Rule) =>
				Rule.custom((currentValue, { document }) =>
					document?.templateType === "featured" && currentValue === undefined
						? "Image field required for 'Featured' Template Type"
						: true,
				),
		}),
		defineField({
			name: "icon",
			type: "image",
			title: "Icon",
			hidden: ({ document }) => document?.templateType !== "featured",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
			],
		}),
	],
	preview: { select: { title: "entryName" } },
});
