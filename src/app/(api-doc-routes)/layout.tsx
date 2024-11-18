import { RootProvider } from "fumadocs-ui/provider";

export default async function DocsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<RootProvider>{children}</RootProvider>
		</main>
	);
}
