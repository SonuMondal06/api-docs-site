import { defineField, defineType } from "sanity";

export const customersPageType = defineType({
	type: "document",
	name: "customerPage",
	title: "Customer Page",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "customersHeader",
			type: "reference",
			title: "Customers Header",
			validation: (Rule) => Rule.required(),
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
			name: "customers",
			type: "array",
			of: [{ type: "reference", to: [{ type: "customer" }] }],
		}),
	],
	preview: { select: { title: "entryName" } },
});
