/* -----------------Components--------------- */
import { Content } from "@/components/Content";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

/* -----------------Helpers--------------- */
import { GPT_INSTRUCTIONS } from "@/openai";
import { patchReleaseNotesToChangelogItem } from "../helpers/cms";
import { getGithubUrlData } from "../helpers/github";
import { parseGPTData, promptGPT } from "../helpers/gpt";

/* -----------------Types--------------- */
import type { ReleaseItem } from "../types";

export const ReleaseNotes = async ({
	releaseItem,
}: { releaseItem: ReleaseItem }) => {
	let { releaseNotesMDX: releaseNotes, githubUrls } = releaseItem;
	const generateNotes = !releaseNotes || releaseNotes?.length === 0;

	if (generateNotes && githubUrls && githubUrls?.length > 0) {
		const githubData: object[] = [];
		for (const url of githubUrls) {
			const response = await getGithubUrlData(url);
			githubData.push(response);
		}
		const chatCompletion = await promptGPT(
			`${GPT_INSTRUCTIONS}\n\n${JSON.stringify({ githubData })}`,
		);
		const rawData = chatCompletion.choices[0]?.message.content;
		if (!rawData) {
			throw new Error("Error transforming data");
		}
		const { data } = parseGPTData(rawData);

		releaseNotes = data;

		if (releaseNotes?.length > 0) {
			await patchReleaseNotesToChangelogItem(releaseItem, releaseNotes);
		}
	}

	if (!releaseNotes || releaseNotes?.length === 0) {
		return null;
	}

	return (
		<Accordion type="single" collapsible className="w-full">
			{releaseNotes?.map((item) => {
				return (
					<AccordionItem key={item.name} value={item.name}>
						<AccordionTrigger>{item.name}</AccordionTrigger>
						<AccordionContent>
							<Content.MDX
								textContent={item.description}
								className="max-w-none text-base leading-7"
							/>
						</AccordionContent>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};
