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

type SharedPageProps = {
	params: { slug?: string[] };
	section: "docs" | "apis";
};

export const SharedPage = async ({ params, section }: SharedPageProps) => {
	if (isDevEnvironment()) {
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
	}

	const page = (await getDocs(section)).getPage(params.slug);

	if (!page) {
		notFound();
	}

	const content = await resolveFile(page);
	if (!content) {
		notFound();
	}

	const compiled = await compileMDX({
		source: content,
		components: {
			...defaultMdxComponents,
			APIPage: openapi.APIPage,
		},
	});

	const filePathOnGithub = `${githubDetails.directory}/${section}/${page.file.path}`;

	let time: Date | null = null;

	try {
		time = await getGithubLastEdit({
			owner: githubDetails.owner,
			repo: githubDetails.repo,
			sha: githubDetails.treeSha,
			token: githubDetails.accessToken,
			path: filePathOnGithub,
		});

		// biome-ignore lint/correctness/noUnusedVariables: Valid use case
	} catch (e) {
		// Empty catch to avoid breaking the page
	}

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
