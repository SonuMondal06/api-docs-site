"use client";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
	changelogPageViewUrl,
	defaultChangelogFetchPage,
} from "../constants/pagination";
import type { ReleaseItem } from "../types";

const getServiceFilterUrl = (
	item: string,
	service: string | null,
	tags: string | null,
) => {
	const serviceName = item.toLowerCase();
	let serviceFilter = `${changelogPageViewUrl}/${defaultChangelogFetchPage}`;
	const filterEndpoint = "/filter";

	if (service !== serviceName && tags) {
		serviceFilter = `${serviceFilter}${filterEndpoint}?service=${serviceName}&tags=${tags}`;
	} else if (service !== serviceName) {
		serviceFilter = `${serviceFilter}${filterEndpoint}?service=${serviceName}`;
	} else if (tags) {
		serviceFilter = `${serviceFilter}${filterEndpoint}?tags=${tags}`;
	}

	return serviceFilter;
};

const getTagFilterUrl = (
	tag: string,
	service: string | null,
	tags: string | null,
) => {
	const tagName = tag.toLowerCase();
	const tagArray = tags?.split(",") || [];

	if (tagArray.includes(tagName)) {
		tagArray.splice(tagArray.indexOf(tagName), 1);
	} else {
		tagArray.push(tagName);
	}

	const tagsParams = tagArray.length > 0 ? tagArray.join(",") : "";

	let tagsFilter = `${changelogPageViewUrl}/${defaultChangelogFetchPage}`;
	const filterEndpoint = "/filter";

	if (service && tagsParams) {
		tagsFilter = `${tagsFilter}${filterEndpoint}?service=${service}&tags=${tagsParams}`;
	} else if (service) {
		tagsFilter = `${tagsFilter}${filterEndpoint}?service=${service}`;
	} else if (tagsParams) {
		tagsFilter = `${tagsFilter}${filterEndpoint}?tags=${tagsParams}`;
	}

	return tagsFilter;
};

export const ChangelogItem = ({
	id,
	releaseItem,
	dateFormat = "PPP",
	children,
}: {
	id: string;
	releaseItem: ReleaseItem;
	dateFormat?: string;
	children?: React.ReactNode;
}) => {
	const searchParams = useSearchParams();

	const service = searchParams.get("service");
	const tags = searchParams.get("tags");

	return (
		<div id={id} className="flex flex-col p-2 py-8 lg:flex-row lg:p-8 lg:py-24">
			<div className="relative w-full px-0 lg:w-64 lg:text-left">
				<div className="sticky top-24 flex flex-col gap-4">
					<Label className="font-bold text-foreground/70 text-sm">
						{format(releaseItem.releaseDate, dateFormat)}
					</Label>
					<div className="flex flex-wrap items-center gap-x-4">
						{releaseItem?.service && (
							<Link
								href={getServiceFilterUrl(
									releaseItem.service.name,
									service,
									tags,
								)}
							>
								<Badge className="cursor-pointer bg-primary text-white">
									{releaseItem.service.name}
								</Badge>
							</Link>
						)}
						{releaseItem?.tags?.map((tag) => (
							<Link key={tag} href={getTagFilterUrl(tag, service, tags)}>
								<Badge className="cursor-default bg-white text-secondary ring-1 ring-secondary hover:bg-secondary/10">
									{tag}
								</Badge>
							</Link>
						))}
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};
