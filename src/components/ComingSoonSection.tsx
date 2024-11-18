import type { SectionHeader } from "@/types";
import { ActionGroup } from "./ActionGroup";
import BackgroundSvg from "./BackgroundSvg";
import { ComingSoon } from "./ComingSoon";
import { Content } from "./Content";

export const ComingSoonSection = ({
	heading,
	title,
	highlightText,
	titleSuffix,
	description,
	actions,
}: SectionHeader) => {
	return (
		<div className="relative mx-auto flex max-w-7xl flex-col items-center justify-start gap-16 px-6 py-8 sm:py-16 lg:flex-row lg:px-8">
			<BackgroundSvg />
			<Content>
				<Content.Label>{heading}</Content.Label>
				<Content.Title
					title={title}
					highlightText={highlightText}
					titleSuffix={titleSuffix}
				/>
				<Content.AdaptiveText textContent={description} />
				<ActionGroup actions={actions} justify="start" className="mt-10" />
			</Content>
			<ComingSoon className="w-[300px] sm:w-[480px] md:w-[600px]" />
		</div>
	);
};
