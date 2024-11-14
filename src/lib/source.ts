import { githubDetails } from "@/constants/github";
import { createSourceAuto } from "@fumadocs/mdx-remote/github";
import { loader } from "fumadocs-core/source";
import { createOpenAPI } from "fumadocs-openapi/server";
import { cache } from "react";

export const getDocs = cache(async (rootDir: "docs" | "apis") => {
	return loader({
		source: await createSourceAuto({
			github: githubDetails,
		}),
		rootDir,
		baseUrl: `/${rootDir}`,
	});
});

export const openapi = createOpenAPI();
