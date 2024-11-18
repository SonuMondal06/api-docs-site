/* -----------------Constants--------------- */
import type { Organization } from "@/features/organization";

/* -----------------Helpers--------------- */
import { cn } from "@/lib/utils";

/* -----------------Components--------------- */
import Image, { type ImageProps } from "next/image";

interface ExtendedImageProps extends Omit<ImageProps, "src" | "alt"> {
	logo: Organization["logo"];
	type?: "default" | "organization" | "poweredBy";
	dark?: boolean;
}

const getDefaultImageProps = (logo: Organization["logo"]) => {
	return { src: logo.src, alt: logo.alt };
};

const getOrganizationImageProps = (
	logo: Organization["logo"],
	dark: boolean,
) => {
	if (logo.organization) {
		return {
			src: dark ? logo.organization.dark.src : logo.organization.light.src,
			alt: dark ? logo.organization.dark.alt : logo.organization.light.alt,
		};
	}
	return { src: "", alt: "" };
};

const getPoweredByImageProps = (logo: Organization["logo"], dark: boolean) => {
	if (logo.poweredBy) {
		return {
			src: dark ? logo.poweredBy.dark.src : logo.poweredBy.light.src,
			alt: dark ? logo.poweredBy.dark.alt : logo.poweredBy.light.alt,
		};
	}
	return { src: "", alt: "" };
};

const getImageProps = (
	logo: Organization["logo"],
	type: "default" | "organization" | "poweredBy",
	dark = false,
) => {
	if (!logo) {
		return { src: "", alt: "" };
	}

	switch (type) {
		case "organization":
			return getOrganizationImageProps(logo, dark);
		case "poweredBy":
			return getPoweredByImageProps(logo, dark);
		default:
			return getDefaultImageProps(logo);
	}
};

const Logo = ({
	logo,
	className,
	type = "default",
	dark = false,
	width = 100,
	height = 100,
	...rest
}: ExtendedImageProps) => {
	const { src, alt } = getImageProps(logo, type, dark);

	if (!src) {
		return null;
	}

	return (
		<Image
			src={src}
			alt={alt}
			className={cn("-ml-2 relative", className)}
			width={width}
			height={height}
			{...rest}
		/>
	);
};

Logo.Organization = (props: ExtendedImageProps) => (
	<Logo {...props} type="organization" />
);

Logo.PoweredBy = (props: ExtendedImageProps) => (
	<Logo {...props} type="poweredBy" />
);

export { Logo };
