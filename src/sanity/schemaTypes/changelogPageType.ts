import { defineField, defineType } from "sanity";

export const changelogPageType = defineType({
	type: "document",
	name: "changelogPage",
	title: "Changelog Page",
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
			description: "Indicates if the post is a work in progress",
			initialValue: false,
		}),
		defineField({
			name: "changelogHeader",
			type: "reference",
			title: "Changelog Header",
			to: [{ type: "header" }],
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: { select: { title: "entryName" } },
});
