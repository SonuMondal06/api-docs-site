import { defineField, defineType } from "sanity";

export const careerType = defineType({
	type: "document",
	name: "career",
	title: "Career",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "jobOpenings",
			title: "Job Openings Section",
			type: "object",
			fields: [
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
				{
					name: "title",
					title: "Title",
					type: "string",
				},
				{
					name: "description",
					title: "Description",
					type: "array",
					of: [{ type: "block" }],
				},
				{
					name: "actions",
					type: "array",
					of: [{ type: "reference", to: [{ type: "action" }] }],
					title: "Actions",
					validation: (Rule) => Rule.max(2),
				},
			],
		}),
		defineField({
			name: "careersHeroData",
			title: "Careers Hero Data",
			type: "object",
			fields: [
				defineField({
					name: "careersHeader",
					type: "reference",
					title: "Careers Header",
					to: [{ type: "header" }],
					validation: (Rule) => Rule.required(),
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
			],
		}),
	],
	preview: { select: { title: "entryName" } },
});
