/* -----------------Components--------------- */
import { Button } from "@/components/ui/button";
import Icon, { type IconName } from "./Icon";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Features--------------- */
import { ElementAnalyticsWrapper, trackingEvents } from "@/analytics";

/* -----------------Globals--------------- */
import Link from "next/link";

export type ActionButtonProps = {
	name: string;
	href?: string;
	external?: boolean;
	primary?: boolean;
	icon?: IconName | null;
	iconLeft?: IconName | null;
	iconRight?: IconName | null;
	onClick?: () => void;
	buttonVariant?: "default" | "link";
	className?: string;
};

const ActionButtonHoc = ({
	children,
	href,
	external,
}: {
	children: React.ReactNode;
	href?: string;
	external?: boolean;
}) => {
	if (href) {
		return (
			<Link
				passHref
				href={href}
				target={external ? "_blank" : "_self"}
				rel={external ? "noopener noreferrer" : ""}
			>
				{children}
			</Link>
		);
	}
	return children;
};

export const ActionButton = ({
	name,
	href,
	external,
	primary,
	icon,
	iconLeft,
	iconRight,
	onClick,
	buttonVariant = "default",
	className,
}: ActionButtonProps) => {
	if (!primary) {
		buttonVariant = "link";
	}

	iconRight = iconRight || icon;

	return (
		<ElementAnalyticsWrapper
			eventName={trackingEvents.BUTTON_CLICK}
			eventProperties={{
				name,
				redirectTo: href || "",
				externalRedirect: external ? "true" : "false",
			}}
		>
			<ActionButtonHoc href={href} external={external}>
				<Button
					size="sm"
					variant={buttonVariant}
					onClick={onClick}
					className={cn("flex items-center gap-2", className, {
						"font-semibold text-primary-foreground": primary && href,
						"font-bold text-secondary": !primary && href,
						"px-0 font-semibold": buttonVariant === "link",
					})}
				>
					{!!iconLeft && <Icon name={iconLeft} size={16} />}
					{name}
					{!!iconRight && <Icon name={iconRight} size={16} />}
				</Button>
			</ActionButtonHoc>
		</ElementAnalyticsWrapper>
	);
};
