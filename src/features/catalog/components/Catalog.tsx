/* -----------------Components--------------- */
import { Container } from "@/components/Container";

import { ItemCard } from "@/components/StyledCards";
import { sortCatalogItemsCallback } from "../helpers/callback";
/* -----------------Types--------------- */
import type { CatalogItem } from "../types";

type Props = {
	items: CatalogItem[];
	className?: string;
};

const Catalog = ({ items, className }: Props) => {
	const cardItems = items.sort(sortCatalogItemsCallback).map((item) => {
		const {
			id,
			name,
			description,
			longDescription,
			logo,
			replaces,
			comingSoon,
		} = item;

		return (
			<ItemCard
				id={id}
				key={name}
				title={name}
				description={description}
				longDescription={longDescription || ""}
				logo={logo}
				otherItemsTitle="Replaces"
				otherItemsLogos={replaces}
				tag={comingSoon ? "Coming Soon" : null}
				containerClassName="h-full"
				action={{
					name: "Learn More",
					href: item.href,
					icon: "ArrowRight",
				}}
				className="h-full"
			/>
		);
	});

	return (
		<Container className={className}>
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
				{cardItems}
			</div>
		</Container>
	);
};

export default Catalog;
