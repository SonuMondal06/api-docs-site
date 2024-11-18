/* ----------------- Page Types --------------- */

import { getPascalCase } from "@/helpers/globals";

const pages = [
	"splash",
	"solutions",
	"services",
	"products",
	"about",
	"careers",
	"customers",
	"customer",
	"technology",
	"changelog",
	"faqs",
	"legal",
] as const;

const events = ["BUTTON_CLICK"] as const;

export type AvailablePages = (typeof pages)[number];
export type AvailableEvents = (typeof events)[number];
export type TrackProperties = Record<string, string>;
export type RouteParams = { name: string; slug: string };

export const allPages: Record<AvailablePages, string> = pages.reduce(
	(acc, page) => {
		acc[page] = page;
		return acc;
	},
	{} as Record<AvailablePages, string>,
);

export const trackingEvents: Record<AvailableEvents, string> = events.reduce(
	(acc, event) => {
		acc[event] = getPascalCase(event, "_");
		return acc;
	},
	{} as Record<AvailableEvents, string>,
);
