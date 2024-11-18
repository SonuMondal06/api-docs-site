/* -----------------Components--------------- */
import { Separator } from "@/components/ui/separator";
import { ChangelogContent } from "./ChangelogContent";
import { ChangelogItem } from "./ChangelogItem";
import { ReleaseNotes } from "./ReleaseNotes";

import { isDevEnvironment } from "@/helpers";
/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Types--------------- */
import type { ReleaseItem } from "../types";

export const Changelog = ({
	activity,
	className,
	dateFormat = "PPP",
}: {
	activity: ReleaseItem[];
	className?: string;
	dateFormat?: string;
}) => {
	return (
		<div className={cn("flex flex-col", className)}>
			{activity.map((releaseItem) => {
				const wipMode = releaseItem.isWorkInProgress && !isDevEnvironment();

				if (wipMode) {
					return null;
				}

				const itemSlug = `${releaseItem.slug}--${releaseItem.releaseDate}`;

				return (
					<div key={itemSlug}>
						<Separator />
						<ChangelogItem
							id={itemSlug}
							releaseItem={releaseItem}
							dateFormat={dateFormat}
						>
							<ChangelogContent itemSlug={itemSlug} releaseItem={releaseItem} />
						</ChangelogItem>
						<ReleaseNotes releaseItem={releaseItem} />
					</div>
				);
			})}
			<Separator />
		</div>
	);
};
