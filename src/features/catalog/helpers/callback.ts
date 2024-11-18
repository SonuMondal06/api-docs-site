import type { CatalogItem } from "../types";

export const sortCatalogItemsCallback = (a: CatalogItem, b: CatalogItem) => {
	if (a.comingSoon && !b.comingSoon) {
		return 1;
	}
	if (!a.comingSoon && b.comingSoon) {
		return -1;
	}

	const isServiceA = a.href.includes("services");
	const isServiceB = b.href.includes("services");

	if (isServiceA && !isServiceB) {
		return -1;
	}
	if (!isServiceA && isServiceB) {
		return 1;
	}

	return 0;
};
