"use client";

import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { changelogPageViewUrl } from "../../constants/pagination";
import type { NavigatorProps } from "../../types";

const evaluateEndPage = (page: number, totalPages: number) => {
	if (page > totalPages) {
		return totalPages;
	}
	if (page < 1) {
		return 1;
	}

	return page;
};

export const ButtonNavigator = ({ page, totalPages }: NavigatorProps) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPages;

	const params = useSearchParams();
	const [pageNumber, setPageNumber] = useState<number>(page);

	if (totalPages === 0) {
		return <></>;
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

	const pageNumberToJump = evaluateEndPage(pageNumber, totalPages);
	const pageToJump = `${changelogPageViewUrl}/${pageNumberToJump}${filterUrl}`;

	return (
		<div className="flex flex-col items-end gap-4">
			<div className="flex flex-col gap-4 sm:flex-row">
				{!isFirstPage && (
					<Link href={previousPageUrl}>
						<Button variant="outline">
							<Icon name="ChevronLeft" className="mx-2" size={16} /> Read Newer
							Posts
						</Button>
					</Link>
				)}
				{!isLastPage && (
					<Link href={nextPageUrl}>
						<Button variant="outline">
							Read Older Posts{" "}
							<Icon name="ChevronRight" className="mx-2" size={16} />
						</Button>
					</Link>
				)}
			</div>

			<div className="mt-8 flex gap-x-4">
				<span className="font-mono text-foreground/70 text-sm tracking-tighter">
					<input
						type="number"
						value={pageNumber}
						onChange={(e) =>
							setPageNumber(Number.parseInt(e.target.value) || page)
						}
						className="w-10 rounded-sm bg-white px-2 py-1 ring-1 ring-gray-200"
					/>{" "}
					/ {totalPages}
				</span>
				<Link
					href={pageToJump}
					className="text-secondary underline underline-offset-4 hover:saturate-150"
				>
					Jump to page
				</Link>
			</div>
		</div>
	);
};
