/* -----------------Components--------------- */
import BannerHero from "@/components/BannerHero";
import { ComingSoonSection } from "@/components/ComingSoonSection";
import { FeaturedTestimonialSection } from "@/components/FeaturedTestimonialSection";
import { SolutionStats } from "@/features/solutions";

/* -----------------Features--------------- */
import { AnalyticsWrapper, allPages } from "@/analytics";
import {
	SolutionFeatures,
	generateSolutionJsonLd,
	getAllSolutionsData,
	getSolutionWithHref,
} from "@/features/solutions";
import {
	getPascalCase,
	getPlainTextFromAdaptiveText,
	getPlainTextFromTitle,
	getPostUrl,
} from "@/helpers";

import type { ActionButtonProps } from "@/components/ActionButton";
import type { Post } from "@/features/organization";
/* -----------------Globals--------------- */
import { notFound } from "next/navigation";
import Script from "next/script";

export { generateSolutionMetadata as generateMetadata } from "@/features/solutions";

export const generateStaticParams = async () => {
	const solutions = await getAllSolutionsData(true);

	if (!solutions) {
		throw new Error("Solutions not found!");
	}

	const items = solutions.map((item) => ({
		name: item.href.split("/").pop(),
	}));

	return items;
};

export const revalidate = 600;

export default async function Page({ params }: { params: { name: string } }) {
	const href = `/${allPages.solutions}/${params.name}`;
	const solution = await getSolutionWithHref(href);

	if (!solution?.heroData) {
		notFound();
	}

	const { heroData, featuresData, statsData, testimonialData, comingSoon } =
		solution;

	if (comingSoon) {
		return <ComingSoonSection {...heroData} />;
	}

	const solutionsActions: ActionButtonProps[] =
		!!testimonialData && !!testimonialData.storySlug
			? [
					{
						name: "Read Customer Story",
						href: getPostUrl({
							type: "Customer Story",
							slug: testimonialData.storySlug,
						} as Post),
						icon: "ArrowRight",
					},
				]
			: [];

	const name =
		getPlainTextFromTitle(
			heroData.title,
			heroData.highlightText,
			heroData.titleSuffix,
		) ?? getPascalCase(params.name);

	const description = getPlainTextFromAdaptiveText(heroData.description ?? "");

	const jsonLd = generateSolutionJsonLd({
		solution: {
			name,
			description,
			heroImage: heroData.heroImage,
			comingSoon: comingSoon ?? false,
		},
	});

	return (
		<AnalyticsWrapper pageName={allPages.solutions}>
			<section id={params.name}>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>

				<BannerHero {...solution.heroData} className="bg-gray-900" />

				<SolutionFeatures {...featuresData} />

				<div className="bg-gray-900">
					<SolutionStats {...statsData} />
				</div>

				{!!solution.testimonialData && (
					<FeaturedTestimonialSection
						{...testimonialData}
						actions={solutionsActions}
					/>
				)}
			</section>
		</AnalyticsWrapper>
	);
}
