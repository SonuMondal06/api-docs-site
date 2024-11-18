import { defineField, defineType } from "sanity";

export const faqsSectionType = defineType({
	type: "document",
	name: "faqsSection",
	title: "FAQs Section",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "sectionTitle",
			type: "string",
			title: "Section Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "faqItems",
			type: "array",
			title: "FAQ Items",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "question",
							type: "string",
							title: "Question",
							validation: (Rule) => Rule.required(),
						},
						{
							name: "answer",
							type: "array",
							title: "Answer",
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
							validation: (Rule) => Rule.required(),
						},
					],
				},
			],
		}),
	],
	preview: { select: { title: "entryName" } },
});

export const faqsPageType = defineType({
	type: "document",
	name: "faqsPage",
	title: "FAQs Page",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "isWorkInProgress",
			type: "boolean",
			title: "Work In Progress",
			description: "Indicates if the post is a work in progress",
			initialValue: false,
		}),
		defineField({
			name: "faqsHeader",
			type: "reference",
			title: "FAQs Header",
			to: [{ type: "header" }],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "faqsSections",
			type: "array",
			title: "FAQS Section",
			of: [{ type: "reference", to: [{ type: "faqsSection" }] }],
		}),
	],
	preview: { select: { title: "entryName" } },
});
