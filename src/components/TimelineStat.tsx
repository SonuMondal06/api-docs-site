import { type AdaptiveTextContent, Content } from "./Content";

interface TimelineItem {
	name: string;
	date: string;
	dateTime: string;
	description: AdaptiveTextContent;
}

interface TimelineProps {
	timeline: TimelineItem[];
}

export const TimelineStat = ({ timeline }: TimelineProps) => {
	return (
		<div className="-mt-8 mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
				{timeline.map((item) => (
					<div key={item.name}>
						<time
							dateTime={item.dateTime}
							className="flex items-center font-semibold text-secondary text-sm leading-6"
						>
							<svg
								viewBox="0 0 4 4"
								className="mr-4 h-1 w-1 flex-none"
								aria-hidden="true"
							>
								<circle cx={2} cy={2} r={2} fill="currentColor" />
							</svg>
							{item.date}
							<div
								className="-ml-2 -translate-x-full sm:-ml-4 lg:-mr-6 absolute h-px w-screen bg-secondary lg:static lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
								aria-hidden="true"
							/>
						</time>
						<Content.Label className="mt-6 text-foreground">
							{item.name}
						</Content.Label>
						<Content.AdaptiveText
							textContent={item.description}
							className="mt-2 text-base text-foreground leading-7"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
