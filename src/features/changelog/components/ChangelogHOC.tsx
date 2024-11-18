import { AnalyticsWrapper, allPages } from "@/analytics";
import { Content } from "@/components/Content";
import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import type { ReleaseItem } from "../types";
import { Changelog } from "./Changelog";
import Filter from "./Filter";
import { ReleaseItemLoader } from "./Loader";
import { ArrowNavigator } from "./Navigator/ArrowNavigator";
import { ButtonNavigator } from "./Navigator/ButtonNavigator";

const Fallback = ({
	page,
	totalPages,
}: { page: number; totalPages: number }) => {
	return (
		<>
			<div className="flex items-center gap-x-4">
				<span className="font-mono text-foreground/70 text-sm tracking-tighter">
					{page} / {totalPages}
				</span>
				<Icon name="MoveLeft" size={16} className="text-primary" />
				<Icon name="MoveRight" size={16} className="text-primary" />
			</div>
			<Icon name="Filter" size={22} className="mx-4 text-primary" />
		</>
	);
};

export const ChangelogHOC = ({
	activity,
	totalPages,
	page = 1,
}: { activity: ReleaseItem[]; totalPages: number; page?: number }) => {
	const hasNoReleases = activity.length === 0;

	return (
		<AnalyticsWrapper pageName={allPages.changelog}>
			<section id={allPages.changelog}>
				<div className="flex w-full justify-between">
					<Suspense fallback={<Fallback page={page} totalPages={totalPages} />}>
						<ArrowNavigator page={page} totalPages={totalPages} />
						<Filter />
					</Suspense>
				</div>
				<Suspense fallback={<ReleaseItemLoader />}>
					{hasNoReleases ? (
						<>
							<Separator className="mt-2" />
							<Content justifyContent="center" className="py-32 sm:py-48">
								<Content.Title textAlign="center" className="text-gray-400">
									No releases found!
								</Content.Title>
							</Content>
						</>
					) : (
						<Changelog activity={activity} className="mt-2" />
					)}
				</Suspense>
			</section>
			<div className="flex justify-end py-8">
				<Suspense>
					<ButtonNavigator page={page} totalPages={totalPages} />
				</Suspense>
			</div>
		</AnalyticsWrapper>
	);
};
