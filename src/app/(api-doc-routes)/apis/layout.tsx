import { SharedLayout } from "@/components/Documentation/SharedLayout";
import type { ReactNode } from "react";

export const maxDuration = 60;

export default async function Layout({ children }: { children: ReactNode }) {
	return <SharedLayout section="apis">{children}</SharedLayout>;
}
