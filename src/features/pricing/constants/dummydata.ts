export const dummyPricingHeader = {
	title: "Pricing plans for teams of all sizes",
	description:
		"Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
};

export const dummyPricing = {
	frequencies: [
		// { value: "monthly", label: "Monthly", priceSuffix: "/month" },
		// { value: "annually", label: "Annually", priceSuffix: "/year" },
	],
	tiers: [
		{
			name: "Starter",
			id: "starter-tier",
			featured: false,
			description:
				"Experience our services at no cost, subject to certain restrictions.",
			price: {
				monthly: "$15",
				annually: "$144",
			},
			mainFeatures: ["Free to use", "Web App Addons"],
		},
		{
			name: "Business",
			id: "business-tier",
			featured: true,
			description:
				"Plan designed for teams, offering enhanced features and increased limits.",
			price: {
				monthly: "$90",
				annually: "$874",
			},
			mainFeatures: ["Web App Addons", "Multiple Projects", "Support Services"],
		},
		{
			name: "Enterprise",
			id: "enterprise-tier",
			featured: false,
			description:
				"Advanced features designed to elevate your business operations.",
			price: {
				monthly: "$120",
				annually: "$1020",
			},
			mainFeatures: [
				"Web App Addons",
				"Authentication",
				"Multiple Projects",
				"Support Services",
			],
		},
	],
	sections: [
		{
			name: "Features",
			features: [
				{
					name: "No. of Projects",
					tiers: {
						Starter: "1 Project",
						Business: "3 Projects",
						Enterprise: "Unlimited Projects",
					},
				},
				{
					name: "Platform",
					tiers: {
						Starter: "Web Apps",
						Business: "Web & Mobile Apps",
						Enterprise: "Cross Platform Apps",
					},
				},
				{
					name: "Authentication",
					tiers: {
						Starter: false,
						Business: false,
						Enterprise: "Custom SSO Auth",
					},
				},
				{
					name: "Web App Addons",
					tiers: {
						Starter: "$999/mo",
						Business: "$5000/project/mo",
						Enterprise: "-",
					},
				},
				{
					name: "Per transaction charge",
					tiers: {
						Starter: "30%",
						Business: "30%",
						Enterprise: "30%",
					},
				},
			],
		},
		{
			name: "Services",
			features: [
				{
					name: "Support",
					tiers: {
						Starter: "Self managed",
						Business: "Technical support",
						Enterprise: "Enterprise SLA/ White Glove support",
					},
				},
				{
					name: "Setup",
					tiers: {
						Starter: false,
						Business: false,
						Enterprise: "Custom setup",
					},
				},
				{
					name: "Tutorials",
					tiers: {
						Starter: false,
						Business: false,
						Enterprise: "Onboarding & Training",
					},
				},
			],
		},
	],
};
