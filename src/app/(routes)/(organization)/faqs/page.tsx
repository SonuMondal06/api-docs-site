/* -----------------Features--------------- */
import { AnalyticsWrapper, allPages } from "@/analytics";
import { Faqs, getFaqsPageData } from "@/features/faqs";
import { isDevEnvironment } from "@/helpers";

/* -----------------Globals--------------- */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
	title: "FAQs",
};

const FaqsPage = async () => {
	const faqsData = await getFaqsPageData();

	const wipMode = faqsData?.isWorkInProgress && !isDevEnvironment();

	if (wipMode) {
		notFound();
	}

	return (
		<AnalyticsWrapper pageName={allPages.faqs}>
			<Faqs {...faqsData} />
		</AnalyticsWrapper>
	);
};

export default FaqsPage;
