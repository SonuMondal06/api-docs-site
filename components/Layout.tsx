import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { getDocs } from "@/lib/source";

interface DocsLayoutProps {
	children: ReactNode;
	section: "docs" | "apis";
}

export async function SharedDocsLayout({ children, section }: DocsLayoutProps) {
	return (
		<DocsLayout tree={(await getDocs(section)).pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
}
