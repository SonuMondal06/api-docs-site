import { baseOptions } from "@/app/(api-doc-routes)/layout.config";
import { getDocs, source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { isDevEnvironment } from "@/helpers";

type DocsLayoutProps = {
	children: ReactNode;
	section: "docs" | "apis";
};

export const SharedLayout = async ({ children, section }: DocsLayoutProps) => {
	const src = isDevEnvironment() ? source : await getDocs(section);
	return (
		<DocsLayout tree={src.pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
};
