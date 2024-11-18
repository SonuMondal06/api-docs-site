/* -----------------Globals--------------- */
import { notFound } from "next/navigation";
import Script from "next/script";

import { AnalyticsWrapper, allPages } from "@/analytics";
/* -----------------Features--------------- */
import {
	CatalogItemFeatures,
	CatalogItemHero,
	ExploreCatalog,
	generateProductJsonLd,
	getAllCatalogItemsData,
	getCatalogItemWithHref,
	getCatalogItemsWithoutHref,
	getExploreCatalogHeader,
} from "@/features/catalog";
import {
	getPascalCase,
	getPlainTextFromAdaptiveText,
	getPlainTextFromTitle,
} from "@/helpers";

export { generateProductMetadata as generateMetadata } from "@/features/catalog";

export const generateStaticParams = async () => {
	const catalogItems = await getAllCatalogItemsData(true);

	if (!catalogItems) {
		throw new Error("No Catalog Items (Products) data found!");
	}

	const items = catalogItems
		.map((item) => item.href.split("/"))
		.filter((parts) => parts.includes("products"))
		.map((parts) => ({
			name: parts.pop(),
		}));

	return items;
};

export const revalidate = 600;

export default async function Page({ params }: { params: { name: string } }) {
	const href = `/${allPages.products}/${params.name}`;

	const product = await getCatalogItemWithHref(href);

	if (!product?.heroData) {
		return notFound();
	}

	const [items, exploreCatalogHeader] = await Promise.all([
		getCatalogItemsWithoutHref(href),
		getExploreCatalogHeader(),
	]);

	const { heroData, featuresData, comingSoon } = product;

	const name =
		getPlainTextFromTitle(
			heroData.title,
			heroData.highlightText,
			heroData.titleSuffix,
		) ?? getPascalCase(params.name);

	const description = getPlainTextFromAdaptiveText(heroData.description ?? "");

	const jsonLd = generateProductJsonLd({
		product: {
			name,
			description,
			logo: heroData.logo,
			heroImage: heroData.heroImage,
			comingSoon: comingSoon ?? false,
		},
	});

	return (
		<AnalyticsWrapper pageName={allPages.products}>
			<section id={params.name}>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>
				<CatalogItemHero {...heroData} comingSoon={comingSoon ?? false} />

				{!comingSoon && <CatalogItemFeatures {...featuresData} />}

				<ExploreCatalog {...exploreCatalogHeader} items={items} />
			</section>
		</AnalyticsWrapper>
	);
}
