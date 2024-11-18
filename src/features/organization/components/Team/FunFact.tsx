import { type AdaptiveTextContent, Content } from "@/components/Content";
import Icon from "@/components/Icon";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const FunFact = ({
	funFact,
	children,
}: { funFact?: AdaptiveTextContent; children?: React.ReactNode }) => {
	if (funFact == null) {
		return children;
	}

	return (
		<HoverCard openDelay={200}>
			<HoverCardTrigger>{children}</HoverCardTrigger>
			<HoverCardContent className="flex w-fit max-w-sm flex-col items-start justify-start gap-y-2">
				<div className="flex items-center justify-start gap-x-2">
					<Icon name="Lightbulb" className="text-amber-500" size={20} />
					<Label className="text-left font-semibold text-gray-700 text-lg">
						Fun Fact!
					</Label>
				</div>

				<Separator />

				<Content.AdaptiveText
					textContent={funFact}
					className="prose prose-lg m-0 w-full pt-4 pb-2 text-left font-semibold text-base text-gray-500"
				/>
			</HoverCardContent>
		</HoverCard>
	);
};

export default FunFact;
