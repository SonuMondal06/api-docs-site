import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
	title: string;
	logoUrl: string;
	description: string;
	className?: string;
}

export const FeatureCard = ({
	title,
	logoUrl,
	description,
	className,
}: FeatureCardProps) => (
	<Card className={cn("w-64 md:w-96", className)}>
		<CardHeader>
			<Image src={logoUrl} alt={title} width={64} height={64} />
		</CardHeader>
		<CardContent>
			<CardTitle className="mt-2">{title}</CardTitle>
			<p className="mt-2">{description}</p>
		</CardContent>
	</Card>
);
