import { defineField, defineType } from "sanity";

export const customerType = defineType({
	type: "document",
	name: "customer",
	title: "Customer",
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
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "logo",
			type: "image",
			title: "Logo",
			validation: (Rule) => Rule.required(),
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
			name: "website",
			type: "string",
			title: "Customer Website",
		}),
		defineField({
			name: "linkedPost",
			type: "reference",
			title: "Linked Post",
			to: [{ type: "post" }],
		}),
		defineField({
			name: "quote",
			type: "text",
			title: "Customer Quote",
		}),
	],
	preview: { select: { title: "entryName" } },
});
