/* -----------------Globals--------------- */
import Script from "next/script";

import { AnalyticsWrapper, allPages } from "@/analytics";
import BannerHero from "@/components/BannerHero";

/* -----------------Features--------------- */
import {
	TechFeatureShowcase,
	TechProducts,
	generateTechnologyJsonLd,
} from "@/features/technology";
import { getTechnologyPageData } from "@/features/technology";

export { generateTechnologyMetadata as generateMetadata } from "@/features/technology";

const TechnologyPage = async () => {
	const { heroData, featuresData, technologyData } =
		await getTechnologyPageData();

	const jsonLd = generateTechnologyJsonLd({
		heroData,
		featuresData,
		technologyData,
	});

	return (
		<AnalyticsWrapper pageName={allPages.technology}>
			<section id={allPages.technology}>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: jsonLd,
					}}
				/>

				<BannerHero {...heroData} />

				<TechFeatureShowcase {...featuresData} />

				<TechProducts {...technologyData} />
			</section>
		</AnalyticsWrapper>
	);
};

export default TechnologyPage;
