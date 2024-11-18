import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
	type: "document",
	name: "testimonial",
	title: "Testimonial",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "quote",
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
			title: "Quote",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "authorName",
			type: "string",
			title: "Author Name",
		}),
		defineField({
			name: "authorRole",
			type: "string",
			title: "Author Role",
		}),
		defineField({
			name: "authorAvatar",
			type: "image",
			title: "Author Avatar",
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
			name: "socialHandle",
			type: "string",
			title: "Author Social Handle",
		}),
		defineField({
			name: "handleHref",
			type: "string",
			title: "Author Handle Redirect URL",
		}),
		defineField({
			name: "organizationName",
			type: "string",
			title: "Organization Name",
		}),
		defineField({
			name: "organizationLogo",
			type: "image",
			title: "Organization Logo",
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
			name: "customerStory",
			type: "reference",
			to: [{ type: "post" }],
			title: "Customer Story",
		}),
	],
	preview: { select: { title: "entryName" } },
});
