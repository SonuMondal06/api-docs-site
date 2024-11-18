"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import type { RouteParams, TrackProperties } from "./constants";
import { initMixpanel, trackPageView } from "./tracking";

const AnalyticsWrapper = ({
	pageName,
	pageProperties,
	children,
}: {
	pageName: string;
	pageProperties?: TrackProperties;
	children?: React.ReactNode;
}) => {
	if (typeof window !== "undefined") {
		initMixpanel();
	}

	const { name, slug } = useParams<RouteParams>();

	const allPageProperties = {
		...(name ? { slug: name } : {}),
		...(slug ? { slug } : {}),
		...(pageProperties || {}),
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: This is a valid use case
	useEffect(() => {
		trackPageView({
			pageName,
			pageProperties: allPageProperties,
		});
	}, []);

	return <>{children}</>;
};

export default AnalyticsWrapper;
