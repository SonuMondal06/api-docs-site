import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
	redirects: async () => {
		return [
			{
				source: "/",
				destination: "/apis",
				permanent: true,
			},
		];
	},

	reactStrictMode: true,
};

export default withMDX(config);
