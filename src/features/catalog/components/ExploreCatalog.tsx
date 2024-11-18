/* -----------------Globals--------------- */
import { type AdaptiveTextContent, Content } from "@/components/Content";
import Masonry from "@/components/Masonry";

/* -----------------Components--------------- */
import { TitleCard } from "@/components/StyledCards";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Types--------------- */
import type { ImageDetails, SectionHeader } from "@/types";

type Item = {
	id: string;
	logo: ImageDetails;
	title: string;
	description: AdaptiveTextContent;
	href: string;
};

export type ExploreCatalogProps = {
	items: Item[];
} & SectionHeader;

const ExploreCatalog = ({
	title,
	highlightText,
	titleSuffix,
	description,
	heading,
	items,
	className,
}: ExploreCatalogProps) => {
	const cards = items.map((item) => (
		<TitleCard
			id={item.id}
			key={item.logo.alt}
			title={item.title}
			description={item.description}
			logo={item.logo}
			action={{
				name: "",
				href: item.href,
			}}
			className="w-full"
			containerClassName="w-full"
		/>
	));

	return (
		<section
			id="explore-catalog"
			className={cn(
				"relative isolate bg-gradient-to-b from-gray-100 to-white py-24 sm:py-32",
				className,
			)}
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Content justifyContent="center" containerClassName="lg:max-w-4xl">
					<Content.Label textAlign="center">{heading}</Content.Label>
					<Content.Title
						textAlign="center"
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
					/>
					<Content.AdaptiveText textContent={description} textAlign="center" />
				</Content>

				<div className="mt-16 w-full max-w-7xl ">
					<Masonry
						items={cards}
						columnBreakpoints={{ sm: 1, md: 1, lg: 2, xl: 3 }}
						fillOrder="middleFirst"
					/>
				</div>
			</div>
		</section>
	);
};

export default ExploreCatalog;
