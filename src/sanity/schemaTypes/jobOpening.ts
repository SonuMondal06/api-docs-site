import { defineField, defineType } from "sanity";

export const jobOpeningType = defineType({
	name: "jobOpening",
	title: "Job Opening",
	type: "document",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "role",
			type: "string",
			title: "Role",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "href",
			type: "string",
			title: "Application Link",
		}),
		defineField({
			name: "description",
			type: "string",
			title: "Description",
		}),
		defineField({
			name: "salary",
			type: "string",
			title: "Salary",
		}),
		defineField({
			name: "mode",
			type: "string",
			title: "Work Mode",
			options: {
				list: ["Remote", "On-site", "Hybrid"],
			},
		}),
		defineField({
			name: "location",
			type: "string",
			title: "Location",
		}),
		defineField({
			name: "roleType",
			type: "string",
			title: "Role Type",
		}),
	],
	preview: { select: { title: "role" } },
});
