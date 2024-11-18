import { env } from "@/env";

type UrlType = "release" | "pull";

const validateGithubUrl = (url: string) => {
	if (!url.startsWith("https://github.com/")) {
		throw new Error("Invalid GitHub URL");
	}
};

export const getGithubUrlType = (url: string): UrlType => {
	if (url.includes("/releases/tag/")) {
		return "release";
	}

	if (url.includes("/pull/")) {
		return "pull";
	}

	throw new Error("Unrecognised GitHub URL Type!");
};

const createGithubApiUrl = (urlType: UrlType, url: string) => {
	switch (urlType) {
		case "release": {
			const repoPath = url.split("/releases/tag/")[0];
			const repoName = repoPath?.replace("https://github.com/", "");
			const tag = url.split("/releases/tag/")[1];

			return `https://api.github.com/repos/${repoName}/releases/tags/${tag}`;
		}
		case "pull": {
			const repoPath = url.split("/pull/")[0];
			const repoName = repoPath?.replace("https://github.com/", "");
			const pullNumber = url.split("/pull/")[1];

			return `https://api.github.com/repos/${repoName}/pulls/${pullNumber}`;
		}

		default: {
			throw new Error("Couldn't create Github API URL!");
		}
	}
};

const fetchGithubDataFromApi = async (url: string) => {
	const response = await fetch(url, {
		headers: {
			Accept: "application/vnd.github+json",
			Authorization: `Bearer ${env.GITHUB_BEARER_TOKEN}`,
			"X-GitHub-Api-Version": env.GITHUB_API_VERSION,
		},
	});

	if (!response.ok) {
		throw new Error("Failed to fetch data from GitHub");
	}

	return await response.json();
};

export const getGithubUrlData = async (url: string) => {
	validateGithubUrl(url);

	const urlType = getGithubUrlType(url);
	const apiUrl = createGithubApiUrl(urlType, url);
	return await fetchGithubDataFromApi(apiUrl);
};
