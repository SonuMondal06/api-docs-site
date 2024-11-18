/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
import { Content } from "@/components/Content";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";
import type { SectionHeader } from "@/types";

const CTA = ({
	title,
	highlightText,
	titleSuffix,
	description,
	actions,
	className,
}: SectionHeader) => {
	return (
		<div
			className={cn("relative isolate overflow-hidden px-6 lg:px-8", className)}
		>
			<div className="mx-auto py-24 text-center sm:py-32">
				<Content justifyContent="center" containerClassName="lg:max-w-4xl">
					<Content.Title
						title={title}
						highlightText={highlightText}
						titleSuffix={titleSuffix}
						as="h1"
						textAlign="center"
						className="text-white"
					/>
					<Content.AdaptiveText
						textContent={description}
						textAlign="center"
						className="mt-8 text-white text-xl lg:text-2xl"
					/>
				</Content>

				<ActionGroup actions={actions} justify="center" className="mt-10" />
			</div>

			<svg
				viewBox="0 0 1024 1024"
				className="-z-10 -translate-x-1/2 absolute top-1/2 left-1/2 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)]"
				aria-hidden="true"
			>
				<circle
					cx={512}
					cy={512}
					r={512}
					fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
					fillOpacity="0.7"
				/>
				<defs>
					<radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
						<stop stopColor="hsl(var(--primary)" />
						<stop offset={1} stopColor="hsl(var(--primary)" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	);
};

export default CTA;
