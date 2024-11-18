import { env } from "@/env";

const isLocalDevelopment = env.NODE_ENV === "development";

export const websiteUrl = env.IS_PROD
	? "https://memorang.com"
	: isLocalDevelopment
		? "http://localhost:3000"
		: "https://preview.memorang.com";

export const websiteFallbackTitle =
	"Memorang | All-in-one EdTech platform to build AI-powered courses & apps";

export const websiteFallbackDescription =
	"From neurosurgery to language learning, Memorang’s integrated platform empowers organizations with the tools they need to build, launch, and scale AI-powered education solutions.";

export const websiteImage = {
	src: `${websiteUrl}/assets/memorang-stack.png`,
	alt: "Memorang",
	width: 1200,
	height: 630,
};

export const ogType = "website";
export const ogSiteName = "Memorang";
export const twitterCard = "summary_large_image";
export const context = "https://schema.org";
export const hubUrl = "https://hub.memorang.com/";
export const earlyAccessUrl =
	"https://airtable.com/app9h6p5VaBb0gVLi/shr50QFsfCjeXI95n";
