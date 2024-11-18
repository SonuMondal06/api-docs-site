import { sanityFetch } from "@/sanity/lib/client";
import { FAQS_PAGE_QUERY } from "@/sanity/lib/queries";
import type { FaqsProps } from "../components/Faqs";

export const getFaqsPageData = async (): Promise<FaqsProps> => {
	const rawData = await sanityFetch<FaqsProps[]>({
		query: FAQS_PAGE_QUERY,
	});

	const data = rawData[0];

	if (!data) {
		return {} as FaqsProps;
	}

	return data;
};
