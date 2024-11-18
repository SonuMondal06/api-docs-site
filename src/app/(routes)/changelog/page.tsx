/* -----------------Features--------------- */
import {
	ChangelogHOC,
	changelogItemsFetchLimit,
	getChangelogItemsCount,
	getChangelogItemsPageViewData,
	getChangelogTotalPages,
} from "@/features/changelog";

const ChangelogPage = async () => {
	const [activity, totalItems] = await Promise.all([
		getChangelogItemsPageViewData(),
		getChangelogItemsCount(),
	]);

	const totalPages = getChangelogTotalPages(
		totalItems,
		changelogItemsFetchLimit,
	);

	return <ChangelogHOC activity={activity} totalPages={totalPages} />;
};

export default ChangelogPage;
