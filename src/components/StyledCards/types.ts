import type { ImageDetails } from "@/types";
import type { ActionButtonProps } from "../ActionButton";
import type { AdaptiveTextContent } from "../Content";

type BaseProps = {
	id: string;
	action?: ActionButtonProps;
	className?: string;
	containerClassName?: string;
};

type CardContent = BaseProps & {
	title: string;
	description: AdaptiveTextContent;
};

export type BaseCardProps = BaseProps & {
	children: React.ReactNode;
};

export type ContentCardProps = CardContent & {
	image: ImageDetails;
};

export type TitleCardProps = CardContent & {
	logo: ImageDetails;
};

export type LogoCardProps = BaseProps & {
	logo: ImageDetails;
};

export type ItemCardProps = CardContent & {
	logo: ImageDetails;
	longDescription: AdaptiveTextContent;
	tag?: string | null;
	otherItemsTitle?: string;
	otherItemsLogos?: ImageDetails[];
};

export type QuoteCardProps = BaseProps & {
	quote: AdaptiveTextContent;
	logo: ImageDetails;
};
