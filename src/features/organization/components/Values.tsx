/* -----------------Components--------------- */
import Icon from "@/components/Icon";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

import { Content } from "@/components/Content";
/* -----------------Types--------------- */
import type { ValuesProps } from "../types";

const Values = ({
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	values,
	className,
}: ValuesProps) => {
	return (
		<div className={cn("bg-gray-100 py-24 sm:py-32", className)}>
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
				</Content>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2 lg:grid-rows-4">
						{values.map((value) => (
							<div key={value.name} className="relative pl-16">
								<dt className="inline font-semibold text-foreground">
									<div className="absolute top-1 left-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm ring-1 ring-primary/30">
										<Icon name={value.icon} aria-hidden="true" />
									</div>
									{value.name}
								</dt>
								<Content.AdaptiveText
									textContent={value.description}
									className="mt-0 text-base text-foreground leading-7"
								/>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Values;
