import { env } from "@/env";
/* ----------------- Config --------------- */
import mixpanel, { type Config as MixpanelConfig } from "mixpanel-browser";
import type { TrackProperties } from "./constants";

/* ----------------- Constants --------------- */
const MIXPANEL_TOKEN = env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const TRACKING_ENABLED = env.NEXT_PUBLIC_TRACKING_ENABLED;

const isDev = process.env.NODE_ENV === "development";

export const initMixpanel = (
	token = MIXPANEL_TOKEN,
	config = {
		debug: isDev,
		track_pageview: "full-url" as const,
		ignore_dnt: true,
	} satisfies Partial<MixpanelConfig>,
) => {
	if (TRACKING_ENABLED) {
		mixpanel.init(token, config);
	}
};

const trackIfEnabled = (trackingFunction: () => void) => {
	if (TRACKING_ENABLED) {
		trackingFunction();
	}
};

export const trackPageView = ({
	pageName,
	pageProperties,
}: { pageName?: string; pageProperties?: TrackProperties } = {}) => {
	trackIfEnabled(() =>
		mixpanel.track_pageview({
			pageName,
			...(pageProperties || {}),
		}),
	);
};

export const trackEvent = (
	eventName: string,
	eventProperties: TrackProperties = {},
) => {
	trackIfEnabled(() => mixpanel.track(eventName, eventProperties));
};
