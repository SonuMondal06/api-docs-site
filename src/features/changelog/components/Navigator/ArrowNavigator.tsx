"use client";

import Icon from "@/components/Icon";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { changelogPageViewUrl } from "../../constants/pagination";
import type { NavigatorProps } from "../../types";

export const ArrowNavigator = ({ page, totalPages }: NavigatorProps) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPages;

	const params = useSearchParams();

	if (totalPages === 0) {
		return (
			<span className="font-mono text-foreground/70 text-sm tracking-tighter">
				0 / 0
			</span>
		);
	}

	const serviceParams = params.get("service");
	const tagParams = params.get("tags");

	let filterUrl = "";
	const filterEndpoint = "/filter";

	if (serviceParams && tagParams) {
		filterUrl = `${filterEndpoint}?service=${serviceParams}&tags=${tagParams}`;
	} else if (serviceParams) {
		filterUrl = `${filterEndpoint}?service=${serviceParams}`;
	} else if (tagParams) {
		filterUrl = `${filterEndpoint}?tags=${tagParams}`;
	}

	const previousPageUrl = `${changelogPageViewUrl}/${page - 1}${filterUrl}`;
	const nextPageUrl = `${changelogPageViewUrl}/${page + 1}${filterUrl}`;

	return (
		<div className="flex items-center gap-x-4">
			<span className="font-mono text-foreground/70 text-sm tracking-tighter">
				{page} / {totalPages}
			</span>
			{isFirstPage ? (
				<Icon name="MoveLeft" size={16} className="text-gray-300" />
			) : (
				<Link href={previousPageUrl}>
					<Icon name="MoveLeft" size={16} className="text-primary" />
				</Link>
			)}
			{isLastPage ? (
				<Icon name="MoveRight" size={16} className="text-gray-300" />
			) : (
				<Link href={nextPageUrl}>
					<Icon name="MoveRight" size={16} className="text-primary" />
				</Link>
			)}
		</div>
	);
};
