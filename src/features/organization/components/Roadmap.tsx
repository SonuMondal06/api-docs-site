/* -----------------Components--------------- */
import { type AdaptiveTextContent, Content } from "@/components/Content";
import { TimelineStat } from "@/components/TimelineStat";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

type TimelineItem = {
	name: string;
	date: string;
	dateTime: string;
	description: AdaptiveTextContent;
};

export type RoadmapProps = {
	title: string;
	heading?: string;
	description?: AdaptiveTextContent;
	timeline: TimelineItem[];
	className?: string;
};

const Roadmap = ({
	title,
	heading,
	description,
	timeline,
	className,
}: RoadmapProps) => {
	return (
		<div
			className={cn("relative isolate bg-gray-100 py-24 sm:py-32", className)}
		>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<Content justifyContent="center">
					<Content.Label textAlign="center">{heading}</Content.Label>
					<Content.Title textAlign="center">{title}</Content.Title>
					<Content.AdaptiveText textAlign="center" textContent={description} />
				</Content>
				<div className="mt-16 sm:mt-24">
					<TimelineStat timeline={timeline} />
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
