import type { AvailablePages } from "@/analytics";
import type { ActionButtonProps } from "@/components/ActionButton";
import type { TitleProps } from "@/components/Content";
import type { AdaptiveTextContent } from "@/components/Content";

export type ImageDetails = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export type SectionHeader<T extends React.ElementType = "h1"> = {
	heading?: string;
	description?: AdaptiveTextContent;
	actions?: ActionButtonProps[];
	className?: string;
} & TitleProps<T>;

export type SectionWithImage<T extends React.ElementType = "h1"> = {
	heroImage: ImageDetails;
} & SectionHeader<T>;

export type OGImageParams = {
	title: string;
} & ImageDetails;

export type DefaultOGTemplate = {
	pageName: AvailablePages;
	templateType: "default";
	title: string;
	highlightText: string;
	titleSuffix: string;
};

export type FeaturedOGTemplate = {
	pageName: AvailablePages;
	templateType: "featured";
	title: string;
	tagline: string;
	image: string;
	icon?: string;
	size?: string;
	frame?: "default" | "cover" | "mobile";
};
