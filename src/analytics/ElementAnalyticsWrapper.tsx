"use client";

import type { TrackProperties } from "./constants";
import { trackEvent } from "./tracking";

type Props<T extends React.ElementType = "div"> = {
	eventName: string;
	eventProperties?: TrackProperties;
	children?: React.ReactNode;
	as?: T;
	className?: string;
};

const ElementAnalyticsWrapper = ({
	eventName,
	eventProperties,
	children,
	as,
	className,
}: Props) => {
	const Component = as ?? "div";

	const handleClick = () => {
		trackEvent(eventName, eventProperties);
	};

	return (
		<Component className={className} onClick={handleClick}>
			{children}
		</Component>
	);
};

export default ElementAnalyticsWrapper;
