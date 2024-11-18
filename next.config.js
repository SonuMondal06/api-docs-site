import { withVercelToolbar } from "@vercel/toolbar/plugins/next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

// Import env validation
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const config = {
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/services",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "memorang.com",
				port: "",
				pathname: "/_next/**",
			},
			{
				protocol: "https",
				hostname: "tailwindui.com",
				port: "",
				pathname: "/img/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "ca.slack-edge.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.dribbble.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: "/**",
			},
		],
	},
	experimental: {
		taint: true,
		reactCompiler: true,
	},
	transpilePackages: ["lucide-react"],
	reactStrictMode: true,
};

export default withVercelToolbar()(withMDX(config));
