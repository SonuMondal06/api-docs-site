import {
	getAllCatalogItemsData,
	sortCatalogItemsCallback,
} from "@/features/catalog";
import { stegaClean } from "@sanity/client/stega";
import FilterContainer from "./FilterContainer";

const Filter = async () => {
	const items = await getAllCatalogItemsData();

	const serviceLabels = items
		.sort(sortCatalogItemsCallback)
		.map((item) => stegaClean(item.name));

	const services = serviceLabels.map((service) => service.toLowerCase());

	return <FilterContainer services={services} serviceLabels={serviceLabels} />;
};

export default Filter;
