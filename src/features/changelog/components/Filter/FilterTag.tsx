import Icon from "@/components/Icon";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = { name: string; selected: boolean; handleClick: () => void };

const FilterTag = ({ name, selected, handleClick }: Props) => {
	return (
		<Badge
			className={cn("flex cursor-pointer items-center gap-x-2", {
				"bg-secondary text-white hover:bg-secondary": selected,
				"bg-white text-secondary ring-1 ring-secondary hover:bg-white":
					!selected,
			})}
			onClick={handleClick}
		>
			{name}
			<Icon name={selected ? "X" : "Plus"} size={12} />
		</Badge>
	);
};

export default FilterTag;
