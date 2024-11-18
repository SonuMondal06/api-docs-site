import { env } from "@/env";
import { gptClient } from "@/openai";

type GPTData = {
	data: {
		name: "Added" | "Changed" | "Deprecated" | "Removed" | "Fixed" | "Security";
		description: string;
	}[];
};

const pattern = /```json\s*([\s\S]*?)\s*```/m;

export const parseGPTData = (data: string) => {
	const jsonMatch = data.match(pattern);
	const jsonData = jsonMatch?.[1];

	if (!jsonData) {
		throw new Error("No JSON data to be parsed!");
	}

	let parsedData = {} as GPTData;

	try {
		parsedData = JSON.parse(jsonData);
	} catch (_e) {
		// biome-ignore lint/suspicious/noConsole: Error debugging
		console.error("Failed to parse JSON data");
	}

	return parsedData;
};

export const promptGPT = async (input: string) => {
	const chatCompletion = await gptClient.chat.completions.create({
		messages: [{ role: "user", content: input }],
		model: env.GPT_MODEL,
	});

	return chatCompletion;
};
