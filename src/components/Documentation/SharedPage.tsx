import { githubDetails } from "@/constants";
import { getDocs, openapi, source } from "@/lib/source";
import { compileMDX } from "@fumadocs/mdx-remote";
import { resolveFile } from "@fumadocs/mdx-remote/github";
import { getGithubLastEdit } from "fumadocs-core/server";
import defaultMdxComponents from "fumadocs-ui/mdx";
import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { isDevEnvironment } from "~/src/helpers";
import { cache } from "react";

type SharedPageProps = {
	params: { slug?: string[] };
	section: "docs" | "apis";
};

const LocalSharedPage = ({ params }: Omit<SharedPageProps, "section">) => {
	const page = source.getPage(params.slug);

	if (!page) {
		notFound();
	}

	const MDX = page.data.body;

	return (
		<DocsPage toc={page.data.toc} full={page.data.full}>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX
					components={{ ...defaultMdxComponents, APIPage: openapi.APIPage }}
				/>
			</DocsBody>
		</DocsPage>
	);
};

// Cache the MDX compilation
const compileMDXCached = cache(async (content: string) => {
	return await compileMDX({
		source: content,
		components: {
			...defaultMdxComponents,
			APIPage: openapi.APIPage,
		},
	});
});

// Cache the GitHub last edit time fetch
const getLastEditTime = cache(async (filePathOnGithub: string) => {
	try {
		return await getGithubLastEdit({
			owner: githubDetails.owner,
			repo: githubDetails.repo,
			sha: githubDetails.treeSha,
			token: githubDetails.accessToken,
			path: filePathOnGithub,
		});
		// biome-ignore lint/correctness/noUnusedVariables: Valid use case
	} catch (e) {
		// Empty catch to avoid errors in the console
	}
});

export const SharedPage = async ({ params, section }: SharedPageProps) => {
	if (isDevEnvironment()) {
		return <LocalSharedPage params={params} />;
	}

	const docs = await getDocs(section);
	const page = docs.getPage(params.slug);

	if (!page) {
		notFound();
	}

	const content = await resolveFile(page);
	if (!content) {
		notFound();
	}

	const filePathOnGithub = `${githubDetails.directory}/${section}/${page.file.path}`;

	// Parallel fetch for both MDX compilation and last edit time
	const [compiled, time] = await Promise.all([
		compileMDXCached(content),
		getLastEditTime(filePathOnGithub),
	]);

	return (
		<DocsPage
			toc={compiled.toc}
			editOnGithub={{
				owner: githubDetails.owner,
				repo: githubDetails.repo,
				sha: githubDetails.treeSha,
				path: filePathOnGithub,
			}}
			lastUpdate={time ? new Date(time) : undefined}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsBody>{compiled.content}</DocsBody>
		</DocsPage>
	);
};
