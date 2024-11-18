import { JOBS_ENDPOINT } from "../constants/careers";
import type { JobOpening } from "../types";

export const getJobOpenings = async () => {
	const response = await fetch(JOBS_ENDPOINT);
	const data: JobOpening[] = await response.json();

	return { jobOpenings: data };
};
