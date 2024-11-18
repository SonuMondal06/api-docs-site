export const getChangelogItemsRange = (page: number, limit: number) => {
	const start = (page - 1) * limit;
	const end = start + limit;

	return { start, end };
};

export const getChangelogTotalPages = (itemsCount: number, limit: number) => {
	const totalPages = Math.ceil(itemsCount / limit);
	return totalPages;
};
