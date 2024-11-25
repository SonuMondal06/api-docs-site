import { SharedPage } from "@/components/Documentation/SharedPage";
import {
	generateDocsMetadata,
	// generateDocsStaticParams,
} from "@/helpers/metadata";

export const dynamic = "force-static";

export const maxDuration = 30;

export const revalidate = 300;

const startTime = Date.now();

export default async function Page({
	params,
}: {
	params: { slug?: string[] };
}) {
	// biome-ignore lint/suspicious/noConsole lint/suspicious/noConsoleLog: Valid use case
	console.log({ params, timeElapsed: `${Date.now() - startTime}ms` });
	const result = <SharedPage params={params} section="docs" />;
	// biome-ignore lint/suspicious/noConsole lint/suspicious/noConsoleLog: Valid use case
	console.log(`Page render complete: ${Date.now() - startTime}ms`);
	return result;
}

// export async function generateStaticParams() {
// 	const staticParamsStart = Date.now();
// 	// biome-ignore lint/suspicious/noConsole lint/suspicious/noConsoleLog: Valid use case
// 	console.log(`Generating docs static params at ${Date.now() - startTime}ms`);
// 	const result = await generateDocsStaticParams("docs");
// 	// biome-ignore lint/suspicious/noConsole lint/suspicious/noConsoleLog: Valid use case
// 	console.log(
// 		`Static params generated in ${Date.now() - staticParamsStart}ms (total: ${Date.now() - startTime}ms)`,
// 	);
// 	return result;
// }

export async function generateMetadata(props: {
	params: { slug?: string[] };
}) {
	const metadataStart = Date.now();
	// biome-ignore lint/suspicious/noConsole lint/suspicious/noConsoleLog: Valid use case
	console.log(`Generating docs metadata at ${Date.now() - startTime}ms`);
	const result = await generateDocsMetadata(props.params, "docs");
	// biome-ignore lint/suspicious/noConsole lint/suspicious/noConsoleLog: Valid use case
	console.log(
		`Metadata generated in ${Date.now() - metadataStart}ms (total: ${Date.now() - startTime}ms)`,
	);
	return result;
}
