import { defineField, defineType } from "sanity";

export const actionType = defineType({
	type: "document",
	name: "action",
	title: "Action",
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
			title: "Action Name",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "href",
			type: "string",
			title: "Redirect URL",
			hidden: false,
		}),
		defineField({
			name: "icon",
			type: "string",
			title: "Icon Name (Icon Right Default)",
			hidden: false,
		}),
		defineField({
			name: "primary",
			type: "boolean",
			title: "Set as Primary Action",
		}),
		defineField({
			name: "external",
			type: "boolean",
			title: "Set as External Redirect",
		}),
		defineField({
			name: "iconLeft",
			type: "string",
			title: "Icon Left Name",
		}),
		defineField({
			name: "iconRight",
			type: "string",
			title: "Icon Right Name",
		}),
	],
	preview: { select: { title: "entryName" } },
	initialValue: {
		primary: false,
		external: false,
	},
});
