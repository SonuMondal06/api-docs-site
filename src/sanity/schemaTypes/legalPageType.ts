import { defineField, defineType } from "sanity";

export const legalPageType = defineType({
	type: "document",
	name: "legalPage",
	title: "Legal Page",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "legalHeader",
			type: "reference",
			title: "Legal Header",
			to: [{ type: "header" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "href",
			type: "string",
			title: "Page URL",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "icon",
			type: "string",
			title: "Icon Name",
		}),
		defineField({
			name: "image",
			type: "image",
			title: "Icon Image",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
				{
					title: "As Icon Button",
					name: "asIconButton",
					type: "boolean",
					description:
						"If true, the image will be used as an icon with no background",
					initialValue: false,
				},
			],
		}),
		defineField({
			name: "content",
			type: "array",
			title: "Content",
			of: [
				{ type: "block" },
				{
					type: "image",
					fields: [
						{
							title: "Alternative Text",
							name: "alt",
							type: "string",
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "ogImageData",
			type: "reference",
			title: "OG Image Data",
			to: [{ type: "pageOGImageData" }],
		}),
	],
	preview: { select: { title: "entryName" } },
});
