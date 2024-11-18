"use client";

import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
	changelogPageViewUrl,
	defaultChangelogFetchPage,
} from "../../constants/pagination";
import FilterItem from "./FilterItem";

type FilterTagData = {
	name: string;
	selected: boolean;
};

type Props = {
	services: string[];
	serviceLabels: string[];
};

const FilterContainer = ({ services, serviceLabels }: Props) => {
	const router = useRouter();
	const params = useSearchParams();

	const serviceName = params.get("service");
	const tags = params.get("tags")?.split(",");

	const [open, setOpen] = useState(false);
	const [item, setItem] = useState<string | null>(
		services.includes(serviceName || "") ? serviceName : null,
	);
	const [selectedTags, setSelectedTags] = useState<FilterTagData[]>([]);

	useEffect(() => {
		if (tags) {
			setSelectedTags(
				tags.map((tag) => ({
					name: tag,
					selected: true,
				})),
			);
		}
	}, [tags]);

	const handleItemClick = (name: string) => {
		setItem((prevName) =>
			prevName === name.toLowerCase() ? null : name.toLowerCase(),
		);
	};

	const handleTagClick = (index: number) => {
		const newTags = [...selectedTags];
		if (newTags[index]) {
			newTags[index].selected = !newTags[index].selected;
			setSelectedTags(newTags);
		}
	};

	const handleApplyFilter = () => {
		let filterURL = `${changelogPageViewUrl}/${defaultChangelogFetchPage}`;
		const filterEndpoint = "/filter";

		const filterServiceParams = item ? item.toLowerCase() : "";
		const tagsParams =
			selectedTags.length > 0
				? selectedTags
						.filter((tag) => tag.selected)
						.map((tag) => tag.name)
						.join(",")
				: "";

		if (filterServiceParams && tagsParams) {
			filterURL = `${filterURL}${filterEndpoint}?service=${filterServiceParams}&tags=${tagsParams}`;
		} else if (filterServiceParams) {
			filterURL = `${filterURL}${filterEndpoint}?service=${filterServiceParams}`;
		} else if (tagsParams) {
			filterURL = `${filterURL}${filterEndpoint}?tags=${tagsParams}`;
		}

		router.push(filterURL);
		setOpen(false);
	};

	const clearFilter = () => {
		setItem(null);
		router.push("/changelog");
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger>
				<Icon name="Filter" size={22} className="mx-4 text-primary" />
			</PopoverTrigger>
			<PopoverContent className="mx-4 w-80">
				<div className="flex flex-wrap justify-center gap-2">
					{serviceLabels?.map((name) => {
						const isSelected = item === name.toLowerCase();
						return (
							<FilterItem
								key={name}
								name={name}
								selected={isSelected}
								handleClick={() => handleItemClick(name)}
							/>
						);
					})}
				</div>
				{selectedTags.length > 0 && <Separator className="my-4" />}
				<div className="flex flex-wrap justify-center gap-2">
					{selectedTags.map((tag, index) => {
						return (
							<FilterItem
								key={tag.name}
								name={tag.name}
								selected={tag.selected}
								handleClick={() => handleTagClick(index)}
							/>
						);
					})}
				</div>
				<div className="mt-4 flex justify-end gap-x-2">
					<Button size="icon" variant="outline" onClick={clearFilter}>
						<Icon name="RefreshCw" size={16} />
					</Button>
					<Button size="icon" onClick={handleApplyFilter}>
						<Icon name="ArrowRight" size={16} />
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default FilterContainer;
