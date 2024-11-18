import { defineField, defineType } from "sanity";

export const servicesPageType = defineType({
	type: "document",
	name: "servicesPage",
	title: "Services Page",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "servicesHeader",
			type: "reference",
			title: "Header",
			to: [{ type: "header" }],
		}),
		defineField({
			name: "heroImage",
			type: "image",
			title: "Hero Image",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
			],
		}),

		defineField({
			name: "catalogItems",
			type: "array",
			title: "Catalog Items",
			of: [{ type: "reference", to: [{ type: "catalogItem" }] }],
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: { select: { title: "entryName" } },
});
