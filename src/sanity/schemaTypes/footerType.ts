import { defineField, defineType } from "sanity";

export const footerType = defineType({
	type: "document",
	name: "footerData",
	title: "Footer Data",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "columns",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ name: "name", type: "string", title: "Column Name" },
						{
							name: "links",
							type: "array",
							of: [{ type: "reference", to: [{ type: "footerLink" }] }],
							title: "Links",
						},
					],
				},
			],
			title: "Footer Columns",
		}),
	],
	preview: { select: { title: "entryName" } },
});
