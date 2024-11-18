/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
import { AppScreenshot } from "@/components/AppScreenshot";
import BackgroundSvg from "@/components/BackgroundSvg";
import { Content } from "@/components/Content";

/* -----------------Types--------------- */
import type { SectionWithImage } from "@/types";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

const Hero = ({
	title,
	description,
	actions = [
		{
			name: "Get started",
			href: "get-started",
			primary: true,
		},
		{
			name: "Schedule a demo",
			href: "schedule-demo",
			icon: "ArrowRight",
		},
	],
	highlightText,
	titleSuffix,
	heroImage,
	className,
}: SectionWithImage) => {
	return (
		<div className={cn("relative isolate", className)}>
			<BackgroundSvg />

			<div className="mx-auto max-w-7xl items-center px-6 lg:flex lg:gap-x-10 lg:px-8">
				<Content>
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
						className="text-5xl lg:text-7xl"
					/>
					<Content.AdaptiveText textContent={description} />
					<ActionGroup actions={actions} className="mt-10" justify="start" />
				</Content>

				<div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
					<AppScreenshot {...heroImage} className="h-[500px]" fade />
				</div>
			</div>
		</div>
	);
};
export default Hero;
