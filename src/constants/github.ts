import { env } from "@/env";

export const githubDetails = {
	owner: "SonuMondal06",
	repo: "content-stack",
	directory: "content",
	treeSha: "main",
	accessToken: env.GITHUB_ACCESS_TOKEN,
	webhookSecret: env.GITHUB_WEBHOOK_SECRET,
} as const;
