import { githubDetails } from "@/constants/github";
import { createSourceAuto } from "@fumadocs/mdx-remote/github";
import { loader } from "fumadocs-core/source";
import { createOpenAPI } from "fumadocs-openapi/server";
import { cache } from "react";

export const getDocs = cache(async (rootDir: "docs" | "apis") => {
	return loader({
		source: await createSourceAuto({
			github: {
				owner: githubDetails.owner,
				repo: githubDetails.repo,
				directory: githubDetails.directory,
				treeSha: githubDetails.treeSha,
				accessToken: githubDetails.accessToken,
			},
		}),
		rootDir,
		baseUrl: `/${rootDir}`,
	});
});

export const openapi = createOpenAPI();
