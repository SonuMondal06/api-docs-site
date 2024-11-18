import { githubDetails } from "@/constants";
import { createGithubWebhookAPI } from "@/helpers/github-webhook";

export const { POST } = createGithubWebhookAPI({
	ref: githubDetails.treeSha,
	secret: githubDetails.webhookSecret,
	paths: [
		{ path: "/docs/[[...slug]]", type: "page" },
		{ path: "/docs", type: "layout" },
		{ path: "/apis/[[...slug]]", type: "page" },
		{ path: "/apis", type: "layout" },
	],
});
