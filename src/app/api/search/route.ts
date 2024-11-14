import {
	createSearchAPI,
	type AdvancedIndex,
} from "fumadocs-core/search/server";
import { resolveFile } from "@fumadocs/mdx-remote/github";
import { getDocs } from "@/lib/source";
import { remarkStructure, structure } from "fumadocs-core/mdx-plugins";
import { v4 as uuidv4 } from "uuid";

const createSearchIndexes = async (section: "docs" | "apis") => {
	return await Promise.all(
		(await getDocs(section)).getPages().map(async (page) => {
			const content = await resolveFile(page);

			if (!content) {
				return null;
			}

			const structuredData = structure(content, [remarkStructure]);

			return {
				title: page.data.title,
				url: page.url,
				id: uuidv4(),
				structuredData: structuredData,
			} as AdvancedIndex;
		}),
	);
};

const getAllIndexes = async () => {
	const docs = await createSearchIndexes("docs");
	const apis = await createSearchIndexes("apis");

	return docs.concat(apis).filter((index) => index !== null);
};

const searchIndexes = await getAllIndexes();

export const { GET } = createSearchAPI("advanced", {
	indexes: searchIndexes,
});
