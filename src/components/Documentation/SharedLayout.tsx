import { baseOptions } from "@/app/(api-doc-routes)/layout.config";
import { getDocs } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

type DocsLayoutProps = {
	children: ReactNode;
	section: "docs" | "apis";
};

export const SharedLayout = async ({ children, section }: DocsLayoutProps) => {
	return (
		<DocsLayout tree={(await getDocs(section)).pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
};
