/* -----------------Types--------------- */
import type { NavMenuItemProps } from "../types";
import { MobileLink } from "./MobileLink";

export const customTriggerStyle = () =>
	"group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground focus:bg-transparent focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-accent";

export const NavSection = ({
	item,
	onOpenChange,
}: {
	item: NavMenuItemProps;
	onOpenChange?: (open: boolean) => void;
}) => {
	return (
		<div className="w-full">
			<h1 className="mt-2 rounded-md px-2 font-semibold text-foreground">
				{item.name}
			</h1>
			<div className="mt-2 flex flex-col gap-y-2 pl-2">
				{item.flyoutData?.map((listItem) => (
					<MobileLink
						key={listItem.name}
						item={listItem}
						onOpenChange={onOpenChange}
					/>
				))}
			</div>
		</div>
	);
};
