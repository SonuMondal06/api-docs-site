import { baseOptions } from "@/app/(api-doc-routes)/layout.config";
import { getDocs, source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { isDevEnvironment } from "@/helpers";
import { cache } from "react";

type DocsLayoutProps = {
	children: ReactNode;
	section: "docs" | "apis";
};

const getDocsSource = cache(async (section: "docs" | "apis") => {
	return isDevEnvironment() ? source : await getDocs(section);
});

export const SharedLayout = async ({ children, section }: DocsLayoutProps) => {
	const src = await getDocsSource(section);
	return (
		<DocsLayout tree={src.pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
};
