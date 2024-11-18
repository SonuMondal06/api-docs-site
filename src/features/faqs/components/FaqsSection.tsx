/* -----------------Components--------------- */
import { Content } from "@/components/Content";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const FaqsSection = ({
	sectionTitle,
	faqItems,
}: {
	sectionTitle: string;
	faqItems: { question: string; answer: string }[];
}) => {
	return (
		<div className="mx-auto w-full max-w-4xl px-6 py-8 sm:px-8 sm:py-16">
			<h2 className="font-bold text-2xl text-foreground leading-10 tracking-tight">
				{sectionTitle}
			</h2>
			<Accordion type="single" collapsible className="mt-10 w-full">
				{faqItems.map((item, index) => (
					<AccordionItem key={item.question} value={index.toString()}>
						<AccordionTrigger>{item.question}</AccordionTrigger>
						<AccordionContent>
							<Content.AdaptiveText
								textContent={item.answer}
								className="text-base leading-6"
							/>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FaqsSection;
