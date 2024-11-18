/* ----------------- Features ----------------- */
import { AnalyticsWrapper, allPages } from "@/analytics";
import BannerHero from "@/components/BannerHero";

/* ----------------- Components ----------------- */
import {
	Catalog,
	generateAllServicesJsonLd,
	getAllCatalogItemsData,
	getServicesPage,
} from "@/features/catalog";
import { getPlainTextFromAdaptiveText } from "@/helpers";
/* ----------------- Globals ----------------- */
import Script from "next/script";

export { generateAllServicesMetadata as generateMetadata } from "@/features/catalog";

const ServicesPage = async () => {
	const [{ heroData }, items] = await Promise.all([
		getServicesPage(),
		getAllCatalogItemsData(),
	]);

	const jsonLd = await generateAllServicesJsonLd(
		heroData,
		items.map((item) => ({
			name: item.name,
			description: getPlainTextFromAdaptiveText(item.description),
			logo: {
				src: item.logo.src,
				alt: item.logo.alt,
			},
			heroImage: {
				src: item.heroImage.src,
				alt: item.heroImage.alt,
			},
			comingSoon: item.comingSoon ?? false,
		})),
	);

	return (
		<AnalyticsWrapper pageName={allPages.services}>
			<section id="services">
				<Script
					id="services-metadata"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>
				<BannerHero {...heroData} />

				<div className="bg-gray-100 py-16">
					<Catalog items={items} className="py-16 sm:py-20" />
				</div>
			</section>
		</AnalyticsWrapper>
	);
};

export default ServicesPage;
