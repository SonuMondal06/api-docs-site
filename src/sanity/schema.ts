import type { SchemaTypeDefinition } from "sanity";
import { schemaTypes } from "./schemaTypes";

export type SanityTagNames = (typeof schemaTypes)[number]["name"];

export const sanityTags: Record<SanityTagNames, string> = schemaTypes.reduce(
	(tags, tag) => {
		tags[tag.name] = tag.name;
		return tags;
	},
	{} as Record<SanityTagNames, string>,
);

export const schema: { types: SchemaTypeDefinition[] } = {
	types: schemaTypes,
};
