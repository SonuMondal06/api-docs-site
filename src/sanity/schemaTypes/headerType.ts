import { defineField, defineType } from "sanity";

export const headerType = defineType({
	type: "document",
	name: "header",
	title: "Header",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "heading",
			type: "string",
			title: "Heading",
		}),
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "highlightText",
			type: "string",
			title: "Title Highlight Text",
		}),
		defineField({
			name: "titleSuffix",
			type: "string",
			title: "Title Suffix",
		}),
		defineField({
			name: "description",
			type: "array",
			of: [{ type: "block" }],
			title: "Description",
		}),
		defineField({
			name: "actions",
			type: "array",
			of: [{ type: "reference", to: [{ type: "action" }] }],
			title: "Actions",

			validation: (Rule) => Rule.max(2),
		}),
	],
	preview: { select: { title: "entryName" } },
});
