import type { IconName } from "@/components/Icon";

export const notFoundRedirectLinksData = [
	{
		name: "Contact us",
		href: "https://airtable.com/app9h6p5VaBb0gVLi/shr50QFsfCjeXI95n",
		description: "Get in touch with us through our contact page.",
		icon: "Mail",
	},
	{
		name: "Technology",
		href: "/technology",
		description: "Read about our technology and how we work.",
		icon: "Cog",
	},
	{
		name: "Services",
		href: "/services",
		description: "Learn about our services and how we can help you.",
		icon: "ChartNoAxesColumn",
	},
] satisfies {
	name: string;
	href: string;
	description: string;
	icon: IconName;
}[];

export const notFoundAttributesData = {
	errorCode: "404",
	title: "This page does not exist",
	description: "Sorry, we couldn't find the page you're looking for.",
};
