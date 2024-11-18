/* -----------------Components--------------- */
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

const Flyout = ({
	trigger,
	children,
	className,
}: {
	trigger: React.ReactNode;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent
				className={cn("p-2 text-foreground text-sm leading-6", className)}
			>
				{children}
			</PopoverContent>
		</Popover>
	);
};

export default Flyout;
