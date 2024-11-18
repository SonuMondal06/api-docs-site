import { defineField, defineType } from "sanity";

export const technologyPageType = defineType({
	type: "document",
	name: "technologyPage",
	title: "Technology Page",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "technologyHeader",
			type: "reference",
			title: "Technology Header",
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
			name: "featuresHeader",
			type: "reference",
			title: "Features Header",
			validation: (Rule) => Rule.required(),
			to: [{ type: "header" }],
		}),
		defineField({
			name: "featuresImage",
			type: "image",
			title: "Features Image",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "features",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ type: "string", name: "name", title: "Name" },
						{
							name: "description",
							type: "array",
							of: [{ type: "block" }],
							title: "Description",
						},
						{ type: "image", name: "image", title: "Image" },
					],
				},
			],
			title: "Features List",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "techStackHeader",
			type: "reference",
			title: "Tech Stack Header",
			validation: (Rule) => Rule.required(),
			to: [{ type: "header" }],
		}),
		defineField({
			name: "technology",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ type: "string", name: "name" },
						{
							name: "description",
							type: "array",
							of: [{ type: "block" }],
							title: "Description",
						},
						{ type: "string", name: "icon" },
					],
				},
			],
			title: "Technology List",
			validation: (Rule) => Rule.required().min(3),
		}),
	],
	preview: { select: { title: "entryName" } },
});
