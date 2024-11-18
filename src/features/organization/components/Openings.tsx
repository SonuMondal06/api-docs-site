import Image from "next/image";
import Link from "next/link";
/* -----------------Globals--------------- */

/* -----------------Components--------------- */
import type { ActionButtonProps } from "@/components/ActionButton";
import { ActionGroup } from "@/components/ActionGroup";

/* -----------------UI--------------- */
import { cn } from "@/lib/utils";

import { Content } from "@/components/Content";
import { Label } from "@/components/ui/label";
/* -----------------Types--------------- */
import type { SectionWithImage } from "@/types";
import type { JobOpening } from "../types";

interface JobListingProps {
	jobOpenings: JobOpening[];
	actions: ActionButtonProps[];
	className?: string;
}

export interface OpeningsProps extends SectionWithImage {
	jobOpenings: JobOpening[];
}

const JobListing = ({ jobOpenings, actions, className }: JobListingProps) => (
	<div className={cn("-mx-4 lg:mx-0 lg:w-full lg:max-w-xl", className)}>
		{jobOpenings?.slice(0, 5).map((opening) => {
			return (
				<Link
					key={opening.uuid}
					href={opening.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="group mt-2 rounded-md px-4 hover:bg-gray-200">
						<div className="border-gray-200 border-b-2 py-4">
							<Label className="font-semibold text-foreground text-lg tracking-tight">
								{opening.name}
							</Label>
							<div className="mt-2 flex items-center gap-x-2 text-base text-gray-700">
								<p>{opening.department.label}</p>
								<svg
									viewBox="0 0 2 2"
									className="h-1 w-1 text-gray-700"
									aria-hidden="true"
								>
									<circle
										cx={1}
										cy={1}
										r={1}
										fill="currentColor"
										className="text-gray-700"
									/>
								</svg>
								<p>{opening.workLocation.label}</p>
							</div>
						</div>
					</div>
				</Link>
			);
		})}
		<ActionGroup actions={actions} justify="start" className="ml-4 pt-8" />
	</div>
);

const Openings = ({
	heading,
	title,
	highlightText,
	titleSuffix,
	description,
	heroImage,
	jobOpenings,
	actions,
	className,
}: OpeningsProps) => {
	return (
		<div id="opportunities" className={cn("bg-gray-100 py-32", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Content>
					<Content.Label>{heading}</Content.Label>
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
					/>
					<Content.AdaptiveText textContent={description} />
				</Content>
				<div className="mt-16 flex flex-col gap-16 lg:flex-row">
					<Image
						src={heroImage.src}
						alt={heroImage.alt}
						className="aspect-square max-h-[500px] w-full max-w-[500px] rounded-2xl bg-gray-50 object-cover"
						width={2048}
						height={2048}
					/>
					<JobListing jobOpenings={jobOpenings} actions={actions || []} />
				</div>
			</div>
		</div>
	);
};

export default Openings;
