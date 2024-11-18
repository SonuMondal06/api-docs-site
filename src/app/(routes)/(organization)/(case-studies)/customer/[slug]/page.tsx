import { notFound } from "next/navigation";
/* -----------------Globals--------------- */
import Script from "next/script";

import { AnalyticsWrapper, allPages } from "@/analytics";
/* -----------------Features--------------- */
import {
	Blog as Story,
	customersBackAction,
	generateStoryJsonLd,
	getAllCustomerStories,
	getCustomerStoryBySlug,
} from "@/features/organization";
import { isDevEnvironment } from "@/helpers";

/* -----------------Constants--------------- */

export { generateStoryMetadata as generateMetadata } from "@/features/organization";

export const generateStaticParams = async () => {
	const stories = await getAllCustomerStories(true);

	return stories.map((story) => ({
		slug: story.slug,
	}));
};

export const revalidate = 600;

const StoryPage = async ({ params }: { params: { slug: string } }) => {
	const story = await getCustomerStoryBySlug(params.slug);
	const wipMode = story?.isWorkInProgress && !isDevEnvironment();

	if (!story || wipMode) {
		notFound();
	}

	const jsonLd = generateStoryJsonLd(story);

	return (
		<AnalyticsWrapper pageName={allPages.customer}>
			<section id={story.slug}>
				<Script
					id={`customer_story_${story.slug}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>
				{!!story.renderMDX && (
					<Story.Info content={story} backAction={customersBackAction} />
				)}
			</section>
		</AnalyticsWrapper>
	);
};

export default StoryPage;
