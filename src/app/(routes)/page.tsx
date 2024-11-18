/* -----------------Components--------------- */
import { AnalyticsWrapper, allPages } from "@/analytics";
import { Container } from "@/components/Container";
import LogoClouds from "@/components/LogoClouds";

/* -----------------Features--------------- */
import {
	Features,
	Hero,
	Solutions,
	Testimonials,
	TweetCard,
	getSplashPageData,
} from "@/features/splash";
import { generateSplashJsonLd, getCTAData } from "@/helpers";
import { CTA } from "@/layouts";
import Script from "next/script";

const Splash = async () => {
	const {
		heroData,
		partnersLogoCloudsData,
		featuresData,
		solutionsSection,
		tweetCardData,
		startupProgramsLogoCloudsData,
		testimonialsData,
	} = await getSplashPageData();

	const jsonLd = generateSplashJsonLd({
		heroData,
		partnersLogoCloudsData,
		featuresData,
		startupProgramsLogoCloudsData,
		testimonialsData,
	});

	const CTAData = await getCTAData();

	return (
		<AnalyticsWrapper pageName={allPages.splash}>
			<section id={allPages.splash}>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>
				<div className="flex min-h-screen flex-col">
					<Hero {...heroData} className="bg-white py-16 lg:py-8" />

					<LogoClouds
						{...partnersLogoCloudsData}
						className="bg-white pt-8 pb-24 sm:pb-32"
					/>

					<Features {...featuresData} className="bg-gray-900 py-16 sm:py-20" />

					<div className="bg-gray-100">
						<Container>
							<Solutions {...solutionsSection} />
						</Container>
					</div>

					<div className="bg-gray-900">
						<TweetCard
							{...tweetCardData}
							tweetId="1694465309749473287"
							className="py-16 lg:py-32"
						/>
					</div>

					<LogoClouds
						{...startupProgramsLogoCloudsData}
						invertedBg
						className="bg-gray-900 pt-8 pb-24 sm:pb-32"
					/>

					<Testimonials
						{...testimonialsData}
						className="bg-gray-100 py-16 sm:py-20"
					/>

					<CTA {...CTAData} className="bg-slate-900" />
				</div>
			</section>
		</AnalyticsWrapper>
	);
};

export default Splash;
