/* -----------------Components--------------- */
import type { AdaptiveTextContent } from "@/components/Content";
import type { BsIconName, IconName } from "@/components/Icon";
import type { ImageDetails, SectionHeader } from "@/types";

export type Logo = {
	src: string;
	alt: string;
};

export type Person = {
	name: string;
	role: string;
	href: string;
	imageUrl: string;
	funFact?: AdaptiveTextContent;
};

export type Post = {
	type: "Blog Post" | "Customer Story";
	title: string;
	slug: string;
	isWorkInProgress: boolean;
	description: string;
	imageUrl: string;
	date: string;
	datetime: string;
	author: {
		name: string;
		imageUrl: string;
	};
	renderMDX: string;
	otherDetails: {
		name: string;
		description: string;
	}[];
};

export type TeamProps = {
	title?: string;
	description?: AdaptiveTextContent;
	people: Person[];
};

export type SocialLinkItem = {
	name: string;
	href: string;
	external?: boolean;
	icon?: BsIconName;
};

export type Organization = {
	name: string;
	alias: string;
	website: string;
	logo: {
		organization?: {
			light: Logo;
			dark: Logo;
		};
		poweredBy?: {
			light: Logo;
			dark: Logo;
		};
	} & Logo;
	description?: string;
	info: {
		moto: string;
		mission: string;
		insight: string;
		vision: VisionProps;
		values: ValuesProps;
		benefits: BenefitsProps;
	};
	team: {
		founder: Person;
		leaders: TeamProps;
		members: TeamProps;
	};
	social: {
		twitter?: SocialLinkItem;
		github?: SocialLinkItem;
		linkedin?: SocialLinkItem;
		discord?: SocialLinkItem;
		telegram?: SocialLinkItem;
		youtube?: SocialLinkItem;
		instagram?: SocialLinkItem;
		medium?: SocialLinkItem;
		facebook?: SocialLinkItem;
	};
};

export type VisionProps = {
	quote?: string;
	quoteHighlightText?: string;
	quoteSuffix?: string;
} & SectionHeader;

export type ValuesProps = {
	values: {
		name: string;
		description: AdaptiveTextContent;
		icon: IconName;
	}[];
} & SectionHeader;

export interface BenefitsProps {
	title: string;
	heading?: string;
	description?: AdaptiveTextContent;
	benefits: {
		name: string;
		description: AdaptiveTextContent;
		icon: IconName;
	}[];
	className?: string;
}

export type JobOpening = {
	name: string;
	url: string;
	uuid: string;
	department: {
		id: string;
		label: string;
	};
	workLocation: {
		id: string;
		label: string;
	};
};

export type Customer = {
	name: string;
	logo: ImageDetails;
	website: string;
	storySlug: string;
	storyWIP: boolean;
	quote: string;
};
