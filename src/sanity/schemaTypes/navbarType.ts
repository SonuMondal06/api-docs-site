import { defineField, defineType } from "sanity";

export const navbarType = defineType({
	type: "document",
	name: "navbar",
	title: "Navbar",
	fields: [
		defineField({
			name: "entryName",
			type: "string",
			title: "Entry Name",
			description: "The name of this entry",

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "solutions",
			type: "object",
			title: "Solutions",
			fields: [
				defineField({
					name: "name",
					type: "string",
					title: "Name",
				}),
				defineField({
					name: "href",
					type: "string",
					title: "Redirect URL",
				}),
				defineField({
					name: "flyoutData",
					type: "array",
					title: "Flyout Data",
					of: [{ type: "reference", to: [{ type: "solution" }] }],
				}),
				defineField({
					name: "flyoutActions",
					type: "array",
					title: "Flyout Actions",
					of: [{ type: "reference", to: [{ type: "action" }] }],
				}),
			],
		}),
		defineField({
			name: "catalogItems",
			type: "object",
			title: "Catalog Items",
			fields: [
				defineField({
					name: "name",
					type: "string",
					title: "Name",
				}),
				defineField({
					name: "href",
					type: "string",
					title: "Redirect URL",
				}),
				defineField({
					name: "flyoutData",
					type: "array",
					title: "Flyout Data",
					of: [{ type: "reference", to: [{ type: "catalogItem" }] }],
				}),
				defineField({
					name: "flyoutActions",
					type: "array",
					title: "Flyout Actions",
					of: [{ type: "reference", to: [{ type: "action" }] }],
				}),
			],
		}),
		defineField({
			name: "company",
			type: "object",
			title: "Company",
			fields: [
				defineField({
					name: "name",
					type: "string",
					title: "Name",
				}),
				defineField({
					name: "href",
					type: "string",
					title: "Redirect URL",
				}),
				defineField({
					name: "flyoutData",
					type: "array",
					title: "Flyout Data",
					of: [
						{
							type: "object",
							fields: [
								defineField({
									name: "name",
									type: "string",
									title: "Name",
								}),
								defineField({
									name: "href",
									type: "string",
									title: "Redirect URL",
								}),
								defineField({
									name: "description",
									type: "array",
									of: [{ type: "block" }],
									title: "Description",
								}),
								defineField({
									name: "image",
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
							],
						},
					],
				}),
				defineField({
					name: "flyoutActions",
					type: "array",
					title: "Flyout Actions",
					of: [{ type: "reference", to: [{ type: "action" }] }],
				}),
			],
		}),
		defineField({
			name: "customers",
			type: "object",
			title: "Customers",
			fields: [
				defineField({
					name: "name",
					type: "string",
					title: "Name",
				}),
				defineField({
					name: "href",
					type: "string",
					title: "Redirect URL",
				}),
			],
		}),
		defineField({
			name: "technology",
			type: "object",
			title: "Technology",
			fields: [
				defineField({
					name: "name",
					type: "string",
					title: "Name",
				}),
				defineField({
					name: "href",
					type: "string",
					title: "Redirect URL",
				}),
			],
		}),
		defineField({
			name: "navActions",
			type: "array",
			title: "Navigation Actions",
			of: [{ type: "reference", to: [{ type: "action" }] }],
		}),
		defineField({
			name: "mobileNavActions",
			type: "array",
			title: "Mobile Navigation Actions",
			of: [{ type: "reference", to: [{ type: "action" }] }],
		}),
	],
	preview: { select: { title: "entryName" } },
});
