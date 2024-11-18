/* -----------------Types--------------- */
import type { SectionHeader } from "@/types";
import type { Testimonial } from "../../types";

import { Content } from "@/components/Content";
/* -----------------Components--------------- */
import { TestimonialCard } from "./Testimonial";

import { ActionGroup } from "@/components/ActionGroup";
/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

export type TestimonialsProps = {
	featuredTestimonial: Testimonial;
	testimonials: Testimonial[][][];
	className?: string;
} & SectionHeader;

const Testimonials = ({
	featuredTestimonial,
	testimonials,
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	actions,
	className,
}: TestimonialsProps) => {
	return (
		<div id="testimonials" className={cn("relative isolate", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Content justifyContent="center" containerClassName="lg:max-w-4xl">
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
				<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-4 text-gray-900 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
					<TestimonialCard featured {...featuredTestimonial} />
					{testimonials.map((columnGroup, columnGroupIdx) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: Required array index key for columnGroup
							key={columnGroupIdx}
							className="space-y-8 xl:contents xl:space-y-0"
						>
							{columnGroup.map((column, columnIdx) => {
								return (
									<div
										// biome-ignore lint/suspicious/noArrayIndexKey: Required array index key for columnGroup
										key={columnIdx}
										className={cn(
											(columnGroupIdx === 0 && columnIdx === 0) ||
												(columnGroupIdx === testimonials.length - 1 &&
													columnIdx === columnGroup.length - 1)
												? "xl:row-span-2"
												: "xl:row-start-1",
											"space-y-4",
										)}
									>
										{column.map((testimonial) => (
											<TestimonialCard
												key={testimonial.author.name}
												{...testimonial}
											/>
										))}
									</div>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
