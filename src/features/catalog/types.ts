/* -----------------Types--------------- */
import type { AdaptiveTextContent } from "@/components/Content";
import type { ImageDetails } from "@/types";

export type CatalogItem = {
	id: string;
	itemType: string;
	name: string;
	description: AdaptiveTextContent;
	longDescription: AdaptiveTextContent;
	replaces: ImageDetails[];
	comingSoon: boolean;
	heroImage: {
		src: string;
		alt: string;
	};
	href: string;
	logo: {
		src: string;
		alt: string;
	};
};
