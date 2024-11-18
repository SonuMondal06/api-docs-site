import { format, subYears } from "date-fns";

export const getDateRange = (startDate?: string, endDate?: string) => {
	const now = new Date();
	const oneYearAgo = subYears(now, 1);

	const initialStartDate = startDate ? new Date(startDate) : oneYearAgo;
	const initialEndDate = endDate ? new Date(endDate) : now;

	const formattedStartDate = startDate ?? format(oneYearAgo, "yyyy-MM-dd");
	const formattedEndDate = endDate ?? format(now, "yyyy-MM-dd");

	return {
		initialStartDate,
		initialEndDate,
		formattedStartDate,
		formattedEndDate,
	};
};
