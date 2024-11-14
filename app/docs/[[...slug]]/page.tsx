import { SharedPage } from "@/components/Page";
import {
	generateDocsMetadata,
	generateDocsStaticParams,
} from "@/helpers/metadata";

export default async function Page(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	return <SharedPage params={params} section="docs" />;
}

export async function generateStaticParams() {
	return generateDocsStaticParams("docs");
}

export async function generateMetadata(props: {
	params: Promise<{ slug?: string[] }>;
}) {
	const params = await props.params;
	return generateDocsMetadata(params, "docs");
}
