/* -----------------Globals--------------- */
import Script from "next/script";

/* -----------------Components--------------- */
import BannerHero from "@/components/BannerHero";
import Masonry from "@/components/Masonry";
import { LogoCard, QuoteCard } from "@/components/StyledCards";

/* -----------------Features--------------- */
import {
	type Post,
	generateAllCustomersJsonLd,
	getCustomersPageData,
} from "@/features/organization";

/* -----------------Helpers--------------- */
import { getPostUrl, isDevEnvironment } from "@/helpers";

import { AnalyticsWrapper, allPages } from "@/analytics";

export { generateAllCustomersMetadata as generateMetadata } from "@/features/organization";

const AllCustomersPage = async () => {
	const { heroData, customers } = await getCustomersPageData();

	const items = customers?.map((customer) => {
		const { storyWIP, storySlug, quote } = customer;
		const wipMode = storyWIP && !isDevEnvironment();
		const renderQuoteCard = wipMode ? false : !!storySlug && !!quote;

		return renderQuoteCard ? (
			<QuoteCard
				id={customer.name}
				key={customer.name}
				quote={customer.quote}
				logo={customer.logo}
				action={{
					name: "Read more",
					href: getPostUrl({
						type: "Customer Story",
						slug: customer.storySlug,
					} as Post),
					icon: "ArrowRight",
					external: false,
				}}
				className="w-full"
				containerClassName="w-full"
			/>
		) : (
			<LogoCard
				id={customer.name}
				key={customer.name}
				logo={customer.logo}
				action={{
					name: customer.name,
					href: customer.website,
					external: true,
				}}
				className="w-full"
				containerClassName="w-full"
			/>
		);
	});

	const jsonLd = generateAllCustomersJsonLd(customers);

	return (
		<AnalyticsWrapper pageName={allPages.customers}>
			<section id={allPages.customers}>
				<Script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd }}
				/>

				<BannerHero {...heroData} />

				{!!customers && customers.length > 0 && (
					<div className="mx-auto my-24 max-w-7xl px-6 sm:my-32 lg:px-8">
						<Masonry
							items={items}
							columnBreakpoints={{ sm: 1, md: 1, lg: 2, xl: 3 }}
						/>
					</div>
				)}
			</section>
		</AnalyticsWrapper>
	);
};

export default AllCustomersPage;
