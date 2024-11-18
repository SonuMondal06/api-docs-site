/* -----------------Globals--------------- */
import Image from "next/image";

/* -----------------Components--------------- */
import { ActionGroup } from "@/components/ActionGroup";
import { Content } from "@/components/Content";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";
import type { SectionWithImage } from "@/types";

const BannerHero = ({
	heading,
	title,
	highlightText,
	titleSuffix,
	description,
	heroImage,
	actions,
	className,
}: SectionWithImage) => {
	return (
		<div className={cn("relative isolate", className)}>
			<div className="relative mx-auto flex h-[384px] flex-col items-center justify-center overflow-hidden px-6 lg:px-8">
				<Image
					src={heroImage.src}
					alt={heroImage.alt}
					className="-z-20 absolute inset-0 h-full w-full object-cover"
					width={600}
					height={400}
					loading="eager"
				/>

				<div className="-z-10 absolute inset-0 h-full w-full bg-slate-950/90" />

				<Content justifyContent="center" className="py-2">
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
					<ActionGroup actions={actions} className="mt-10" />
				</Content>
			</div>
		</div>
	);
};

export default BannerHero;
