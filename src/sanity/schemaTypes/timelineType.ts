import { defineField, defineType } from "sanity";

export const timelineType = defineType({
	name: "timeline",
	title: "Timeline",
	type: "document",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
		}),
		defineField({ name: "name", type: "string", title: "Name" }),
		defineField({ name: "date", type: "string", title: "Date" }),
		defineField({ name: "dateTime", type: "string", title: "Date time" }),
		defineField({
			name: "description",
			type: "array",
			of: [{ type: "block" }],
			title: "Description",
		}),
	],
	preview: { select: { title: "entryName" } },
});
