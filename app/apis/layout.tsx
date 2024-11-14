import { baseOptions } from "@/app/layout.config";
import { getDocs } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<DocsLayout tree={(await getDocs("apis")).pageTree} {...baseOptions}>
			{children}
		</DocsLayout>
	);
}
