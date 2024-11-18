import { cn } from "@/lib/utils";
import Link from "next/link";

const PolicyLink = ({
	name,
	href,
	external,
	className,
}: {
	name: React.ReactNode;
	href: string;
	external?: boolean;
	className?: string;
}) => {
	return (
		<Link
			href={href}
			target={external ? "_blank" : "_self"}
			rel={external ? "noopener noreferrer" : ""}
			className={cn(
				"iubenda-nostyle iubenda-noiframe iubenda-embed iubenda-noiframe",
				className,
			)}
		>
			{name}
		</Link>
	);
};

export default PolicyLink;
