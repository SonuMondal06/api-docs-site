import { ActionGroup } from "@/components/ActionGroup";
import { Container } from "@/components/Container";
import { Content } from "@/components/Content";
import { NewsletterForm } from "@/components/Newsletter";
import {
	generateChangelogJsonLd,
	getChangelogHeaderData,
} from "@/features/changelog";
import { isDevEnvironment } from "@/helpers";
import { notFound } from "next/navigation";
import Script from "next/script";

export { generateChangelogMetadata as generateMetadata } from "@/features/changelog";

export default async function ChangelogLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const {
		heading,
		title,
		highlightText,
		titleSuffix,
		description,
		actions,
		isWorkInProgress,
	} = await getChangelogHeaderData();

	const wipMode = isWorkInProgress && !isDevEnvironment();

	if (wipMode) {
		notFound();
	}

	const jsonLd = generateChangelogJsonLd();

	return (
		<main className="bg-gray-50">
			<Script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: jsonLd,
				}}
			/>
			<Container>
				<Content justifyContent="center" className="pt-24 pb-16">
					<Content.Label textAlign="center">{heading}</Content.Label>
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
						textAlign="center"
					/>
					<Content.AdaptiveText textContent={description} textAlign="center" />
					<ActionGroup actions={actions} className="mt-8" />
				</Content>
				<NewsletterForm className="newsletter" />
				{children}
			</Container>
		</main>
	);
}
