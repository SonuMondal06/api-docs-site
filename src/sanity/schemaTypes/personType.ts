import { defineField, defineType } from "sanity";

export const personType = defineType({
	type: "document",
	name: "person",
	title: "Person",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
		}),
		defineField({ name: "name", type: "string", title: "Name", hidden: false }),
		defineField({ name: "role", type: "string", title: "Role", hidden: false }),
		defineField({
			name: "href",
			type: "string",
			title: "Redirect URL",
		}),
		defineField({
			name: "organizationName",
			type: "string",
			title: "Organization Name",
		}),
		defineField({
			name: "socialHandle",
			type: "string",
			title: "Social Handle",
		}),
		defineField({
			name: "handleHref",
			type: "string",
			title: "Handle Redirect URL",
		}),
		defineField({
			name: "avatar",
			type: "image",
			title: "Avatar",

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
			name: "funFact",
			type: "array",
			of: [{ type: "block" }],
			title: "Fun Fact",
		}),
	],
	preview: { select: { title: "entryName" } },
});
