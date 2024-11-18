/* -----------------Components--------------- */
import Icon from "@/components/Icon";

/* -----------------Types--------------- */
import type { BenefitsProps } from "../types";

import { Content } from "@/components/Content";
/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

const Benefits = ({
	title,
	heading,
	description,
	benefits,
	className,
}: BenefitsProps) => {
	return (
		<div className={cn("bg-gray-900 py-24 sm:py-32", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					<Content className="py-4">
						<Content.Label>{heading}</Content.Label>
						<Content.Title className="text-white">{title}</Content.Title>
						<Content.AdaptiveText
							textContent={description}
							className="mt-6 text-foreground text-lg text-white leading-8"
						/>
					</Content>
					<dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-6 text-base text-white leading-7 sm:grid-cols-2 lg:gap-y-12">
						{benefits.map((benefit) => (
							<div key={benefit.name} className="relative pl-16">
								<dt className="inline font-semibold text-primary">
									<div className="absolute top-1 left-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm ring-1 ring-primary/30">
										<Icon name={benefit.icon} aria-hidden="true" />
									</div>
									{benefit.name}
								</dt>
								<Content.AdaptiveText
									textContent={benefit.description}
									className="mt-0 font-light text-base text-white leading-7"
								/>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
