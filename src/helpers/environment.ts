import { env } from "@/env";

export const isDevEnvironment = () => {
	return !env.IS_PROD;
};
