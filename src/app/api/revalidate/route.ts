import { githubDetails } from "@/constants/github";
import { createGithubWebhookAPI } from "@/helpers/github-webhook";

export const { POST } = createGithubWebhookAPI({
	ref: githubDetails.treeSha,
	secret: githubDetails.webhookSecret,
});
