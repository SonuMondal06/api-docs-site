export type Frequency = {
	value: string;
	label: string;
	priceSuffix: string;
};

export type Tier = {
	name: string;
	id: string;
	featured: boolean;
	description: string;
	price: { [key: string]: string };
	mainFeatures: string[];
};

type Feature = {
	name: string;
	tiers: { [key: string]: boolean | string };
};

type Section = {
	name: string;
	features: Feature[];
};

export type PricingProps = {
	frequencies: Frequency[];
	tiers: Tier[];
	sections: Section[];
};
