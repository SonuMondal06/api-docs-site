import { Separator } from "@/components/ui/separator";
import {
	ChangelogContent,
	ChangelogItem,
	ReleaseItemLoader,
	getAllChangelogItemsData,
	getChangelogItemBySlugAndDate,
} from "@/features/changelog";
import { isDevEnvironment } from "@/helpers";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const generateStaticParams = async () => {
	const items = await getAllChangelogItemsData();

	return items.map((item) => {
		const itemSlug = `${item.slug}--${item.releaseDate}`;
		return {
			slug: itemSlug,
		};
	});
};

export const revalidate = 600;

const ChangelogItemPage = async ({
	params: { slug },
}: { params: { slug: string } }) => {
	const slugData = slug.split("--");

	const releaseSlug = slugData[0];
	const releaseDate = slugData[1];

	const isInvalidSlug = !(releaseSlug && releaseDate);

	if (isInvalidSlug) {
		notFound();
	}

	const releaseItem = await getChangelogItemBySlugAndDate(
		releaseSlug,
		releaseDate,
	);

	if (!releaseItem) {
		notFound();
	}

	const wipMode = releaseItem.isWorkInProgress && !isDevEnvironment();

	if (wipMode) {
		notFound();
	}

	const itemSlug = `${releaseItem.slug}--${releaseItem.releaseDate}`;

	return (
		<Suspense fallback={<ReleaseItemLoader />}>
			<Separator />
			<ChangelogItem id={itemSlug} releaseItem={releaseItem}>
				<ChangelogContent itemSlug={itemSlug} releaseItem={releaseItem} />
			</ChangelogItem>
		</Suspense>
	);
};

export default ChangelogItemPage;
