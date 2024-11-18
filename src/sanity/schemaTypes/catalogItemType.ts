import { defineField, defineType } from "sanity";

export const catalogItemType = defineType({
	type: "document",
	name: "catalogItem",
	title: "CatalogItem",
	description:
		"Defines all details present on detail view page for a service or product",
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
			hidden: false,
		}),
		defineField({
			name: "comingSoon",
			type: "boolean",
			title: "Coming Soon",
			description: "Indicates if the catalog item is coming soon",
			initialValue: false,
		}),
		defineField({
			name: "actions",
			type: "array",
			of: [{ type: "reference", to: [{ type: "action" }] }],
			title: "Actions",

			validation: (Rule) => Rule.max(2),
		}),
		defineField({
			name: "itemType",
			type: "string",
			title: "Item Type",

			validation: (Rule) => Rule.required(),
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
			name: "featuresHeader",
			type: "reference",
			title: "Features Header",

			validation: (Rule) => Rule.required(),
			to: [{ type: "header" }],
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
			title: "Features",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "replaces",
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
			title: "Replaces",
		}),
	],
	preview: { select: { title: "entryName" } },
});
