/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
import { Content } from "@/components/Content";
import FaqsSection from "./FaqsSection";

/* -----------------Types--------------- */
import type { SectionHeader } from "@/types";

export type FaqsProps = {
	isWorkInProgress: boolean;
	faqsSections: {
		sectionTitle: string;
		faqItems: {
			question: string;
			answer: string;
		}[];
	}[];
} & SectionHeader;

const Faqs = ({
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	actions,
	faqsSections,
}: FaqsProps) => {
	return (
		<div className="relative">
			<Content justifyContent="center" className="pt-24 pb-8">
				<Content.Label textAlign="center">{heading}</Content.Label>
				<Content.Title
					title={title}
					highlightText={highlightText}
					titleSuffix={titleSuffix}
					textAlign="center"
				/>
				<Content.AdaptiveText textContent={description} textAlign="center" />
				<ActionGroup actions={actions} className="mt-10" />
			</Content>

			<div className="mt-16 flex flex-col bg-gray-50 pb-16">
				{faqsSections.map((section) => (
					<FaqsSection
						key={section.sectionTitle}
						sectionTitle={section.sectionTitle}
						faqItems={section.faqItems}
					/>
				))}
			</div>
		</div>
	);
};

export default Faqs;
