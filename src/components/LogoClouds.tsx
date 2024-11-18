/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Types--------------- */
import type { ImageDetails } from "@/types";

export type LogoCloudsProps = {
	title: string;
	logos: ImageDetails[];
	invertedBg?: boolean;
	className?: string;
};

const LogoClouds = ({
	title,
	logos,
	invertedBg,
	className,
}: LogoCloudsProps) => {
	return (
		<div className={cn("flex flex-col gap-24", className)}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2
					className={cn(
						"text-center font-semibold text-foreground text-lg leading-8",
						{
							"text-white": invertedBg,
						},
					)}
				>
					{title}
				</h2>
				<div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-8 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none">
					{logos.map((logo) => (
						<div
							key={logo.alt}
							className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-md"
						>
							<Image
								className="max-h-12 w-full object-contain"
								src={logo.src}
								alt={logo.alt}
								width={256}
								height={256}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default LogoClouds;
