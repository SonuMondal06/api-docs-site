import { SharedPage } from "@/components/Documentation/SharedPage";
import {
	generateDocsMetadata,
	generateDocsStaticParams,
} from "@/helpers/metadata";

export const maxDuration = 30;

export const revalidate = 300;

export default async function Page({
	params,
}: {
	params: { slug?: string[] };
}) {
	return <SharedPage params={params} section="apis" />;
}

export async function generateStaticParams() {
	return generateDocsStaticParams("apis");
}

export async function generateMetadata({
	params,
}: {
	params: { slug?: string[] };
}) {
	return generateDocsMetadata(params, "apis");
}
