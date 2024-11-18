import type { AdaptiveTextContent } from "@/components/Content";

export type Testimonial = {
	body: AdaptiveTextContent;
	author: {
		name: string;
		handle?: string;
		handleHref?: string;
		imageUrl: string;
		logoUrl?: string;
		org?: string;
		role?: string;
	};
};
