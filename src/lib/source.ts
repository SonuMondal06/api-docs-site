import { githubDetails } from "@/constants";
import { createSourceAuto } from "@fumadocs/mdx-remote/github";
import { loader } from "fumadocs-core/source";
import { createOpenAPI } from "fumadocs-openapi/server";
import { cache } from "react";
import { createMDXSource } from "fumadocs-mdx";
import { docs, meta } from "~/.source";

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

export const source = loader({
	baseUrl: "/docs",
	source: createMDXSource(docs, meta),
});

export const openapi = createOpenAPI();
