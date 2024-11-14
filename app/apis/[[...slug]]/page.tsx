import { getDocs } from "@/lib/source";
import { openapi } from "@/lib/source";
import { compileMDX } from "@fumadocs/mdx-remote";
import { resolveFile } from "@fumadocs/mdx-remote/github";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;

	const page = (await getDocs("apis")).getPage(params.slug);

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

export async function generateStaticParams() {
	return (await getDocs("apis")).getPages().map((page) => ({
		slug: page.slugs,
	}));
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const page = (await getDocs("apis")).getPage(params.slug);

	if (!page) {
		notFound();
	}

	return {
		title: page.data.title,
	} satisfies Metadata;
}
