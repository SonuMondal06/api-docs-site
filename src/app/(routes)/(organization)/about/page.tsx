/* -----------------Components--------------- */
import { AnalyticsWrapper, allPages } from "@/analytics";
import BannerHero from "@/components/BannerHero";
import { FeaturedTestimonialSection } from "@/components/FeaturedTestimonialSection";

/* -----------------Features--------------- */
import { Roadmap, generateAboutJsonLd } from "@/features/organization";
import { getOrgData } from "@/features/organization";

/* -----------------Helpers--------------- */
import { getAboutData } from "@/helpers";
import Script from "next/script";

export { generateAboutMetadata as generateMetadata } from "@/features/organization";

const AboutPage = async () => {
	const [{ aboutHeroData, roadmapData }, { info, team, name }] =
		await Promise.all([getAboutData(), getOrgData()]);

	const jsonLd = generateAboutJsonLd();

	return (
		<AnalyticsWrapper pageName={allPages.about}>
			<section id={allPages.about}>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>
				<BannerHero {...aboutHeroData} />

				{/* Mission section */}
				<FeaturedTestimonialSection
					quote={info?.insight || ""}
					authorName={team?.founder?.name || ""}
					organizationName={name || ""}
					authorImageUrl={team?.founder?.imageUrl || ""}
					quoteClassName="text-base sm:text-lg"
				/>

				{/* Roadmap section */}
				<Roadmap {...roadmapData} />
			</section>
		</AnalyticsWrapper>
	);
};

export default AboutPage;
