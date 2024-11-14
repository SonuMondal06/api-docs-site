import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { getDocs } from "@/lib/source";

export default async function Layout({ children }: { children: ReactNode }) {
	const source = await getDocs();

	return (
		<DocsLayout tree={source.pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
}
