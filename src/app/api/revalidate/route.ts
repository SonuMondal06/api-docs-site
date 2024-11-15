import { githubDetails } from "@/constants/github";
import { createGithubWebhookAPI } from "@fumadocs/mdx-remote/github/next";

export const { POST } = createGithubWebhookAPI({
	ref: githubDetails.treeSha,
	secret: githubDetails.webhookSecret,
});
