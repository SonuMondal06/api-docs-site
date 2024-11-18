import type { AdaptiveTextContent } from "@/components/Content";

export type SolutionItem = {
	id: string;
	name: string;
	description: AdaptiveTextContent;
	longDescription: AdaptiveTextContent;
	icon: {
		src: string;
		alt: string;
		asIconButton: boolean;
	};
	comingSoon: boolean;
	heroImage: {
		src: string;
		alt: string;
	};
	href: string;
};
