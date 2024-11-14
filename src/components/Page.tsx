import { getDocs, openapi } from "@/lib/source";
import { compileMDX } from "@fumadocs/mdx-remote";
import { resolveFile } from "@fumadocs/mdx-remote/github";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";

interface SharedPageProps {
	params: { slug?: string[] };
	section: "docs" | "apis";
}

export async function SharedPage({ params, section }: SharedPageProps) {
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

	return (
		<DocsPage toc={compiled.toc}>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsBody>{compiled.content}</DocsBody>
		</DocsPage>
	);
}
