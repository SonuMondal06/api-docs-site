import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars.
	 */
	server: {
		NODE_ENV: z.enum(["development", "test", "production"]),
		IS_PROD: z.preprocess((val) => val === "true", z.boolean()),

		GITHUB_BEARER_TOKEN: z.string(),
		GITHUB_API_VERSION: z.string(),
		GITHUB_ACCESS_TOKEN: z.string(),
		GITHUB_WEBHOOK_SECRET: z.string(),

		OPENAI_API_KEY: z.string(),
		GPT_MODEL: z.enum(["gpt-4o", "gpt-3.5-turbo"]),
	},

	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid env vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {
		NEXT_PUBLIC_SANITY_HOOK_SECRET: z.string(),

		NEXT_PUBLIC_HUBSPOT_REGION: z.string(),
		NEXT_PUBLIC_HUBSPOT_PORTALID: z.string(),
		NEXT_PUBLIC_HUBSPOT_FORMID: z.string(),

		NEXT_PUBLIC_MIXPANEL_TOKEN: z.string(),
		NEXT_PUBLIC_TRACKING_ENABLED: z.preprocess(
			(val) => val === "true",
			z.boolean(),
		),
	},

	/**
	 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		IS_PROD: process.env.IS_PROD,

		NEXT_PUBLIC_SANITY_HOOK_SECRET: process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET,

		NEXT_PUBLIC_HUBSPOT_REGION: process.env.NEXT_PUBLIC_HUBSPOT_REGION,
		NEXT_PUBLIC_HUBSPOT_PORTALID: process.env.NEXT_PUBLIC_HUBSPOT_PORTALID,
		NEXT_PUBLIC_HUBSPOT_FORMID: process.env.NEXT_PUBLIC_HUBSPOT_FORMID,

		NEXT_PUBLIC_MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
		NEXT_PUBLIC_TRACKING_ENABLED: process.env.NEXT_PUBLIC_TRACKING_ENABLED,

		GITHUB_BEARER_TOKEN: process.env.GITHUB_BEARER_TOKEN,
		GITHUB_API_VERSION: process.env.GITHUB_API_VERSION,
		GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
		GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET,

		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		GPT_MODEL: process.env.GPT_MODEL,
	},
	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	/**
	 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
	 * `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,
});
