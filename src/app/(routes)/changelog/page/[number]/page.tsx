import {
	ChangelogHOC,
	changelogItemsFetchLimit,
	defaultChangelogFetchPage,
	getChangelogItemsCount,
	getChangelogItemsPageViewData,
	getChangelogTotalPages,
} from "@/features/changelog";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
	const totalItems = await getChangelogItemsCount(true);
	const totalPages = getChangelogTotalPages(
		totalItems,
		changelogItemsFetchLimit,
	);

	return new Array(totalPages).fill(0).map((_, index) => {
		return {
			number: (index + 1).toString(),
		};
	});
};

export const revalidate = 600;

const ChangelogPage = async ({
	params,
}: {
	params: {
		number: string;
	};
}) => {
	const page = Number.parseInt(params.number);
	const isInvalidPageNumber =
		Number.isNaN(page) || page < defaultChangelogFetchPage;

	if (isInvalidPageNumber) {
		notFound();
	}

	const [activity, totalItems] = await Promise.all([
		getChangelogItemsPageViewData(page),
		getChangelogItemsCount(),
	]);

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
