import { defineField, defineType } from "sanity";

export const solutionType = defineType({
	type: "document",
	name: "solution",
	title: "Solution",
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
			name: "href",
			type: "string",
			title: "Redirect URL",
		}),
		defineField({
			name: "comingSoon",
			type: "boolean",
			title: "Coming Soon",
			description: "Indicates if the solution is coming soon",
			initialValue: false,
		}),
		defineField({
			name: "description",
			type: "array",
			of: [{ type: "block" }],
			title: "Description",
		}),
		defineField({
			name: "longDescription",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
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
			title: "Long Description",
		}),
		defineField({
			name: "iconImage",
			type: "image",
			title: "Icon Image",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
				{
					title: "As Icon Button",
					name: "asIconButton",
					type: "boolean",
					description:
						"If true, the icon will be used as a button with no background",
					initialValue: false,
				},
			],
		}),
		defineField({
			name: "heroHeader",
			type: "reference",
			title: "Hero Header",

			validation: (Rule) => Rule.required(),
			to: [{ type: "header" }],
		}),
		defineField({
			name: "heroImage",
			type: "image",
			title: "Hero Image",

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
			name: "previewImage",
			type: "image",
			title: "Preview Image",

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

			validation: (Rule) => Rule.required(),
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
				{
					title: "Mobile Hero View",
					name: "mobileHeroView",
					type: "boolean",
					description: "If true, the hero image will be used on mobile devices",
					initialValue: false,
				},
			],
		}),
		defineField({
			name: "features",
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
						{
							type: "image",
							name: "icon",
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
				},
			],
			title: "Features",
		}),
		defineField({
			name: "statsHeader",
			type: "reference",
			title: "Stats Header",

			to: [{ type: "header" }],
		}),
		defineField({
			name: "statsImage",
			type: "image",
			title: "Stats Image",

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
			name: "stats",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ type: "string", name: "name" },
						{ type: "string", name: "value" },
					],
				},
			],
			title: "Stats List",

			validation: (Rule) => Rule.max(4),
		}),
		defineField({
			name: "testimonial",
			type: "reference",
			title: "Testimonial",

			to: [{ type: "testimonial" }],
		}),
	],
	preview: { select: { title: "entryName" } },
});
