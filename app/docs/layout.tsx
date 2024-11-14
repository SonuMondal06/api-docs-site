import { SharedDocsLayout } from "@/components/Layout";
import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
	return <SharedDocsLayout section="docs">{children}</SharedDocsLayout>;
}
