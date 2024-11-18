import { defineField, defineType } from "sanity";

export const splashPageType = defineType({
	type: "document",
	name: "splashPage",
	title: "Splash Page",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
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
			name: "partnersTitle",
			type: "string",
			title: "Partners Title",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "partnersLogos",
			type: "array",
			of: [
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
			title: "Partners Logos",

			validation: (Rule) => Rule.required().min(4),
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
						{ type: "string", name: "icon" },
					],
				},
			],
			title: "Features List",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "solutionsHeader",
			type: "reference",
			title: "Solutions Header",

			validation: (Rule) => Rule.required(),
			to: [{ type: "header" }],
		}),
		defineField({
			name: "solutions",
			type: "array",
			of: [{ type: "reference", to: [{ type: "solution" }] }],
			title: "Solutions List",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "tweetCardHeader",
			type: "reference",
			title: "Tweet Card Header",

			validation: (Rule) => Rule.required(),
			to: [{ type: "header" }],
		}),
		defineField({
			name: "tweetId",
			type: "string",
			title: "Tweet ID",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "startupProgramsTitle",
			type: "string",
			title: "Startup Programs Title",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "startupProgramsLogos",
			type: "array",
			of: [
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
			title: "Startup Programs Logos",

			validation: (Rule) => Rule.required().min(4),
		}),
		defineField({
			name: "testimonialsHeader",
			type: "reference",
			title: "Testimonials Header",

			validation: (Rule) => Rule.required(),
			to: [{ type: "header" }],
		}),
		defineField({
			name: "featuredTestimonial",
			type: "reference",
			title: "Featured Testimonial",

			to: [{ type: "testimonial" }],
		}),
		defineField({
			name: "testimonialCol1",
			type: "array",
			of: [{ type: "reference", to: [{ type: "testimonial" }] }],
			title: "Testimonial Column 1",
		}),
		defineField({
			name: "testimonialCol2",
			type: "array",
			of: [{ type: "reference", to: [{ type: "testimonial" }] }],
			title: "Testimonial Column 2",
		}),
		defineField({
			name: "testimonialCol3",
			type: "array",
			of: [{ type: "reference", to: [{ type: "testimonial" }] }],
			title: "Testimonial Column 3",
		}),
		defineField({
			name: "testimonialCol4",
			type: "array",
			of: [{ type: "reference", to: [{ type: "testimonial" }] }],
			title: "Testimonial Column 4",
		}),
	],
	preview: { select: { title: "entryName" } },
});
