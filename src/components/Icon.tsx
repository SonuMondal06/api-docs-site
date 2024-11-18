/* -----------------Components--------------- */
import { type LucideProps, icons } from "lucide-react";
// biome-ignore lint/style/noNamespaceImport: This is a valid import
import * as BsIcons from "react-icons/bs";
import type { IconBaseProps } from "react-icons/lib";

export type IconName = keyof typeof icons;

export interface IconProps extends LucideProps {
	name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = icons[name];

	if (!LucideIcon) {
		throw new Error(`Icon ${name} not found`);
	}

	return <LucideIcon {...props} />;
};

export default Icon;

export type BsIconName = keyof typeof BsIcons;

export interface BsIconProps extends IconBaseProps {
	name: BsIconName;
}

export const BsIcon = ({ name, ...props }: BsIconProps) => {
	const ReactIcon = BsIcons[name];

	return <ReactIcon {...props} />;
};
