import { defineField, defineType } from "sanity";

export const tagType = defineType({
	type: "document",
	name: "tag",
	title: "Tag",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
			description: "The name of this tag",
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: { select: { title: "name" } },
});
