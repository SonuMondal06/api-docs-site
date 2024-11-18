import { getFooterLinks } from "@/features/organization";
import { notFound, redirect } from "next/navigation";

const LegalPage = async ({ params }: { params: { name: string } }) => {
	const sections = await getFooterLinks();

	const legalLinks = sections.find(
		(section) => section.name === "Legal",
	)?.links;

	const redirectUrl = legalLinks?.find(
		(link) => link.name?.toLocaleLowerCase() === params.name,
	)?.href;

	if (redirectUrl) {
		redirect(redirectUrl);
	} else {
		notFound();
	}
};

export default LegalPage;
