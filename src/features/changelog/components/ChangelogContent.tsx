import { Content } from "@/components/Content";
import Magnify from "@/components/Magnify";
import Image from "next/image";
import Link from "next/link";
import type { ReleaseItem } from "../types";

export const ChangelogContent = async ({
	itemSlug,
	releaseItem,
}: {
	itemSlug: string;
	releaseItem: ReleaseItem;
}) => {
	return (
		<div className="mx-auto flex max-w-2xl flex-1 flex-col gap-y-8 py-8 lg:p-0">
			<Link href={`/changelog/${itemSlug}`}>
				<h2 className="font-bold text-4xl">{releaseItem.entryName}</h2>
			</Link>

			{releaseItem?.log?.map((item, index) => {
				const { contentType, mdx, image } = item;

				const keyValue = `${contentType}--${index.toString()}`;
				if (contentType === "image" && image) {
					return (
						<Magnify key={keyValue}>
							<Image
								src={image.src}
								alt={image.alt}
								width={1200}
								height={630}
								unoptimized
								className="w-full rounded-md object-cover shadow-md"
							/>
						</Magnify>
					);
				}

				if (contentType === "mdx" && mdx) {
					return (
						<Content.MDX
							key={keyValue}
							textContent={mdx}
							className="max-w-none"
						/>
					);
				}
			})}
		</div>
	);
};
