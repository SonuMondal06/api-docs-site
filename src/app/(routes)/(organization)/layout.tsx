import { getCTAData } from "@/helpers";
import { CTA } from "@/layouts";

export default async function OrganizationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const CTAData = await getCTAData();
	return (
		<main>
			{children}
			<CTA {...CTAData} className="bg-slate-900" />
		</main>
	);
}
