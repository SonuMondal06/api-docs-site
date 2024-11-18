import { defineField, defineType } from "sanity";

export const postType = defineType({
	type: "document",
	name: "post",
	title: "Post",
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
			name: "type",
			type: "string",
			title: "Post Type",
			options: {
				list: ["Blog Post", "Customer Story"],
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			type: "string",
			title: "Description",
		}),
		defineField({
			name: "heroImage",
			type: "image",
			title: "Post Image",
			fields: [
				{
					title: "Alternative Text",
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "date",
			type: "string",
			title: "Date",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "datetime",
			type: "string",
			title: "Datetime",
		}),
		defineField({
			name: "authorName",
			type: "string",
			title: "Author Name",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "authorImage",
			type: "image",
			title: "Author Image",
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
			name: "renderMDX",
			title: "Render MDX",
			type: "markdown",
			description: "Defines MDX content for various pages",
		}),
		defineField({
			name: "otherDetails",
			type: "array",
			title: "Other Details",
			of: [
				{
					type: "object",
					fields: [
						{ name: "name", type: "string", title: "Name" },
						{
							name: "description",
							type: "string",
							title: "Description/ Value",
						},
					],
				},
			],
		}),
	],
	preview: { select: { title: "entryName" } },
});
