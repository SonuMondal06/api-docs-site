import type { ActionButtonProps } from "@/components/ActionButton";
import type { IconName } from "@/components/Icon";
import type { Organization } from "@/features/organization";

export interface NavItem {
	id: string;
	name: string;
	href: string;
	icon?: IconName;
	image?: string;
	imageAsIconButton?: boolean;
}

export interface FlyoutDataItem extends NavItem {
	description?: string;
}

export interface NavMenuItemProps extends NavItem {
	flyoutData?: FlyoutDataItem[];
	flyoutActions?: ActionButtonProps[];
}

export type NavFlyoutProps = {
	item: NavMenuItemProps;
	onOpenChange?: (open: boolean) => void;
};

export type NavbarProps = {
	navItems: NavMenuItemProps[];
	organization: Organization;
	showOrganizationName?: boolean;
	navActions?: ActionButtonProps[];
	mobileNavActions?: ActionButtonProps[];
	asSubNav?: boolean;
	className?: string;
};

export type MobileNavbarProps = Omit<
	NavbarProps,
	"asSubNav" | "showOrganizationName" | "className"
>;

export type NavLinkProps = {
	item: NavItem;
	onOpenChange?: (open: boolean) => void;
	className?: string;
};
