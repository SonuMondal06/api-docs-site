export { default as SolutionFeatures } from "./components/Features";
export { default as SolutionStats } from "./components/StatsBg";
export { solutionsDescription, solutionsTitle } from "./constants/metadata";
export { getAllSolutionsData, getSolutionWithHref } from "./helpers/cms";
export {
	generateSolutionJsonLd,
	generateSolutionMetadata,
} from "./helpers/metadata";
export type { SolutionItem } from "./types";
