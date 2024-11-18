import { defineField, defineType } from "sanity";

export const footerLinkType = defineType({
	type: "document",
	name: "footerLink",
	title: "Footer Links",
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
			title: "Action Name",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "href",
			type: "string",
			title: "Redirect URL",
			hidden: false,
		}),
		defineField({
			name: "external",
			type: "boolean",
			title: "Set as External Redirect",
		}),
	],
	preview: { select: { title: "entryName" } },
});
