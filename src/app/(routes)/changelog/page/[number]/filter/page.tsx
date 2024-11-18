import {
	ChangelogHOC,
	changelogItemsFetchLimit,
	defaultChangelogFetchPage,
	getChangelogItemsByService,
	getChangelogItemsByServiceAndTags,
	getChangelogItemsByServiceAndTagsCount,
	getChangelogItemsByServiceCount,
	getChangelogItemsByTags,
	getChangelogItemsByTagsCount,
	getChangelogTotalPages,
} from "@/features/changelog";
import type { ReleaseItem } from "@/features/changelog/types";
import { notFound } from "next/navigation";

const ChangelogPage = async ({
	params,
	searchParams,
}: {
	params: {
		number: string;
	};
	searchParams: {
		service: string;
		tags: string;
	};
}) => {
	const page = Number.parseInt(params.number);

	const isInvalidPageNumber =
		Number.isNaN(page) || page < defaultChangelogFetchPage;

	if (isInvalidPageNumber) {
		notFound();
	}

	const { service, tags } = searchParams;
	const tagArray = tags?.split(",")?.map((tag) => tag.toLowerCase());

	let activity: ReleaseItem[] = [];
	let totalItems = 0;

	if (service && tagArray && tagArray.length > 0) {
		[activity, totalItems] = await Promise.all([
			getChangelogItemsByServiceAndTags(service, tagArray, page),
			getChangelogItemsByServiceAndTagsCount(service, tagArray),
		]);
	} else if (service) {
		[activity, totalItems] = await Promise.all([
			getChangelogItemsByService(service, page),
			getChangelogItemsByServiceCount(service),
		]);
	} else if (tagArray && tagArray.length > 0) {
		[activity, totalItems] = await Promise.all([
			getChangelogItemsByTags(tagArray, page),
			getChangelogItemsByTagsCount(tagArray),
		]);
	} else {
		notFound();
	}

	const totalPages = getChangelogTotalPages(
		totalItems,
		changelogItemsFetchLimit,
	);

	if (totalPages >= defaultChangelogFetchPage && page > totalPages) {
		notFound();
	}

	if (totalPages === 0 && page !== 1) {
		notFound();
	}

	return (
		<ChangelogHOC activity={activity} page={page} totalPages={totalPages} />
	);
};

export default ChangelogPage;
