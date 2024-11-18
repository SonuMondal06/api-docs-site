/* -----------------Components--------------- */
import { Content } from "@/components/Content";
import Image from "next/image";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";
import type { SectionWithImage } from "@/types";

export type StatsProps = {
	stats: { id: string; name: string; value: string }[];
} & SectionWithImage;

const gridSizeClassName: Record<number, string> = {
	3: "lg:grid-cols-3",
	4: "lg:grid-cols-4",
};

const getGridSize = (stats: StatsProps["stats"]) => {
	const defaultSize = "lg:grid-cols-2 lg:px-52";

	if (!Array.isArray(stats)) {
		return defaultSize;
	}

	const size = gridSizeClassName[stats.length];

	if (typeof size === "string") {
		return size;
	}

	return defaultSize;
};

const StatsBg = ({
	heroImage,
	title,
	highlightText,
	titleSuffix,
	heading,
	description,
	stats,
	className,
}: StatsProps) => {
	return (
		<div className={cn("relative isolate mx-auto", className)}>
			<div className="overflow-hidden px-6 py-24 shadow-xl sm:rounded-3xl sm:px-8 sm:py-32 md:px-12 lg:px-20">
				<Image
					src={heroImage.src}
					alt={heroImage.alt}
					className="-z-20 absolute inset-0 h-full w-full object-cover"
					width={2048}
					height={2048}
				/>
				<div className="-z-10 absolute inset-0 h-full w-full bg-slate-950/90" />

				<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
					<div
						className="-bottom-8 -left-96 -z-10 sm:-bottom-64 sm:-left-40 lg:-bottom-32 xl:-left-10 absolute transform-gpu blur-3xl lg:left-8"
						aria-hidden="true"
					>
						<div
							className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-primary to-secondary opacity-20"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>

					<Content justifyContent="center" className="py-4">
						<Content.Label textAlign="center">{heading}</Content.Label>
						<Content.Title
							title={title}
							highlightText={highlightText}
							titleSuffix={titleSuffix}
							textAlign="center"
							className="text-white"
						/>
						<Content.AdaptiveText
							textContent={description}
							textAlign="center"
							className="text-white"
						/>
					</Content>

					<dl
						className={cn(
							"mx-auto mt-16 grid max-w-2xl grid-cols-1 justify-items-center gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none",
							getGridSize(stats),
						)}
					>
						{stats.map((stat) => (
							<div
								key={stat.name}
								className="flex w-52 flex-col gap-y-3 border-white/30 border-l pl-6"
							>
								<dt className="text-sm leading-6">{stat.name}</dt>
								<dd className="order-first font-semibold text-3xl tracking-tight">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default StatsBg;
