import { defineField, defineType } from "sanity";

export const organizationType = defineType({
	type: "document",
	name: "organization",
	title: "Organization",
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
			name: "alias",
			type: "string",
			title: "Alias",
		}),
		defineField({
			name: "website",
			type: "string",
			title: "Website",
		}),
		defineField({
			name: "logo",
			type: "object",
			title: "Logo",
			fields: [
				{
					name: "default",
					type: "object",
					title: "Icon Logo",
					fields: [
						{ name: "src", type: "image", title: "Image" },
						{ name: "alt", type: "string", title: "Alt Text" },
					],
				},
				{
					name: "organization",
					type: "object",
					title: "Organization Logo",
					fields: [
						{ name: "light", type: "image", title: "Light" },
						{ name: "lightAlt", type: "string", title: "Light Alt Text" },
						{ name: "dark", type: "image", title: "Dark" },
						{ name: "darkAlt", type: "string", title: "Dark Alt Text" },
					],
				},
				{
					name: "poweredBy",
					type: "object",
					title: "Powered By Logo",
					fields: [
						{ name: "light", type: "image", title: "Light" },
						{ name: "lightAlt", type: "string", title: "Light Alt Text" },
						{ name: "dark", type: "image", title: "Dark" },
						{ name: "darkAlt", type: "string", title: "Dark Alt Text" },
					],
				},
			],
		}),
		defineField({
			name: "info",
			type: "object",
			title: "Info",
			fields: [
				{ name: "moto", type: "string", title: "Moto" },
				{ name: "mission", type: "string", title: "Mission" },
				{ name: "insight", type: "text", title: "Insight" },
				{
					name: "vision",
					type: "object",
					title: "Vision",
					fields: [
						{ name: "heading", type: "string", title: "Heading" },
						{ name: "title", type: "string", title: "Title" },
						{
							name: "highlightText",
							type: "string",
							title: "Title Highlight Text",
						},
						{
							name: "titleSuffix",
							type: "string",
							title: "Title Suffix",
						},
						{ name: "quote", type: "string", title: "Quote" },
						{
							name: "quoteHighlightText",
							type: "string",
							title: "Quote Highlight Text",
						},
						{
							name: "quoteSuffix",
							type: "string",
							title: "Quote Suffix",
						},
						{
							name: "description",
							type: "array",
							of: [{ type: "block" }],
							title: "Description",
						},
					],
				},
				{
					name: "values",
					type: "object",
					title: "Values Data",
					fields: [
						{ name: "heading", type: "string", title: "Heading" },
						{ name: "title", type: "string", title: "Title" },
						{ name: "highlightText", type: "string", title: "Highlight Text" },
						{ name: "titleSuffix", type: "string", title: "Title Suffix" },
						{ name: "description", type: "string", title: "Description" },
						{
							name: "values",
							type: "array",
							title: "Values",
							of: [{ type: "reference", to: [{ type: "values" }] }],
						},
					],
				},
				{
					name: "benefits",
					type: "object",
					title: "Benefits Data",
					fields: [
						{ name: "heading", type: "string", title: "Heading" },
						{ name: "title", type: "string", title: "Title" },
						{ name: "description", type: "string", title: "Description" },
						{
							name: "benefits",
							type: "array",
							title: "Benefits",
							of: [{ type: "reference", to: [{ type: "benefits" }] }],
						},
					],
				},
			],
		}),
		defineField({
			name: "team",
			type: "object",
			title: "Team",
			fields: [
				{
					name: "heading",
					type: "string",
					title: "Heading",
				},
				{
					name: "founder",
					type: "reference",
					to: [{ type: "person" }],
					title: "Founder",
				},
				{
					name: "leaders",
					type: "object",
					title: "Leader Data",
					fields: [
						{ name: "title", type: "string", title: "Title" },
						{
							name: "description",
							type: "array",
							of: [{ type: "block" }],
							title: "Description",
						},
						{
							name: "people",
							type: "array",
							title: "People",
							of: [{ type: "reference", to: [{ type: "person" }] }],
						},
					],
				},
				{
					name: "members",
					type: "object",
					title: "Members Data",
					fields: [
						{ name: "title", type: "string", title: "Title" },
						{
							name: "description",
							type: "array",
							of: [{ type: "block" }],
							title: "Description",
						},
						{
							name: "people",
							type: "array",
							title: "People",
							of: [{ type: "reference", to: [{ type: "person" }] }],
						},
					],
				},
			],
		}),
		defineField({
			name: "social",
			type: "array",
			title: "Social Items",
			of: [{ type: "reference", to: [{ type: "socialLink" }] }],
		}),
	],
	preview: { select: { title: "entryName" } },
});
