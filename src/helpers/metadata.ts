import { getDocs } from "@/lib/source";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateDocsMetadata(
	params: { slug?: string[] },
	section: "docs" | "apis",
): Promise<Metadata> {
	const page = (await getDocs(section)).getPage(params.slug);

	if (!page) {
		notFound();
	}

	return {
		title: page.data.title,
	};
}

export async function generateDocsStaticParams(section: "docs" | "apis") {
	return (await getDocs(section)).getPages().map((page) => ({
		slug: page.slugs,
	}));
}
