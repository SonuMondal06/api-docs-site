import { createSourceAuto } from "@fumadocs/mdx-remote/github";
import { loader } from "fumadocs-core/source";
import { createOpenAPI } from "fumadocs-openapi/server";
import { cache } from "react";

export const getDocs = cache(async () => {
	return loader({
		source: await createSourceAuto({
			github: {
				owner: process.env.GITHUB_OWNER!,
				repo: process.env.GITHUB_REPO!,
				directory: process.env.GITHUB_DIRECTORY!,
				treeSha: process.env.GITHUB_TREE_SHA!,
				accessToken: process.env.GITHUB_ACCESS_TOKEN!,
			},
		}),
		rootDir: "docs",
		baseUrl: "/docs",
	});
});

export const openapi = createOpenAPI();
