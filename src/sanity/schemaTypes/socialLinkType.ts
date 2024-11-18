import { defineField, defineType } from "sanity";

export const socialLinkType = defineType({
	type: "document",
	name: "socialLink",
	title: "Social Link",
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
		}),
		defineField({
			name: "href",
			type: "url",
			title: "URL",
		}),
		defineField({
			name: "external",
			type: "boolean",
			title: "External Link",
		}),
		defineField({
			name: "icon",
			type: "string",
			title: "Icon",
		}),
	],
	preview: { select: { title: "entryName" } },
});
