import { defineField, defineType } from "sanity";

export const aboutType = defineType({
	type: "document",
	name: "about",
	title: "About",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "aboutHeroData",
			type: "object",
			title: "Hero Data",
			fields: [
				{
					name: "header",
					type: "reference",
					to: [{ type: "header" }],
					title: "Header",
				},
				{
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
				},
			],
		}),
		defineField({
			name: "roadmapData",
			type: "object",
			title: "Roadmap Data",
			fields: [
				{
					name: "header",
					type: "reference",
					to: [{ type: "header" }],
					title: "Header",
				},
				{
					name: "timeline",
					type: "array",
					title: "Timeline",
					of: [{ type: "reference", to: [{ type: "timeline" }] }],
				},
			],
		}),
	],
	preview: { select: { title: "entryName" } },
});
