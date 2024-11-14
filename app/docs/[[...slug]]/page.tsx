import { getDocs } from "@/lib/source";
import {
	DocsPage,
	DocsBody,
	DocsDescription,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { openapi } from "@/lib/source";

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const source = await getDocs();

	console.log({ source });
	console.log(source.getPages());

	const page = source.getPage(params.slug);
	if (!page) {
		notFound();
	}

	// const MDX = page.data.body;

	return (
		// <DocsPage toc={page.data.toc} full={page.data.full}>
		<DocsPage>
			<DocsTitle>{page.data.title}</DocsTitle>
			{/* <DocsDescription>{page.data.description}</DocsDescription> */}
			<DocsBody>
				{/* <MDX components={{ ...defaultMdxComponents }} /> */}
			</DocsBody>
		</DocsPage>
	);
}

// export async function generateStaticParams() {
//   const source = await getDocs();
//   return source.generateParams();
// }

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	const source = await getDocs();
	const page = source.getPage(params.slug);
	if (!page) {
		notFound();
	}

	return {
		title: page.data.title,
		// description: page.data.description,
	};
}
