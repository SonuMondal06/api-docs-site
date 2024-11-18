import { defineField, defineType } from "sanity";

export const valuesType = defineType({
	name: "values",
	title: "Values",
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
		defineField({
			name: "description",
			type: "array",
			of: [{ type: "block" }],
			title: "Description",
		}),
		defineField({ name: "icon", type: "string", title: "Icon" }),
	],
	preview: { select: { title: "entryName" } },
});
